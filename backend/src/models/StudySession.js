import mongoose from 'mongoose';

const studySessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    duration: Number,
    date: { type: Date, default: Date.now },
    focusType: { type: String, enum: ['dsa', 'aiml', 'mixed'], default: 'mixed' }
  },
  { timestamps: true }
);

export default mongoose.model('StudySession', studySessionSchema);
