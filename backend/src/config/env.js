import dotenv from 'dotenv';

export const loadEnv = () => {
  dotenv.config();

  const required = ['MONGODB_URI', 'JWT_SECRET'];
  const missing = required.filter((key) => !process.env[key] || !String(process.env[key]).trim());

  if (missing.length) {
    console.error(`❌ Missing required environment variables: ${missing.join(', ')}`);
    console.error('Create backend/.env from backend/.env.example and set real values.');
    process.exit(1);
  }
};
