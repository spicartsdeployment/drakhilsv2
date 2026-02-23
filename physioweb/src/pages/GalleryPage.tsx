import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { Award, X } from 'lucide-react';
import { AWARDS } from '../const';
import { CLINIC_IMAGES } from '../const';

export function GalleryPageAboutUs() {
  const [activeTab, setActiveTab] = useState<'clinic' | 'achievements' | 'treatments'>('clinic');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Add Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Gallery images for each category with custom layouts
  const clinicImages = [
    { url: CLINIC_IMAGES[6], gridColumn: '1', gridRow: '1', height: '320px' },
    { url: CLINIC_IMAGES[1], gridColumn: '2', gridRow: '1 / 3', height: '100%' },
    { url: CLINIC_IMAGES[0], gridColumn: '3 / 5', gridRow: '1', height: '320px' },
    { url: CLINIC_IMAGES[3], gridColumn: '1', gridRow: '2', height: '320px' },
    { url: CLINIC_IMAGES[4], gridColumn: '3', gridRow: '2', height: '320px' },
    { url: CLINIC_IMAGES[5], gridColumn: '4', gridRow: '2', height: '320px' }
  ];

  const achievementsImages = [
    { url: AWARDS[0], gridColumn: '1', gridRow: '1', height: '320px' },
    { url: AWARDS[1], gridColumn: '2', gridRow: '1 / 3', height: '100%' },
    { url: AWARDS[2], gridColumn: '3 / 5', gridRow: '1', height: '320px' },
    { url: AWARDS[3], gridColumn: '1', gridRow: '2', height: '320px' },
    { url: AWARDS[0], gridColumn: '3', gridRow: '2', height: '320px' },
    { url: AWARDS[1], gridColumn: '4', gridRow: '2', height: '320px' }
  ];

  const treatmentsImages = [
    { url: CLINIC_IMAGES[7], gridColumn: '1', gridRow: '1', height: '320px' },
    { url: CLINIC_IMAGES[8], gridColumn: '2', gridRow: '1 / 3', height: '100%' },
    { url: CLINIC_IMAGES[9], gridColumn: '3 / 5', gridRow: '1', height: '320px' },
    { url: CLINIC_IMAGES[10], gridColumn: '1', gridRow: '2', height: '320px' },
    { url: CLINIC_IMAGES[11], gridColumn: '3', gridRow: '2', height: '320px' },
    { url: CLINIC_IMAGES[12], gridColumn: '4', gridRow: '2', height: '320px' }
  ];
  console.log('Clinic Images:', CLINIC_IMAGES[8]);
  const currentImages = activeTab === 'clinic' ? clinicImages : activeTab === 'achievements' ? achievementsImages : treatmentsImages;

  // Get dimensions based on size
  const getDimensions = (size: string) => {
    switch (size) {
      case 'small':
        return { gridColumn: 'span 1', gridRow: 'span 1', height: '280px' };
      case 'medium':
        return { gridColumn: 'span 1', gridRow: 'span 1', height: '320px' };
      case 'tall':
        return { gridColumn: 'span 1', gridRow: 'span 2', height: '100%' };
      case 'wide':
        return { gridColumn: 'span 2', gridRow: 'span 1', height: '280px' };
      default:
        return { gridColumn: 'span 1', gridRow: 'span 1', height: '280px' };
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <style>{`
        @media (max-width: 640px) {
          .mobile-padding-10 {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          .gallery-section-padding {
            padding: 60px 10px !important;
          }
          .gallery-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            grid-auto-rows: auto !important;
          }
          .gallery-item {
            grid-column: 1 !important;
            grid-row: auto !important;
            height: 280px !important;
          }
          .tab-buttons-container {
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 6px !important;
            width: 100% !important;
            overflow-x: auto !important;
            padding: 4px !important;
            scrollbar-width: none !important; /* Firefox */
            -ms-overflow-style: none !important; /* IE and Edge */
          }
          .tab-buttons-container::-webkit-scrollbar {
            display: none !important; /* Chrome, Safari, Opera */
          }
          .tab-button-mobile {
            font-size: 12px !important;
            padding: 10px 12px !important;
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
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 gallery-section-padding" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
        <div className="max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0f8987' }}></div>
              <p style={{ color: '#0f8987', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                OUR COLLECTION
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6">
              {/* Tab Buttons */}
              <div
                className="tab-buttons-container"
                style={{
                  border: '1px solid #2d4a4a',
                  borderRadius: '50px',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  padding: '4px',
                  flexDirection: 'row'
                }}
              >
                <button
                  onClick={() => setActiveTab('clinic')}
                  className="tab-button-mobile relative px-6 py-3 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: activeTab === 'clinic' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'clinic' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '100px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'clinic') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'clinic') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'clinic' && (
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
                  <span style={{ position: 'relative', zIndex: 1 }}>Clinic</span>
                </button>

                <button
                  onClick={() => setActiveTab('achievements')}
                  className="tab-button-mobile relative px-6 py-3 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: activeTab === 'achievements' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'achievements' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '200px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'achievements') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'achievements') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'achievements' && (
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
                  <span style={{ position: 'relative', zIndex: 1 }}>Achievements and Awards</span>
                </button>

                <button
                  onClick={() => setActiveTab('treatments')}
                  className="tab-button-mobile relative px-6 py-3 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: activeTab === 'treatments' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'treatments' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '120px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
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
                  <span style={{ position: 'relative', zIndex: 1 }}>Treatments</span>
                </button>
              </div>
            </div>
          </div>

          {/* Holographic Effect Styles */}
          <style>{`
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
                rgba(255, 255, 255, 0.3) 40%,
                rgba(255, 255, 255, 0.5) 50%,
                rgba(255, 255, 255, 0.3) 60%,
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

            .zoom-icon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(0);
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background-color: rgba(15, 137, 135, 0.95);
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
              z-index: 3;
              cursor: pointer;
            }

            .holographic-image-wrapper:hover .zoom-icon {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }

            .zoom-icon:hover {
              background-color: rgba(51, 169, 177, 0.95);
              transform: translate(-50%, -50%) scale(1.15);
            }
          `}</style>

          {/* Gallery Grid with Custom Layout */}
          <div
            className="gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              gridAutoRows: '320px'
            }}
          >
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="holographic-image-wrapper gallery-item group"
                style={{
                  gridColumn: image.gridColumn,
                  gridRow: image.gridRow,
                  height: image.height,
                  backgroundColor: '#f0f0f0',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 137, 135, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Magnifying Glass Icon */}
                <div
                  className="zoom-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(image.url);
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Overlay Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'transparent'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery preview"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '24px',
              boxShadow: 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}