import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'todo-app',
    title: 'Todo List Application',
    description: 'Build a complete todo list app with local storage and filtering options',
    difficulty: 'Beginner',
    topics: ['DOM Manipulation', 'Events', 'Local Storage', 'Array Methods'],
    preview: 'https://media.istockphoto.com/id/1834594298/photo/businessman-showing-check-mark-summarizing-job-compile-lists-votes-and-to-do-lists-checklists.jpg?s=2048x2048&w=is&k=20&c=4nJ2ZZeLkWGn4XYD3OosUQBNLWhzvs6XTcMU65zxlYs=',
    demoUrl: 'https://example.com/todo-demo',
    sourceUrl: 'https://github.com/example/todo-app',
    // sourceUrl: 'https://github.com/example/todo-app',
    features: [
      'Add, edit, and delete todos',
      'Mark todos as complete',
      'Filter by status',
      'Persist data in localStorage',
      'Responsive design'
    ]
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Create a weather dashboard using async/await and the OpenWeather API',
    difficulty: 'Intermediate',
    topics: ['Async/Await', 'APIs', 'DOM Manipulation', 'Error Handling'],
    preview: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=2000',
    demoUrl: 'https://example.com/weather-demo',
    sourceUrl: 'https://github.com/example/weather-app',
    features: [
      'Current weather display',
      '5-day forecast',
      'Search by city',
      'Temperature unit conversion',
      'Weather icons and animations'
    ]
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz App',
    description: 'Build a dynamic quiz application with timer and score tracking',
    difficulty: 'Intermediate',
    topics: ['Objects', 'Arrays', 'Timers', 'Local Storage'],
    preview: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=2000',
    demoUrl: 'https://example.com/quiz-demo',
    sourceUrl: 'https://github.com/example/quiz-app',
    features: [
      'Multiple choice questions',
      'Timer functionality',
      'Score tracking',
      'High scores leaderboard',
      'Different difficulty levels'
    ]
  },
  {
    id: 'movie-app',
    title: 'Movie Search Application',
    description: 'Create a movie search app using the TMDB API and async JavaScript',
    difficulty: 'Advanced',
    topics: ['APIs', 'Async/Await', 'DOM Manipulation', 'Search/Filter'],
    preview: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2000',
    demoUrl: 'https://example.com/movie-demo',
    sourceUrl: 'https://github.com/example/movie-app',
    features: [
      'Movie search functionality',
      'Detailed movie information',
      'Rating and reviews',
      'Watchlist feature',
      'Responsive grid layout'
    ]
  }
];