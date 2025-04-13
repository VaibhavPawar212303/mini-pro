"use client"

import './blog.css';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const router = useRouter();

  const handleComplete = () => {
    const stored = localStorage.getItem('userProgress');
    if (stored) {
      const user = JSON.parse(stored);
      user.blogCompleted = true;
      localStorage.setItem('userProgress', JSON.stringify(user));
    }
    router.push('/questions');
  };

  return (
    <div className="blog-container">
      <aside className="sidebar-left">
        <h2>Mastering Manual Testing</h2>
        <nav>
          <ul>
            <li>Understanding the SDLC in Software Development</li>
            <li>Test Planning</li>
            <li>Test Case Design</li>
            <li>Defect Life Cycle</li>
            <li>Real-world Interview Questions</li>
          </ul>
        </nav>
      </aside>

      <header className="blog-header">
        <nav>
          <span></span>
          <span></span>
          <span></span>
          <a href="/leaderboards" target="_blank" className="github-link">Learderboard ↗</a>
        </nav>
      </header>

      <main className="blog-main">
        <div className="blog-heading-row">
          <h1>Introduction</h1>
          <button className="complete-button" onClick={handleComplete}>
            ✅ Mark as Completed
          </button>
        </div>

        <p>
          Model Context Protocol (MCP) is an open standard that defines how applications provide
          context to LLMs. It streamlines tool integration and boosts interoperability.
        </p>

        <section className="section">
          <h2>Why MCP?</h2>
          <ul>
            <li>Integrate LLMs with tools effortlessly</li>
            <li>Switch providers without refactoring</li>
            <li>Ensure privacy and security of application data</li>
          </ul>
        </section>

      </main>

      <aside className="sidebar-right">
        <h4>On This Page</h4>
        <ul>
          <li>Introduction</li>
          <li>Why MCP?</li>
          <li>Architecture</li>
          <li>Examples</li>
          <li>Contributing</li>
        </ul>
      </aside>
    </div>
  );
}
