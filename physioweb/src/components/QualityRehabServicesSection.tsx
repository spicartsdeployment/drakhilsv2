import React from 'react';
import { ArrowRight, Activity, Hand, Dumbbell, Heart, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from '../App';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function QualityRehabServicesSection() {
  const [expandedService, setExpandedService] = React.useState<number | null>(0);
  const [hoveredService, setHoveredService] = React.useState<number | null>(null);
  const serviceRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = [
    {
      icon: <Activity size={24} />,
      title: 'Advanced Physiotherapy Treatment',
      description: 'Our advanced physiotherapy treatments are designed to relieve pain, restore joint function, and enhance mobility....',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
      slug: 'advanced-physiotherapy'
    },
    {
      icon: <Hand size={24} />,
      title: 'Manual Therapy',
      description: 'Manual therapy is a hands-on physiotherapy technique designed to alleviate muscle tension, reduce joint stiffness....',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
      slug: 'manual-therapy'
    },
    {
      icon: <Dumbbell size={24} />,
      title: 'Strength Recovery Therapy',
      description: 'Our shoulder rehabilitation therapy is specially designed to restore strength, flexibility, and range of motion....',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200',
      slug: 'strength-recovery'
    },
    {
      icon: <Heart size={24} />,
      title: 'Cardio Rehabilitation',
      description: 'Comprehensive cardiovascular rehabilitation program designed to improve heart health and overall fitness....',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200',
      slug: 'cardio-rehabilitation'
    },
    {
      icon: <Users size={24} />,
      title: 'Pediatric Therapy',
      description: 'Specialized therapy programs tailored for children to support developmental milestones and physical growth....',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200',
      slug: 'pediatric-therapy'
    },
    {
      icon: <Zap size={24} />,
      title: 'Sports Injury Rehabilitation',
      description: 'Expert sports rehabilitation to help athletes recover from injuries and return to peak performance safely....',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200',
      slug: 'sports-injury'
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
    
    // Scroll the clicked service into view with offset for navbar
    setTimeout(() => {
      if (serviceRefs.current[index]) {
        const element = serviceRefs.current[index];
        if (element) {
          const yOffset = -150; // Offset for navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  const navigate = useNavigate();

  return (
    <section className="py-16" style={{ backgroundColor: '#DEE8DE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Styles for arrow button with icon font */}
        <style>{`
          .arrow-btn-icon {
            position: absolute;
            bottom: 14px;
            right: 14px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: white;
            z-index: 5;
            text-indent: -9999px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .arrow-btn-icon::after {
            content: "→";
            font-family: "wdt-ext";
            position: absolute;
            inset: 0;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: bold;
            color: #33a9b1;
            transition: 0.3s ease;
            rotate: 0deg;
            text-indent: 0;
          }

          .grid:hover .arrow-btn-icon {
            background: #33a9b1;
          }

          .grid:hover .arrow-btn-icon::after {
            rotate: -45deg;
            color: white;
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 
              className="text-black"
              style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '2.5rem',
                lineHeight: '1.2',
                fontWeight: 400
              }}
            >
              Empowering Your <span style={{ color: '#33a9b1' }}>Steps Toward Wellness</span>
            </h2>
          </div>
          {/* Button removed as requested */}
        </div>

        {/* Services List */}
        <div className="relative">
          {services.map((service, index) => (
            <div key={index} ref={el => serviceRefs.current[index] = el} className="relative">
              {/* Service Row */}
              <div 
                className="grid grid-cols-[60px_1fr] gap-8 items-center py-6 px-0 cursor-pointer transition-colors relative z-10"
                style={{ backgroundColor: '#DEE8DE' }}
                onClick={() => toggleService(index)}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: hoveredService === index ? '#33a9b1' : '#1a4d4d',
                    color: 'white',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  {service.icon}
                </div>

                {/* Text Content with Arrow Button */}
                <div className="flex-1 min-w-0 relative">
                  <h3 
                    style={{ 
                      color: hoveredService === index || expandedService === index ? '#33a9b1' : '#000',
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      marginBottom: '8px',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ 
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      fontWeight: 400
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Arrow Button positioned at top-right */}
                  <button
                    className="arrow-btn-icon"
                    aria-label={`Expand ${service.title}`}
                  >
                  </button>
                </div>
              </div>

              {/* Expandable Image with Absolute Positioning */}
              {expandedService === index && (
                <div 
                  className="relative z-0 cursor-pointer"
                  style={{
                    animation: 'slideDown 0.5s ease-out',
                    marginTop: '16px',
                    paddingBottom: '24px'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.slug}`);
                  }}
                >
                  <style>{`
                    @keyframes slideDown {
                      from {
                        opacity: 0;
                        transform: translateY(-30px) scale(0.95);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
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

                    .holographic-image-wrapper::after {
                      content: 'Click to view details';
                      position: absolute;
                      bottom: 20px;
                      right: 20px;
                      padding: 10px 20px;
                      background: rgba(51, 169, 177, 0.95);
                      color: white;
                      border-radius: 50px;
                      font-size: 14px;
                      opacity: 0;
                      transform: translateY(10px);
                      transition: all 0.3s ease;
                      z-index: 3;
                      pointer-events: none;
                    }

                    .holographic-image-wrapper:hover::after {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  `}</style>
                  <div className="holographic-image-wrapper shadow-lg">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Divider */}
              {index < services.length - 1 && (
                <div 
                  className="h-px relative z-10" 
                  style={{ backgroundColor: '#b8d4d0' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}