import React from 'react';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg,rgb(227, 229, 241),rgb(244, 244, 252))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          maxWidth: '500px',
          width: '100%',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <img
          src="/100.jpg"
          alt="Profile"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            marginBottom: '1.5rem',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'rotate(5deg) scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
          }}
        />
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            margin: '0 0 1rem',
            color: '#333',
          }}
        >
          PROFIL SAYA
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#555',
          }}
        >
          I'm a web developer who enjoys crafting interactive and dynamic applications using React & Node.js. Welcome to my portfolio!
        </p>
      </div>
    </div>
  );
}
