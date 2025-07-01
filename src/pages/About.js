import React from 'react';

export default function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          padding: '2rem',
          maxWidth: '900px',
          width: '100%',
          gap: '2rem',
          flexWrap: 'wrap',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        {/* Left Section - Info */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1rem' }}>
            👋 About Me
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.7' }}>
            I'm <strong>Faris Ananto</strong>, a web developer focused on building modern,
            performant, and accessible web applications. With a passion for clean
            UI and scalable backend logic, I work mainly with <b>React</b> and <b>Node.js</b>.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ color: '#5e60ce', marginBottom: '0.5rem' }}>Skills:</h3>
            <ul style={{ paddingLeft: '1rem', color: '#444', lineHeight: '1.6' }}>
              <li>⚛️ React, Next.js</li>
              <li>🌐 Node.js, Express</li>
              <li>🎨 Figma, UI/UX Design</li>
              <li>📱 Mobile-Responsive Development</li>
            </ul>
          </div>

          <button
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.8rem',
              background: '#5e60ce',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(94, 96, 206, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#6d6fdd';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(94, 96, 206, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#5e60ce';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(94, 96, 206, 0.3)';
            }}
            onClick={() => {
              alert('CV download started!');
            }}
          >
            Download CV
          </button>
        </div>

        {/* Right Section - Profile Image */}
        <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
          <img
            src="/100.jpg"
            alt="Faris"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #fff',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
