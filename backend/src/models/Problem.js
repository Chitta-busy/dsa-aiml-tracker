import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    platform: String,
    difficulty: String,
    topic: String,
    timeTaken: Number,
    revisionRequired: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Problem', problemSchema);
