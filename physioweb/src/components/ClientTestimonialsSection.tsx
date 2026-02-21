import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: number;
  name: string;
  category: string;
  rating: number;
  testimonial: string;
  image: string;
}

export function ClientTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Lea Gerti',
      category: 'Pain Relief',
      rating: 4,
      testimonial: 'After my hip replacement, I feared limited activity. The personalized rehabilitation plan and motivation here restored my confidence. Now, I\'m dancing again regularly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      category: 'Sports Recovery',
      rating: 5,
      testimonial: 'The sports rehabilitation program helped me recover from my ACL injury faster than I expected. The therapists were knowledgeable and supportive throughout my journey.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      category: 'Chronic Pain Management',
      rating: 5,
      testimonial: 'Living with chronic back pain was affecting every aspect of my life. The comprehensive treatment plan and caring staff have given me my life back. I can finally sleep through the night.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      category: 'Neurological Recovery',
      rating: 4,
      testimonial: 'After my stroke, I thought I\'d never regain my independence. The dedicated neuro-rehabilitation team worked with me every step of the way. I\'m walking again and feeling stronger each day.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Emily Thompson',
      category: 'Post-Surgery Care',
      rating: 5,
      testimonial: 'The post-operative care I received was exceptional. Every session was tailored to my recovery needs, and the staff always made me feel comfortable and encouraged.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop'
    }
  ];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="relative min-h-[600px]" 
      style={{ 
        backgroundColor: '#1F3D3F',
        backgroundImage: `url('https://physeo.wpengine.com/wp-content/uploads/2025/07/home-1-testimonial-bg-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      {/* Gradient Overlay - Transparent left to dark teal right */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, rgba(8, 8, 8, 0) 18%, #1F3D3F 65%)'
        }}
      />

      {/* X-ray Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage: `url('https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png')`,
          backgroundPosition: 'center',
          pointerEvents: 'none'
        }}
      />

      {/* Soft Teal Glow - Top Right Corner */}
      <div 
        className="absolute opacity-30 blur-3xl pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle, #0f8987 0%, transparent 70%)',
          width: '200px',
          height: '200px',
          top: '-50px',
          right: '-50px'
        }}
      />

      {/* Soft Teal Glow - Bottom Left Corner */}
      <div 
        className="absolute opacity-20 blur-2xl pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle, #c1f5f1 0%, transparent 70%)',
          width: '150px',
          height: '150px',
          bottom: '-30px',
          left: '-30px'
        }}
      />

      {/* Soft Teal Glow - Center */}
      <div 
        className="absolute opacity-10 blur-3xl pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle, #33a9b1 0%, transparent 70%)',
          width: '300px',
          height: '300px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left Side - Empty space (shows background image through transparent gradient) */}
          <div className="hidden lg:block" />

          {/* Right Side - Testimonial Content */}
          <div className="relative flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="w-full">
              
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%',
                    backgroundColor: '#33a9b1'
                  }} 
                />
                <span 
                  style={{ 
                    color: '#33a9b1',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase'
                  }}
                >
                  CLIENT FEEDBACK
                </span>
              </div>

              {/* Heading */}
              <h2 
                className="mb-8"
                style={{ 
                  color: 'white',
                  lineHeight: '1.3',
                  letterSpacing: '-0.5px'
                }}
              >
                Hear Our <span style={{ color: '#33a9b1' }}>Clients Share True Stories</span> Of Health And Healing
              </h2>

              {/* Testimonial Text with Bottom Animation */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`text-${currentTestimonial.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* Testimonial Text */}
                  <p 
                    className="mb-8"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '16px',
                      lineHeight: '1.75',
                      letterSpacing: '0.2px'
                    }}
                  >
                    {currentTestimonial.testimonial}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5"
                        style={{
                          fill: star <= currentTestimonial.rating ? '#fbbf24' : 'transparent',
                          stroke: star <= currentTestimonial.rating ? '#fbbf24' : 'rgba(255, 255, 255, 0.3)',
                          strokeWidth: 1.5
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Client Info with Left/Right Animation */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`info-${currentTestimonial.id}`}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-12">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="rounded-full object-cover"
                      style={{ 
                        width: '60px', 
                        height: '60px',
                        border: '3px solid rgba(51, 169, 177, 0.3)'
                      }}
                    />
                    <div>
                      <h4 
                        style={{ 
                          color: 'white',
                          fontSize: '18px',
                          fontWeight: '600',
                          marginBottom: '4px',
                          letterSpacing: '-0.2px'
                        }}
                      >
                        {currentTestimonial.name}
                      </h4>
                      <p 
                        style={{ 
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '14px',
                          fontWeight: '400'
                        }}
                      >
                        {currentTestimonial.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="group flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#33a9b1';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ChevronLeft 
                    className="transition-colors duration-300"
                    style={{ 
                      width: '24px',
                      height: '24px',
                      strokeWidth: 2.5,
                      color: '#33a9b1'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#33a9b1';
                    }}
                  />
                </button>

                <button
                  onClick={handleNext}
                  className="group flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#33a9b1';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ChevronRight 
                    className="transition-colors duration-300"
                    style={{ 
                      width: '24px',
                      height: '24px',
                      strokeWidth: 2.5,
                      color: '#33a9b1'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#33a9b1';
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Treatment Types Strip */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#1F3D3F', paddingTop: '24px', paddingBottom: '24px' }}>
        <style>{`
          @keyframes scroll-left-testimonial {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes rotate-star-testimonial {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .scroll-container-testimonial {
            display: flex;
            animation: scroll-left-testimonial 30s linear infinite;
            white-space: nowrap;
          }
          .scroll-container-testimonial:hover {
            animation-play-state: paused;
          }
          .rotating-star-testimonial {
            display: inline-block;
            animation: rotate-star-testimonial 3s linear infinite;
          }
        `}</style>
        <div className="scroll-container-testimonial">
          {/* First set of items */}
          <div className="flex items-center gap-8 px-8">
            <span className="text-white text-lg">Apollo Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Fortis Healthcare</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Max Healthcare</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">KIMS Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Yashoda Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Care Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Rainbow Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 px-8">
            <span className="text-white text-lg">Apollo Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Fortis Healthcare</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Max Healthcare</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">KIMS Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Yashoda Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Care Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
            <span className="text-white text-lg">Rainbow Hospitals</span>
            <span className="text-white text-lg rotating-star-testimonial">★</span>
          </div>
        </div>
      </div>
    </section>
  );
}