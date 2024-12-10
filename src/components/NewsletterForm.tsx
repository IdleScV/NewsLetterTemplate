import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { validateEmail } from '../utils/validation';
import { useTheme } from '../contexts/ThemeContext';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { colorTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus('idle');
          }}
          placeholder="Enter your email address"
          className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-${colorTheme}-500 focus:border-transparent outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400`}
        />
        <button
          type="submit"
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-${colorTheme}-600 dark:bg-${colorTheme}-500 text-white p-2 rounded-lg hover:bg-${colorTheme}-700 dark:hover:bg-${colorTheme}-600 transition-colors`}
          aria-label="Subscribe"
        >
          <Send size={20} />
        </button>
      </div>
      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-sm">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400 text-sm">Please enter a valid email address</p>
      )}
    </form>
  );
}