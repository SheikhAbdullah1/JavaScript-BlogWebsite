export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Fundamentals' | 'Data Structures' | 'Advanced Concepts' | 'Web APIs';
  content: string;
  example: string;
}