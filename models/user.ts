import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

export interface IUser extends Document {
  username: string;
  mobile: string;
  email: string;
  password: string;
  country: string;
  isActivated: boolean;
  verificationToken?: string;
}

// User validation schema
export const userValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  mobile: Yup.string().required('Mobile number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  country: Yup.string().required('Country is required'),
});

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  verificationToken: { type: String },
}, { timestamps: true });

// Pre-save hook for password hashing
userSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;
