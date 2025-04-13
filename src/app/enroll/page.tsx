'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './EnrollmentForm.css';

export default function EnrollmentForm() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // 👇 Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user');
    if (!isLoggedIn) {
      router.push('/login?redirect=/enroll');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Please enter your name to enroll');
    } else {
      setError('');
      const user = {
        name: name.trim(),
        enrolled: true,
        blogCompleted: false,
        answers: {},
        score: 0,
      };
      localStorage.setItem('userProgress', JSON.stringify(user));
      setIsSubmitted(true);
    }
  };

  const handleStartLearning = () => {
    router.push('/blog');
  };

  return (
    <div className="enroll-form-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="enroll-form">
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p className="success-message">🎉 Welcome, {name}! You’ve enrolled successfully.</p>
          <button onClick={handleStartLearning} className="start-learning-button">
            Start Learning
          </button>
        </div>
      )}
    </div>
  );
}
