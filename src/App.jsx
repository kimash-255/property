import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import all the pages directly
import HomePage from './pages/index.jsx';
import AboutPage from './pages/about/index.jsx';
import NotFoundPage from './pages/404.jsx';
import BlogIndexPage from './pages/blog/index.jsx';
import BlogPostPage from './pages/blog/[slug].jsx';
import ContactPage from './pages/contact/index.jsx';
import ListingPage from './pages/listing/index.jsx';
import PropertyPage from './pages/property/[slug].jsx';
import ApiHelloPage from './pages/api/hello.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/property/:slug" element={<PropertyPage />} />
        <Route path="/api/hello" element={<ApiHelloPage />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
