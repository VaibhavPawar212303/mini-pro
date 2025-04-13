'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './CourseCard.css';
import EnrollmentForm from '../enroll/page';

interface CourseCardProps {
  title: string;
  description: string;
}

export default function CourseCard({ title, description }: CourseCardProps) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="course-card">
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
      {!showForm ? (
        <button className="enroll-button" onClick={() => setShowForm(true)}>
          Enroll
        </button>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <EnrollmentForm />
        </div>
      )}
    </div>
  );
}
