import React, { useState } from 'react';
import { useNavigate } from '../App';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dummy patient credentials
  const PATIENT_CREDENTIALS = {
    email: 'patient@drakhils.com',
    password: 'patient123'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    console.log('Login form submitted');
    console.log('Email entered:', email);
    console.log('Password entered:', password);
    console.log('Expected email:', PATIENT_CREDENTIALS.email);
    console.log('Expected password:', PATIENT_CREDENTIALS.password);

    // Check if it's a patient login
    if (email === PATIENT_CREDENTIALS.email && password === PATIENT_CREDENTIALS.password) {
      console.log('Credentials match! Setting localStorage and navigating...');
      // Store patient login status in localStorage
      localStorage.setItem('patientLoggedIn', 'true');
      localStorage.setItem('patientEmail', email);
      console.log('localStorage set, calling navigate...');
      // Navigate to patient portal immediately
      navigate('/patient-portal');
      setIsLoading(false);
    } else {
      console.log('Credentials do not match');
      // Invalid credentials
      setError('Invalid email or password');
      setIsLoading(false);
    }
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
          padding: '50px 40px',
          maxWidth: '480px',
          height: '450px',
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
              marginBottom: '12px',
              fontWeight: '400'
            }}
          >
            Login Form
          </h1>
          
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              marginBottom: '40px',
              fontSize: '15px',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Welcome back! Please login to your account
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                placeholder="Email Id *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
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

            <div style={{ marginBottom: '32px' }}>
              <input
                type="password"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
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
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>

          {error && (
            <p
              style={{
                textAlign: 'center',
                color: 'red',
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              {error}
            </p>
          )}

          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Do not have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              style={{
                color: '#c1f5f1',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}