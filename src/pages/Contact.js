import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
      .then(res => setResponse(res.data.message))
      .catch(err => console.error(err));
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem'
  };

  const formStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    margin: '0.5rem 0',
    border: '2px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s'
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.8rem 2rem',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={{marginBottom: '1rem', color: '#333'}}>Contact Me</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = '#764ba2'}
          onBlur={e => e.target.style.borderColor = '#ddd'}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          style={textareaStyle}
          onFocus={e => e.target.style.borderColor = '#764ba2'}
          onBlur={e => e.target.style.borderColor = '#ddd'}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(118, 75, 162, 0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Send
        </button>
        {response && <p style={{marginTop: '1rem', color: '#764ba2'}}>{response}</p>}
      </form>
    </div>
  );
}
