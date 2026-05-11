import Problem from '../models/Problem.js';

export const addProblem = async (req, res) => {
  const problem = await Problem.create({ ...req.body, user: req.user._id });
  res.status(201).json(problem);
};

export const getProblems = async (req, res) => {
  const problems = await Problem.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(problems);
};
