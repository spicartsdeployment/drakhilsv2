import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function EventsPage() {
  const events = [
    {
      title: 'Free Community Health Screening',
      date: 'December 15, 2025',
      time: '9:00 AM - 2:00 PM',
      location: 'Main Campus - Downtown',
      description: 'Join us for a free health screening event including blood pressure checks, balance assessments, and consultations with our therapists.',
      type: 'Community Event',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
    },
    {
      title: 'Stroke Recovery Support Group',
      date: 'December 10, 2025',
      time: '6:00 PM - 7:30 PM',
      location: 'North Branch Conference Room',
      description: 'Monthly support group for stroke survivors and their families. Share experiences and learn from others on the recovery journey.',
      type: 'Support Group',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800'
    },
    {
      title: 'Sports Injury Prevention Workshop',
      date: 'December 8, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'South Branch Gym',
      description: 'Learn proper warm-up techniques, injury prevention strategies, and how to recognize warning signs of overuse injuries.',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    },
    {
      title: 'Senior Fitness Class',
      date: 'Every Monday & Wednesday',
      time: '3:00 PM - 4:00 PM',
      location: 'Main Campus - Therapy Gym',
      description: 'Ongoing gentle exercise class designed for seniors focusing on strength, balance, and flexibility.',
      type: 'Recurring Class',
      image: 'https://images.unsplash.com/photo-1594737625785-8e0f5e92c4e9?w=800'
    },
    {
      title: 'Nutrition and Wellness Seminar',
      date: 'December 5, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Educational seminar on nutrition for heart health, diabetes management, and overall wellness. Q&A session included.',
      type: 'Educational Seminar',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800'
    },
    {
      title: 'Parent-Child Physical Activity Day',
      date: 'December 20, 2025',
      time: '11:00 AM - 1:00 PM',
      location: 'Main Campus - Pediatric Gym',
      description: 'Fun activities and games for parents and children to promote physical activity and bonding.',
      type: 'Family Event',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800'
    }
  ];

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
            Upcoming Events & Workshops
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mobile-section-padding py-20" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
        <div className="max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="text-center mb-12">
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
              Join us for educational workshops, support groups, and community events focused on health and wellness. Connect with our expert therapists and meet others on similar health journeys.
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  border: '1px solid #e5e5e5'
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Event Image */}
                  <div className="lg:col-span-4">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      style={{
                        width: '100%',
                        height: '280px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-8 p-8">
                    {/* Type Badge */}
                    <div className="mb-3">
                      <span
                        className="inline-block px-4 py-1.5 rounded-full text-sm"
                        style={{ 
                          backgroundColor: '#c1f5f1', 
                          color: '#0f8987',
                          fontWeight: '500',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {event.type}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h3 
                      style={{ 
                        fontFamily: 'Philosopher, serif',
                        fontSize: '28px',
                        marginBottom: '16px',
                        color: '#000',
                        fontWeight: '400'
                      }}
                    >
                      {event.title}
                    </h3>
                    
                    {/* Event Description */}
                    <p 
                      style={{
                        color: '#666',
                        fontSize: '15px',
                        lineHeight: '1.8',
                        marginBottom: '24px',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {event.description}
                    </p>
                    
                    {/* Event Meta Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="flex items-center justify-center"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#c1f5f1'
                          }}
                        >
                          <Calendar size={20} style={{ color: '#0f8987' }} />
                        </div>
                        <div>
                          <p 
                            style={{
                              fontSize: '13px',
                              color: '#999',
                              marginBottom: '2px',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            Date
                          </p>
                          <p 
                            style={{
                              fontSize: '14px',
                              color: '#333',
                              fontWeight: '500',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            {event.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div 
                          className="flex items-center justify-center"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#c1f5f1'
                          }}
                        >
                          <Clock size={20} style={{ color: '#0f8987' }} />
                        </div>
                        <div>
                          <p 
                            style={{
                              fontSize: '13px',
                              color: '#999',
                              marginBottom: '2px',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            Time
                          </p>
                          <p 
                            style={{
                              fontSize: '14px',
                              color: '#333',
                              fontWeight: '500',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            {event.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div 
                          className="flex items-center justify-center"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#c1f5f1'
                          }}
                        >
                          <MapPin size={20} style={{ color: '#0f8987' }} />
                        </div>
                        <div>
                          <p 
                            style={{
                              fontSize: '13px',
                              color: '#999',
                              marginBottom: '2px',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            Location
                          </p>
                          <p 
                            style={{
                              fontSize: '14px',
                              color: '#333',
                              fontWeight: '500',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>
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
