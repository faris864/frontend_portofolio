import React, { useState } from 'react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'kementrian BUMN',
      excerpt: 'Deskripsi',
      content: 'BUMN adalah singkatan dari Badan Usaha Milik Negara. Ini adalah perusahaan di mana sebagian besar atau seluruh modalnya dimiliki oleh negara, melalui penyertaan langsung dari kekayaan negara yang dipisahkan. .',
      image: '/50.jpg'
    },
    {
      id: 2,
      title: 'KAI-kereta Api Indonesia',
      excerpt: 'Deskripsi',
      content: 'PT Kereta Api Indonesia (Persero) atau biasa disingkat menjadi KAI, adalah sebuah badan usaha milik negara Indonesia yang bergerak di bidang perkeretaapian.',
      image: '/60.jpg'
    },
    {
      id: 3,
      title: 'Pertamina',
      excerpt: 'Deskripsi',
      content: 'PT Pertamina (Persero) adalah sebuah badan usaha milik negara Indonesia yang bergerak di bidang minyak dan gas.',
      image: '/70.jpg'
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to right,rgb(236, 240, 246),rgb(215, 221, 228))',
    padding: '3rem 2rem',
    fontFamily: 'Poppins, sans-serif',
    color: '#fff'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2.5rem',
    color: '#00e0ff'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: '#1e2a38',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '160px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '1.2rem'
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.6rem 1.4rem',
    background: 'linear-gradient(90deg, #00e0ff, #8a2be2)',
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
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const modalContentStyle = {
    background: '#1e2a38',
    padding: '2rem',
    borderRadius: '14px',
    maxWidth: '600px',
    width: '90%',
    color: '#fff',
    boxShadow: '0 0 30px rgba(0,224,255,0.3)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Pengalaman Kerja </h1>
      <div style={gridStyle}>
        {articles.map(article => (
          <div
            key={article.id}
            style={cardStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,224,255,0.2)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
            }}
          >
            <img src={article.image} alt={article.title} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={{ color: '#00e0ff' }}>{article.title}</h3>
              <p style={{ color: '#ccc' }}>{article.excerpt}</p>
              <button
                style={buttonStyle}
                onClick={() => setSelectedArticle(article)}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,224,255,0.4)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Lihat
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#00e0ff' }}>{selectedArticle.title}</h2>
            <p style={{ marginTop: '1rem' }}>{selectedArticle.content}</p>
            <button
              style={{ ...buttonStyle, marginTop: '1.5rem' }}
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
