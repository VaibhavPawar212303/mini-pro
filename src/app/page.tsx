// app/page.tsx
import CourseCard from '@/app/components/CourseCard';
import './page.css';

export default function HomePage() {
  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Learn Anytime, Anywhere</h1>
        <p>Join thousands of learners and enhance your skills with our expert-led courses.</p>
        <button className="cta-button">Explore Courses</button>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Top Categories</h2>
        <div className="categories-grid">
          <div className="category-card">Development</div>
          <div className="category-card">Business</div>
          <div className="category-card">Finance & Accounting</div>
          <div className="category-card">IT & Software</div>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>Available Courses</h2>
        <CourseCard
          title="Mastering Manual Testing"
          description="Learn how to become an expert in manual testing with real-world examples and practical guidance."
        />
        {/* Add more CourseCard components as needed */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>demo text will work on this</p>
            <span>- demo1</span>
          </div>
          <div className="testimonial-card">
            <p>demo text will work on this</p>
            <span>- demo2</span>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 YourPlatformName. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
