'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import './leaderboards.css';

export default function LeaderboardsPage() {
  const [leaderboard, setLeaderboard] = useState<{ name: string; score: number }[]>([]);
  const router = useRouter(); // Initialize useRouter hook

  useEffect(() => {
    const stored = localStorage.getItem('userProgress');
    if (stored) {
      const user = JSON.parse(stored);
      const newEntry = { name: user.name || 'Anonymous', score: user.score };

      // Get all existing leaderboard data
      const existingLeaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');

      // Add the current user to the leaderboard
      existingLeaderboard.push(newEntry);

      // Sort the leaderboard by score (descending order)
      existingLeaderboard.sort((a: { score: number }, b: { score: number }) => b.score - a.score);

      // Update the leaderboard in localStorage
      localStorage.setItem('leaderboard', JSON.stringify(existingLeaderboard));

      // Set the leaderboard state
      setLeaderboard(existingLeaderboard);
    }
  }, []);

  // Function to handle back navigation
  const handleBackToBlogs = () => {
    router.push('/blog'); // Navigate back to the blogs page
  };

  return (
    <div className="leaderboards">
      <h1>🏆 Leaderboards</h1>
      <p>Top scorers will be listed here.</p>

      {leaderboard.length > 0 ? (
        <ol>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {index + 1}. {entry.name}: {entry.score} points
            </li>
          ))}
        </ol>
      ) : (
        <p>No scores available yet.</p>
      )}

      {/* Back to Blogs button */}
      <button className="back-to-blogs" onClick={handleBackToBlogs}>
        ← Back to Blogs
      </button>
    </div>
  );
}
