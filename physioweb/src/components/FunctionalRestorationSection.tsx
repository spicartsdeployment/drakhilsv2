import React, { useEffect, useRef } from 'react';
import { ArrowRight, Phone, ArrowUp } from 'lucide-react';
import { Link } from '../App';
import { AnimatedCounter } from './AnimatedCounter';

export function FunctionalRestorationSection() {
  const [isHoveredKnowMore, setIsHoveredKnowMore] = React.useState(false);
  const [isHoveredPhone, setIsHoveredPhone] = React.useState(false);
  const [isScrollButtonHovered, setIsScrollButtonHovered] = React.useState(false);

  const stats = [
    {
      number: '3k+',
      value: 3,
      suffix: 'k+',
      title: 'Health Regained',
      description: 'Regaining your health means reclaiming your strength, & confidence for fuller.'
    },
    {
      number: '20+',
      value: 20,
      suffix: '+',
      title: 'Trusted Patients',
      description: 'Trusted experts, delivering results with compassion and precision.'
    },
    {
      number: '4.50',
      value: 4.5,
      suffix: '',
      decimals: 2,
      title: 'Treatment Satisfaction',
      description: 'Our patients consistently report high satisfaction with their treatment.'
    },
    {
      number: '99+',
      value: 99,
      suffix: '+',
      title: 'Latest Instruments',
      description: 'Our clinic uses the latest instruments to ensure treatment, faster recovery.'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative pt-20 pb-20"
      style={{ 
        backgroundColor: '#e8f9f8',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div 
            style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%',
              backgroundColor: '#33a9b1'
            }} 
          />
          <div style={{ width: '60px', height: '1px', backgroundColor: '#33a9b1' }} />
          <span 
            style={{ 
              color: '#33a9b1',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            ABOUT US CARE
          </span>
        </div>

        {/* Main Heading with Embedded Images */}
        <div className="text-center mb-16">
          <h2 
            className="max-w-6xl mx-auto leading-tight"
            style={{ 
              fontSize: '2rem',
              fontWeight: '600',
              color: '#1a1a1a',
              lineHeight: '1.3',
              letterSpacing: '-0.5px'
            }}
          >
            Functional Restoration{' '}
            <img 
              src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY2NTA1MzA2fDA&ixlib=rb-4.1.0&q=80&w=200"
              alt="Healthcare Team"
              className="inline-block rounded-full object-cover"
              style={{ 
                width: '80px', 
                height: '80px',
                verticalAlign: 'middle',
                border: '4px solid white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                margin: '0 8px'
              }}
            />
            {' '}And Boosting Vitality With{' '}
            <img 
              src="https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwZXhlcmNpc2UlMjBzdHJldGNoaW5nfGVufDF8fHx8MTc2NjUwNTMwOXww&ixlib=rb-4.1.0&q=80&w=200"
              alt="Physiotherapy"
              className="inline-block rounded-full object-cover"
              style={{ 
                width: '80px', 
                height: '80px',
                verticalAlign: 'middle',
                border: '4px solid white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                margin: '0 8px'
              }}
            />
            {' '}Enhanced Physiotherapy Refined For Your{' '}
            <img 
              src="https://images.unsplash.com/photo-1764314399496-aa49b4e4d127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVoYWJpbGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc2NjUwNTMxM3ww&ixlib=rb-4.1.0&q=80&w=200"
              alt="Medical Care"
              className="inline-block rounded-full object-cover"
              style={{ 
                width: '80px', 
                height: '80px',
                verticalAlign: 'middle',
                border: '4px solid white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                margin: '0 8px'
              }}
            />
            {' '}Health
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Number */}
              <div 
                style={{ 
                  fontSize: '56px',
                  fontWeight: '300',
                  color: '#1a1a1a',
                  lineHeight: '1',
                  marginBottom: '16px',
                  letterSpacing: '-1px'
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              
              {/* Title */}
              <h3 
                style={{ 
                  fontSize: '20px',
                  fontWeight: '500',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  letterSpacing: '-0.3px'
                }}
              >
                {stat.title}
              </h3>

              {/* Divider Line with Dot */}
              <div className="flex items-center justify-center gap-0 mb-12">
                <div style={{ width: '80px', height: '1px', backgroundColor: '#33a9b1' }} />
                <div 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%',
                    backgroundColor: '#33a9b1',
                    flexShrink: 0
                  }} 
                />
              </div>

              {/* Description */}
              <p 
                style={{ 
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6',
                  maxWidth: '280px',
                  margin: '0 auto'
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 mb-[30px]">
          <style>{`
            .know-more-button-v2 {
              display: inline-flex;
              align-items: center;
              gap: 12px;
              padding: 16px 32px;
              padding-right: 48px;
              border-radius: 9999px;
              font-size: 16px;
              font-weight: 500;
              border: 2px solid #0f8987;
              width: 240px;
              justify-content: center;
              position: relative;
              background-color: #0f8987;
              color: white;
              text-decoration: none;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .know-more-button-v2:hover {
              background-color: white;
              color: #0f8987;
              transform: scale(1.05);
            }

            .know-more-arrow-circle {
              position: absolute;
              right: 12px;
              top: 50%;
              transform: translateY(-50%);
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
              z-index: 2;
            }

            .know-more-button-v2:hover .know-more-arrow-circle {
              background-color: #0f8987;
            }

            .know-more-arrow-icon {
              font-family: wdt-ext, sans-serif;
              font-size: 18px;
              font-weight: bold;
              color: #0f8987;
              transform: rotate(0deg);
              transition: all 0.3s ease;
              display: inline-block;
              line-height: 1;
            }

            .know-more-button-v2:hover .know-more-arrow-icon {
              color: white;
              transform: rotate(-45deg);
            }
          `}</style>

          {/* Know More Button */}
          <Link
            to="/about-us"
            className="know-more-button-v2"
          >
            <span>Know More</span>
            <div className="know-more-arrow-circle">
              <span className="know-more-arrow-icon">→</span>
            </div>
          </Link>

          {/* Phone Button */}
          <a
            href="tel:+1122334556"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 shadow-md"
            style={{ 
              backgroundColor: isHoveredPhone ? '#0f8987' : 'white',
              color: isHoveredPhone ? 'white' : '#0f8987',
              fontSize: '16px',
              fontWeight: '500',
              border: '2px solid #0f8987',
              width: '240px',
              justifyContent: 'center'
            }}
            onMouseEnter={() => setIsHoveredPhone(true)}
            onMouseLeave={() => setIsHoveredPhone(false)}
          >
            <span>+ 112 233 44556</span>
            <div 
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                backgroundColor: isHoveredPhone ? 'white' : '#0f8987',
                width: '32px',
                height: '32px',
                color: isHoveredPhone ? '#0f8987' : 'white'
              }}
            >
              <Phone size={18} />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll to Top Button - Bottom Right */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: isScrollButtonHovered ? 'white' : '#0f8987',
          width: '56px',
          height: '56px',
          border: '2px solid #0f8987',
          cursor: 'pointer',
          zIndex: 9999
        }}
        aria-label="Scroll to top"
        onMouseEnter={() => setIsScrollButtonHovered(true)}
        onMouseLeave={() => setIsScrollButtonHovered(false)}
      >
        <span 
          style={{
            fontFamily: 'wdt-ext',
            fontSize: '24px',
            fontWeight: 'bold',
            color: isScrollButtonHovered ? '#0f8987' : 'white',
            transform: 'rotate(-90deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.3s ease'
          }}
        >
          →
        </span>
      </button>
    </section>
  );
}