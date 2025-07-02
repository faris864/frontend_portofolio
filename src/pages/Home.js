import React from 'react';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, rgb(227, 229, 241), rgb(244, 244, 252))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(12px)',
          borderRadius: '1.5rem',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          maxWidth: '540px',
          width: '100%',
          padding: '2.5rem',
          textAlign: 'center',
          animation: 'fadeInUp 1s ease'
        }}
      >
        <div
          style={{
            width: '160px',
            height: '160px',
            margin: '0 auto 1.5rem',
            borderRadius: '50%',
            padding: '4px',
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
          }}
        >
          <img
            src="/100.jpg"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>

        <h1
          style={{
            fontSize: '2.6rem',
            fontWeight: '700',
            margin: '0 0 1rem',
            color: '#333',
            letterSpacing: '1px'
          }}
        >
          Profil
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            color: '#555',
            marginBottom: '2rem'
          }}
        >
          Selamat Datang Di Portofolio Saya <b></b>. Welcome to my portfolio!
        </p>

        <button
          style={{
            padding: '0.8rem 2.2rem',
            fontSize: '1rem',
            fontWeight: '500',
            color: '#fff',
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(110, 142, 251, 0.4)',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(110, 142, 251, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(110, 142, 251, 0.4)';
          }}
          onClick={() => alert('Navigating to portfolio...')}
        >
          Faris Ananto
        </button>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
