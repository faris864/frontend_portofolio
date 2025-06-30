import React from 'react';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
          marginBottom: '1rem',
        }}
      >
        Hi, I’m Rasid!
      </h1>
      <p
        style={{
          fontSize: '1.4rem',
          maxWidth: '700px',
          margin: '0 auto 2rem',
          lineHeight: '1.6',
        }}
      >
        Welcome to my personal portfolio website. I'm a passionate web developer
        who loves building applications with React & Node.js.
      </p>
      <img
        src="/111.jpg"
        alt="Profile"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 25px rgba(0,0,0,0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
        }}
      />
    </div>
  );
}
