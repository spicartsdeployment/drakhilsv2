import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Activity,
  FileText,
  ArrowRight,
  X,
  User
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (tab: 'dashboard' | 'appointments' | 'billing' | 'communication' | 'feedback' | 'profile') => void;
}

export function PatientDashboard({ onNavigate }: DashboardProps) {
  const [showBookingForm, setShowBookingForm] = React.useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = React.useState<any>(null);

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
      completed: 2,
      total: 3,
      percentage: 67,
      icon: Calendar,
      color: '#0f8987',
      bgColor: '#f0f9ff'
    },
    {
      title: 'Pending Payments',
      value: '₹2,500',
      completed: 1,
      total: 2,
      percentage: 50,
      icon: CreditCard,
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      title: 'Sessions Completed',
      value: '12',
      completed: 12,
      total: 15,
      percentage: 80,
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

  const quickActions = [
    {
      title: 'Book Appointment',
      description: 'Schedule your next session',
      icon: Calendar,
      color: '#0f8987',
      action: () => onNavigate('appointments')
    },
    {
      title: 'Pay Bills',
      description: 'Clear pending payments',
      icon: CreditCard,
      color: '#f59e0b',
      action: () => onNavigate('billing')
    },
    {
      title: 'Contact Support',
      description: 'Get help from our team',
      icon: FileText,
      color: '#6366f1',
      action: () => onNavigate('communication')
    },
    {
      title: 'Give Feedback',
      description: 'Share your experience',
      icon: Activity,
      color: '#ec4899',
      action: () => onNavigate('feedback')
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
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1' }}>
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
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
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
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentAppointments.map((apt) => {
              const statusColor = getStatusColor(apt.status);
              return (
                <div
                  key={apt.id}
                  style={{
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                        {apt.therapist}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>
                        {apt.type}
                      </div>
                    </div>
                    <span
                      style={{
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
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#6b7280' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      {new Date(apt.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      {apt.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div
        style={{
          backgroundColor: '#c1f5f1',
          borderRadius: '12px',
          padding: '24px',
          border: '2px solid #0f8987'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#0f8987',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <AlertCircle size={24} color="white" />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
              Today's Health Tip
            </h3>
            <p style={{ fontSize: '14px', color: '#2d4a4a', lineHeight: '1.6' }}>
              Remember to do your prescribed stretching exercises 3 times today. Consistency is key to faster recovery. 
              Stay hydrated and avoid prolonged sitting. Your next session is in 3 days!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}