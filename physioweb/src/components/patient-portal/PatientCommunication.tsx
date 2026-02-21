import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle, Clock, AlertCircle, Bell, X, Bot } from 'lucide-react';

export function PatientCommunication() {
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(1);
  const [chatMessage, setChatMessage] = useState('');
  const [newTicket, setNewTicket] = useState({
    category: '',
    subject: '',
    message: ''
  });

  const supportTickets = [
    {
      id: 1,
      ticketNumber: 'TKT-2025-0045',
      category: 'Appointment',
      subject: 'Need to reschedule my session',
      message: 'I need to reschedule my appointment on Feb 8th to a later date. Please advise available slots.',
      status: 'Open',
      createdAt: '2025-02-03',
      lastUpdated: '2025-02-03',
      replies: [
        {
          from: 'Support Team',
          message: 'Hello! We can help you with that. What dates work best for you?',
          timestamp: '2025-02-03 11:30 AM',
          isStaff: true
        }
      ]
    },
    {
      id: 2,
      ticketNumber: 'TKT-2025-0042',
      category: 'Billing',
      subject: 'Question about invoice',
      message: 'I have a question regarding invoice INV-2025-0234. Can you provide a breakdown?',
      status: 'In Progress',
      createdAt: '2025-02-01',
      lastUpdated: '2025-02-02',
      replies: [
        {
          from: 'Support Team',
          message: 'We have forwarded your query to our billing department. They will respond within 24 hours.',
          timestamp: '2025-02-02 2:15 PM',
          isStaff: true
        }
      ]
    },
    {
      id: 3,
      ticketNumber: 'TKT-2025-0038',
      category: 'Treatment',
      subject: 'Exercise clarification needed',
      message: 'Can you clarify the correct form for the shoulder exercise prescribed?',
      status: 'Resolved',
      createdAt: '2025-01-28',
      lastUpdated: '2025-01-29',
      replies: [
        {
          from: 'Dr. Rohan Khanna',
          message: 'I have sent you a video demonstrating the correct form via email. Please check and let me know if you need more guidance.',
          timestamp: '2025-01-29 10:00 AM',
          isStaff: true
        },
        {
          from: 'You',
          message: 'Thank you! The video was very helpful.',
          timestamp: '2025-01-29 3:45 PM',
          isStaff: false
        }
      ]
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Rohan Khanna is scheduled for tomorrow at 10:00 AM',
      timestamp: '2025-02-03 9:00 AM',
      read: false
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Due',
      message: 'Invoice INV-2025-0234 (₹1,500) is due on Feb 10, 2025',
      timestamp: '2025-02-03 8:00 AM',
      read: false
    },
    {
      id: 3,
      type: 'treatment',
      title: 'Exercise Reminder',
      message: 'Don\'t forget to complete your daily stretching exercises',
      timestamp: '2025-02-03 7:00 AM',
      read: true
    },
    {
      id: 4,
      type: 'appointment',
      title: 'Appointment Confirmed',
      message: 'Your appointment for Feb 12 at 2:30 PM has been confirmed',
      timestamp: '2025-02-02 4:30 PM',
      read: true
    },
    {
      id: 5,
      type: 'general',
      title: 'New Health Tip',
      message: 'Staying hydrated is crucial for faster recovery. Aim for 8 glasses of water daily.',
      timestamp: '2025-02-02 10:00 AM',
      read: true
    }
  ];

  const categories = [
    { value: 'appointment', label: 'Appointment' },
    { value: 'billing', label: 'Billing' },
    { value: 'treatment', label: 'Treatment' },
    { value: 'technical', label: 'Technical' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return { bg: '#fef3c7', text: '#f59e0b', icon: AlertCircle };
      case 'In Progress':
        return { bg: '#dbeafe', text: '#3b82f6', icon: Clock };
      case 'Resolved':
        return { bg: '#d1fae5', text: '#10b981', icon: CheckCircle };
      default:
        return { bg: '#f3f4f6', text: '#6b7280', icon: AlertCircle };
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return '📅';
      case 'payment':
        return '💳';
      case 'treatment':
        return '💊';
      default:
        return '📢';
    }
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Support ticket submitted successfully! Our team will respond within 24 hours.');
    setShowNewTicketModal(false);
    setNewTicket({ category: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Action Header */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
        <button
          onClick={() => setShowNewTicketModal(true)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0f8987',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#33a9b1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0f8987';
          }}
        >
          <MessageSquare size={16} />
          Raise New Query
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px', height: 'calc(100vh - 190px)' }}>
        {/* Support Tickets List */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            overflow: 'auto',
            height: '100%',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {supportTickets.map((ticket, index) => {
            const statusColor = getStatusColor(ticket.status);
            const StatusIcon = statusColor.icon;
            const isSelected = selectedTicketId === ticket.id;
            
            return (
              <div
                key={ticket.id}
                onClick={() => setSelectedTicketId(ticket.id)}
                style={{
                  padding: '16px',
                  borderBottom: index < supportTickets.length - 1 ? '1px solid #e5e7eb' : 'none',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#f0f9ff' : 'white',
                  borderLeft: isSelected ? '3px solid #0f8987' : '3px solid transparent',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <span
                        style={{
                          padding: '2px 8px',
                          backgroundColor: '#f3f4f6',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: '600',
                          color: '#6b7280',
                          textTransform: 'uppercase'
                        }}
                      >
                        {ticket.category}
                      </span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a' }}>
                      {ticket.subject}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0,
                      marginLeft: '8px'
                    }}
                  >
                    <StatusIcon size={12} color={statusColor.text} />
                    <span style={{ fontSize: '11px', fontWeight: '600', color: statusColor.text, whiteSpace: 'nowrap' }}>
                      {ticket.status}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                  {ticket.ticketNumber}
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat Assistant */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid rgb(229, 231, 235)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: '10px 16px',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#f9fafb',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#c1f5f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Bot size={20} color="#0f8987" />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a' }}>
                Support Assistant
              </div>
              <div style={{ fontSize: '11px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                Online
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
            className="hide-scrollbar"
          >
            {/* Assistant Message */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Bot size={18} color="#0f8987" />
              </div>
              <div
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  maxWidth: '80%',
                  fontSize: '14px',
                  color: '#2d4a4a',
                  lineHeight: '1.5'
                }}
              >
                Hello! I'm your support assistant. How can I help you today? You can ask me about appointments, billing, treatments, or any other queries.
              </div>
            </div>

            {selectedTicketId && supportTickets.find(t => t.id === selectedTicketId) && (() => {
              const selectedTicket = supportTickets.find(t => t.id === selectedTicketId)!;
              return (
                <>
                  {/* User's initial message */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <div
                      style={{
                        backgroundColor: '#0f8987',
                        color: 'white',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        maxWidth: '80%',
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}
                    >
                      {selectedTicket.message}
                    </div>
                  </div>

                  {/* Replies */}
                  {selectedTicket.replies.map((reply, index) => (
                    reply.isStaff ? (
                      <div key={index} style={{ display: 'flex', gap: '8px' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#c1f5f1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Bot size={18} color="#0f8987" />
                        </div>
                        <div
                          style={{
                            backgroundColor: '#f9fafb',
                            borderRadius: '12px',
                            padding: '12px 16px',
                            maxWidth: '80%',
                            fontSize: '14px',
                            color: '#2d4a4a',
                            lineHeight: '1.5'
                          }}
                        >
                          {reply.message}
                          <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>
                            {reply.timestamp}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div key={index} style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <div
                          style={{
                            backgroundColor: '#0f8987',
                            color: 'white',
                            borderRadius: '12px',
                            padding: '12px 16px',
                            maxWidth: '80%',
                            fontSize: '14px',
                            lineHeight: '1.5'
                          }}
                        >
                          {reply.message}
                          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
                            {reply.timestamp}
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </>
              );
            })()}
          </div>

          {/* Chat Input */}
          <div
            style={{
              padding: '12px 16px',
              borderTop: '1px solid #e5e7eb',
              backgroundColor: '#f9fafb'
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (chatMessage.trim()) {
                  alert(`Message sent: ${chatMessage}`);
                  setChatMessage('');
                }
              }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '24px',
                  fontSize: '14px',
                  outline: 'none',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0f8987';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                }}
              />
              <button
                type="submit"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#0f8987',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#33a9b1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0f8987';
                }}
              >
                <Send size={18} color="white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* New Ticket Modal */}
      {showNewTicketModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setShowNewTicketModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d4a4a' }}>
                Raise New Query
              </h3>
              <button
                onClick={() => setShowNewTicketModal(false)}
                style={{
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} color="#2d4a4a" />
              </button>
            </div>

            <form onSubmit={handleSubmitTicket} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                  Category <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  value={newTicket.category}
                  onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                  Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={newTicket.subject}
                  onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                  required
                  placeholder="Brief description of your query"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  value={newTicket.message}
                  onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Provide detailed information about your query..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '15px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '14px',
                  backgroundColor: '#0f8987',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#33a9b1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0f8987';
                }}
              >
                <Send size={18} />
                Submit Query
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}