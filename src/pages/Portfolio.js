import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const imageMap = {
    1: "/200.jpg",
    2: "/400.png"
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Gagal memuat data proyek.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div style={{ minHeight: '100vh', padding: '3rem 1.5rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'rgba(245, 243, 255, 0.9)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)',
        }}>
          <h1 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #ff758c, #ff7eb3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            ✨ My Projects
          </h1>
          <p style={{ textAlign: 'center', color: '#444', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Koleksi proyek favorit saya — klik “Detail” untuk info lebih lanjut.
          </p>

          {loading && (
            <div style={{ textAlign: 'center' }}>
              <div className="loader" />
              <p>Memuat proyek...</p>
            </div>
          )}

          {error && (
            <div style={{ background: '#ffe8ec', color: '#b00020', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                style={{
                  marginTop: '1rem',
                  background: '#b00020',
                  color: '#fff',
                  padding: '0.6rem 1.4rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Muat Ulang
              </button>
            </div>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.8rem',
          }}>
            {!loading && !error && projects.map((project) => (
              <div
                key={project.id}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={imageMap[project.id] || "https://via.placeholder.com/400x250?text=No+Image"}
                  alt={project.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem', color: '#333' }}>{project.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      marginTop: '1rem',
                      padding: '0.5rem 1.2rem',
                      background: '#ff758c',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                    }}
                  >
                    🔍 Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#ff758c' }}>{selectedProject.title}</h2>
            <img
              src={imageMap[selectedProject.id] || "https://via.placeholder.com/400x250"}
              alt={selectedProject.title}
              style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '10px', margin: '1rem 0' }}
            />
            <p style={{ color: '#444' }}>{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                marginTop: '1.5rem',
                padding: '0.6rem 1.4rem',
                background: '#999',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              ❌ Tutup
            </button>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          body {
            margin: 0;
            background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
            font-family: 'Segoe UI', sans-serif;
          }
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #ff758c;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
