import React from 'react';
import { NewsletterForm } from './components/NewsletterForm';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-current-600 to-current-800 dark:from-current-400 dark:to-current-600">
              Stay Informed & Inspired
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Join our newsletter and get weekly updates on industry insights, trends, and expert tips delivered straight to your inbox.
            </p>
            <div className="flex justify-center mb-16">
              <NewsletterForm />
            </div>
          </div>

          <Features />

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Join over 10,000+ subscribers who trust our newsletter
            </p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;