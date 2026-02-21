import React, { useState } from 'react';
import { Activity, Calendar, Smartphone, Heart, ClipboardList, User, Wifi } from 'lucide-react';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';

interface FAQItem {
  icon: React.ReactNode;
  question: string;
  answer: string;
}

export function FAQPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'pricing' | 'treatments'>('general');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Add Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const generalFAQs: FAQItem[] = [
    {
      icon: <ClipboardList size={32} />,
      question: 'What Conditions Can Physiotherapy Treat?',
      answer: 'Physiotherapy Helps With Back Pain, Sports Injuries, Arthritis, Post-Surgery Rehab, And Neurological Conditions. It Improves Strength, Flexibility, And Mobility.'
    },
    {
      icon: <Wifi size={32} />,
      question: 'Are Telehealth Sessions Available?',
      answer: 'Yes, We Offer Virtual Consultations And Exercise Guidance For Patients Unable To Visit In Person. A Great Option For Follow-Ups Or Minor Concerns.'
    },
    {
      icon: <Calendar size={32} />,
      question: 'Weekend Appointments Available?',
      answer: 'Yes, We Provide Flexible Weekend Hours To Fit Your Schedule. Availability May Vary By Location. Call Or Book Online To Secure Your Preferred Time.'
    },
    {
      icon: <Activity size={32} />,
      question: 'Can Physiotherapy Help After Surgery?',
      answer: 'Yes, Post-Surgical Rehab Is One Of Our Specialties. We Focus On Regaining Strength, Mobility, Function While Minimizing Pain, Swelling Throughout Recovery.'
    },
    {
      icon: <ClipboardList size={32} />,
      question: 'What Should I Wear To A Session?',
      answer: 'Put On Loose-Fitting, Comfortable Clothes That Don\'t Restrict Movement. It Could Be Necessary To Expose The Treated Region.'
    },
    {
      icon: <User size={32} />,
      question: 'Is Physiotherapy Covered By Insurance?',
      answer: 'Physiotherapy Is Often Covered By Health Insurance Policies. The Best Way To Find Out Specific Coverage Details Is To Contact Your Provider.'
    }
  ];

  const pricingFAQs: FAQItem[] = [
    {
      icon: <User size={32} />,
      question: 'Is Physiotherapy Covered By Insurance?',
      answer: 'Physiotherapy Is Often Covered By Health Insurance Policies. The Best Way To Find Out Specific Coverage Details Is To Contact Your Provider.'
    },
    {
      icon: <Calendar size={32} />,
      question: 'Weekend Appointments Available?',
      answer: 'Yes, We Provide Flexible Weekend Hours To Fit Your Schedule. Availability May Vary By Location. Call Or Book Online To Secure Your Preferred Time.'
    },
    {
      icon: <ClipboardList size={32} />,
      question: 'What Should I Wear To A Session?',
      answer: 'Put On Loose-Fitting, Comfortable Clothes That Don\'t Restrict Movement. It Could Be Necessary To Expose The Treated Region.'
    },
    {
      icon: <ClipboardList size={32} />,
      question: 'What Conditions Can Physiotherapy Treat?',
      answer: 'Physiotherapy Helps With Back Pain, Sports Injuries, Arthritis, Post-Surgery Rehab, And Neurological Conditions. It Improves Strength, Flexibility, And Mobility.'
    },
    {
      icon: <Wifi size={32} />,
      question: 'Are Telehealth Sessions Available?',
      answer: 'Yes, We Offer Virtual Consultations And Exercise Guidance For Patients Unable To Visit In Person. A Great Option For Follow-Ups Or Minor Concerns.'
    },
    {
      icon: <Activity size={32} />,
      question: 'Can Physiotherapy Help After Surgery?',
      answer: 'Yes, Post-Surgical Rehab Is One Of Our Specialties. We Focus On Regaining Strength, Mobility, Function While Minimizing Pain, Swelling Throughout Recovery.'
    }
  ];

  const treatmentsFAQs: FAQItem[] = [
    {
      icon: <User size={32} />,
      question: 'Is Physiotherapy Covered By Insurance?',
      answer: 'Physiotherapy Is Often Covered By Health Insurance Policies. The Best Way To Find Out Specific Coverage Details Is To Contact Your Provider.'
    },
    {
      icon: <Calendar size={32} />,
      question: 'Weekend Appointments Available?',
      answer: 'Yes, We Provide Flexible Weekend Hours To Fit Your Schedule. Availability May Vary By Location. Call Or Book Online To Secure Your Preferred Time.'
    },
    {
      icon: <ClipboardList size={32} />,
      question: 'What Should I Wear To A Session?',
      answer: 'Put On Loose-Fitting, Comfortable Clothes That Don\'t Restrict Movement. It Could Be Necessary To Expose The Treated Region.'
    },
    {
      icon: <ClipboardList size={32} />,
      question: 'What Conditions Can Physiotherapy Treat?',
      answer: 'Physiotherapy Helps With Back Pain, Sports Injuries, Arthritis, Post-Surgery Rehab, And Neurological Conditions. It Improves Strength, Flexibility, And Mobility.'
    },
    {
      icon: <Wifi size={32} />,
      question: 'Are Telehealth Sessions Available?',
      answer: 'Yes, We Offer Virtual Consultations And Exercise Guidance For Patients Unable To Visit In Person. A Great Option For Follow-Ups Or Minor Concerns.'
    },
    {
      icon: <Activity size={32} />,
      question: 'Can Physiotherapy Help After Surgery?',
      answer: 'Yes, Post-Surgical Rehab Is One Of Our Specialties. We Focus On Regaining Strength, Mobility, Function While Minimizing Pain, Swelling Throughout Recovery.'
    }
  ];

  const currentFAQs = activeTab === 'general' ? generalFAQs : activeTab === 'pricing' ? pricingFAQs : treatmentsFAQs;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <style>{`
        @media (max-width: 640px) {
          .faq-tab-buttons-container {
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 6px !important;
            width: 100% !important;
            overflow-x: auto !important;
            padding: 4px !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .faq-tab-buttons-container::-webkit-scrollbar {
            display: none !important;
          }
          .faq-tab-button-mobile {
            font-size: 11px !important;
            padding: 10px 10px !important;
            min-width: auto !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section 
        className="relative"
        style={{
          background: 'rgb(31, 61, 63)',
          backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
      >
        {/* Background Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6" style={{ marginTop: '105px' }}>
            <BackButton />
          </div>
          
          {/* Title */}
          <h1 
            className="text-white text-center"
            style={{ 
              letterSpacing: '0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0f8987' }}></div>
              <p style={{ color: '#0f8987', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                TRUSTED CARE SERVICES
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <h2 style={{ fontSize: '42px', lineHeight: '1.2' }}>
                Frequently <span style={{ color: '#0f8987' }}>Asked</span> Question
              </h2>

              {/* Tab Buttons */}
              <div 
                className="flex gap-3 faq-tab-buttons-container"
                style={{
                  border: '1px solid #2d4a4a',
                  borderRadius: '50px',
                  padding: '4px',
                  backgroundColor: 'transparent'
                }}
              >
                <button
                  onClick={() => setActiveTab('general')}
                  className="relative px-6 py-3 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center faq-tab-button-mobile"
                  style={{
                    backgroundColor: activeTab === 'general' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'general' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '120px'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'general') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'general') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'general' && (
                    <span 
                      className="hover-bg"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#2d4a4a',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.5s ease',
                        zIndex: -1,
                        borderRadius: '50px'
                      }}
                    ></span>
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>General</span>
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className="relative px-6 py-3 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center faq-tab-button-mobile"
                  style={{
                    backgroundColor: activeTab === 'pricing' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'pricing' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '120px'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'pricing') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'pricing') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'pricing' && (
                    <span 
                      className="hover-bg"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#2d4a4a',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.5s ease',
                        zIndex: -1,
                        borderRadius: '50px'
                      }}
                    ></span>
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>Pricing And Billing</span>
                </button>
                <button
                  onClick={() => setActiveTab('treatments')}
                  className="relative px-6 py-3 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center faq-tab-button-mobile"
                  style={{
                    backgroundColor: activeTab === 'treatments' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'treatments' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '120px'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'treatments') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'treatments') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'treatments' && (
                    <span 
                      className="hover-bg"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#2d4a4a',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.5s ease',
                        zIndex: -1,
                        borderRadius: '50px'
                      }}
                    ></span>
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>Our Treatments</span>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentFAQs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-300"
                style={{
                  backgroundColor: hoveredCard === index ? '#1f3d3f' : 'rgba(51, 169, 177, 0.2)',
                  border: '1px solid rgba(15, 137, 135, 0.2)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex gap-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: hoveredCard === index ? '#0F8987' : '#2d4a4a',
                      color: 'white'
                    }}
                  >
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="mb-3 transition-colors duration-300" 
                      style={{ 
                        fontFamily: "'Philosopher', serif",
                        fontSize: '22px',
                        fontWeight: '400',
                        lineHeight: '1.4',
                        color: hoveredCard === index ? 'white' : '#2d4a4a'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p 
                      className="transition-colors duration-300"
                      style={{ 
                        fontFamily: "'Poppins', sans-serif",
                        color: hoveredCard === index ? 'rgba(255, 255, 255, 0.9)' : '#5a6c69', 
                        lineHeight: '1.7', 
                        fontSize: '15px',
                        fontWeight: '300'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}