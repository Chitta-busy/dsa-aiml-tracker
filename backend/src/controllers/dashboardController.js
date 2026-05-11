import DailyTask from '../models/DailyTask.js';
import Problem from '../models/Problem.js';
import StudySession from '../models/StudySession.js';
import Revision from '../models/Revision.js';

export const getDashboard = async (req, res) => {
  const tasks = await DailyTask.find({ user: req.user._id });
  const problems = await Problem.countDocuments({ user: req.user._id });
  const sessions = await StudySession.find({ user: req.user._id }).sort({ date: -1 }).limit(7);
  const revisions = await Revision.find({ user: req.user._id, done: false, dueDate: { $lte: new Date() } }).populate('task');
  const completed = tasks.filter((t) => t.status === 'completed').length;
  const overdue = tasks.filter((t) => t.status === 'overdue').length;

  res.json({
    totals: {
      totalTasks: tasks.length,
      completed,
      pending: tasks.length - completed,
      overdue,
      problems,
      studyHours: sessions.reduce((a, b) => a + (b.duration || 0), 0) / 60
    },
    revisions,
    weekly: sessions.map((s) => ({ date: s.date, hours: (s.duration || 0) / 60 }))
  });
};
