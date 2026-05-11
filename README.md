# DSA + AI/ML Roadmap Tracker

## Run locally

### Backend
```bash
cd backend
cp .env.example .env
# IMPORTANT: set MONGODB_URI and JWT_SECRET in .env
npm install
npm run dev
```

If you see `MONGODB_URI is not configured`, your `.env` is missing or not filled.

### Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Deploy frontend on Vercel and backend on Render. Use MongoDB Atlas URI in backend `.env`.
