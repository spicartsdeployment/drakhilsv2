import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function LocationsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const locations = [
    {
      name: 'Main Campus - Downtown',
      address: '123 Health Street, Medical District, City, State 12345',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 7AM-7PM, Sat: 8AM-4PM',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800'
    },
    {
      name: 'North Branch',
      address: '456 Wellness Ave, North District, City, State 12346',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800'
    },
    {
      name: 'South Branch',
      address: '789 Recovery Road, South District, City, State 12347',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Fri: 7:30AM-6:30PM',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    }
  ];

  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
      <style>{`
        @media (max-width: 640px) {
          .mobile-padding-10 {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          .mobile-section-padding {
            padding: 80px 10px !important;
          }
        }
        .max-w-7xl {
          max-width: none !important;
        }
      `}</style>

      {/* Hero Header Section */}
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
            Our Locations
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mobile-section-padding py-20" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
        <div className="max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="text-center mb-16">
            <h2 
              style={{ 
                fontFamily: 'Philosopher, serif',
                fontSize: '36px',
                marginBottom: '16px',
                color: '#000',
                fontWeight: '400'
              }}
            >
              Visit Us at Any of Our <span style={{ color: '#0f8987' }}>Convenient Locations</span>
            </h2>
            <p 
              style={{
                color: '#666',
                fontSize: '17px',
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Dr. AKHIL'S Physiotherapy Clinic serves the community through multiple state-of-the-art facilities. Each location offers specialized services with the same commitment to excellence in care.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
                style={{
                  border: '1px solid #e5e5e5',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index ? '0 12px 24px rgba(0,0,0,0.15)' : '0 4px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => openGoogleMaps(location.address)}
              >
                {/* Location Image */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <ImageWithFallback
                    src={location.image}
                    alt={location.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  {/* Overlay Badge */}
                  <div 
                    className="absolute top-4 left-4"
                    style={{
                      backgroundColor: 'rgba(193, 245, 241, 0.95)',
                      color: '#0f8987',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    Location {index + 1}
                  </div>
                </div>

                {/* Location Details */}
                <div style={{ padding: '28px' }}>
                  {/* Location Name */}
                  <h3 
                    style={{ 
                      fontFamily: 'Philosopher, serif',
                      fontSize: '24px',
                      marginBottom: '20px',
                      color: '#0f8987',
                      fontWeight: '400'
                    }}
                  >
                    {location.name}
                  </h3>
                  
                  {/* Contact Information */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div 
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#c1f5f1'
                        }}
                      >
                        <MapPin size={18} style={{ color: '#0f8987' }} />
                      </div>
                      <p 
                        style={{
                          fontSize: '14px',
                          color: '#666',
                          lineHeight: '1.6',
                          fontFamily: 'Poppins, sans-serif',
                          marginTop: '6px'
                        }}
                      >
                        {location.address}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#c1f5f1'
                        }}
                      >
                        <Phone size={18} style={{ color: '#0f8987' }} />
                      </div>
                      <p 
                        style={{
                          fontSize: '14px',
                          color: '#666',
                          fontFamily: 'Poppins, sans-serif',
                          marginTop: '6px'
                        }}
                      >
                        {location.phone}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div 
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#c1f5f1'
                        }}
                      >
                        <Clock size={18} style={{ color: '#0f8987' }} />
                      </div>
                      <p 
                        style={{
                          fontSize: '14px',
                          color: '#666',
                          fontFamily: 'Poppins, sans-serif',
                          marginTop: '6px'
                        }}
                      >
                        {location.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div 
            className="mt-16 text-center p-10 rounded-xl"
            style={{
              backgroundColor: 'white',
              border: '1px solid #e5e5e5'
            }}
          >
            <h3 
              style={{ 
                fontFamily: 'Philosopher, serif',
                fontSize: '28px',
                marginBottom: '12px',
                color: '#000',
                fontWeight: '400'
              }}
            >
              Need Help Finding Us?
            </h3>
            <p 
              style={{
                color: '#666',
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '24px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Our team is here to help you find the most convenient location for your needs. Contact us today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+15551234567"
                className="transition-all duration-300"
                style={{
                  backgroundColor: '#0f8987',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '500',
                  fontFamily: 'Poppins, sans-serif',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                <Phone size={18} />
                Call Us
              </a>
              <button
                className="transition-all duration-300"
                style={{
                  backgroundColor: 'white',
                  color: '#0f8987',
                  border: '2px solid #0f8987',
                  padding: '12px 32px',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '500',
                  fontFamily: 'Poppins, sans-serif',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0f8987';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0f8987';
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}