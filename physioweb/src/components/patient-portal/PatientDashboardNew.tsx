import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  Clock, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { AppointmentBookingForm } from './AppointmentBookingForm';

interface DashboardProps {
  onNavigate: (tab: 'dashboard' | 'appointments' | 'billing' | 'communication' | 'feedback' | 'profile') => void;
}

export function PatientDashboard({ onNavigate }: DashboardProps) {
  const [showBookingForm, setShowBookingForm] = React.useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = React.useState<any>(null);
  const [appointmentDate, setAppointmentDate] = React.useState('');
  const [appointmentTime, setAppointmentTime] = React.useState('');
  const [reason, setReason] = React.useState('');

  const specialists = [
    {
      id: 1,
      name: 'Dr. Rohan Khanna',
      speciality: 'Physiotherapist',
      experience: '10+ Years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      speciality: 'Sports Therapist',
      experience: '8+ Years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Dr. Anil Kumar',
      speciality: 'Orthopedic Specialist',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Dr. Sneha Reddy',
      speciality: 'Rehabilitation Expert',
      experience: '7+ Years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    }
  ];

  const stats = [
    {
      title: 'Upcoming Appointments',
      value: '3',
      icon: Calendar,
      color: '#0f8987',
      bgColor: '#e6f7f7'
    },
    {
      title: 'Pending Payments',
      value: '₹2,500',
      icon: CreditCard,
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      title: 'Sessions Completed',
      value: '12',
      icon: CheckCircle,
      color: '#10b981',
      bgColor: '#d1fae5'
    }
  ];

  const recentAppointments = [
    {
      id: 1,
      therapist: 'Dr. Rohan Khanna',
      type: 'Follow-up',
      date: '2025-02-08',
      time: '10:00 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      therapist: 'Dr. Priya Sharma',
      type: 'New Consultation',
      date: '2025-02-12',
      time: '2:30 PM',
      status: 'Pending'
    },
    {
      id: 3,
      therapist: 'Dr. Rohan Khanna',
      type: 'Follow-up',
      date: '2025-02-15',
      time: '11:00 AM',
      status: 'Confirmed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return { bg: '#d1fae5', text: '#10b981' };
      case 'Pending':
        return { bg: '#fef3c7', text: '#f59e0b' };
      case 'Completed':
        return { bg: '#dbeafe', text: '#3b82f6' };
      case 'Cancelled':
        return { bg: '#fee2e2', text: '#ef4444' };
      default:
        return { bg: '#f3f4f6', text: '#6b7280' };
    }
  };

  const handleBookAppointment = (specialist: any) => {
    setSelectedSpecialist(specialist);
    setShowBookingForm(true);
  };

  const handleSubmitBooking = (formData: any) => {
    // Here you would typically save the appointment
    alert(`Appointment booked with ${selectedSpecialist.name} on ${formData.date} at ${formData.time}. Service: ${formData.service}`);
    setShowBookingForm(false);
    setSelectedSpecialist(null);
  };

  return (
    <div>
      {/* Stats Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Icon */}
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: stat.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Icon size={24} color={stat.color} strokeWidth={2} />
              </div>
              
              {/* Value and Title */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
                  {stat.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '32px' }}>
        {/* Recent Appointments */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f0f0f0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2d4a4a' }}>
              Upcoming Appointments
            </h3>
            <button
              onClick={() => onNavigate('appointments')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f3f4f6',
                border: 'none',
                borderRadius: '8px',
                color: '#0f8987',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              View All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentAppointments.map((apt) => {
              const statusColor = getStatusColor(apt.status);
              return (
                <div
                  key={apt.id}
                  style={{
                    padding: '20px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px'
                  }}
                >
                  {/* Left: Doctor Name and Specialization */}
                  <div style={{ flex: '0 0 200px' }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                      {apt.therapist}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6b7280' }}>
                      Physiotherapist
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

                  {/* Right: Type and Status (one below one) */}
                  <div style={{ flex: '0 0 150px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                    <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
                      {apt.type}
                    </span>
                    <span
                      style={{
                        padding: '6px 14px',
                        backgroundColor: statusColor.bg,
                        color: statusColor.text,
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Book Appointment with Our Specialists */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2d4a4a', marginBottom: '20px' }}>
          Book Appointment with Our Specialists
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              onClick={() => handleBookAppointment(specialist)}
              style={{
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#0f8987';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <img 
                  src={specialist.image} 
                  alt={specialist.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                    {specialist.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '2px' }}>
                    {specialist.speciality}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                    {specialist.experience}
                  </div>
                </div>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '10px',
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
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <AppointmentBookingForm
          specialist={selectedSpecialist}
          onClose={() => {
            setShowBookingForm(false);
            setSelectedSpecialist(null);
          }}
          onSubmit={handleSubmitBooking}
        />
      )}
    </div>
  );
}