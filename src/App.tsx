import React, { useState } from 'react';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { ProjectCard } from './components/ProjectCard';
import { TopicContent } from './components/TopicContent';
import { ChatBot } from './components/ChatBot';
import { topics } from './data/topics';
import { projects } from './data/projects';
import { Topic } from './types/Topic';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {selectedTopic ? (
          <div>
            <button
              onClick={() => setSelectedTopic(null)}
              className="mb-6 text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              ← Back to Topics
            </button>
            <TopicContent topic={selectedTopic} />
          </div>
        ) : (
          <div className="space-y-16">
            <section id="topics">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">JavaScript Topics</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Fundamentals</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topics
                      .filter(topic => topic.category === 'Fundamentals')
                      .map(topic => (
                        <TopicCard
                          key={topic.id}
                          topic={topic}
                          onClick={() => setSelectedTopic(topic)}
                        />
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Concepts</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topics
                      .filter(topic => topic.category === 'Advanced Concepts')
                      .map(topic => (
                        <TopicCard
                          key={topic.id}
                          topic={topic}
                          onClick={() => setSelectedTopic(topic)}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="projects">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Projects</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
      
      <ChatBot />
    </div>
  );
}

export default App;