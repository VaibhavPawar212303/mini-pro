'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import { motion } from 'framer-motion';
import CoursesPage from './Courses/page';
import Footer from './components/Footer/Footer';

type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  mainImageUrl?: string;
  publishedDate: string;
};

export default function Home() {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/blogs');
        const data: Blog[] = await res.json();

        const sortedData = data.sort(
          (a, b) =>
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime()
        );

        setBlogs(sortedData.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const stripHtml = (html: string) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
  };

  return (
    <div>
      <Header />
      <Intro />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <section className="w-full mt-10">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">Latest Blogs</h1>
              <motion.div variants={childVariants}>
                <Link href="/blogs">
                  <button className="relative px-6 py-3 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300 z-10">
                    Explore Blogs
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden"
                >
                  {blog.mainImageUrl && (
                    <Image
                      src={blog.mainImageUrl}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {stripHtml(blog.content)}
                    </p>
                    <a
                      href={`/blogs/${blog.slug}`}
                      className="inline-block mt-3 text-sm font-medium text-green-600 hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <CoursesPage />
      <Footer />
    </div>
  );
}
