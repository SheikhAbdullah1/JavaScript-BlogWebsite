import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'todo-app',
    title: 'Todo List Application',
    description: 'Build a complete todo list app with local storage and filtering options',
    difficulty: 'Beginner',
    topics: ['DOM Manipulation', 'Events', 'Local Storage', 'Array Methods'],
    preview: 'https://media.istockphoto.com/id/1834594298/photo/businessman-showing-check-mark-summarizing-job-compile-lists-votes-and-to-do-lists-checklists.jpg?s=2048x2048&w=is&k=20&c=4nJ2ZZeLkWGn4XYD3OosUQBNLWhzvs6XTcMU65zxlYs=',
    demoUrl: 'https://todo-app-firebase-realtime-database.vercel.app/',
    sourceUrl: 'https://github.com/SheikhAbdullah1/Todo-App-Firebase-Realtime-Database',
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
    demoUrl: 'https://chemistry-quiz.vercel.app/',
    sourceUrl: 'https://github.com/SheikhAbdullah1/Quiz-Chemistry',
    features: [
      'Multiple choice questions',
      'Timer functionality',
      'Score tracking',
      'High scores leaderboard',
      'Different difficulty levels'
    ]
  },
  {
    id: 'Github Profile',
    title: 'Github Profile Search Application',
    description: 'Create a profile search app using the API and async JavaScript',
    difficulty: 'Advanced',
    topics: ['APIs', 'Async/Await', 'DOM Manipulation', 'Search/Filter'],
    preview: 'https://plus.unsplash.com/premium_photo-1681487857509-abb58345e594?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://githhub-profile-search.vercel.app/',
    sourceUrl: 'https://github.com/SheikhAbdullah1/Githhub-Profile-Interface',
    features: [
      'Profile search functionality',
      'Github information',
      'Rating and reviews',
      'Watchlist feature',
      'Responsive grid layout'
    ]
  }
];