import mongoose from 'mongoose';

const revisionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    task: { type: mongoose.Schema.Types.ObjectId, ref: 'DailyTask', required: true },
    dueDate: Date,
    intervalDays: Number,
    done: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Revision', revisionSchema);
