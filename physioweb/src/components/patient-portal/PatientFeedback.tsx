import React, { useState } from 'react';
import { Star, Send, CheckCircle, Clock, Edit2 } from 'lucide-react';

export function PatientFeedback() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  const [feedbackData, setFeedbackData] = useState({
    appointmentId: '101',
    therapistRating: 0,
    clinicRating: 0,
    comments: '',
    anonymous: false
  });
  const [hoveredTherapistStar, setHoveredTherapistStar] = useState(0);
  const [hoveredClinicStar, setHoveredClinicStar] = useState(0);

  const completedSessions = [
    {
      id: 101,
      therapist: 'Dr. Rohan Khanna',
      date: '2025-01-25',
      service: 'Back Pain Treatment',
      canReview: true
    },
    {
      id: 102,
      therapist: 'Dr. Priya Sharma',
      date: '2025-01-18',
      service: 'Sports Rehabilitation',
      canReview: true
    },
    {
      id: 103,
      therapist: 'Dr. Amit Patel',
      date: '2025-01-10',
      service: 'Initial Assessment',
      canReview: false
    }
  ];

  const previousFeedback = [
    {
      id: 1,
      appointmentId: 103,
      therapist: 'Dr. Amit Patel',
      therapistRating: 5,
      clinicRating: 5,
      comments: 'Excellent service! Very professional and knowledgeable. The treatment plan was effective.',
      submittedDate: '2025-01-11',
      canEdit: false
    },
    {
      id: 2,
      appointmentId: 95,
      therapist: 'Dr. Sarah Johnson',
      therapistRating: 4,
      clinicRating: 4,
      comments: 'Good experience overall. The therapist was attentive and explained everything clearly.',
      submittedDate: '2024-12-20',
      canEdit: false
    },
    {
      id: 3,
      appointmentId: 88,
      therapist: 'Dr. Rohan Khanna',
      therapistRating: 5,
      clinicRating: 5,
      comments: 'Outstanding treatment! I saw significant improvement after just a few sessions. Highly recommend!',
      submittedDate: '2024-12-05',
      canEdit: false
    }
  ];

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackData.therapistRating === 0 || feedbackData.clinicRating === 0) {
      alert('Please provide ratings for both therapist and clinic.');
      return;
    }
    alert('Thank you for your feedback! Your review helps us improve our services.');
    setShowFeedbackForm(false);
    setFeedbackData({
      appointmentId: '',
      therapistRating: 0,
      clinicRating: 0,
      comments: '',
      anonymous: false
    });
  };

  const renderStars = (rating: number, hovered: number, onHover: (val: number) => void, onClick: (val: number) => void, readonly = false) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={readonly}
            onMouseEnter={() => !readonly && onHover(star)}
            onMouseLeave={() => !readonly && onHover(0)}
            onClick={() => !readonly && onClick(star)}
            style={{
              background: 'none',
              border: 'none',
              cursor: readonly ? 'default' : 'pointer',
              padding: '2px'
            }}
          >
            <Star
              size={28}
              fill={star <= (hovered || rating) ? '#f59e0b' : 'none'}
              color={star <= (hovered || rating) ? '#f59e0b' : '#d1d5db'}
              style={{ transition: 'all 0.2s' }}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
          Feedback & Reviews
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Help us improve by sharing your experience
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', height: 'calc(100vh - 240px)' }}>
        {/* Left Column: Recent Sessions & Previous Reviews */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Submit New Feedback Section */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a', marginBottom: '12px' }}>
              Rate Your Recent Sessions
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {completedSessions.filter(s => s.canReview).map((session) => (
                <div
                  key={session.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '2px' }}>
                      {session.therapist}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>
                      {session.service} • {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setFeedbackData({ ...feedbackData, appointmentId: session.id.toString() });
                      setShowFeedbackForm(true);
                    }}
                    style={{
                      padding: '6px 16px',
                      backgroundColor: '#0f8987',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#33a9b1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0f8987';
                    }}
                  >
                    <Star size={14} />
                    Rate
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Reviews */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a', marginBottom: '12px' }}>
              Your Previous Reviews ({previousFeedback.length})
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {previousFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '2px' }}>
                        {feedback.therapist}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>
                        Submitted on {new Date(feedback.submittedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                    {feedback.canEdit && (
                      <button
                        style={{
                          padding: '4px 10px',
                          backgroundColor: '#f3f4f6',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#0f8987',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Edit2 size={12} />
                        Edit
                      </button>
                    )}
                  </div>

                  <div style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                      Therapist Rating
                    </div>
                    {renderStars(feedback.therapistRating, 0, () => {}, () => {}, true)}
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                      Clinic Rating
                    </div>
                    {renderStars(feedback.clinicRating, 0, () => {}, () => {}, true)}
                  </div>

                  {feedback.comments && (
                    <div
                      style={{
                        padding: '12px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        borderLeft: '3px solid #0f8987'
                      }}
                    >
                      <p style={{ fontSize: '13px', color: '#2d4a4a', lineHeight: '1.5' }}>
                        "{feedback.comments}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Info Banner */}
          <div
            style={{
              padding: '16px',
              backgroundColor: '#c1f5f1',
              borderRadius: '12px',
              border: '2px solid #0f8987'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
              <CheckCircle size={20} color="#0f8987" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d4a4a', marginBottom: '2px' }}>
                  Your feedback matters!
                </div>
                <div style={{ fontSize: '13px', color: '#2d4a4a', lineHeight: '1.5' }}>
                  You can edit your feedback within 24 hours of submission. All reviews are moderated to ensure quality and authenticity.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Feedback Form */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {showFeedbackForm ? (
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                height: '100%',
                overflow: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a' }}>
                  Submit Your Feedback
                </h3>
                <button
                  onClick={() => setShowFeedbackForm(false)}
                  style={{
                    padding: '4px 12px',
                    backgroundColor: '#f3f4f6',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#6b7280',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSubmitFeedback} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#2d4a4a', marginBottom: '6px' }}>
                    Select Session <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <select
                    value={feedbackData.appointmentId}
                    onChange={(e) => setFeedbackData({ ...feedbackData, appointmentId: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="">Choose a session to review</option>
                    {completedSessions.filter(s => s.canReview).map((session) => (
                      <option key={session.id} value={session.id}>
                        {session.therapist} - {session.service} ({new Date(session.date).toLocaleDateString()})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                    Rate Your Therapist <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  {renderStars(
                    feedbackData.therapistRating,
                    hoveredTherapistStar,
                    setHoveredTherapistStar,
                    (rating) => setFeedbackData({ ...feedbackData, therapistRating: rating })
                  )}
                  <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>
                    {feedbackData.therapistRating > 0 
                      ? `${feedbackData.therapistRating} star${feedbackData.therapistRating > 1 ? 's' : ''} - ${
                          feedbackData.therapistRating === 5 ? 'Excellent' :
                          feedbackData.therapistRating === 4 ? 'Very Good' :
                          feedbackData.therapistRating === 3 ? 'Good' :
                          feedbackData.therapistRating === 2 ? 'Fair' : 'Poor'
                        }`
                      : 'Click on the stars to rate'
                    }
                  </p>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                    Rate Our Clinic <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  {renderStars(
                    feedbackData.clinicRating,
                    hoveredClinicStar,
                    setHoveredClinicStar,
                    (rating) => setFeedbackData({ ...feedbackData, clinicRating: rating })
                  )}
                  <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>
                    {feedbackData.clinicRating > 0 
                      ? `${feedbackData.clinicRating} star${feedbackData.clinicRating > 1 ? 's' : ''} - ${
                          feedbackData.clinicRating === 5 ? 'Excellent' :
                          feedbackData.clinicRating === 4 ? 'Very Good' :
                          feedbackData.clinicRating === 3 ? 'Good' :
                          feedbackData.clinicRating === 2 ? 'Fair' : 'Poor'
                        }`
                      : 'Click on the stars to rate'
                    }
                  </p>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#2d4a4a', marginBottom: '6px' }}>
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    value={feedbackData.comments}
                    onChange={(e) => setFeedbackData({ ...feedbackData, comments: e.target.value })}
                    rows={3}
                    placeholder="Share your experience, suggestions, or any concerns..."
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      padding: '10px',
                      backgroundColor: '#f9fafb',
                      borderRadius: '8px'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={feedbackData.anonymous}
                      onChange={(e) => setFeedbackData({ ...feedbackData, anonymous: e.target.checked })}
                      style={{
                        width: '16px',
                        height: '16px',
                        cursor: 'pointer'
                      }}
                    />
                    <span style={{ fontSize: '13px', color: '#2d4a4a' }}>
                      Submit feedback anonymously to staff
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '12px',
                    backgroundColor: '#0f8987',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '15px',
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
                  <Send size={16} />
                  Submit Feedback
                </button>
              </form>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '40px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <Star size={48} color="#d1d5db" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                Select a Session to Rate
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>
                Click on "Rate" button next to any recent session to share your feedback
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}