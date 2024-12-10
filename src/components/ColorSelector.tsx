import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Palette } from 'lucide-react';

const colorOptions = [
  { name: 'blue', class: 'bg-blue-500' },
  { name: 'purple', class: 'bg-purple-500' },
  { name: 'green', class: 'bg-green-500' },
  { name: 'rose', class: 'bg-rose-500' },
] as const;

export function ColorSelector() {
  const { colorTheme, setColorTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Select color theme"
      >
        <Palette className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  setColorTheme(color.name);
                  setIsOpen(false);
                }}
                className={`w-6 h-6 rounded-full ${color.class} ${
                  colorTheme === color.name ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500' : ''
                }`}
                aria-label={`Select ${color.name} theme`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}