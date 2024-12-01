import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Topic } from '../types/Topic';

interface TopicCardProps {
  topic: Topic;
  onClick: () => void;
}

export function TopicCard({ topic, onClick }: TopicCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-purple-100 text-purple-800'
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{topic.description}</p>
          <div className="flex space-x-2">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[topic.difficulty]}`}>
              {topic.difficulty}
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {topic.category}
            </span>
          </div>
        </div>
        <ChevronRight className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  );
}