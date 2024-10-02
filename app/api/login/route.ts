import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dbConnect from '@/lib/mongodb'
import User from '@/models/user'

export async function POST(req: Request) {
  try {
    await dbConnect();

    // Retrieve email and password from the request body
    const { email, password } = await req.json();

    console.log("Received login request:", { email, password });

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    }

    // Compare the hashed password stored in the database with the user-entered password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch for user:", email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    }

    // Create a JWT token if credentials are valid
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

    console.log("Login successful, generating token");

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        name: user.username,
        email: user.email,
        isActivated: user.isActivated,
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
