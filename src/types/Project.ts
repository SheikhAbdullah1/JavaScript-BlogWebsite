export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  preview: string;
  demoUrl: string;
  sourceUrl: string;
  features: string[];
}