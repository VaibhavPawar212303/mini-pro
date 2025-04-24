'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  publishedDate: string;
  mainImageUrl?: string;
}

export default function AllBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data: Blog[] = await res.json();

        const sortedData = data.sort(
          (a, b) =>
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime()
        );

        setBlogs(sortedData);
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
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-10 text-center">All Blogs</h1>
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
    </div>
  );
}
