// pages/courses.tsx
'use client';
import React from 'react';
import CourseCard from '../components/CourseCard/CourseCard';

const CoursesPage = () => {
  const instructorName = 'Vaibhav Pawar';
  const courses = [
    {
      id: 'manual-testing',
      title: 'Manual Testing Fundamentals',
      description: 'Learn the core principles and techniques of manual software testing. Gain practical skills in test case design, execution, and bug reporting.',
      instructor: instructorName,
      duration: '4 Weeks',
      level: 'Beginner',
      // No slug for now as it might be a coming soon course or not yet detailed
    },
    {
      id: 'cypress-automation',
      title: 'Cypress Automation Testing',
      description: 'Master end-to-end testing for modern web applications using Cypress. Learn how to write robust and reliable automated tests.',
      instructor: instructorName,
      comingSoon: true,
      // No slug for now
    },
    {
      id: 'typescript-learning',
      title: 'TypeScript for Beginners',
      description: 'Get started with TypeScript, a statically typed superset of JavaScript. Enhance your JavaScript development with improved code quality and maintainability.',
      instructor: instructorName,
      comingSoon: true,
      // No slug for now
    },
    // You can add more courses here
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Courses</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;