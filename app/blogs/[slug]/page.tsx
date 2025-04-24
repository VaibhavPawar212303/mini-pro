'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DOMPurify from 'dompurify';

interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  author?: string;
  publishedDate: string;
}

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Failed to load blog');

        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!blog) return <div className="p-10 text-red-600">Blog not found</div>;

  // Sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        By {blog.author || 'Unknown'} • {new Date(blog.publishedDate).toDateString()}
      </div>

      {/* Content section */}
      <div className="space-y-6 text-lg leading-8 text-gray-800">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </div>
  );
}
