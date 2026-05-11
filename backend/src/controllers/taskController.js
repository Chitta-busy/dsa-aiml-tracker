import DailyTask from '../models/DailyTask.js';
import Revision from '../models/Revision.js';
import { generateRoadmap } from '../seed/roadmapData.js';

export const initRoadmap = async (req, res) => {
  const existing = await DailyTask.countDocuments({ user: req.user._id });
  if (existing > 0) return res.json({ message: 'Roadmap already initialized' });
  const start = new Date();
  const docs = generateRoadmap().map((day, i) => ({ ...day, user: req.user._id, date: new Date(start.getTime() + i * 86400000) }));
  await DailyTask.insertMany(docs);
  res.status(201).json({ message: 'Roadmap initialized', total: docs.length });
};

export const getTasks = async (req, res) => {
  const now = new Date();
  await DailyTask.updateMany({ user: req.user._id, status: 'pending', date: { $lt: new Date(now.toDateString()) } }, { status: 'overdue' });
  const tasks = await DailyTask.find({ user: req.user._id }).sort({ dayNumber: 1 });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await DailyTask.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body, { new: true });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (req.body.status === 'completed') {
    const now = new Date();
    const revisionDays = [3, 7, 15];
    await Revision.insertMany(revisionDays.map((d) => ({ user: req.user._id, task: task._id, intervalDays: d, dueDate: new Date(now.getTime() + d * 86400000) })));
  }
  res.json(task);
};
