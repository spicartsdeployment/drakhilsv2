import React from 'react';
import { Link } from '../App';
import { Heart, Users, Award, Calendar, MapPin, Phone, Search, Star, Activity, Stethoscope, UserRound, MessageCircle, Brain, Apple, Leaf, Baby, Monitor, Mail, Clock, Home, Ambulance, HeartPulse } from 'lucide-react';
import { RoundedArrow } from './RoundedArrow';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { PopupModal } from './PopupModal';
import { OrbBackground } from './OrbBackground';
import { WhatWeAreSection } from './WhatWeAreSection';
import { ClientTestimonialsSection } from './ClientTestimonialsSection';
import { ScheduleAppointmentSection } from './ScheduleAppointmentSection';
import { FunctionalRestorationSection } from './FunctionalRestorationSection';
import { QualityRehabServicesSection } from './QualityRehabServicesSection';

export function HomePage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [currentHeroText, setCurrentHeroText] = React.useState(0);
  const [hotspotSectionVisible, setHotspotSectionVisible] = React.useState(false);
  const hotspotSectionRef = React.useRef<HTMLElement>(null);
  const [showPopup, setShowPopup] = React.useState(false);

  const heroRotatingTexts = [
    'Meet the Best\nPhysiotherapists\nin Telugu States',
    'Meet the Best\nHealthcare Professionals\nin Telugu States',
    'Meet the Best\nRehabilitation Experts\nin Telugu States'
  ];

  const testimonials = [
    {
      text: "After my knee surgery, I was struggling to walk. The orthopedic rehabilitation program at Dr. Akhil's was incredible. The physiotherapists were patient, professional, and truly cared about my recovery. I'm now back to playing tennis!",
      name: "Rajesh Kumar",
      title: "Orthopedic Patient"
    },
    {
      text: "My daughter had speech difficulties and we were so worried. The speech therapy team here is amazing! They made learning fun and engaging. Within 6 months, her confidence and communication improved dramatically. Thank you Dr. Akhil's!",
      name: "Priya Sharma",
      title: "Parent of Pediatric Patient"
    },
    {
      text: "Following my stroke, I thought I'd never regain my independence. The neurological rehabilitation program gave me hope and results. The entire team supported me every step of the way. I'm now able to do daily activities on my own.",
      name: "Mohan Reddy",
      title: "Neurological Patient"
    },
    {
      text: "As someone who leads a sedentary lifestyle, I developed severe neck stiffness and headaches. Dr. Akhil identified the issue and guided me through stretches, posture correction, and strengthening. The pain has reduced drastically and I've also become more aware of how I sit and work. His methods are practical and easy to follow.",
      name: "Vikram T.",
      title: "Freelance Graphic Artist"
    },
    {
      text: "As an athlete, recovering from a sports injury was crucial for my career. The sports rehabilitation specialists understood my goals and created a perfect recovery plan. I'm back on the field, stronger than ever!",
      name: "Vikram Singh",
      title: "Sports Rehabilitation Patient"
    },
    {
      text: "The cardio rehabilitation program saved my life. After my heart surgery, I was scared and unsure. The team guided me with exercises, diet plans, and emotional support. I feel healthier and more energetic than I have in years.",
      name: "Suresh Patel",
      title: "Cardio Rehabilitation Patient"
    },
    {
      text: "My mother is 78 and was having mobility issues. The geriatric rehabilitation team was so gentle and understanding. They created exercises perfect for her age and condition. She's now more active and independent. Highly recommend!",
      name: "Anjali Desai",
      title: "Family of Geriatric Patient"
    }
  ];

  // Auto-scroll testimonials every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-scroll hero text every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroText((prev) => (prev + 1) % heroRotatingTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroRotatingTexts.length]);

  // Intersection Observer for Hotspot Section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHotspotSectionVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (hotspotSectionRef.current) {
      observer.observe(hotspotSectionRef.current);
    }

    return () => {
      if (hotspotSectionRef.current) {
        observer.unobserve(hotspotSectionRef.current);
      }
    };
  }, []);

  // Show popup once per browser session
  React.useEffect(() => {
    const hasSeenPopupThisSession = sessionStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenPopupThisSession) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Appointment request submitted! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Popup Modal */}
      <PopupModal isOpen={showPopup} onClose={handleClosePopup} />

      {/* Hero Section */}
      <section className="relative w-full h-[700px] lg:h-[800px] overflow-hidden bg-black">
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXBpc3QlMjBoZWxwaW5nJTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY1NTU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Physiotherapy Treatment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
        />

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 flex items-start pt-40 lg:pt-48"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-start gap-8">
              {/* Left - Title with Railway Station Animation */}
              <div className="max-w-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentHeroText}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeInOut'
                    }}
                    className="text-white text-left"
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                      fontWeight: 400,
                      lineHeight: '1.3',
                      textShadow: '2px 4px 8px rgba(0,0,0,0.5)',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {heroRotatingTexts[currentHeroText]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Right - Search Bar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hidden lg:block"
              >
                <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2" style={{ minWidth: '350px' }}>
                  <Search size={20} className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Specialist"
                    className="flex-1 px-2 py-2 outline-none text-gray-700"
                  />
                  <button
                    className="px-6 py-2 rounded-full text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: '#0f8987' }}
                  >
                    Search
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Center Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute inset-0 flex items-center px-4 pointer-events-none"
          style={{ paddingTop: '280px', zIndex: 10 }}
        >
          <div className="max-w-4xl mx-auto text-center" style={{ marginTop: 'clamp(50px, 10vw, 80px)' }}>
            <p className="text-white leading-relaxed" style={{ fontFamily: 'Poppins, Roboto, serif, sans-serif', fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)', fontWeight: 100, textShadow: '1px 2px 4px rgba(0,0,0,0.6)', marginBottom: 'clamp(30px, 8vw, 50px)' }}>
              Welcome to Dr. Akhil's Rehab Center – where expert care meets heartfelt commitment.
              We specialize in providing holistic, patient-focused rehabilitation designed to restore
              independence, mobility, and overall well-being. Backed by advanced therapies and a deeply
              compassionate team, our mission is to guide every individual toward a healthier, more
              empowered life.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12 md:mb-0 pointer-events-auto"
            >
              <Link
                to="/register-appointment"
                className="px-8 py-3 rounded-full transition-transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto"
                style={{ backgroundColor: '#0f8987', color: 'white', minWidth: '220px', maxWidth: '280px', justifyContent: 'center' }}
              >
                <MessageCircle size={20} />
                <span>Talk to Expert</span>
              </Link>
              <Link
                to="/resources/about-site"
                className="px-8 py-3 rounded-full border-2 border-white text-white transition-all hover:bg-white hover:text-black flex items-center gap-2 overflow-hidden w-full sm:w-auto"
                style={{ minWidth: '220px', maxWidth: '280px', justifyContent: 'center' }}
              >
                <RoundedArrow size={20} />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{
                    delay: 1.5,
                    duration: 1.5,
                    ease: "linear"
                  }}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Explore Dr Akhil's
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pointer-events-none" style={{ zIndex: 5 }}>
          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 pointer-events-auto"
          >
            <button className="w-3 h-3 rounded-full bg-white transition-transform hover:scale-125" aria-label="Slide 1" />
            <button className="w-3 h-3 rounded-full bg-white/40 transition-transform hover:scale-125" aria-label="Slide 2" />
            <button className="w-3 h-3 rounded-full bg-white/40 transition-transform hover:scale-125" aria-label="Slide 3" />
          </motion.div>
        </div>
      </section>

      {/* Care Services Section */}
      <section className="pt-16 pb-0" style={{ backgroundColor: '#DEE8DE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start">
            {/* Left Side - Images with Badge */}
            <div className="relative flex items-start justify-center" style={{ gap: '15px', maxWidth: '850px', marginLeft: '0', marginRight: 'auto' }}>
              {/* Left Large Image - 55% width */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-shrink-0 overflow-hidden relative"
                style={{
                  width: '55%',
                  borderRadius: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwcGh5c2lvdGhlcmFweXxlbnwxfHx8fDE3NjYwNjg2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Physiotherapy Treatment"
                  className="w-full h-full object-cover"
                  style={{ height: '571px' }}
                />
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <h3 className="text-white text-center">Transitional Care</h3>
                </div>
              </motion.div>

              {/* Center Badge - Positioned Between Images */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className="absolute flex flex-col items-center justify-center text-center"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  backgroundColor: '#1a4d4d',
                  boxShadow: '0 0 0 8px #DEE8DE, 0 0 0 10px rgba(255,255,255,0.3), 0 10px 40px rgba(0,0,0,0.2)',
                  zIndex: 30,
                  left: '56%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="text-white" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: '1' }}>
                  <AnimatedCounter start={1} end={12} suffix="+" />
                </div>
                <span className="text-white px-3" style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '1px', lineHeight: '1.3' }}>YEARS OF EXPERTISE</span>
              </motion.div>

              {/* Right Stacked Images - 38% width */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col flex-shrink-0"
                style={{
                  width: '40%',
                  gap: '15px'
                }}
              >
                {/* Top Image */}
                <div
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjYwNjg2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Physical Therapy Exercise"
                    className="w-full object-cover"
                    style={{ height: '278px' }}
                  />
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="text-white text-center" style={{ fontSize: '1rem' }}>Rehabilitation Medicine</h3>
                  </div>
                </div>

                {/* Bottom Image */}
                <div
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY2MDY4Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Spine Therapy Treatment"
                    className="w-full object-cover"
                    style={{ height: '278px' }}
                  />
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="text-white text-center" style={{ fontSize: '1rem' }}>Continuum Home Care</h3>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-between"
              style={{ minHeight: '571px' }}
            >
              {/* Top Section - Label and Heading */}
              <div className="space-y-6">
                {/* Small Label */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5" style={{ backgroundColor: '#0f8987' }}></div>
                  <span className="text-gray-600 text-sm tracking-wider uppercase">Our Trusted Support</span>
                </div>

                {/* Heading */}
                <h2 className="leading-tight">
                  Passionate About <span style={{ color: '#0f8987' }}>Providing Expert Care</span> And Support
                </h2>

                {/* Paragraph */}
                <p className="text-gray-600 leading-relaxed">
                  Behind every successful recovery is a physiotherapist's passion for care, relentless support, and expert guidance relieving pain, and changing lives beyond treatment.
                </p>

                {/* Testimonial Quote */}
                <p className="text-gray-700 italic leading-relaxed border-l-4 pl-4" style={{ borderColor: '#0f8987' }}>
                  "True Healing Comes From More Than Treatments—It's Built On Trust, Patience, And Compassion, Reflected In Each Small Victory And Ongoing Encouragement. Effective Care Goes Beyond Treatment."
                </p>

                {/* Doctor Info */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9maWxlJTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2MDU2MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Dr. Akhil"
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Senior Doctor</p>
                      <p className="text-gray-800" style={{ fontWeight: 500 }}>Dr. Akhil</p>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="text-4xl" style={{ fontFamily: 'cursive', color: '#0f8987', fontWeight: 300 }}>
                    Akhil
                  </div>
                </div>
              </div>

              {/* Bottom Section - Learn More Button */}
              <div className="pt-8 mt-auto">
                <style>{`
                  .learn-more-button-v2 {
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

                  .learn-more-button-v2:hover {
                    background-color: white;
                    color: #0f8987;
                    transform: scale(1.05);
                  }

                  .learn-more-arrow-circle {
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

                  .learn-more-button-v2:hover .learn-more-arrow-circle {
                    background-color: #0f8987;
                  }

                  .learn-more-arrow-icon {
                    font-family: wdt-ext, sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    color: #0f8987;
                    transform: rotate(0deg);
                    transition: all 0.3s ease;
                    display: inline-block;
                    line-height: 1;
                  }

                  .learn-more-button-v2:hover .learn-more-arrow-icon {
                    color: white;
                    transform: rotate(-45deg);
                  }
                `}</style>

                <Link
                  to="/resources/about-site"
                  className="learn-more-button-v2"
                >
                  <span>Learn More</span>
                  <div className="learn-more-arrow-circle">
                    <span className="learn-more-arrow-icon">→</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Treatment Types Strip */}
        <div className="relative overflow-hidden" style={{ backgroundColor: '#1F3D3F', paddingTop: '24px', paddingBottom: '24px', marginTop: '40px' }}>
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes rotate-star {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            .scroll-container {
              display: flex;
              animation: scroll-left 30s linear infinite;
              white-space: nowrap;
            }
            .scroll-container:hover {
              animation-play-state: paused;
            }
            .rotating-star {
              display: inline-block;
              animation: rotate-star 3s linear infinite;
            }
          `}</style>
          <div className="scroll-container">
            {/* First set of items */}
            <div className="flex items-center gap-8 px-8">
              <span className="text-white text-lg">Joint & Limb Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Spine & Back Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Muscle & Movement Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Nerve Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Joint Care Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Bone And Muscle Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Sports Injury</span>
              <span className="text-white text-lg rotating-star">★</span>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-8 px-8">
              <span className="text-white text-lg">Joint & Limb Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Spine & Back Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Muscle & Movement Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Nerve Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Joint Care Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Bone And Muscle Therapy</span>
              <span className="text-white text-lg rotating-star">★</span>
              <span className="text-white text-lg">Sports Injury</span>
              <span className="text-white text-lg rotating-star">★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Types Scrolling Cards Section */}
      <section className="pt-0 pb-20 relative" style={{ backgroundColor: '#1F3D3F', overflow: 'hidden', width: '100%', maxWidth: '100vw' }}>
        {/* X-ray Background Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png')`,
            backgroundPosition: 'center',
            opacity: 1,
            pointerEvents: 'none'
          }}
        />

        {/* Soft Teal Glow - Top Right Corner */}
        <div
          className="absolute opacity-30 blur-3xl pointer-events-none"
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
          className="absolute opacity-20 blur-2xl pointer-events-none"
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
          className="absolute opacity-10 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #33a9b1 0%, transparent 70%)',
            width: '300px',
            height: '300px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: '#c1f5f1' }}>Explore Our Therapy Types</h2>
            <p className="max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Discover specialized therapies designed to address your unique needs and restore your well-being.
            </p>
          </div>
        </div>

        {/* Scrolling Cards Container - Full Width */}
        <div className="relative overflow-hidden px-4 sm:px-6 z-10" style={{ marginBottom: '40px' }}>
          <style>{`
              @keyframes scroll-cards {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .cards-scroll-container {
                display: flex;
                animation: scroll-cards 25s linear infinite;
                gap: 24px;
                padding: 0;
                margin: 0;
              }
              .cards-scroll-container:hover {
                animation-play-state: paused;
              }
              .therapy-card {
                flex-shrink: 0;
                width: 320px;
                height: 440px;
                border-radius: 28px;
                overflow: visible;
                position: relative;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                cursor: pointer;
              }
              .therapy-card-image-container {
                width: 100%;
                height: 100%;
                border-top-left-radius: 28px;
                border-top-right-radius: 28px;
                border-bottom-left-radius: 28px;
                border-bottom-right-radius: 28px;
                overflow: hidden;
                position: relative;
                mask-image: radial-gradient(circle at calc(100% - 30px) 30px, transparent 40px, black 41px);
                -webkit-mask-image: radial-gradient(circle at calc(100% - 30px) 30px, transparent 40px, black 41px);
              }
              .therapy-card-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
              }
              .therapy-card:hover .therapy-card-image {
                transform: scale(1.05);
              }
              .therapy-card-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
                padding: 24px;
                color: white;
                transition: all 0.4s ease;
              }
              .therapy-card:hover .therapy-card-overlay {
                background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.5) 80%, transparent 100%);
                padding: 32px 24px;
              }
              .therapy-card-title {
                font-size: 1.5rem;
                font-weight: 400;
                margin-bottom: 0;
                font-family: Georgia, 'Times New Roman', serif;
                letter-spacing: 0.5px;
                transition: margin-bottom 0.4s ease;
              }
              .therapy-card:hover .therapy-card-title {
                margin-bottom: 12px;
              }
              .therapy-card-divider {
                width: 0;
                height: 2px;
                background: white;
                margin-bottom: 0;
                transition: all 0.4s ease;
                overflow: hidden;
              }
              .therapy-card:hover .therapy-card-divider {
                width: 100px;
                margin-bottom: 12px;
              }
              .therapy-card-description {
                font-size: 0.95rem;
                font-weight: 300;
                opacity: 0;
                max-height: 0;
                transform: translateY(20px);
                transition: all 0.4s ease;
                font-family: Georgia, 'Times New Roman', serif;
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.9);
                overflow: hidden;
              }
              .therapy-card:hover .therapy-card-description {
                opacity: 1;
                max-height: 200px;
                transform: translateY(0);
              }
              .therapy-card-icon {
                position: absolute;
                top: 0px;
                right: 0px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 14px rgba(15, 137, 135, 0.5);
                z-index: 10;
                text-indent: -9999px;
              }
              .therapy-card:hover .therapy-card-icon {
                background: #0f8987;
                box-shadow: 0 6px 20px rgba(51, 169, 177, 0.5);
              }
              .therapy-card-icon::after {
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
                color: #0f8987;
                transition: 0.3s ease;
                rotate: 0deg;
                text-indent: 0;
              }
              .therapy-card:hover .therapy-card-icon::after {
                transform: rotate(-45deg);
                color: white;
              }
            `}</style>

          <div className="cards-scroll-container">
            {/* First Set of Cards */}
            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdGhlcmFweSUyMHBoeXNpb3RoZXJhcHl8ZW58MXx8fHwxNzY2MDcxMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hand Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Hand Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Specialized treatment focused on restoring hand function, mobility, and strength through personalized rehabilitation techniques.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615997380705-504484cd99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY2MDcxMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Shoulder Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Shoulder Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Expert rehabilitation programs designed to alleviate shoulder pain and improve range of motion for better daily function.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630623093163-6ee6c84d61e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwcmVsaWVmJTIwdGhlcmFweXxlbnwxfHx8fDE3NjYwNzEwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pain Relief"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Pain Relief</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Personalized comfort solutions using advanced techniques to manage and reduce chronic pain effectively.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643237131522-bbf79b062ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNrJTIwd2VsbG5lc3MlMjB0aGVyYXB5fGVufDF8fHx8MTc2NjA3MTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Neck Wellness"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Neck Wellness</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Comprehensive care targeting neck tension, stiffness, and discomfort through specialized therapeutic interventions.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwdGhlcmFweSUyMHJlaGFiaWxpdGF0aW9ufGVufDF8fHx8MTc2NjA3MTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Back Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Back Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Advanced solutions for back pain management and spinal health improvement through evidence-based practices.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwdGhlcmFweSUyMHBoeXNpb3RoZXJhcHl8ZW58MXx8fHwxNzY2MDcxMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Knee Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Knee Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Mobility restoration programs designed to strengthen knee joints and improve overall leg function and stability.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjB0aGVyYXB5fGVufDF8fHx8MTc2NjA3MTA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sports Injury"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Sports Injury</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Athletic recovery programs tailored for sports-related injuries to help athletes return to peak performance safely.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNjYwNjg2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spine Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Spine Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Structural support and alignment correction for optimal spinal health and posture improvement.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdGhlcmFweSUyMHBoeXNpb3RoZXJhcHl8ZW58MXx8fHwxNzY2MDcxMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hand Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Hand Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Specialized treatment focused on restoring hand function, mobility, and strength through personalized rehabilitation techniques.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615997380705-504484cd99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY2MDcxMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Shoulder Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Shoulder Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Expert rehabilitation programs designed to alleviate shoulder pain and improve range of motion for better daily function.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630623093163-6ee6c84d61e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwcmVsaWVmJTIwdGhlcmFweXxlbnwxfHx8fDE3NjYwNzEwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pain Relief"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Pain Relief</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Personalized comfort solutions using advanced techniques to manage and reduce chronic pain effectively.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643237131522-bbf79b062ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNrJTIwd2VsbG5lc3MlMjB0aGVyYXB5fGVufDF8fHx8MTc2NjA3MTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Neck Wellness"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Neck Wellness</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Comprehensive care targeting neck tension, stiffness, and discomfort through specialized therapeutic interventions.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwdGhlcmFweSUyMHJlaGFiaWxpdGF0aW9ufGVufDF8fHx8MTc2NjA3MTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Back Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Back Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Advanced solutions for back pain management and spinal health improvement through evidence-based practices.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <div className="therapy-card-image-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwdGhlcmFweSUyMHBoeXNpb3RoZXJhcHl8ZW58MXx8fHwxNzY2MDcxMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Knee Therapy"
                  className="therapy-card-image"
                />
                <div className="therapy-card-overlay">
                  <h3 className="therapy-card-title">Knee Therapy</h3>
                  <div className="therapy-card-divider"></div>
                  <p className="therapy-card-description">Mobility restoration programs designed to strengthen knee joints and improve overall leg function and stability.</p>
                </div>
              </div>
              <div className="therapy-card-icon"></div>
            </div>

            <div className="therapy-card">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjB0aGVyYXB5fGVufDF8fHx8MTc2NjA3MTA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sports Injury"
                className="therapy-card-image"
              />
              <div className="therapy-card-icon"></div>
              <div className="therapy-card-overlay">
                <h3 className="therapy-card-title">Sports Injury</h3>
                <div className="therapy-card-divider"></div>
                <p className="therapy-card-description">Athletic recovery programs tailored for sports-related injuries to help athletes return to peak performance safely.</p>
              </div>
            </div>

            <div className="therapy-card">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMHRoZXJhcHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNjYwNjg2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Spine Therapy"
                className="therapy-card-image"
              />
              <div className="therapy-card-icon"></div>
              <div className="therapy-card-overlay">
                <h3 className="therapy-card-title">Spine Therapy</h3>
                <div className="therapy-card-divider"></div>
                <p className="therapy-card-description">Structural support and alignment correction for optimal spinal health and posture improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Body Map Section */}
      <section ref={hotspotSectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor: '#dae8e6' }}>
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
          .ripple-background::before {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative min-h-[700px] lg:min-h-[800px] flex items-center justify-center">

            {/* Ripple Animation Background - Behind Skeleton */}
            <div className="ripple-background absolute inset-0" style={{ zIndex: 1 }}></div>

            {/* Central Skeleton Illustration */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
              <img
                src="https://physeo.wpengine.com/wp-content/uploads/2025/07/home-3-hotspot-bg.png"
                alt="Human Body Anatomy"
                className="h-full w-auto max-h-[700px] object-contain opacity-90"
              />
            </div>

            {/* Hotspots & Connector Lines Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 3 }}>
              <div className="relative" style={{ width: '200px', height: '700px' }}>
                {/* Neck Hotspot - connects LEFT to Neck Stiffness Card */}
                <div
                  className={`wdt-hotspot-item absolute ${hotspotSectionVisible ? 'hotspot-blink' : ''}`}
                  data-placement="left"
                  style={{
                    left: '50%',
                    top: '12%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.3), 0 0 12px rgba(45, 79, 76, 0.6)',
                    zIndex: 10
                  }}
                />

                {/* Shoulder/Palm Hotspot - connects RIGHT to Palm Discomfort Card */}
                <div
                  className={`wdt-hotspot-item absolute ${hotspotSectionVisible ? 'hotspot-blink' : ''}`}
                  data-placement="right-top"
                  style={{
                    left: '70%',
                    top: '28%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.3), 0 0 12px rgba(45, 79, 76, 0.6)',
                    zIndex: 10
                  }}
                />

                {/* Hand/Wrist Hotspot - connects RIGHT to Hand Tightness Card */}
                <div
                  className={`wdt-hotspot-item absolute ${hotspotSectionVisible ? 'hotspot-blink' : ''}`}
                  data-placement="right-hand"
                  style={{
                    left: 'calc(62% + 75px)',
                    top: '45%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.3), 0 0 12px rgba(45, 79, 76, 0.6)',
                    zIndex: 10
                  }}
                />

                {/* Knee/Leg Hotspot - connects LEFT to Leg Fatigue Card */}
                <div
                  className={`wdt-hotspot-item absolute ${hotspotSectionVisible ? 'hotspot-blink' : ''}`}
                  data-placement="left-bottom"
                  style={{
                    left: '45%',
                    top: '70%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.3), 0 0 12px rgba(45, 79, 76, 0.6)',
                    zIndex: 10
                  }}
                />
              </div>
            </div>

            {/* Left Side Cards */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 4 }}>
              <div className="relative h-full max-w-7xl mx-auto">

                {/* Neck Stiffness */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={hotspotSectionVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute left-2 lg:left-4 top-[15%] w-[300px] sm:w-[360px] pointer-events-auto">
                  <div className="rounded-xl p-4 shadow-xl bg-[#2d4f4c] transition-colors duration-300 hover:bg-[#33a9b1]">
                    <div className="flex gap-4 items-stretch">
                      <div className="w-[100px] h-[100px] rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="Neck Therapy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }}>Neck Stiffness</h3>
                          <p className="mb-2" style={{ fontSize: '13px', lineHeight: '1.5', color: '#d4dedd', fontWeight: '400' }}>
                            Therapeutic Touch, Controlled Motion, Reduce Stiffness
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Leg Fatigue */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={hotspotSectionVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute left-2 lg:left-4 bottom-[15%] w-[300px] sm:w-[360px] pointer-events-auto">
                  <div className="rounded-xl p-4 shadow-xl bg-[#2d4f4c] transition-colors duration-300 hover:bg-[#33a9b1]">
                    <div className="flex gap-4 items-stretch">
                      <div className="w-[100px] h-[100px] rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="Leg Therapy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }}>Leg Fatigue</h3>
                          <p className="mb-2" style={{ fontSize: '13px', lineHeight: '1.5', color: '#d4dedd', fontWeight: '400' }}>
                            Restore Strength and Comfort in Your Legs Through Expert Therapy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="absolute right-0 top-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 4 }}>
              <div className="relative h-full max-w-7xl mx-auto">

                {/* Palm Discomfort */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={hotspotSectionVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute right-2 lg:right-4 top-[23%] w-[300px] sm:w-[360px] pointer-events-auto">
                  <div className="rounded-xl p-4 shadow-xl bg-[#2d4f4c] transition-colors duration-300 hover:bg-[#33a9b1]">
                    <div className="flex gap-4 items-stretch">
                      <div className="w-[100px] h-[100px] rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="Hand Therapy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }}>Palm Discomfort</h3>
                          <p className="mb-2" style={{ fontSize: '13px', lineHeight: '1.5', color: '#d4dedd', fontWeight: '400' }}>
                            Personalized hand therapy to relieve stress and tension.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hand Tightness */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={hotspotSectionVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute right-2 lg:right-4 top-[45%] w-[300px] sm:w-[360px] pointer-events-auto">
                  <div className="rounded-xl p-4 shadow-xl bg-[#2d4f4c] transition-colors duration-300 hover:bg-[#33a9b1]">
                    <div className="flex gap-4 items-stretch">
                      <div className="w-[100px] h-[100px] rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1716996642039-6611a1307f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="Wrist Therapy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }}>Hand Tightness</h3>
                          <p className="mb-2" style={{ fontSize: '13px', lineHeight: '1.5', color: '#d4dedd', fontWeight: '400' }}>
                            Expert care for wrist mobility and hand flexibility
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Are / What We Are Not Section */}
      <WhatWeAreSection />

      {/* Quality Rehab Services Section */}
      <QualityRehabServicesSection />

      {/* Client Testimonials Section */}
      <ClientTestimonialsSection />

      {/* Schedule Appointment Section */}
      <ScheduleAppointmentSection />

      {/* Functional Restoration Section */}
      <FunctionalRestorationSection />

      <Footer />
    </div>
  );
}