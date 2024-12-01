import React from 'react';
import { BookOpen, Code, Layout } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-2xl font-bold">JavaScript Master</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <NavLink href="#topics" icon={<Layout className="w-4 h-4" />}>
                Topics
              </NavLink>
              <NavLink href="#projects" icon={<Code className="w-4 h-4" />}>
                Projects
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}