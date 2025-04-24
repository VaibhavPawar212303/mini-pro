'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-white cursor-pointer">
            Testrig Community
          </span>
        </Link>

        {/* Right: Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-green-400 transition-colors">
            Blogs
          </Link>
          <Link href="/about" className="hover:text-green-400 transition-colors">
            About
          </Link>

          {/* Buttons */}
          <Link href="/login">
            <button className="px-4 py-2 text-sm font-medium text-black bg-green-400 hover:bg-green-500 rounded-md transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 text-sm font-medium text-white border border-green-400 hover:bg-green-600 rounded-md transition">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
