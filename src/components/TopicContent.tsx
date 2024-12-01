import React from 'react';
import { Topic } from '../types/Topic';

interface TopicContentProps {
  topic: Topic;
}

export function TopicContent({ topic }: TopicContentProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{topic.title}</h2>
      
      <div className="flex space-x-2 mb-6">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[topic.difficulty]}`}>
          {topic.difficulty}
        </span>
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          {topic.category}
        </span>
      </div>
      
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-8">{topic.content}</p>
        
        <h3 className="text-xl font-semibold mb-4">Example:</h3>
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <code>{topic.example}</code>
        </pre>
      </div>
    </div>
  );
}