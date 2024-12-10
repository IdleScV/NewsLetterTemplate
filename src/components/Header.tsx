import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { ColorSelector } from './ColorSelector';
import { Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { colorTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg bg-${colorTheme}-100 dark:bg-${colorTheme}-900/50`}>
            <Mail className={`w-5 h-5 text-${colorTheme}-600 dark:text-${colorTheme}-400`} />
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">Newsletter</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <ColorSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}