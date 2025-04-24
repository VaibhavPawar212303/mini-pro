// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-white transition-colors duration-300" />
            </Link>
            <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-white transition-colors duration-300" />
            </Link>
            <Link href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-white transition-colors duration-300" />
            </Link>
          </div>
          <div className="text-center md:text-right">
            <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="mx-2 text-gray-500">|</span>
            <Link href="/terms-of-service" className="text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;