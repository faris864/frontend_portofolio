import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

   const imageMap = {
    1: "/222.png",
    2: "/333.png"
  };

  const fetchProjects = () => {
    setLoading(true);
    setError(null);
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Gagal memuat data proyek.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    fontSize: '2.8rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
    background: 'linear-gradient(90deg, #7b2ff7, #f107a3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const subtitleStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.8rem'
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(123, 47, 247, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover'
  };

  const cardBodyStyle = {
    padding: '1.2rem'
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.6rem 1.4rem',
    background: 'linear-gradient(90deg, #7b2ff7, #f107a3)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const loaderStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #7b2ff7',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem'
  };

  const errorStyle = {
    background: '#ffe0f0',
    color: '#b1005a',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
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
    boxShadow: '0 8px 30px rgba(123, 47, 247, 0.3)'
  };

  return (
    <>
      <div style={{ minHeight: '100vh', padding: '2rem' }}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>My Creative Projects</h1>
          <p style={subtitleStyle}>
            Berikut adalah beberapa hasil karya yang telah saya kerjakan. Klik detail untuk melihat lebih lanjut.
          </p>

          {loading && (
            <div style={loadingStyle}>
              <div style={loaderStyle} />
              <p>Loading projects...</p>
            </div>
          )}

          {error && (
            <div style={errorStyle}>
              <p>{error}</p>
              <button onClick={fetchProjects} style={{...buttonStyle, background: '#b1005a'}}>
                Coba Lagi
              </button>
            </div>
          )}

          <div style={gridStyle}>
            {!loading && !error && projects.map(proj => (
              <div
                key={proj.id}
                style={cardStyle}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(123, 47, 247, 0.3)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(123, 47, 247, 0.2)';
                }}
              >
                <img
                  src={imageMap[proj.id] || "https://via.placeholder.com/300x200.png?text=No+Image"}
                   alt={proj.title}
                   style={imageStyle}
/>

                <div style={cardBodyStyle}>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <button
                    style={buttonStyle}
                    onMouseOver={e => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(123, 47, 247, 0.4)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={() => setSelectedProject(proj)}
                  >
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal detail */}
      {selectedProject && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{color: '#7b2ff7', marginBottom: '1rem'}}>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button
              style={{...buttonStyle, marginTop: '1.5rem'}}
              onClick={() => setSelectedProject(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Global style: body background */}
      <style>
        {`
          body {
            margin: 0;
            background: linear-gradient(135deg, #a18cd1, #fbc2eb);
            min-height: 100vh;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
