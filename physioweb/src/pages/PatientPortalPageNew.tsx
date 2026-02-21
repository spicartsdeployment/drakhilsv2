import React, { useState, useEffect } from 'react';
import { useNavigate } from '../App';
import {
  LayoutDashboard,
  Calendar,
  CreditCard,
  MessageSquare,
  Star,
  User,
  LogOut,
  Bell,
  ChevronDown,
  Settings
} from 'lucide-react';
import { PatientDashboard } from '../components/patient-portal/PatientDashboardNew';
import { PatientAppointments } from '../components/patient-portal/PatientAppointments';
import { PatientBilling } from '../components/patient-portal/PatientBilling';
import { PatientCommunication } from '../components/patient-portal/PatientCommunication';
import { PatientFeedback } from '../components/patient-portal/PatientFeedback';
import { PatientProfile } from '../components/patient-portal/PatientProfile';

type TabType = 'dashboard' | 'appointments' | 'billing' | 'communication' | 'feedback' | 'profile';

export default function PatientPortalPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('patientLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('patientLoggedIn');
    localStorage.removeItem('patientEmail');
    navigate('/login');
  };

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments' as TabType, label: 'Consultations', icon: Calendar },
    { id: 'billing' as TabType, label: 'Billing & Payments', icon: CreditCard },
    { id: 'communication' as TabType, label: 'Support & Help', icon: MessageSquare },
    { id: 'feedback' as TabType, label: 'Feedback', icon: Star },
    { id: 'profile' as TabType, label: 'Profile', icon: User }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <PatientDashboard onNavigate={setActiveTab} />;
      case 'appointments':
        return <PatientAppointments />;
      case 'billing':
        return <PatientBilling />;
      case 'communication':
        return <PatientCommunication />;
      case 'feedback':
        return <PatientFeedback />;
      case 'profile':
        return <PatientProfile />;
      default:
        return <PatientDashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f5f7fa', overflow: 'hidden', padding: '16px', paddingBottom: '0' }}>
      {/* Top Bar - Full Width with margins */}
      <header
        style={{
          height: '85px',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          flexShrink: 0,
          borderRadius: '16px',
          marginBottom: '16px'
        }}
      >
        {/* Left side - Logo */}
        <div>
          <img 
            src="https://parent-sort-08084037.figma.site/_assets/v11/fd3b26f01cc866255fba6d6aeee4ad8c7c85e539.png" 
            alt="Dr. AKHIL'S" 
            style={{ height: '42px', width: 'auto' }}
          />
        </div>

        {/* Center - Welcome Text */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '600', color: '#0f8987', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Welcome back, Sarah! 
            <span style={{ fontSize: '24px' }}>👋</span>
          </div>
          <div style={{ fontSize: '13px', color: '#6b7280' }}>
            Here's your wellness dashboard overview
          </div>
        </div>

        {/* Right side - Notifications and Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Notifications */}
          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} color="#6b7280" />
            <span
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                backgroundColor: '#ef4444',
                borderRadius: '50%',
                border: '2px solid white'
              }}
            />

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '48px',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  zIndex: 1000,
                  width: '320px',
                  maxHeight: '400px',
                  overflowY: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>
                    Notifications
                  </h4>
                </div>
                
                <div>
                  {/* Notification Item 1 */}
                  <div
                    style={{
                      padding: '16px',
                      borderBottom: '1px solid #f3f4f6',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#0f8987',
                          marginTop: '6px',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                          Appointment Reminder
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>
                          Your appointment with Dr. Rohan Khanna is scheduled for tomorrow at 10:00 AM
                        </div>
                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                          2 hours ago
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification Item 2 */}
                  <div
                    style={{
                      padding: '16px',
                      borderBottom: '1px solid #f3f4f6',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#0f8987',
                          marginTop: '6px',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                          Payment Confirmation
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>
                          Your payment of ₹2,500 has been received successfully
                        </div>
                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                          5 hours ago
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification Item 3 */}
                  <div
                    style={{
                      padding: '16px',
                      borderBottom: '1px solid #f3f4f6',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#cbd5e1',
                          marginTop: '6px',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                          New Message
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>
                          Dr. Priya Sharma sent you a message regarding your treatment plan
                        </div>
                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                          1 day ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px 16px',
                    borderTop: '1px solid #e5e7eb',
                    textAlign: 'center'
                  }}
                >
                  <button
                    onClick={() => {
                      alert('All notifications removed');
                      setShowNotifications(false);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ef4444',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: '4px 8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#dc2626';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ef4444';
                    }}
                  >
                    Remove All Notifications
                  </button>
                </div>
              </div>
            )}
          </button>

          {/* Profile */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 12px 6px 6px',
              borderRadius: '24px',
              backgroundColor: '#f9fafb',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }}
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#0f8987',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white'
              }}
            >
              SJ
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', lineHeight: '1.2' }}>
                Sarah Johnson
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.2' }}>
                PAT-2024-1001 | Patient
              </div>
            </div>
            <ChevronDown size={16} color="#6b7280" />

            {/* Profile Dropdown */}
            {showProfileDropdown && (
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '52px',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                  minWidth: '180px',
                  padding: '8px'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#dc2626',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderRadius: '6px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fee2e2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area Below Topbar */}
      <div style={{ flex: 1, display: 'flex', gap: '16px', overflow: 'hidden' }}>
        {/* Sidebar */}
        <aside
          style={{
            width: '250px',
            backgroundColor: 'white',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            flexShrink: 0
          }}
        >
          {/* Navigation */}
          <nav style={{ flex: 1, padding: '20px 0', overflowY: 'auto' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 20px',
                    backgroundColor: isActive ? '#e6f7f7' : 'transparent',
                    borderLeft: isActive ? '3px solid #0f8987' : '3px solid transparent',
                    borderTop: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    color: isActive ? '#0f8987' : '#6b7280',
                    fontSize: '14px',
                    fontWeight: isActive ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Body */}
        <main
          style={{
            flex: 1,
            padding: '32px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100%'
          }}
          className="custom-scrollbar"
        >
          {renderContent()}
        </main>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}