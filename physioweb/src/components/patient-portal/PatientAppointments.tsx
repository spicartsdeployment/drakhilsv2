import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle, XCircle, AlertCircle, RotateCcw, Filter } from 'lucide-react';

export function PatientAppointments() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    date: '',
    staff: ''
  });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [filterFromDate, setFilterFromDate] = useState('');
  const [filterToDate, setFilterToDate] = useState('');

  const upcomingAppointments = [
    {
      id: 1,
      therapist: 'Dr. Rohan Khanna',
      specialty: 'Physiotherapist',
      date: '2025-02-08',
      time: '10:00 AM',
      status: 'Confirmed',
      type: 'Follow-up',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      therapist: 'Dr. Priya Sharma',
      specialty: 'Sports Therapist',
      date: '2025-02-12',
      time: '2:30 PM',
      status: 'Pending',
      type: 'New Consultation',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      therapist: 'Dr. Rohan Khanna',
      specialty: 'Physiotherapist',
      date: '2025-02-15',
      time: '11:00 AM',
      status: 'Confirmed',
      type: 'Follow-up',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    }
  ];

  const appointmentHistory = [
    {
      id: 101,
      therapist: 'Dr. Rohan Khanna',
      specialty: 'Physiotherapist',
      date: '2025-01-25',
      time: '10:00 AM',
      status: 'Completed',
      type: 'Follow-up',
      prescription: 'Diclofenac 50mg, Heat therapy twice daily'
    },
    {
      id: 102,
      therapist: 'Dr. Priya Sharma',
      specialty: 'Sports Therapist',
      date: '2025-01-18',
      time: '3:00 PM',
      status: 'Completed',
      type: 'New Consultation',
      prescription: 'Muscle relaxant, Ice pack application'
    },
    {
      id: 103,
      therapist: 'Dr. Amit Patel',
      specialty: 'Neurological Specialist',
      date: '2025-01-10',
      time: '11:30 AM',
      status: 'Cancelled',
      type: 'New Consultation',
      prescription: '-'
    },
    {
      id: 104,
      therapist: 'Dr. Sneha Reddy',
      specialty: 'Rehabilitation Expert',
      date: '2024-12-28',
      time: '2:00 PM',
      status: 'Completed',
      type: 'Follow-up',
      prescription: 'Physiotherapy exercises, Pain relief gel'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return { bg: '#d1fae5', text: '#10b981' };
      case 'Pending':
        return { bg: '#fef3c7', text: '#f59e0b' };
      case 'Completed':
        return { bg: 'transparent', text: '#3b82f6' };
      case 'Cancelled':
        return { bg: 'transparent', text: '#ef4444' };
      default:
        return { bg: '#f3f4f6', text: '#6b7280' };
    }
  };

  const handleReschedule = (id: number) => {
    alert(`Reschedule appointment ${id}`);
  };

  const handleCancel = (id: number) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      alert(`Appointment ${id} cancelled`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you shortly.');
    setShowBookingModal(false);
    setFormData({
      name: '',
      service: '',
      email: '',
      date: '',
      staff: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredHistory = appointmentHistory.filter((apt) => {
    const aptDate = new Date(apt.date);
    const fromDate = filterFromDate ? new Date(filterFromDate) : null;
    const toDate = filterToDate ? new Date(filterToDate) : null;

    if (fromDate && aptDate < fromDate) return false;
    if (toDate && aptDate > toDate) return false;
    return true;
  });

  return (
    <div>
      {/* Header with Book Appointment Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#2d4a4a' }}>
          My Appointments
        </h2>
        <button
          onClick={() => setShowBookingModal(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#0f8987',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#33a9b1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0f8987';
          }}
        >
          Book Appointment
        </button>
      </div>

      {/* Upcoming Appointments */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2d4a4a', marginBottom: '16px' }}>
          Upcoming Appointments
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {upcomingAppointments.map((apt) => {
            const statusColor = getStatusColor(apt.status);
            return (
              <div
                key={apt.id}
                style={{
                  backgroundColor: 'rgb(249, 250, 251)',
                  border: '1px solid rgb(229, 231, 235)',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px'
                }}
              >
                {/* Left: Doctor Profile */}
                <div style={{ flex: '0 0 250px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                      {apt.therapist}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6b7280' }}>
                      {apt.specialty}
                    </div>
                  </div>
                </div>

                {/* Middle: Date and Time */}
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#2d4a4a', fontWeight: '500' }}>
                    <Calendar size={16} color="#0f8987" />
                    {new Date(apt.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#2d4a4a', fontWeight: '500' }}>
                    <Clock size={16} color="#0f8987" />
                    {apt.time}
                  </div>
                </div>

                {/* Right: Type and Actions */}
                <div style={{ flex: '0 0 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500', textAlign: 'left' }}>
                    {apt.type}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                    <button
                      onClick={() => handleReschedule(apt.id)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        backgroundColor: '#f3f4f6',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#0f8987',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <RotateCcw size={14} />
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleCancel(apt.id)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        backgroundColor: '#fee2e2',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#ef4444',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <XCircle size={14} />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Appointment History */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2d4a4a' }}>
            Appointment History
          </h3>

          {/* Date Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Filter size={18} color="#6b7280" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>From:</span>
              <input
                type="date"
                value={filterFromDate}
                onChange={(e) => setFilterFromDate(e.target.value)}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#2d4a4a',
                  cursor: 'pointer'
                }}
              />
              <span style={{ fontSize: '14px', color: '#6b7280' }}>To:</span>
              <input
                type="date"
                value={filterToDate}
                onChange={(e) => setFilterToDate(e.target.value)}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#2d4a4a',
                  cursor: 'pointer'
                }}
              />
              {(filterFromDate || filterToDate) && (
                <button
                  onClick={() => {
                    setFilterFromDate('');
                    setFilterToDate('');
                  }}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#f3f4f6',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: '#6b7280',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Therapist
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Date & Time
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Type
                </th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Status
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Prescription
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((apt) => {
                const statusColor = getStatusColor(apt.status);
                
                return (
                  <tr key={apt.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '2px' }}>
                        {apt.therapist}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>
                        {apt.specialty}
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontSize: '14px', color: '#2d4a4a', marginBottom: '2px' }}>
                        {new Date(apt.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>
                        {apt.time}
                      </div>
                    </td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#6b7280' }}>
                      {apt.type}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          backgroundColor: statusColor.bg,
                          color: statusColor.text,
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '13px', color: '#6b7280', maxWidth: '300px' }}>
                      {apt.prescription}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Modal - Matching RegisterAppointmentPage Design */}
      {showBookingModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setShowBookingModal(false)}
        >
          <div
            style={{
              backgroundColor: 'rgb(222, 232, 222)',
              borderRadius: '16px',
              maxWidth: '1100px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBookingModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={20} color="rgb(26, 51, 51)" />
            </button>

            <div style={{ padding: '60px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                
                {/* Heading & Branding */}
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
                      SCHEDULE WITH EASE
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
                      fontSize: '36px',
                      marginBottom: '32px'
                    }}
                  >
                    Register<br />
                    <span style={{ color: '#0f8987', fontFamily: 'Georgia, "Times New Roman", serif' }}>Appointment</span>
                  </h2>
                </div>

                {/* Form */}
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
                        paddingBottom: '8px',
                        color: 'rgb(26, 51, 51)',
                        fontSize: '16px',
                        border: 'none',
                        borderBottom: '1px solid rgba(26, 51, 51, 0.3)'
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
                          paddingBottom: '8px',
                          paddingRight: '30px',
                          color: formData.service ? 'rgb(26, 51, 51)' : 'rgba(26, 51, 51, 0.5)',
                          fontSize: '15px',
                          border: 'none',
                          borderBottom: '1px solid rgba(26, 51, 51, 0.3)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderBottomColor = '#33a9b1';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                        }}
                      >
                        <option value="">Type of Services*</option>
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

                    <div style={{ display: 'flex', alignItems: 'end', gap: '12px' }}>
                      <span 
                        style={{ 
                          color: 'rgb(26, 51, 51)',
                          fontSize: '15px',
                          whiteSpace: 'nowrap',
                          marginBottom: '8px'
                        }}
                      >
                        Email:
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-Mail Address*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          flex: 1,
                          backgroundColor: 'transparent',
                          outline: 'none',
                          borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                          paddingBottom: '8px',
                          color: 'rgb(26, 51, 51)',
                          fontSize: '15px',
                          border: 'none',
                          borderBottom: '1px solid rgba(26, 51, 51, 0.3)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderBottomColor = '#33a9b1';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 3: Date and Staff */}
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
                        borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                        paddingBottom: '8px',
                        color: formData.date ? 'rgb(26, 51, 51)' : 'rgba(26, 51, 51, 0.5)',
                        fontSize: '15px',
                        cursor: 'pointer',
                        border: 'none',
                        borderBottom: '1px solid rgba(26, 51, 51, 0.3)'
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
                      And Preferred Staff Is
                    </span>
                  </div>

                  {/* Row 4: Staff Selection */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: '16px' }}>
                    <div style={{ position: 'relative', flexShrink: 0, width: '200px' }}>
                      <select
                        name="staff"
                        value={formData.staff}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          backgroundColor: 'transparent',
                          outline: 'none',
                          appearance: 'none',
                          cursor: 'pointer',
                          borderBottom: '1px solid rgba(26, 51, 51, 0.3)',
                          paddingBottom: '8px',
                          paddingRight: '30px',
                          color: formData.staff ? 'rgb(26, 51, 51)' : 'rgba(26, 51, 51, 0.5)',
                          fontSize: '15px',
                          border: 'none',
                          borderBottom: '1px solid rgba(26, 51, 51, 0.3)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderBottomColor = '#33a9b1';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderBottomColor = 'rgba(26, 51, 51, 0.3)';
                        }}
                      >
                        <option value="">Select Staff*</option>
                        <option value="dr-rohan">Dr. Rohan Khanna - Physiotherapist</option>
                        <option value="dr-priya">Dr. Priya Sharma - Sports Therapist</option>
                        <option value="dr-anil">Dr. Anil Kumar - Orthopedic Specialist</option>
                        <option value="dr-sneha">Dr. Sneha Reddy - Rehabilitation Expert</option>
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
                    <span 
                      style={{ 
                        color: 'rgb(26, 51, 51)',
                        fontSize: '15px',
                        whiteSpace: 'nowrap',
                        marginBottom: '8px'
                      }}
                    >
                      To Begin Healing!
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div style={{ paddingTop: '16px' }}>
                    <style>{`
                      .schedule-btn-arrow::after {
                        content: "→";
                        font-family: "wdt-ext";
                        position: absolute;
                        right: 8px;
                        top: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 20px;
                        font-weight: bold;
                        transition: all 0.3s ease;
                        text-indent: 0;
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        background-color: white;
                        color: #33a9b1;
                        transform: translateY(-50%) rotate(0deg);
                      }

                      .schedule-btn-arrow:hover::after {
                        transform: translateY(-50%) rotate(-45deg);
                        background-color: #33a9b1;
                        color: white;
                      }
                    `}</style>
                    <button
                      type="submit"
                      className="schedule-btn-arrow"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '60px',
                        backgroundColor: isButtonHovered ? 'white' : '#33a9b1',
                        border: isButtonHovered ? '2px solid #33a9b1' : 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: isButtonHovered ? '#33a9b1' : 'white',
                        letterSpacing: '0.5px',
                        textIndent: 0,
                        paddingRight: '60px',
                        overflow: 'hidden',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(51, 169, 177, 0.3)';
                        setIsButtonHovered(true);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        setIsButtonHovered(false);
                      }}
                    >
                      <span style={{ paddingLeft: '32px', textIndent: 0 }}>Schedule Your Visit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}