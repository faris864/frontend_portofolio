import React, { useState } from 'react';

export default function Blog() {
  const articles = [
    { 
      id: 1, 
      title: 'Belajar React dari Nol', 
      excerpt: 'Panduan lengkap memulai belajar React untuk pemula...',
      content: 'React adalah library JavaScript populer untuk membangun UI interaktif. Dimulai dari komponen sederhana lalu berkembang menjadi SPA.'
    },
    { 
      id: 2, 
      title: 'Tips UI/UX Kekinian', 
      excerpt: 'Bagaimana membuat tampilan web yang menarik dan user friendly...',
      content: 'UI/UX penting agar pengguna betah. Gunakan warna yang konsisten, tipografi jelas, dan animasi ringan.'
    },
    { 
      id: 3, 
      title: 'Mengenal Node.js', 
      excerpt: 'Server-side JavaScript untuk aplikasi modern...',
      content: 'Node.js memungkinkan Anda menjalankan JavaScript di server, menggunakan event loop non-blocking agar cepat & scalable.'
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.8rem',
    marginBottom: '2rem',
    color: '#333'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.8rem',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.6rem 1.4rem',
    background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const modalContentStyle = {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 8px 30px rgba(238, 9, 121, 0.3)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>My Blog</h1>
      <div style={gridStyle}>
        {articles.map(article => (
          <div
            key={article.id}
            style={cardStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(238, 9, 121, 0.2)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <h3 style={{color: '#ee0979'}}>{article.title}</h3>
            <p>{article.excerpt}</p>
            <button
              style={buttonStyle}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(238, 9, 121, 0.4)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => setSelectedArticle(article)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{color: '#ee0979'}}>{selectedArticle.title}</h2>
            <p style={{marginTop: '1rem'}}>{selectedArticle.content}</p>
            <button
              style={{...buttonStyle, marginTop: '1.5rem'}}
              onClick={() => setSelectedArticle(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
