import React, { useState, useRef, useEffect } from 'react';
import { Check, CheckCircle, ArrowRight, Play, X } from 'lucide-react';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import tabCardImage from 'figma:asset/15edbbd6f09c65f963ef0c8380f86dc217a01ecb.png';

export function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('mission');
  const imageRef = useRef<HTMLDivElement>(null);
  const progressSectionRef = useRef<HTMLDivElement>(null);
  const [animateProgress, setAnimateProgress] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [carePercentage, setCarePercentage] = useState(0);
  const [conversationPercentage, setConversationPercentage] = useState(0);
  const [experiencePercentage, setExperiencePercentage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Trigger progress bar animation when section comes into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animateProgress) {
            setTimeout(() => {
              setAnimateProgress(true);
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (progressSectionRef.current) {
      observer.observe(progressSectionRef.current);
    }

    return () => {
      if (progressSectionRef.current) {
        observer.unobserve(progressSectionRef.current);
      }
    };
  }, [animateProgress]);

  // Animate percentage counters
  useEffect(() => {
    if (!animateProgress) return;

    const duration = 1500; // 1.5 seconds
    const frameRate = 60; // 60 FPS
    const totalFrames = (duration / 1000) * frameRate;

    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;

      setCarePercentage(Math.round(93 * progress));
      setConversationPercentage(Math.round(95 * progress));
      setExperiencePercentage(Math.round(96 * progress));

      if (currentFrame >= totalFrames) {
        setCarePercentage(93);
        setConversationPercentage(95);
        setExperiencePercentage(96);
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [animateProgress]);

  // Add Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add keyframe animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideInFromLeft {
        from {
          transform: translateX(-100px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideInFromRight {
        from {
          transform: translateX(100px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes blink {
        0%, 100% {
          opacity: 1;
          box-shadow: 0 0 10px rgba(51, 169, 177, 0.8);
        }
        50% {
          opacity: 0.5;
          box-shadow: 0 0 20px rgba(51, 169, 177, 1);
        }
      }
      
      .holographic-image-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 24px;
      }
      
      .holographic-image-wrapper::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent 20%,
          rgba(193, 245, 241, 0.4) 40%,
          rgba(193, 245, 241, 0.7) 50%,
          rgba(193, 245, 241, 0.4) 60%,
          transparent 80%
        );
        transform: translateX(-100%) translateY(-100%) rotate(-45deg);
        transition: all 3s ease;
        opacity: 0;
        z-index: 2;
        pointer-events: none;
      }
      
      .holographic-image-wrapper:hover::before {
        opacity: 1;
        transform: translateX(100%) translateY(100%) rotate(-45deg);
      }
      
      .polygon-button {
        position: relative;
        clip-path: polygon(
          0% 15%,
          15% 0%,
          85% 0%,
          100% 15%,
          100% 85%,
          85% 100%,
          15% 100%,
          0% 85%
        );
      }
      
      /* Bottom-right curved cut-out effect */
      .image-with-cutout::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 175px;
        height: 60px;
        background-color: rgb(222, 232, 222);
        border-top-left-radius: 35px;
        z-index: 2;
      }

      /* Mobile responsiveness */
      @media (max-width: 767px) {
        /* Fix section heights */
        section[style*="height: 740px"] {
          height: auto !important;
          padding-top: 40px !important;
          padding-bottom: 40px !important;
        }

        /* Fix image wrapper width and height to 450px */
        .holographic-image-wrapper.image-with-cutout {
          width: 100% !important;
          max-width: 100% !important;
          height: 450px !important;
        }

        /* Make Know More button smaller on mobile */
        .holographic-image-wrapper.image-with-cutout button {
          height: 35px !important;
          gap: 8px !important;
          padding-left: 12px !important;
          padding-right: 12px !important;
          border-radius: 12px !important;
        }

        .holographic-image-wrapper.image-with-cutout button span {
          font-size: 12px !important;
        }

        .holographic-image-wrapper.image-with-cutout button .arrow-bg {
          padding: 5px !important;
        }

        .holographic-image-wrapper.image-with-cutout button .arrow-icon {
          width: 14px !important;
          height: 14px !important;
        }

        /* Fix content height */
        .grid.lg\\:grid-cols-2 > div:last-child {
          height: auto !important;
        }

        /* Fix tab container */
        .flex.gap-3.mb-6 {
          flex-direction: column !important;
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Fix tab buttons */
        .flex.gap-3.mb-6 button {
          width: 100% !important;
          justify-content: flex-start !important;
        }

        /* Fix tab content cards */
        .rounded-3xl.overflow-hidden[style*="height: 215px"] {
          height: auto !important;
          flex-direction: column !important;
        }

        .rounded-3xl.overflow-hidden[style*="height: 215px"] > div:first-of-type {
          width: 100% !important;
        }

        .rounded-3xl.overflow-hidden[style*="height: 215px"] > div:first-of-type > div {
          height: 200px !important;
        }

        /* Make tab card images fit properly */
        .rounded-3xl.overflow-hidden[style*="height: 215px"] img {
          object-fit: cover !important;
          width: 100% !important;
          height: 100% !important;
        }

        .rounded-3xl.overflow-hidden[style*="height: 215px"] > div:last-of-type {
          width: 100% !important;
          padding: 20px !important;
        }

        /* Fix stats container */
        .relative[style*="height: 600px"] {
          height: auto !important;
          padding: 40px 0 !important;
        }

        /* Fix stat circles positioning */
        .absolute[style*="width: 200px"][style*="height: 200px"] {
          position: relative !important;
          left: auto !important;
          top: auto !important;
          transform: none !important;
          margin: 20px auto !important;
        }

        /* Fix progress section images */
        .relative[style*="width: 675px"] {
          width: 100% !important;
          min-width: 100% !important;
        }

        .relative[style*="width: 675px"] > div {
          flex-direction: column !important;
        }

        .relative[style*="width: 675px"] > div > div {
          width: 100% !important;
          height: 250px !important;
        }

        /* Fix central badge */
        .absolute[style*="width: 150px"][style*="height: 150px"] {
          position: relative !important;
          left: auto !important;
          top: auto !important;
          transform: none !important;
          margin: -75px auto 0 auto !important;
        }

        /* Fix right content in progress section */
        .flex-1[style*="animation"] {
          width: 100% !important;
        }

        /* Smaller cutout on mobile */
        .image-with-cutout::after {
          width: 135px !important;
          height: 45px !important;
          border-top-left-radius: 20px !important;
        }

        /* Fix titles */
        h2[style*="fontSize: '42px'"] {
          font-size: 28px !important;
        }

        h2[style*="fontSize: '46px'"] {
          font-size: 32px !important;
        }

        h1[style*="marginTop: '105px'"] {
          margin-top: 0 !important;
        }

        /* Fix features grid */
        .grid.grid-cols-2 {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Holographic effect for main image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const overlay = imageRef.current.querySelector('.holographic-overlay') as HTMLElement;
    if (!overlay) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    overlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(193, 245, 241, 0.6), rgba(15, 137, 135, 0.3) 30%, transparent 60%)`;
    overlay.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    
    const overlay = imageRef.current.querySelector('.holographic-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.opacity = '0';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
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
            About Us
          </h1>
        </div>
      </section>

      {/* Commitment to Expert Care Section */}
      <section style={{ backgroundColor: 'rgb(222, 232, 222)', height: '740px', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '100%' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div 
              className="relative"
              style={{
                animation: 'slideInFromLeft 1s ease-out forwards',
                opacity: 0
              }}
            >
              <div 
                className="holographic-image-wrapper image-with-cutout"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)', 
                  width: '605px', 
                  height: '540px'
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1754941622138-b3c3671f2fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwY2xpbmljJTIwbW9kZXJufGVufDF8fHx8MTc2NzEwMzg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Physiotherapy Clinic"
                  className="w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
                
                {/* "Know More" button overlay */}
                <div 
                  className="absolute"
                  style={{ 
                    bottom: '3px',
                    right: '3px',
                    zIndex: 3 
                  }}
                >
                  <button 
                    className="flex items-center transition-all duration-300"
                    style={{
                      backgroundColor: '#33a9b1',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      boxShadow: '0 4px 12px rgba(51, 169, 177, 0.3)',
                      cursor: 'pointer',
                      height: '47px',
                      gap: '13px',
                      paddingLeft: '20px',
                      paddingRight: '20px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1f3d3f';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(31, 61, 63, 0.4)';
                      const arrowBg = e.currentTarget.querySelector('.arrow-bg') as HTMLElement;
                      if (arrowBg) {
                        arrowBg.style.backgroundColor = '#33a9b1';
                      }
                      const arrowIcon = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                      if (arrowIcon) {
                        arrowIcon.style.transform = 'rotate(-45deg)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#33a9b1';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(51, 169, 177, 0.3)';
                      const arrowBg = e.currentTarget.querySelector('.arrow-bg') as HTMLElement;
                      if (arrowBg) {
                        arrowBg.style.backgroundColor = '#1f3d3f';
                      }
                      const arrowIcon = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                      if (arrowIcon) {
                        arrowIcon.style.transform = 'rotate(0deg)';
                      }
                    }}
                  >
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: '500' }}>Know More</span>
                    <div 
                      className="arrow-bg"
                      style={{ 
                        position: 'relative',
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%', 
                        backgroundColor: '#1f3d3f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <span 
                        className="arrow-icon"
                        style={{ 
                          fontFamily: 'Arial, sans-serif',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: 'white',
                          transition: 'transform 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        →
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div 
              style={{ 
                height: '540px', 
                display: 'flex', 
                flexDirection: 'column',
                animation: 'slideInFromRight 1s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0f8987' }}></div>
                <p style={{ 
                  color: '#5a6c69', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px', 
                  fontSize: '13px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '500'
                }}>
                  CARE THAT LASTS
                </p>
              </div>

              {/* Title */}
              <h2 
                style={{ 
                  fontSize: '42px', 
                  lineHeight: '1.2', 
                  marginBottom: '20px',
                  fontFamily: "'Philosopher', serif",
                  fontWeight: '400',
                  color: '#2d4a4a'
                }}
              >
                Commitment To <span style={{ color: '#0f8987' }}>Expert Care</span> And Lasting Recovery
              </h2>

              {/* Description */}
              <p 
                style={{ 
                  color: '#5a6c69', 
                  lineHeight: '1.7', 
                  fontSize: '16px',
                  marginBottom: '30px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '300'
                }}
              >
                Compassion fuels our expertise, and your progress drives our purpose. By working together, we lay the groundwork for a long-term recovery.
              </p>

              {/* Tabs */}
              <div 
                className="flex gap-3 mb-6"
                style={{
                  border: '1px solid #d0e0df',
                  borderRadius: '50px',
                  padding: '6px',
                  backgroundColor: 'white',
                  display: 'inline-flex',
                  maxWidth: 'fit-content'
                }}
              >
                <button
                  onClick={() => setActiveTab('vision')}
                  className="relative px-6 py-3 rounded-full flex items-center gap-2 overflow-hidden"
                  style={{
                    backgroundColor: activeTab === 'vision' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'vision' ? 'white' : '#2d4a4a',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: "'Poppins', sans-serif",
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'vision') {
                      const span = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'vision') {
                      const span = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      e.currentTarget.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'vision' && (
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 1 }}>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span style={{ position: 'relative', zIndex: 1 }}>Our Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className="relative px-6 py-3 rounded-full flex items-center gap-2 overflow-hidden"
                  style={{
                    backgroundColor: activeTab === 'mission' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'mission' ? 'white' : '#2d4a4a',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: "'Poppins', sans-serif",
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'mission') {
                      const span = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'mission') {
                      const span = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      e.currentTarget.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'mission' && (
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 1 }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span style={{ position: 'relative', zIndex: 1 }}>Our Mission</span>
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className="relative px-6 py-3 rounded-full flex items-center gap-2 overflow-hidden"
                  style={{
                    backgroundColor: activeTab === 'values' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'values' ? 'white' : '#2d4a4a',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: "'Poppins', sans-serif",
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'values') {
                      const span = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'values') {
                      const span = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      e.currentTarget.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'values' && (
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 1 }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span style={{ position: 'relative', zIndex: 1 }}>Our Values</span>
                </button>
              </div>

              {/* Tab Content Card */}
              {activeTab === 'vision' && (
                <div 
                  className="rounded-3xl overflow-hidden"
                  style={{
                    height: '215px',
                    display: 'flex',
                    backgroundColor: '#33a9b1',
                    position: 'relative'
                  }}
                >
                  {/* Background Pattern Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/home2-interactive-xray-overlay.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.15,
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* Left: Image */}
                  <div className="w-full lg:w-[35%]" style={{ position: 'relative', zIndex: 1 }}>
                    <div 
                      className="h-full rounded-2xl overflow-hidden"
                      style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '215px'
                      }}
                    >
                      <img
                        src={tabCardImage}
                        alt="Physiotherapy Care"
                        className="w-full h-full"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div 
                    className="w-full lg:w-[65%]"
                    style={{ 
                      position: 'relative',
                      padding: '24px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      zIndex: 1
                    }}
                  >
                    <p 
                      style={{ 
                        color: 'white', 
                        lineHeight: '1.65', 
                        fontSize: '15px',
                        marginBottom: '16px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '400'
                      }}
                    >
                      Physiotherapists are quiet experts, guiding recovery through movement, relieving pain every step of way.
                    </p>

                    {/* Horizontal Line */}
                    <div 
                      style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'white',
                        opacity: 0.5,
                        marginBottom: '16px'
                      }}
                    />

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Guided Recovery
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Restored Strength
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Functional Relief
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Improved Mobility
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div 
                  className="rounded-3xl overflow-hidden"
                  style={{
                    height: '215px',
                    display: 'flex',
                    backgroundColor: '#33a9b1',
                    position: 'relative'
                  }}
                >
                  {/* Background Pattern Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/home2-interactive-xray-overlay.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.15,
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* Left: Image */}
                  <div className="w-full lg:w-[35%]" style={{ position: 'relative', zIndex: 1 }}>
                    <div 
                      className="h-full rounded-2xl overflow-hidden"
                      style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '215px'
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1645005512968-0c1fe99f0093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5fGVufDF8fHx8MTc2OTE0NzU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Physiotherapy Care"
                        className="w-full h-full"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div 
                    className="w-full lg:w-[65%]"
                    style={{ 
                      position: 'relative',
                      padding: '24px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      zIndex: 1
                    }}
                  >
                    <p 
                      style={{ 
                        color: 'white', 
                        lineHeight: '1.65', 
                        fontSize: '15px',
                        marginBottom: '16px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '400'
                      }}
                    >
                      Physiotherapists empower recovery by restoring movement, strength with the expert care.
                    </p>

                    {/* Horizontal Line */}
                    <div 
                      style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'white',
                        opacity: 0.5,
                        marginBottom: '16px'
                      }}
                    />

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Confident Healing
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Therapeutic Relief
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Easy Motion
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Strength Rebuilding
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div 
                  className="rounded-3xl overflow-hidden"
                  style={{
                    height: '215px',
                    display: 'flex',
                    backgroundColor: '#33a9b1',
                    position: 'relative'
                  }}
                >
                  {/* Background Pattern Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/home2-interactive-xray-overlay.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.15,
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* Left: Image */}
                  <div className="w-full lg:w-[35%]" style={{ position: 'relative', zIndex: 1 }}>
                    <div 
                      className="h-full rounded-2xl overflow-hidden"
                      style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '215px'
                      }}
                    >
                      <img
                        src={tabCardImage}
                        alt="Physiotherapy Care"
                        className="w-full h-full"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div 
                    className="w-full lg:w-[65%]"
                    style={{ 
                      position: 'relative',
                      padding: '24px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      zIndex: 1
                    }}
                  >
                    <p 
                      style={{ 
                        color: 'white', 
                        lineHeight: '1.65', 
                        fontSize: '15px',
                        marginBottom: '16px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '400'
                      }}
                    >
                      With empathy and precision, support your journey to less pain, and the stronger living.
                    </p>

                    {/* Horizontal Line */}
                    <div 
                      style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'white',
                        opacity: 0.5,
                        marginBottom: '16px'
                      }}
                    />

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Gentle Guidance
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Restored Function
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Quiet Dedication
                        </span>
                      </div>
                      <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={12} style={{ color: '#33a9b1', strokeWidth: 3 }} />
                        </div>
                        <span 
                          style={{ 
                            color: 'white', 
                            fontSize: '14px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          Strength Renewal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section style={{ backgroundColor: 'rgb(222, 232, 222)', paddingTop: '100px', paddingBottom: '100px' }}>
        <style>{`
          @keyframes ripple-pulse {
            0% {
              box-shadow:
                0 0 0 0 rgba(51, 169, 177, 0.25),
                0 0 0 40px rgba(51, 169, 177, 0.2),
                0 0 0 80px rgba(51, 169, 177, 0.15),
                0 0 0 120px rgba(51, 169, 177, 0.1),
                0 0 0 160px rgba(51, 169, 177, 0.05);
            }
            100% {
              box-shadow:
                0 0 0 40px rgba(51, 169, 177, 0.2),
                0 0 0 80px rgba(51, 169, 177, 0.15),
                0 0 0 120px rgba(51, 169, 177, 0.1),
                0 0 0 160px rgba(51, 169, 177, 0.05),
                0 0 0 200px rgba(51, 169, 177, 0);
            }
          }
          .ripple-background-holistic::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: rgba(51, 169, 177, 0.15);
            animation: ripple-pulse 2.5s infinite ease-out;
            z-index: 1;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div 
              style={{ 
                width: '50px', 
                height: '2px', 
                backgroundColor: '#33a9b1' 
              }}
            />
            <p style={{ 
              color: '#5a6c69', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontSize: '13px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '500'
            }}>
              TOTAL WELLNESS SUPPORT
            </p>
          </div>

          {/* Main Heading */}
          <h2 
            className="text-center mb-20"
            style={{ 
              fontSize: '46px', 
              lineHeight: '1.2',
              fontFamily: "'Philosopher', serif",
              fontWeight: '400',
              color: '#2d4a4a'
            }}
          >
            Holistic Approach Addresses <span style={{ color: '#33a9b1' }}>Mind</span> And <span style={{ color: '#33a9b1' }}>Body</span>.
          </h2>

          {/* Statistics Circle Layout - Desktop */}
          <div className="hidden lg:block relative" style={{ height: '600px' }}>
            {/* Ripple Animation Background - Behind Icon */}
            <div className="ripple-background-holistic absolute inset-0" style={{ zIndex: 0 }}></div>
            
            {/* Central Circle with Icon */}
            <div 
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(193, 245, 241, 0.4) 0%, rgba(193, 245, 241, 0.25) 35%, rgba(193, 245, 241, 0.15) 60%, transparent 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}
            >
              {/* Inner Circle */}
              <div 
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(193, 245, 241, 0.6) 0%, rgba(193, 245, 241, 0.35) 50%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Icon Container */}
                <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                  {/* Person Icon - Stylized */}
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Head */}
                    <circle cx="60" cy="30" r="12" fill="#1f3d3f" />
                    {/* Body - curved with motion */}
                    <path 
                      d="M 60 42 Q 45 60, 40 85 L 48 85 Q 52 65, 60 50 Q 68 65, 72 85 L 80 85 Q 75 60, 60 42 Z" 
                      fill="#1f3d3f"
                    />
                    {/* Dotted arc showing movement */}
                    <path 
                      d="M 35 50 Q 50 35, 70 40" 
                      stroke="#33a9b1" 
                      strokeWidth="3" 
                      strokeDasharray="3 4" 
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="70" cy="40" r="3" fill="#33a9b1" />
                    <circle cx="62" cy="37" r="2.5" fill="#33a9b1" />
                    <circle cx="54" cy="36" r="2" fill="#33a9b1" />
                    <circle cx="46" cy="38" r="2" fill="#33a9b1" />
                    <circle cx="38" cy="44" r="2.5" fill="#33a9b1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Statistic 1: Top Left - Certified Experts */}
            <div 
              className="absolute"
              style={{
                top: '80px',
                left: '50px',
                maxWidth: '240px',
                zIndex: 3
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#1f3d3f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <div 
                    style={{ 
                      fontSize: '42px',
                      fontFamily: "'Philosopher', serif",
                      fontWeight: '400',
                      color: '#2d4a4a',
                      lineHeight: '1',
                      marginBottom: '8px'
                    }}
                  >
                    20+
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '16px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '500',
                      color: '#2d4a4a',
                      marginBottom: '6px'
                    }}
                  >
                    Certified Experts
                  </h4>
                  <p 
                    style={{ 
                      fontSize: '13px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '300',
                      color: '#5a6c69',
                      lineHeight: '1.5'
                    }}
                  >
                    Certified physiotherapists deliver personalized, evidence-based treatments.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 2: Left - High-End Technology */}
            <div 
              className="absolute"
              style={{
                top: '280px',
                left: '80px',
                maxWidth: '240px',
                zIndex: 3
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#1f3d3f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <div 
                    style={{ 
                      fontSize: '42px',
                      fontFamily: "'Philosopher', serif",
                      fontWeight: '400',
                      color: '#2d4a4a',
                      lineHeight: '1',
                      marginBottom: '8px'
                    }}
                  >
                    87%
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '16px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '500',
                      color: '#2d4a4a',
                      marginBottom: '6px'
                    }}
                  >
                    High-End Technology
                  </h4>
                  <p 
                    style={{ 
                      fontSize: '13px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '300',
                      color: '#5a6c69',
                      lineHeight: '1.5'
                    }}
                  >
                    We use advanced technology for faster, effective and precise physiotherapy techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 3: Center - Patient Fulfillment */}
            <div 
              className="absolute"
              style={{
                top: '500px',
                left: '50%',
                transform: 'translateX(-50%)',
                maxWidth: '280px',
                textAlign: 'center',
                zIndex: 3
              }}
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#1f3d3f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M12 14l-2 2 2 2"/>
                    <path d="M12 14l2 2-2 2"/>
                  </svg>
                </div>
                <div>
                  <div 
                    style={{ 
                      fontSize: '42px',
                      fontFamily: "'Philosopher', serif",
                      fontWeight: '400',
                      color: '#2d4a4a',
                      lineHeight: '1',
                      marginBottom: '8px'
                    }}
                  >
                    100%
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '16px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '500',
                      color: '#2d4a4a',
                      marginBottom: '6px'
                    }}
                  >
                    Patient Fulfillment
                  </h4>
                  <p 
                    style={{ 
                      fontSize: '13px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '300',
                      color: '#5a6c69',
                      lineHeight: '1.5'
                    }}
                  >
                    Patient fulfillment reflects our commitment to personalized, outcome-driven care.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 4: Top Right - Individualized Care */}
            <div 
              className="absolute"
              style={{
                top: '80px',
                right: '50px',
                maxWidth: '240px',
                textAlign: 'right',
                zIndex: 3
              }}
            >
              <div className="flex items-start gap-4 flex-row-reverse">
                {/* Icon */}
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#1f3d3f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <circle cx="19" cy="11" r="3" fill="white"/>
                  </svg>
                </div>
                <div>
                  <div 
                    style={{ 
                      fontSize: '42px',
                      fontFamily: "'Philosopher', serif",
                      fontWeight: '400',
                      color: '#2d4a4a',
                      lineHeight: '1',
                      marginBottom: '8px'
                    }}
                  >
                    98%
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '16px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '500',
                      color: '#2d4a4a',
                      marginBottom: '6px'
                    }}
                  >
                    Individualized Care
                  </h4>
                  <p 
                    style={{ 
                      fontSize: '13px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '300',
                      color: '#5a6c69',
                      lineHeight: '1.5'
                    }}
                  >
                    Individualized care delivers treatment tailored to each patient's unique needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 5: Right - Therapy Accuracy */}
            <div 
              className="absolute"
              style={{
                top: '280px',
                right: '80px',
                maxWidth: '240px',
                textAlign: 'right',
                zIndex: 3
              }}
            >
              <div className="flex items-start gap-4 flex-row-reverse">
                {/* Icon */}
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#1f3d3f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2" fill="white"/>
                  </svg>
                </div>
                <div>
                  <div 
                    style={{ 
                      fontSize: '42px',
                      fontFamily: "'Philosopher', serif",
                      fontWeight: '400',
                      color: '#2d4a4a',
                      lineHeight: '1',
                      marginBottom: '8px'
                    }}
                  >
                    60+
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '16px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '500',
                      color: '#2d4a4a',
                      marginBottom: '6px'
                    }}
                  >
                    Therapy Accuracy
                  </h4>
                  <p 
                    style={{ 
                      fontSize: '13px',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '300',
                      color: '#5a6c69',
                      lineHeight: '1.5'
                    }}
                  >
                    Therapy accuracy ensures the precise, effective and targeted treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Mobile Layout - Stacked */}
          <div className="lg:hidden flex flex-col gap-8 px-4">
            {/* Stat 1: Certified Experts */}
            <div className="flex items-start gap-4">
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#1f3d3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <div 
                  style={{ 
                    fontSize: '42px',
                    fontFamily: "'Philosopher', serif",
                    fontWeight: '400',
                    color: '#2d4a4a',
                    lineHeight: '1',
                    marginBottom: '8px'
                  }}
                >
                  20+
                </div>
                <h4 
                  style={{ 
                    fontSize: '16px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500',
                    color: '#2d4a4a',
                    marginBottom: '6px'
                  }}
                >
                  Certified Experts
                </h4>
                <p 
                  style={{ 
                    fontSize: '13px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '300',
                    color: '#5a6c69',
                    lineHeight: '1.5'
                  }}
                >
                  Certified physiotherapists deliver personalized, evidence-based treatments.
                </p>
              </div>
            </div>

            {/* Stat 2: High-End Technology */}
            <div className="flex items-start gap-4">
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#1f3d3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <div 
                  style={{ 
                    fontSize: '42px',
                    fontFamily: "'Philosopher', serif",
                    fontWeight: '400',
                    color: '#2d4a4a',
                    lineHeight: '1',
                    marginBottom: '8px'
                  }}
                >
                  87%
                </div>
                <h4 
                  style={{ 
                    fontSize: '16px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500',
                    color: '#2d4a4a',
                    marginBottom: '6px'
                  }}
                >
                  High-End Technology
                </h4>
                <p 
                  style={{ 
                    fontSize: '13px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '300',
                    color: '#5a6c69',
                    lineHeight: '1.5'
                  }}
                >
                  We use advanced technology for faster, effective and precise physiotherapy techniques.
                </p>
              </div>
            </div>

            {/* Stat 3: Patient Fulfillment */}
            <div className="flex items-start gap-4">
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#1f3d3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M12 14l-2 2 2 2"/>
                  <path d="M12 14l2 2-2 2"/>
                </svg>
              </div>
              <div>
                <div 
                  style={{ 
                    fontSize: '42px',
                    fontFamily: "'Philosopher', serif",
                    fontWeight: '400',
                    color: '#2d4a4a',
                    lineHeight: '1',
                    marginBottom: '8px'
                  }}
                >
                  100%
                </div>
                <h4 
                  style={{ 
                    fontSize: '16px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500',
                    color: '#2d4a4a',
                    marginBottom: '6px'
                  }}
                >
                  Patient Fulfillment
                </h4>
                <p 
                  style={{ 
                    fontSize: '13px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '300',
                    color: '#5a6c69',
                    lineHeight: '1.5'
                  }}
                >
                  Patient fulfillment reflects our commitment to personalized, outcome-driven care.
                </p>
              </div>
            </div>

            {/* Stat 4: Individualized Care */}
            <div className="flex items-start gap-4">
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#1f3d3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <circle cx="19" cy="11" r="3" fill="white"/>
                </svg>
              </div>
              <div>
                <div 
                  style={{ 
                    fontSize: '42px',
                    fontFamily: "'Philosopher', serif",
                    fontWeight: '400',
                    color: '#2d4a4a',
                    lineHeight: '1',
                    marginBottom: '8px'
                  }}
                >
                  98%
                </div>
                <h4 
                  style={{ 
                    fontSize: '16px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500',
                    color: '#2d4a4a',
                    marginBottom: '6px'
                  }}
                >
                  Individualized Care
                </h4>
                <p 
                  style={{ 
                    fontSize: '13px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '300',
                    color: '#5a6c69',
                    lineHeight: '1.5'
                  }}
                >
                  Individualized care delivers treatment tailored to each patient's unique needs.
                </p>
              </div>
            </div>

            {/* Stat 5: Therapy Accuracy */}
            <div className="flex items-start gap-4">
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#1f3d3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <div>
                <div 
                  style={{ 
                    fontSize: '42px',
                    fontFamily: "'Philosopher', serif",
                    fontWeight: '400',
                    color: '#2d4a4a',
                    lineHeight: '1',
                    marginBottom: '8px'
                  }}
                >
                  60+
                </div>
                <h4 
                  style={{ 
                    fontSize: '16px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500',
                    color: '#2d4a4a',
                    marginBottom: '6px'
                  }}
                >
                  Therapy Accuracy
                </h4>
                <p 
                  style={{ 
                    fontSize: '13px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '300',
                    color: '#5a6c69',
                    lineHeight: '1.5'
                  }}
                >
                  Therapy accuracy ensures the precise, effective and targeted treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Physiotherapy Clinic Stands Out Section */}
      <section ref={progressSectionRef} style={{ 
        backgroundColor: '#1f3d3f', 
        backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '100px', 
        paddingBottom: '100px' 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            {/* Left Side - Images with Central Badge */}
            <div 
              className="relative w-full lg:w-[675px] lg:min-w-[675px]" 
              style={{ 
                flexShrink: 0,
                animation: animateProgress ? 'slideInFromRight 1s ease-out' : 'none',
                opacity: animateProgress ? 1 : 0
              }}
            >
              <div className="flex gap-[15px]" style={{ width: '100%' }}>
                {/* Image 1 */}
                <div className="rounded-3xl overflow-hidden w-full lg:w-[330px] h-[399px]" style={{ flexShrink: 0 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwZXhlcmNpc2V8ZW58MXx8fHwxNjY3MTgxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Physiotherapy Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image 2 */}
                <div className="rounded-3xl overflow-hidden hidden lg:block lg:w-[330px] h-[399px]" style={{ flexShrink: 0 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1695608343682-ad6438031a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5lc2lvbG9neSUyMHRhcGUlMjBzaG91bGRlcnxlbnwxfHx8fDE3NjcxODEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Kinesiology Tape Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Central Circular Badge */}
              <div 
                className="absolute hidden lg:flex"
                style={{
                  left: '50%',
                  top: 'calc(350.5px)',
                  transform: 'translateX(-50%)',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(51, 169, 177)',
                  boxShadow: 'rgb(31, 61, 63) 0px 0px 0px 0px, 0px 0px 0px 15px, rgb(31, 61, 63) 0px 10px 40px',
                  zIndex: 30,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Circular Text */}
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <svg viewBox="0 0 160 160" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <defs>
                      <path id="circlePath" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                    </defs>
                    <text style={{ fill: '#c1f5f1', fontSize: '11px', fontFamily: "'Poppins', sans-serif", fontWeight: '500', letterSpacing: '3px' }}>
                      <textPath href="#circlePath" startOffset="0%">
                        GET OUR CLIENT VIDEO • GET OUR CLIENT VIDEO •
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Play Button */}
                  <div 
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#33a9b1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setShowVideo(true)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0f8987';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#33a9b1';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    }}
                  >
                    <Play fill="white" color="white" size={20} style={{ marginLeft: '3px' }} />
                  </div>
                </div>
              </div>

              {/* Partner Logos Scrolling Strip */}
              <div 
                className="rounded-3xl overflow-hidden relative"
                style={{
                  marginTop: '15px',
                  backgroundColor: '#33a9b1',
                  padding: '0',
                  height: '154px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                <style>
                  {`
                    @keyframes scroll-left {
                      0% {
                        transform: translateX(0);
                      }
                      100% {
                        transform: translateX(-50%);
                      }
                    }
                    .scroll-container {
                      animation: scroll-left 20s linear infinite;
                    }
                  `}
                </style>
                <div 
                  className="scroll-container"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '80px',
                    whiteSpace: 'nowrap',
                    padding: '20px 0'
                  }}
                >
                  {/* First set of logos */}
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '700', fontSize: '20px', letterSpacing: '2px' }}>
                    CALEY PEACE
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '400', fontSize: '20px', letterSpacing: '1px', fontStyle: 'italic' }}>
                    innovio
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '500', fontSize: '20px', letterSpacing: '1px', fontStyle: 'italic' }}>
                    techtide
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '600', fontSize: '20px', letterSpacing: '1px' }}>
                    PETA ACADEMIA
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '700', fontSize: '20px', letterSpacing: '2px' }}>
                    CALEY PEACE
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '400', fontSize: '20px', letterSpacing: '1px', fontStyle: 'italic' }}>
                    innovio
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '500', fontSize: '20px', letterSpacing: '1px', fontStyle: 'italic' }}>
                    techtide
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '600', fontSize: '20px', letterSpacing: '1px' }}>
                    PETA ACADEMIA
                  </div>

                  {/* Third set for extra smooth scrolling */}
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '700', fontSize: '20px', letterSpacing: '2px' }}>
                    CALEY PEACE
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '400', fontSize: '20px', letterSpacing: '1px', fontStyle: 'italic' }}>
                    innovio
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '500', fontSize: '20px', letterSpacing: '1px', fontStyle: 'italic' }}>
                    techtide
                  </div>
                  <div style={{ color: 'white', fontFamily: "'Poppins', sans-serif", fontWeight: '600', fontSize: '20px', letterSpacing: '1px' }}>
                    PETA ACADEMIA
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-between h-auto lg:h-[425px]">
              {/* Top Section */}
              <div>
                {/* Top Label */}
                <div className="flex items-center gap-3 mb-2">
                <div 
                  style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%',
                    backgroundColor: '#33a9b1' 
                  }}
                />
                <p style={{ 
                  color: '#c1f5f1', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  fontSize: '13px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '500'
                }}>
                  EXCELLENCE IN CARE
                </p>
              </div>

              {/* Main Heading */}
              <h2 
                className="mb-3"
                style={{ 
                  fontSize: '48px', 
                  lineHeight: '1.2',
                  fontFamily: "'Philosopher', serif",
                  fontWeight: '400',
                  color: 'white'
                }}
              >
                Why Our <span style={{ color: '#33a9b1' }}>Physiotherapy Clinic</span><br />Stands Out
              </h2>

              {/* Subheading */}
              <p 
                className="mb-6"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#b0c4c2',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '400'
                }}
              >
                We're Committed To Delivering More Than Just Care — We Focus On Personalized Healing
              </p>

              {/* Progress Bars */}
              <div className="space-y-5">
                {/* Care & Patience - 93% */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ color: 'white', fontFamily: "'Philosopher', serif", fontSize: '20px', fontWeight: '400' }}>
                      Care & Patience
                    </span>
                    <span style={{ color: '#33a9b1', fontFamily: "'Poppins', sans-serif", fontSize: '18px', fontWeight: '600' }}>
                      {carePercentage}%
                    </span>
                  </div>
                  <div className="relative w-full rounded-full overflow-visible" style={{ height: '4px', backgroundColor: 'white' }}>
                    <div 
                      className="absolute h-full bg-gradient-to-r from-[#33a9b1] to-[#0f8987] rounded-full"
                      style={{ 
                        width: animateProgress ? '93%' : '0%',
                        transition: 'width 1.5s ease-out'
                      }}
                    />
                    <div 
                      style={{ 
                        position: 'absolute',
                        left: animateProgress ? '93%' : '0%',
                        top: '4px',
                        width: '14px',
                        height: '14px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '3px solid #33a9b1',
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 1.5s ease-out',
                        animation: animateProgress ? 'blink 1.5s infinite' : 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Honest Conversation - 95% */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ color: 'white', fontFamily: "'Philosopher', serif", fontSize: '20px', fontWeight: '400' }}>
                      Honest Conversation
                    </span>
                    <span style={{ color: '#33a9b1', fontFamily: "'Poppins', sans-serif", fontSize: '18px', fontWeight: '600' }}>
                      {conversationPercentage}%
                    </span>
                  </div>
                  <div className="relative w-full rounded-full overflow-visible" style={{ height: '4px', backgroundColor: 'white' }}>
                    <div 
                      className="absolute h-full bg-gradient-to-r from-[#33a9b1] to-[#0f8987] rounded-full"
                      style={{ 
                        width: animateProgress ? '95%' : '0%',
                        transition: 'width 1.5s ease-out 0.2s'
                      }}
                    />
                    <div 
                      style={{ 
                        position: 'absolute',
                        left: animateProgress ? '95%' : '0%',
                        top: '4px',
                        width: '14px',
                        height: '14px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '3px solid #33a9b1',
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 1.5s ease-out 0.2s',
                        animation: animateProgress ? 'blink 1.5s infinite' : 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Specialized Experience - 96% */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ color: 'white', fontFamily: "'Philosopher', serif", fontSize: '20px', fontWeight: '400' }}>
                      Specialized Experience
                    </span>
                    <span style={{ color: '#33a9b1', fontFamily: "'Poppins', sans-serif", fontSize: '18px', fontWeight: '600' }}>
                      {experiencePercentage}%
                    </span>
                  </div>
                  <div className="relative w-full rounded-full overflow-visible" style={{ height: '4px', backgroundColor: 'white' }}>
                    <div 
                      className="absolute h-full bg-gradient-to-r from-[#33a9b1] to-[#0f8987] rounded-full"
                      style={{ 
                        width: animateProgress ? '96%' : '0%',
                        transition: 'width 1.5s ease-out 0.4s'
                      }}
                    />
                    <div 
                      style={{ 
                        position: 'absolute',
                        left: animateProgress ? '96%' : '0%',
                        top: '4px',
                        width: '14px',
                        height: '14px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '3px solid #33a9b1',
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 1.5s ease-out 0.4s',
                        animation: animateProgress ? 'blink 1.5s infinite' : 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
              </div>

              {/* Bottom Section - Button */}
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '5px 13px',
                  marginTop: '50px',
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                  borderRadius: '50px',
                  color: 'white',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  setHoveredButton(true);
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#33a9b1';
                }}
                onMouseLeave={(e) => {
                  setHoveredButton(false);
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Book This Service
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: hoveredButton ? '#0f8987' : 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: hoveredButton ? 'white' : '#0f8987',
                      transform: hoveredButton ? 'rotate(-45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    →
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overlay */}
      {showVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setShowVideo(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '1200px',
              maxHeight: '500px',
              aspectRatio: '16/7'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '40px',
                zIndex: 10000
              }}
            >
              <X size={40} />
            </button>

            {/* Video iFrame */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Client Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}