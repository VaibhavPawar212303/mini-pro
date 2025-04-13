'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './questions.css';

const questions = [
  {
    id: 1,
    question: 'What is SDLC?',
    options: [
      'Software Design Life Cycle',
      'System Development Life Cycle',
      'Software Development Life Cycle', // ✅ correct
      'Service Design Life Cycle',
    ],
    correctAnswer: 'Software Development Life Cycle',
  },
  {
    id: 2,
    question: 'Which phase comes first in SDLC?',
    options: ['Testing', 'Deployment', 'Requirement Gathering', 'Design'], // ✅ correct: Requirement Gathering
    correctAnswer: 'Requirement Gathering',
  },
  // Add more questions with `correctAnswer` field as needed
];

export default function QuestionsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const handleOptionChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    const stored = localStorage.getItem('userProgress');
    if (stored) {
      const user = JSON.parse(stored);
      user.answers = answers;
      user.score = score;
      localStorage.setItem('userProgress', JSON.stringify(user));
    }

    router.push('/leaderboards');
  };

  return (
    <div className="questions-container">
      <h1>Quiz: Test Your Knowledge</h1>

      {questions.map((q) => (
        <div key={q.id} className="question-block">
          <p>
            <strong>
              {q.id}. {q.question}
            </strong>
          </p>
          {q.options.map((option) => (
            <label key={option} className="option-label">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                checked={answers[q.id] === option}
                onChange={() => handleOptionChange(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button className="submit-button" onClick={handleSubmit}>
        🚀 Submit Answers
      </button>
    </div>
  );
}
