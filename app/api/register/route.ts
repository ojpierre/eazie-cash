import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import dbConnect from '@/lib/mongodb';
import User from '../../../models/user';
import { successResponse, errorResponse } from '@/utils/apiResponse';
import { sendVerificationEmail } from '@/utils/email';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { username, mobile, email, password, country } = await req.json();

    // Validation
    if (!username || !mobile || !email || !password || !country) {
      return errorResponse('All fields are required', 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return errorResponse('Invalid email format', 400);
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse('User already exists with this email', 409);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Create new user
    const user = new User({
      username,
      mobile,
      email,
      password: hashedPassword,
      country,
      isActivated: false,
      verificationToken,
    });

    await user.save();

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    return successResponse({ message: 'User registered successfully. Please check your email to verify your account.' }, 201);
  } catch (error) {
    console.error('Registration error:', error);
    return errorResponse('Internal Server Error', 500);
  }
}
