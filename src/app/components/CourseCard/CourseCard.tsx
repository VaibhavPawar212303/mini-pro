// components/CourseCard.tsx
import React from 'react';
import { FaBookOpen, FaClock, FaUserTie, FaTrophy } from 'react-icons/fa'; // Example icons

interface Course {
  id: string;
  title: string;
  description: string;
  instructor?: string;
  duration?: string;
  level?: string;
  slug?: string; // Optional slug for course details page
  comingSoon?: boolean; // New property to indicate if the course is coming soon
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden h-80 md:h-96 flex flex-col">
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center mb-3">
          <FaBookOpen className="text-xl text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">{course.title}</h3>
          {course.comingSoon && (
            <span className="ml-2 text-sm font-medium text-yellow-500">Coming Soon</span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4 mb-3 flex-grow">
          {course.description}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {course.instructor && (
            <div className="flex items-center mb-1">
              <FaUserTie className="text-gray-400 mr-2" />
              <span>Instructor: {course.instructor}</span>
            </div>
          )}
          {course.duration && (
            <div className="flex items-center mb-1">
              <FaClock className="text-gray-400 mr-2" />
              <span>Duration: {course.duration}</span>
            </div>
          )}
          {course.level && (
            <div className="flex items-center">
              <FaTrophy className="text-gray-400 mr-2" />
              <span>Level: {course.level}</span>
            </div>
          )}
        </div>
        {course.slug && !course.comingSoon && (
          <a
            href={`/courses/${course.slug}`} // Adjust the link as needed
            className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
          >
            Learn More →
          </a>
        )}
        {course.comingSoon && (
          <div className="mt-4 text-sm font-medium text-gray-500">Stay tuned for more details!</div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;