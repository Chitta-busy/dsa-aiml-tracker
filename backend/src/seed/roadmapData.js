const dsaTopics = ['Arrays', 'Strings', 'Sorting', 'Searching', 'Linked Lists', 'Stack', 'Queue', 'Trees', 'Graphs', 'Dynamic Programming'];
const aimlTopics = ['NumPy', 'Pandas', 'Data Visualization', 'Regression', 'Classification', 'Decision Trees', 'Neural Networks'];
const difficultyMap = ['Easy', 'Medium', 'Hard'];

export const generateRoadmap = () =>
  Array.from({ length: 60 }).map((_, i) => ({
    dayNumber: i + 1,
    dsaTopic: dsaTopics[i % dsaTopics.length],
    aimlTopic: aimlTopics[i % aimlTopics.length],
    practiceProblems: [
      `Solve 2 ${dsaTopics[i % dsaTopics.length]} problems`,
      `Implement ${aimlTopics[i % aimlTopics.length]} mini exercise`
    ],
    videos: [
      'https://www.youtube.com/@takeUforward',
      'https://www.youtube.com/@CampusX-official'
    ],
    resources: [
      'https://www.geeksforgeeks.org/',
      'https://www.codewithharry.com/',
      'https://www.youtube.com/@Codebasics'
    ],
    revisionTasks: ['Revise notes from day -3/-7/-15', 'Flashcards + quick recap'],
    difficulty: difficultyMap[i % 3]
  }));
