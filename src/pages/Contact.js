import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://localhost:5000/api/contact', formData)
      .then(res => {
        setResponse('✅ Pesan berhasil disimpan!');
        setFormData({ name: '', message: '' }); // reset input
      })
      .catch(err => {
        console.error(err);
        setResponse('❌ Gagal menyimpan pesan.');
      })
      .finally(() => setLoading(false));
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, rgb(237, 237, 248), rgb(227, 228, 236))',
    fontFamily: 'Poppins, sans-serif',
    padding: '2rem'
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '460px',
    textAlign: 'center'
  };

  const avatarStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    marginBottom: '1rem',
    border: '3px solid rgb(6, 51, 248)',
    objectFit: 'cover'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    margin: '0.6rem 0',
    borderRadius: '10px',
    border: '1.5px solid #ccc',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    outline: 'none'
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    marginTop: '1.5rem',
    padding: '0.8rem 2rem',
    background: 'linear-gradient(to right, rgb(72, 18, 235), #9face6)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const responseStyle = {
    marginTop: '1.5rem',
    color: response.includes('berhasil') ? 'green' : 'red',
    fontWeight: '600',
    fontSize: '1.1rem'
  };

  return (
    <div style={containerStyle}>
      <form style={cardStyle} onSubmit={handleSubmit}>
        <img
          src="/100.jpg"
          alt="Profile"
          style={avatarStyle}
        />
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
          Kontak
        </h2>
        <input
          name="name"
          placeholder="Nama..."
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = '#74ebd5'}
          onBlur={e => e.target.style.borderColor = '#ccc'}
        />
        <textarea
          name="message"
          placeholder="Pesan..."
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          onFocus={e => e.target.style.borderColor = '#74ebd5'}
          onBlur={e => e.target.style.borderColor = '#ccc'}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(116, 235, 213, 0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
          }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'SIMPAN'}
        </button>

        {response && <p style={responseStyle}>{response}</p>}
      </form>
    </div>
  );
}
