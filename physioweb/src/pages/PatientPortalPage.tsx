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
  Menu,
  X
} from 'lucide-react';
import { PatientDashboard } from '../components/patient-portal/PatientDashboard';
import { PatientAppointments } from '../components/patient-portal/PatientAppointments';
import { PatientBilling } from '../components/patient-portal/PatientBilling';
import { PatientCommunication } from '../components/patient-portal/PatientCommunication';
import { PatientFeedback } from '../components/patient-portal/PatientFeedback';
import { PatientProfile } from '../components/patient-portal/PatientProfile';

type TabType = 'dashboard' | 'appointments' | 'billing' | 'communication' | 'feedback' | 'profile';

export function PatientPortalPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    { id: 'appointments' as TabType, label: 'Appointments', icon: Calendar },
    { id: 'billing' as TabType, label: 'Billing & Payments', icon: CreditCard },
    { id: 'communication' as TabType, label: 'Communication', icon: MessageSquare },
    { id: 'feedback' as TabType, label: 'Feedback & Reviews', icon: Star },
    { id: 'profile' as TabType, label: 'Profile', icon: User }
  ];

  const renderTabContent = () => {
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
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 50,
          display: 'none',
          padding: '8px',
          backgroundColor: '#0f8987',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        className="mobile-menu-btn"
      >
        {sidebarOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .sidebar {
            transform: translateX(${sidebarOpen ? '0' : '-100%'});
            position: fixed !important;
            z-index: 40;
          }
          .main-content {
            padding-left: 0 !important;
          }
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          width: '280px',
          backgroundColor: '#1a4d4d',
          color: 'white',
          padding: '24px 0',
          position: 'fixed',
          height: '100vh',
          overflowY: 'auto',
          transition: 'transform 0.3s ease'
        }}
      >
        {/* Header */}
        <div style={{ padding: '0 24px', marginBottom: '32px' }}>
          <p style={{ fontSize: '16px', marginBottom: '16px', color: '#c1f5f1', fontWeight: '500' }}>
            Welcome, John Doe!
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#0f8987',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '600',
                color: 'white'
              }}
            >
              JD
            </div>
            <div style={{ fontSize: '13px', opacity: 0.9, flex: 1 }}>
              patient@drakhils.com
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSidebarOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 24px',
                  backgroundColor: isActive ? 'rgba(193, 245, 241, 0.15)' : 'transparent',
                  borderLeft: isActive ? '4px solid #c1f5f1' : '4px solid transparent',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  color: 'white',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div style={{ padding: '0 24px', marginTop: 'auto', paddingTop: '32px' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="main-content"
        style={{
          flex: 1,
          paddingLeft: '280px',
          minHeight: '100vh'
        }}
      >
        {/* Top Bar */}
        <div 
          style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            padding: '20px 32px',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '24px', color: '#2d4a4a', marginBottom: '4px' }}>
                {tabs.find(t => t.id === activeTab)?.label}
              </h1>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>
                Welcome back to your patient portal
              </p>
            </div>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px'
              }}
            >
              <User size={20} color="#0f8987" />
              <span style={{ fontSize: '14px', color: '#2d4a4a' }}>
                {localStorage.getItem('patientEmail')}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ padding: '32px' }}>
          {renderTabContent()}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 30,
            display: 'none'
          }}
          className="mobile-overlay"
        />
      )}
      <style>{`
        @media (max-width: 768px) {
          .mobile-overlay {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}