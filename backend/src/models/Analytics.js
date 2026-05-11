import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: Date,
    studyHours: Number,
    solvedProblems: Number,
    completionPercent: Number,
    streak: Number
  },
  { timestamps: true }
);

export default mongoose.model('Analytics', analyticsSchema);
