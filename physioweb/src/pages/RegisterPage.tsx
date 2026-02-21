import React, { useState } from 'react';
import { useNavigate } from '../App';

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Process registration
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(26, 61, 61)',
          borderRadius: '24px',
          padding: '30px',
          maxWidth: '900px',
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 20px 60px',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '130px',
          backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          inset: '0px',
          backgroundColor: 'rgba(26, 61, 61, 0.1)',
          borderRadius: '24px',
          zIndex: 0
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontFamily: 'Philosopher, serif',
              fontSize: '36px',
              color: 'white',
              textAlign: 'center',
              marginBottom: '40px',
              fontWeight: '400'
            }}
          >
            Register Form
          </h1>

          <form onSubmit={handleSubmit}>
            {/* First Row: Firstname and Lastname */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}
            >
              <input
                type="text"
                placeholder="Firstname *"
                value={formData.firstname}
                onChange={(e) => handleChange('firstname', e.target.value)}
                required
                style={{
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'white',
                  color: '#666',
                  outline: 'none'
                }}
              />
              <input
                type="text"
                placeholder="Lastname"
                value={formData.lastname}
                onChange={(e) => handleChange('lastname', e.target.value)}
                style={{
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'white',
                  color: '#666',
                  outline: 'none'
                }}
              />
            </div>

            {/* Second Row: Username and Email */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}
            >
              <input
                type="text"
                placeholder="Username *"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                required
                style={{
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'white',
                  color: '#666',
                  outline: 'none'
                }}
              />
              <input
                type="email"
                placeholder="Email Id *"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                style={{
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'white',
                  color: '#666',
                  outline: 'none'
                }}
              />
            </div>

            {/* Third Row: Password and Confirm Password */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '32px'
              }}
            >
              <input
                type="password"
                placeholder="Password *"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                required
                style={{
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'white',
                  color: '#666',
                  outline: 'none'
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password *"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                required
                style={{
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontFamily: 'Poppins, sans-serif',
                  backgroundColor: 'white',
                  color: '#666',
                  outline: 'none'
                }}
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '30px',
                border: 'none',
                backgroundColor: '#33a9b1',
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: '24px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2a8d94';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#33a9b1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Register
            </button>
          </form>

          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              style={{
                color: '#c1f5f1',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}