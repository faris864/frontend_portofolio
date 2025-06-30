import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 30px',
        background: 'linear-gradient(to right,rgb(29, 21, 16),rgb(6, 18, 5))',
        color: '#fff',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>My Blog</div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '8px 12px',
  borderRadius: '8px',
  transition: 'background 0.3s',
};

const linkHoverStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
};

// Optional: You could add `onMouseEnter` and `onMouseLeave` to implement hover effect with inline styles,
// or ideally move to a CSS module or styled-components for cleaner code.

export default App;
