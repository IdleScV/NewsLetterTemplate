import React from 'react';
import { Newspaper, Zap, Bell, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const features = [
  {
    icon: Newspaper,
    title: 'Weekly Updates',
    description: 'Get the latest industry news and insights delivered to your inbox'
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Receive our newsletter the moment it\'s published'
  },
  {
    icon: Bell,
    title: 'Custom Alerts',
    description: 'Set preferences for the content that matters to you'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is secure and will never be shared with third parties'
  }
];

export function Features() {
  const { colorTheme } = useTheme();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/10 transition-colors">
          <div className={`p-2 bg-${colorTheme}-100 dark:bg-${colorTheme}-900/50 rounded-lg`}>
            <feature.icon className={`w-6 h-6 text-${colorTheme}-600 dark:text-${colorTheme}-400`} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}