import mongoose from 'mongoose';

const dailyTaskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dayNumber: { type: Number, required: true },
    date: { type: Date, required: true },
    dsaTopic: String,
    aimlTopic: String,
    practiceProblems: [String],
    videos: [String],
    resources: [String],
    revisionTasks: [String],
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    status: { type: String, enum: ['pending', 'completed', 'overdue'], default: 'pending' },
    notes: { type: String, default: '' },
    studyHours: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('DailyTask', dailyTaskSchema);
