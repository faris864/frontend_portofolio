import React from 'react';

export default function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          maxWidth: '600px',
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          About Me
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
          Hi, I’m Rasid, a passionate web developer with a love for building
          beautiful and functional applications. I specialize in React, Node.js, and creating
          seamless user experiences.
        </p>

        <div
          style={{
            marginTop: '2rem',
            textAlign: 'left',
          }}
        >
          <h3 style={{ color: '#4e54c8' }}>Skills & Interests:</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ margin: '0.5rem 0' }}>🚀 React & JavaScript</li>
            <li style={{ margin: '0.5rem 0' }}>🖥️ Node.js & Express</li>
            <li style={{ margin: '0.5rem 0' }}>🎨 UI/UX Design</li>
            <li style={{ margin: '0.5rem 0' }}>📱 Responsive Web</li>
          </ul>
        </div>

        <button
          style={{
            marginTop: '2rem',
            padding: '0.8rem 2rem',
            background: '#4e54c8',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#5c63d9';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#4e54c8';
          }}
          onClick={() => {
            // simulasi download CV
            alert('CV download started!');
          }}
        >
          Download CV
        </button>
      </div>

      {/* Animasi fadeIn manual */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
