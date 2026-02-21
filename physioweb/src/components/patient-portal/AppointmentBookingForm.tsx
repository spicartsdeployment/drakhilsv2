import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AppointmentBookingFormProps {
  specialist: {
    id: number;
    name: string;
    speciality: string;
    experience: string;
    image: string;
  } | null;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

export function AppointmentBookingForm({ specialist, onClose, onSubmit }: AppointmentBookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    date: '',
    time: '',
    reason: ''
  });

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!specialist) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'rgb(222, 232, 222)',
          borderRadius: '20px',
          maxWidth: '1000px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(26, 51, 51, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(26, 51, 51, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(26, 51, 51, 0.1)';
          }}
        >
          <X size={20} color="rgb(26, 51, 51)" />
        </button>

        <div style={{ padding: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '48px', alignItems: 'start' }}>
            
            {/* Left Side - Heading & Selected Specialist */}
            <div>
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div 
                  style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%',
                    backgroundColor: '#33a9b1'
                  }} 
                />
                <span 
                  style={{ 
                    color: 'rgb(26, 51, 51)',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  BOOK YOUR SESSION
                </span>
              </div>

              {/* Main Heading */}
              <h2 
                style={{ 
                  color: 'rgb(26, 51, 51)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.5px',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontWeight: '400',
                  marginBottom: '32px',
                  fontSize: '42px'
                }}
              >
                Book<br />
                <span style={{ color: '#0f8987', fontFamily: 'Georgia, "Times New Roman", serif' }}>Appointment</span>
              </h2>

              {/* Selected Specialist Card */}
              <div 
                style={{
                  backgroundColor: 'transparent',
                  borderRadius: '16px',
                  padding: '20px',
                  marginBottom: '24px'
                }}
              >
                <div style={{ fontSize: '12px', color: 'rgb(26, 51, 51)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                  Selected Specialist
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img 
                    src={specialist.image} 
                    alt={specialist.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '12px',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: 'rgb(26, 51, 51)', marginBottom: '6px' }}>
                      {specialist.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#0f8987', marginBottom: '4px' }}>
                      {specialist.speciality}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6b7280' }}>
                      {specialist.experience}
                    </div>
                  </div>
                </div>
              </div>

              {/* Happy Clients */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span 
                  style={{ 
                    color: 'rgb(26, 51, 51)',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  HAPPY CLIENTS
                </span>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-12px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Client"
                    style={{ 
                      width: '40px', 
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgb(222, 232, 222)',
                      marginLeft: '0'
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Client"
                    style={{ 
                      width: '40px', 
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgb(222, 232, 222)',
                      marginLeft: '-12px'
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="Client"
                    style={{ 
                      width: '40px', 
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgb(222, 232, 222)',
                      marginLeft: '-12px'
                    }}
                  />
                  <div 
                    style={{ 
                      width: '40px', 
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#33a9b1',
                      border: '2px solid rgb(222, 232, 222)',
                      marginLeft: '-12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span 
                      style={{ 
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}
                    >
                      2k+
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Line Separator */}
            <div 
              style={{
                position: 'absolute',
                left: '40%',
                top: '10%',
                bottom: '10%',
                width: '1px',
                backgroundColor: 'rgba(26, 51, 51, 0.2)'
              }}
            />

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* Row 1: Name */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: '16px' }}>
                  <span 
                    style={{ 
                      color: 'rgb(26, 51, 51)',
                      fontSize: '16px',
                      whiteSpace: 'nowrap',
                      marginBottom: '8px'
                    }}
                  >
                    Hey, My Name Is
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      flexShrink: 0,
                      width: '180px',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      border: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      paddingBottom: '8px',
                      color: 'rgb(26, 51, 51)',
                      fontSize: '16px',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                    }}
                  />
                </div>

                {/* Row 2: Service and Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ position: 'relative' }}>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        appearance: 'none',
                        cursor: 'pointer',
                        borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                        border: 'none',
                        borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                        paddingBottom: '8px',
                        paddingRight: '30px',
                        color: formData.service ? 'rgb(26, 51, 51)' : 'rgba(26, 51, 51, 0.5)',
                        fontSize: '15px',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderBottomColor = '#33a9b1';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                      }}
                    >
                      <option value="">Type of Service*</option>
                      <option value="orthopedic">Orthopedic Rehabilitation</option>
                      <option value="neurological">Neurological Rehabilitation</option>
                      <option value="cardio">Cardio Respiratory Care</option>
                      <option value="sports">Sports Injury Recovery</option>
                      <option value="pediatric">Pediatric Therapy</option>
                      <option value="geriatric">Geriatric Care</option>
                      <option value="women">Women's Health</option>
                      <option value="manual">Manual Therapy</option>
                      <option value="vestibular">Vestibular Rehabilitation</option>
                    </select>
                    <div 
                      style={{
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        pointerEvents: 'none',
                        color: '#33a9b1'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail Address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      border: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      paddingBottom: '8px',
                      color: 'rgb(26, 51, 51)',
                      fontSize: '15px',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                    }}
                  />
                </div>

                {/* Row 3: Date and Time */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: '16px' }}>
                  <span 
                    style={{ 
                      color: 'rgb(26, 51, 51)',
                      fontSize: '15px',
                      whiteSpace: 'nowrap',
                      marginBottom: '8px'
                    }}
                  >
                    My Preferred Date Is
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={{
                      flexShrink: 0,
                      width: '160px',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      border: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      paddingBottom: '8px',
                      color: formData.date ? 'rgb(26, 51, 51)' : 'rgba(26, 51, 51, 0.5)',
                      fontSize: '15px',
                      colorScheme: 'light',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                    }}
                  />
                  <span 
                    style={{ 
                      color: 'rgb(26, 51, 51)',
                      fontSize: '15px',
                      whiteSpace: 'nowrap',
                      marginBottom: '8px'
                    }}
                  >
                    At
                  </span>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={{
                      flexShrink: 0,
                      width: '120px',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      border: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      paddingBottom: '8px',
                      color: formData.time ? 'rgb(26, 51, 51)' : 'rgba(26, 51, 51, 0.5)',
                      fontSize: '15px',
                      colorScheme: 'light',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                    }}
                  />
                </div>

                {/* Row 4: Reason */}
                <div>
                  <textarea
                    name="reason"
                    placeholder="Reason for Visit*"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                      paddingBottom: '8px',
                      color: 'rgb(26, 51, 51)',
                      fontSize: '15px',
                      resize: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                  <button
                    type="submit"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    style={{
                      padding: '16px 40px',
                      backgroundColor: isButtonHovered ? 'white' : '#0f8987',
                      color: isButtonHovered ? '#0f8987' : 'white',
                      border: `2px solid #0f8987`,
                      borderRadius: '50px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      letterSpacing: '0.5px'
                    }}
                  >
                    CONFIRM BOOKING
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}