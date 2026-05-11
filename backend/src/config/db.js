import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri || typeof uri !== 'string') {
      throw new Error('MONGODB_URI is not configured. Check backend/.env');
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ DB connection error:', error.message);
    process.exit(1);
  }
};
