import React, { useState } from 'react';
import { Link, useNavigate } from '../../App';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { Facebook, Linkedin, Mail } from 'lucide-react';
import { CLINIC_IMAGES } from '../../const';
import { AKHIL } from '../../const';

interface Therapist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  specialtyPath: string;
  facebook: string;
  linkedin: string;
  email: string;
}

export function AboutSitePage() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const therapists: Therapist[] = [
    {
      id: 1,
      name: 'Dr. Akhil',
      specialty: 'MANUAL THERAPY - THERAPY SPECIALIST',
      image: AKHIL[1],
      specialtyPath: '/specialities/physical-therapist',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:akhil@drakhils.com'
    },
    {
      id: 2,
      name: 'Dr. Anjali Desai',
      specialty: 'PAIN CONSULTANT - PAIN SPECIALIST',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      specialtyPath: '/specialities/nursing-care',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:anjali.desai@drakhils.com'
    },
    {
      id: 3,
      name: 'Dr. Arjun Mehta',
      specialty: 'ORTHOPEDIC - REHAB EXPERT',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      specialtyPath: '/departments/orthopedic',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:arjun.mehta@drakhils.com'
    },
    {
      id: 4,
      name: 'Dr. Neha Sharma',
      specialty: 'MOBILITY - RECOVERY THERAPIST',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      specialtyPath: '/specialities/occupational-therapist',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:neha.sharma@drakhils.com'
    },
    {
      id: 5,
      name: 'Dr. Vikram Patel',
      specialty: 'SPORTS REHABILITATION - SPECIALIST',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
      specialtyPath: '/departments/sports',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:vikram.patel@drakhils.com'
    },
    {
      id: 6,
      name: 'Dr. Priya Reddy',
      specialty: 'NEUROLOGICAL - RECOVERY EXPERT',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=500&fit=crop',
      specialtyPath: '/departments/neurological',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:priya.reddy@drakhils.com'
    },
    {
      id: 7,
      name: 'Dr. Aditya Singh',
      specialty: 'CARDIO REHABILITATION - SPECIALIST',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop',
      specialtyPath: '/departments/cardio',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:aditya.singh@drakhils.com'
    },
    {
      id: 8,
      name: 'Dr. Kavya Iyer',
      specialty: 'PEDIATRIC - THERAPY SPECIALIST',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
      specialtyPath: '/departments/pediatrics',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:kavya.iyer@drakhils.com'
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
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
            Our Experts
          </h1>
        </div>
      </section>

      {/* Therapists Grid Section */}
      <section className="py-20" style={{ paddingTop: '120px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Center the grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {therapists.map((therapist) => (
                <div
                  key={therapist.id}
                  className="relative group cursor-pointer holographic-card"
                  onMouseEnter={() => setHoveredCard(therapist.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(`/therapist/${therapist.id}`)}
                  style={{
                    width: '300px',
                    height: '357px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: 'transparent',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s ease'
                  }}
                >
                  {/* Image Container with Text Overlay */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      borderRadius: '20px'
                    }}
                  >
                    {/* Therapist Image */}
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      className={hoveredCard === therapist.id ? 'scale-110' : 'scale-100'}
                    />

                    {/* Dark Gradient Overlay for Text Readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 70%)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Text Content Overlay on Image */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-5"
                      style={{
                        zIndex: 1
                      }}
                    >
                      {/* Specialty */}
                      <p
                        style={{
                          color: 'white',
                          fontSize: '10px',
                          fontWeight: '500',
                          letterSpacing: '1px',
                          marginBottom: '6px',
                          textTransform: 'uppercase',
                          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                          fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}
                      >
                        {therapist.specialty}
                      </p>

                      {/* Name */}
                      <h3
                        style={{
                          color: 'white',
                          fontSize: '20px',
                          fontWeight: '400',
                          letterSpacing: '0.3px',
                          margin: 0,
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          fontFamily: 'Georgia, serif',
                          lineHeight: '1.3'
                        }}
                      >
                        {therapist.name}
                      </h3>
                    </div>

                    {/* Social Media Icons Overlay */}
                    {hoveredCard === therapist.id && (
                      <div
                        className="absolute top-4 right-4 flex flex-col gap-3"
                        style={{
                          animation: 'slideInRight 0.4s ease-out',
                          zIndex: 2
                        }}
                      >
                        {/* Facebook */}
                        <button
                          onClick={(e) => handleSocialClick(e, therapist.facebook)}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                          }}
                        >
                          <Facebook size={18} style={{ color: '#1877f2' }} />
                        </button>

                        {/* Gmail */}
                        <button
                          onClick={(e) => handleSocialClick(e, therapist.email)}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                          }}
                        >
                          <Mail size={18} style={{ color: '#ea4335' }} />
                        </button>

                        {/* LinkedIn */}
                        <button
                          onClick={(e) => handleSocialClick(e, therapist.linkedin)}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                          }}
                        >
                          <Linkedin size={18} style={{ color: '#0a66c2' }} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Keyframe Animations and Holographic Effect */}
      <style>{`
        .holographic-card {
          position: relative;
        }
        
        .holographic-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
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
          border-radius: 20px;
        }
        
        .holographic-card:hover::before {
          opacity: 1;
          transform: translateX(100%) translateY(100%) rotate(-45deg);
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}