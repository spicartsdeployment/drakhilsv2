import React, { useState, useEffect } from 'react';
import { Link, useParams } from '../App';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { Facebook, Linkedin, Mail, Users, Target, Award, Activity, Briefcase, GraduationCap, MessageSquare } from 'lucide-react';

interface TherapistData {
  id: number;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
  facebook: string;
  linkedin: string;
  email: string;
  skills: {
    name: string;
    percentage: number;
  }[];
  clinicalBackground: string;
  therapyJourney: string;
  professionalExperience: string;
  physioExperience: string;
}

const therapistsData: { [key: string]: TherapistData } = {
  '1': {
    id: 1,
    name: 'Dr. Rohan Khanna',
    title: 'Manual Therapy Specialist',
    specialty: 'Pain Specialist',
    experience: '1-4 Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:rohan.khanna@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 93 },
      { name: 'Rehab Program Design', percentage: 97 },
      { name: 'Patient Interaction', percentage: 95 },
      { name: 'Recovery Monitoring', percentage: 90 }
    ],
    clinicalBackground: 'With over a decade of clinical practice in physiotherapy and manual therapy, Aarav has worked extensively in hospitals, rehabilitation centers.. His expertise covers postural correction, pain management.',
    therapyJourney: 'Over eight years, Aarav has specialized in advanced myofascial release, dry needling, and neuromuscular re-education. His therapy journey reflects a deep commitment.',
    professionalExperience: 'Aarav has led numerous rehabilitation programs across multi-specialty hospitals and sports medicine centers, focusing on evidence-based treatment protocols.',
    physioExperience: 'His physiotherapy experience spans orthopedic, sports, and neurological rehabilitation, with a special focus on chronic pain management and functional restoration.'
  },
  '2': {
    id: 2,
    name: 'Dr. Anjali Desai',
    title: 'Pain Consultant',
    specialty: 'Pain Specialist',
    experience: '1-4 Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:anjali.desai@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 93 },
      { name: 'Rehab Program Design', percentage: 97 },
      { name: 'Patient Interaction', percentage: 95 },
      { name: 'Recovery Monitoring', percentage: 90 }
    ],
    clinicalBackground: 'With over a decade of clinical practice in physiotherapy and manual therapy, Anjali has worked extensively in hospitals, rehabilitation centers.. Her expertise covers postural correction, pain management.',
    therapyJourney: 'Over eight years, Anjali has specialized in advanced myofascial release, dry needling, and neuromuscular re-education. Her therapy journey reflects a deep commitment.',
    professionalExperience: 'Anjali has led numerous rehabilitation programs across multi-specialty hospitals and sports medicine centers, focusing on evidence-based treatment protocols.',
    physioExperience: 'Her physiotherapy experience spans orthopedic, sports, and neurological rehabilitation, with a special focus on chronic pain management and functional restoration.'
  },
  '3': {
    id: 3,
    name: 'Dr. Arjun Mehta',
    title: 'Orthopedic Rehab Expert',
    specialty: 'Orthopedic Specialist',
    experience: '5-8 Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:arjun.mehta@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 95 },
      { name: 'Rehab Program Design', percentage: 98 },
      { name: 'Patient Interaction', percentage: 96 },
      { name: 'Recovery Monitoring', percentage: 92 }
    ],
    clinicalBackground: 'With extensive experience in orthopedic rehabilitation, Arjun has worked with post-surgical patients and athletes recovering from injuries.',
    therapyJourney: 'Specializing in joint mobilization, therapeutic exercises, and biomechanical analysis for optimal recovery outcomes.',
    professionalExperience: 'Led orthopedic rehabilitation departments in leading hospitals, developing innovative treatment protocols for faster recovery.',
    physioExperience: 'Expert in post-operative care, sports injury rehabilitation, and musculoskeletal disorder management.'
  },
  '4': {
    id: 4,
    name: 'Dr. Neha Sharma',
    title: 'Mobility Recovery Therapist',
    specialty: 'Occupational Therapy',
    experience: '3-6 Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:neha.sharma@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 91 },
      { name: 'Rehab Program Design', percentage: 94 },
      { name: 'Patient Interaction', percentage: 97 },
      { name: 'Recovery Monitoring', percentage: 89 }
    ],
    clinicalBackground: 'Neha specializes in helping patients regain independence through occupational therapy and mobility restoration.',
    therapyJourney: 'Focused on activities of daily living (ADL) training, adaptive equipment prescription, and functional capacity evaluation.',
    professionalExperience: 'Worked with stroke survivors, elderly patients, and individuals with developmental disabilities.',
    physioExperience: 'Expert in neurological rehabilitation, geriatric care, and community-based rehabilitation programs.'
  },
  '5': {
    id: 5,
    name: 'Dr. Vikram Patel',
    title: 'Sports Rehabilitation Specialist',
    specialty: 'Sports Medicine',
    experience: '6-10 Years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:vikram.patel@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 96 },
      { name: 'Rehab Program Design', percentage: 99 },
      { name: 'Patient Interaction', percentage: 94 },
      { name: 'Recovery Monitoring', percentage: 95 }
    ],
    clinicalBackground: 'Vikram has worked with professional athletes and sports teams, specializing in injury prevention and performance optimization.',
    therapyJourney: 'Advanced training in sports-specific rehabilitation, return-to-sport protocols, and biomechanical assessment.',
    professionalExperience: 'Team physiotherapist for national-level sports teams and consultant for Olympic athletes.',
    physioExperience: 'Expert in ACL reconstruction rehab, shoulder injuries, and athletic performance enhancement.'
  },
  '6': {
    id: 6,
    name: 'Dr. Priya Reddy',
    title: 'Neurological Recovery Expert',
    specialty: 'Neuro Rehabilitation',
    experience: '4-7 Years',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:priya.reddy@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 92 },
      { name: 'Rehab Program Design', percentage: 96 },
      { name: 'Patient Interaction', percentage: 98 },
      { name: 'Recovery Monitoring', percentage: 93 }
    ],
    clinicalBackground: 'Priya specializes in neurological rehabilitation for stroke, spinal cord injuries, and neurodegenerative conditions.',
    therapyJourney: 'Expertise in neurodevelopmental treatment (NDT), constraint-induced movement therapy, and gait training.',
    professionalExperience: 'Led neuro-rehabilitation units in tertiary care hospitals with focus on functional independence.',
    physioExperience: 'Specialist in stroke rehabilitation, Parkinson\'s disease management, and multiple sclerosis care.'
  },
  '7': {
    id: 7,
    name: 'Dr. Aditya Singh',
    title: 'Cardio Rehabilitation Specialist',
    specialty: 'Cardiac Care',
    experience: '5-9 Years',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:aditya.singh@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 88 },
      { name: 'Rehab Program Design', percentage: 95 },
      { name: 'Patient Interaction', percentage: 96 },
      { name: 'Recovery Monitoring', percentage: 97 }
    ],
    clinicalBackground: 'Aditya has extensive experience in cardiac rehabilitation, helping patients recover from heart conditions and surgeries.',
    therapyJourney: 'Specialized in exercise prescription for cardiac patients, risk factor modification, and lifestyle counseling.',
    professionalExperience: 'Consultant physiotherapist for cardiac care units in leading hospitals with proven patient outcomes.',
    physioExperience: 'Expert in post-MI rehabilitation, heart failure management, and preventive cardiology programs.'
  },
  '8': {
    id: 8,
    name: 'Dr. Kavya Iyer',
    title: 'Pediatric Therapy Specialist',
    specialty: 'Pediatric Care',
    experience: '2-5 Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:kavya.iyer@drakhils.com',
    skills: [
      { name: 'Manual Therapy', percentage: 90 },
      { name: 'Rehab Program Design', percentage: 93 },
      { name: 'Patient Interaction', percentage: 99 },
      { name: 'Recovery Monitoring', percentage: 91 }
    ],
    clinicalBackground: 'Kavya specializes in pediatric physiotherapy, working with children with developmental delays and disabilities.',
    therapyJourney: 'Expertise in early intervention, cerebral palsy management, and sensory integration therapy.',
    professionalExperience: 'Worked in specialized pediatric rehabilitation centers and schools for children with special needs.',
    physioExperience: 'Expert in developmental assessment, family-centered care, and play-based therapy approaches.'
  }
};

export function TherapistBioPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'experience' | 'qualification' | 'reviews'>('experience');
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [animateProgress, setAnimateProgress] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  // Trigger progress bar animation when qualification tab is clicked
  useEffect(() => {
    if (activeTab === 'qualification') {
      setAnimateProgress(false);
      setTimeout(() => {
        setAnimateProgress(true);
      }, 100);
    }
  }, [activeTab]);

  const therapist = therapistsData[id || '1'] || therapistsData['1'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Appointment request:', formData);
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

        <div className="relative max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6" style={{ marginTop: '105px' }}>
            <BackButton />
          </div>
          
          {/* Title */}
          <h1 
            className="text-white mb-4 text-center"
            style={{ 
              letterSpacing: '0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {therapist.name}
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2">
            <Link 
              to="/" 
              className="text-white hover:opacity-80 transition-opacity"
              style={{ fontSize: '14px' }}
            >
              Home
            </Link>
            <span className="text-white" style={{ fontSize: '14px' }}>/</span>
            <span className="text-white" style={{ fontSize: '14px' }}>{therapist.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mobile-section-padding py-20">
        <div className="max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile */}
            <div className="lg:col-span-2">
              {/* Profile Card */}
              <div 
                className="rounded-3xl overflow-hidden shadow-lg mb-8"
                style={{
                  background: 'linear-gradient(135deg, #e8e8e3 0%, #f0f0eb 100%)'
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative" style={{ height: '400px' }}>
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                        background: '#d0d0c8'
                      }}
                    >
                      <img
                        src={therapist.image}
                        alt={therapist.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col justify-center">
                    <h2 
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '32px',
                        fontWeight: '400',
                        color: '#2d3748',
                        marginBottom: '8px'
                      }}
                    >
                      {therapist.name}
                    </h2>
                    <p 
                      style={{
                        fontSize: '16px',
                        color: '#4a5568',
                        marginBottom: '24px'
                      }}
                    >
                      {therapist.title}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <span style={{ color: '#718096', fontSize: '14px' }}>Experience: </span>
                        <span style={{ color: '#2d3748', fontSize: '14px', fontWeight: '500' }}>{therapist.experience}</span>
                      </div>
                      <div>
                        <span style={{ color: '#718096', fontSize: '14px' }}>Specialized In: </span>
                        <span style={{ color: '#2d3748', fontSize: '14px', fontWeight: '500' }}>{therapist.specialty}</span>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex items-center gap-3">
                      <span style={{ color: '#2d3748', fontSize: '14px', fontWeight: '500' }}>Social Media:</span>
                      <a
                        href={therapist.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                        style={{ backgroundColor: '#2d4a4a', color: 'white' }}
                      >
                        <Facebook size={16} />
                      </a>
                      <a
                        href={therapist.email}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                        style={{ backgroundColor: '#2d4a4a', color: 'white' }}
                      >
                        <Mail size={16} />
                      </a>
                      <a
                        href={therapist.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                        style={{ backgroundColor: '#2d4a4a', color: 'white' }}
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div 
                className="flex gap-3 mb-6"
                style={{
                  border: '1px solid #2d4a4a',
                  borderRadius: '50px',
                  padding: '4px',
                  backgroundColor: 'transparent'
                }}
              >
                <button
                  onClick={() => setActiveTab('experience')}
                  className="relative px-6 py-3 rounded-full flex-1 overflow-hidden flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: activeTab === 'experience' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'experience' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'experience') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'experience') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'experience' && (
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
                  <Briefcase size={18} style={{ position: 'relative', zIndex: 1 }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>Field Experience</span>
                </button>
                <button
                  onClick={() => setActiveTab('qualification')}
                  className="relative px-6 py-3 rounded-full flex-1 overflow-hidden flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: activeTab === 'qualification' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'qualification' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'qualification') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'qualification') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'qualification' && (
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
                  <GraduationCap size={18} style={{ position: 'relative', zIndex: 1 }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>Qualification</span>
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className="relative px-6 py-3 rounded-full flex-1 overflow-hidden flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: activeTab === 'reviews' ? '#2d4a4a' : 'transparent',
                    color: activeTab === 'reviews' ? 'white' : '#2d4a4a',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'reviews') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(0)';
                      }
                      target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'reviews') {
                      const target = e.currentTarget;
                      const span = target.querySelector('.hover-bg') as HTMLElement;
                      if (span) {
                        span.style.transform = 'translateX(-100%)';
                      }
                      target.style.color = '#2d4a4a';
                    }
                  }}
                >
                  {activeTab !== 'reviews' && (
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
                  <MessageSquare size={18} style={{ position: 'relative', zIndex: 1 }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>Doctor Reviews</span>
                </button>
              </div>

              {/* Tab Content */}
              <div 
                style={{
                  backgroundColor: 'transparent',
                  padding: '30px 0'
                }}
              >
                {activeTab === 'experience' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Clinical Background */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#2d4a4a', color: 'white' }}
                        >
                          <Users size={28} />
                        </div>
                        <span 
                          style={{ 
                            fontSize: '48px', 
                            fontFamily: 'Georgia, serif',
                            color: '#2d3748',
                            lineHeight: '1'
                          }}
                        >
                          9+
                        </span>
                      </div>
                      <h3 
                        style={{ 
                          fontSize: '22px', 
                          fontFamily: 'Georgia, serif',
                          color: '#2d3748', 
                          marginBottom: '12px',
                          fontWeight: '400'
                        }}
                      >
                        Clinical Background
                      </h3>
                      <p 
                        style={{ 
                          fontSize: '15px', 
                          color: '#5a5a5a', 
                          lineHeight: '1.7',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                      >
                        {therapist.clinicalBackground}
                      </p>
                    </div>

                    {/* Therapy Journey */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#2d4a4a', color: 'white' }}
                        >
                          <Target size={28} />
                        </div>
                        <span 
                          style={{ 
                            fontSize: '48px', 
                            fontFamily: 'Georgia, serif',
                            color: '#2d3748',
                            lineHeight: '1'
                          }}
                        >
                          8+
                        </span>
                      </div>
                      <h3 
                        style={{ 
                          fontSize: '22px', 
                          fontFamily: 'Georgia, serif',
                          color: '#2d3748', 
                          marginBottom: '12px',
                          fontWeight: '400'
                        }}
                      >
                        Therapy Journey
                      </h3>
                      <p 
                        style={{ 
                          fontSize: '15px', 
                          color: '#5a5a5a', 
                          lineHeight: '1.7',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                      >
                        {therapist.therapyJourney}
                      </p>
                    </div>

                    {/* Professional Experience */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#2d4a4a', color: 'white' }}
                        >
                          <Award size={28} />
                        </div>
                        <span 
                          style={{ 
                            fontSize: '48px', 
                            fontFamily: 'Georgia, serif',
                            color: '#2d3748',
                            lineHeight: '1'
                          }}
                        >
                          10+
                        </span>
                      </div>
                      <h3 
                        style={{ 
                          fontSize: '22px', 
                          fontFamily: 'Georgia, serif',
                          color: '#2d3748', 
                          marginBottom: '12px',
                          fontWeight: '400'
                        }}
                      >
                        Professional Experience
                      </h3>
                      <p 
                        style={{ 
                          fontSize: '15px', 
                          color: '#5a5a5a', 
                          lineHeight: '1.7',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                      >
                        {therapist.professionalExperience}
                      </p>
                    </div>

                    {/* Physio Experience */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#43a2a8', color: 'white' }}
                        >
                          <Activity size={28} />
                        </div>
                        <span 
                          style={{ 
                            fontSize: '48px', 
                            fontFamily: 'Georgia, serif',
                            color: '#2d3748',
                            lineHeight: '1'
                          }}
                        >
                          10+
                        </span>
                      </div>
                      <h3 
                        style={{ 
                          fontSize: '22px', 
                          fontFamily: 'Georgia, serif',
                          color: '#2d3748', 
                          marginBottom: '12px',
                          fontWeight: '400'
                        }}
                      >
                        Physio Experience
                      </h3>
                      <p 
                        style={{ 
                          fontSize: '15px', 
                          color: '#5a5a5a', 
                          lineHeight: '1.7',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                      >
                        {therapist.physioExperience}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'qualification' && (
                  <div>
                    {/* Introductory Text */}
                    <p 
                      style={{ 
                        fontSize: '15px', 
                        color: '#5a5a5a', 
                        lineHeight: '1.8',
                        marginBottom: '40px',
                        fontFamily: 'system-ui, sans-serif'
                      }}
                    >
                      Graduated with honors in Physiotherapy and certified in Advanced Manual Therapy Techniques. Aarav has completed multiple international workshops in myofascial release, posture correction, and movement science. His continued education ensures up-to-date, evidence-based care.
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-8">
                      {/* Bachelor of Physiotherapy */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 
                            style={{ 
                              fontSize: '20px', 
                              fontFamily: 'Georgia, serif',
                              color: '#2d3748',
                              fontWeight: '400'
                            }}
                          >
                            Bachelor of Physiotherapy (BPT)
                          </h4>
                          <span 
                            style={{ 
                              fontSize: '18px', 
                              color: '#2d3748',
                              fontWeight: '500'
                            }}
                          >
                            60%
                          </span>
                        </div>
                        <div 
                          style={{ 
                            width: '100%', 
                            height: '8px', 
                            backgroundColor: '#d0d0d0',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <div 
                            style={{ 
                              width: animateProgress ? '60%' : '0%', 
                              height: '100%', 
                              background: 'linear-gradient(to right, #3cb4b4, #2d8a8a)',
                              borderRadius: '10px',
                              position: 'relative',
                              transition: 'width 1.5s ease-out'
                            }}
                          >
                            <div 
                              style={{ 
                                position: 'absolute',
                                right: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '16px',
                                height: '16px',
                                backgroundColor: '#2d6a6a',
                                borderRadius: '50%',
                                marginRight: '-8px'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Master of Physiotherapy */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 
                            style={{ 
                              fontSize: '20px', 
                              fontFamily: 'Georgia, serif',
                              color: '#2d3748',
                              fontWeight: '400'
                            }}
                          >
                            Master of Physiotherapy (MPT)
                          </h4>
                          <span 
                            style={{ 
                              fontSize: '18px', 
                              color: '#2d3748',
                              fontWeight: '500'
                            }}
                          >
                            90%
                          </span>
                        </div>
                        <div 
                          style={{ 
                            width: '100%', 
                            height: '8px', 
                            backgroundColor: '#d0d0d0',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <div 
                            style={{ 
                              width: animateProgress ? '90%' : '0%', 
                              height: '100%', 
                              background: 'linear-gradient(to right, #3cb4b4, #2d8a8a)',
                              borderRadius: '10px',
                              position: 'relative',
                              transition: 'width 1.5s ease-out 0.2s'
                            }}
                          >
                            <div 
                              style={{ 
                                position: 'absolute',
                                right: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '16px',
                                height: '16px',
                                backgroundColor: '#2d6a6a',
                                borderRadius: '50%',
                                marginRight: '-8px'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Doctor of Physiotherapy */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 
                            style={{ 
                              fontSize: '20px', 
                              fontFamily: 'Georgia, serif',
                              color: '#2d3748',
                              fontWeight: '400'
                            }}
                          >
                            Doctor of Physiotherapy (DPT)
                          </h4>
                          <span 
                            style={{ 
                              fontSize: '18px', 
                              color: '#2d3748',
                              fontWeight: '500'
                            }}
                          >
                            50%
                          </span>
                        </div>
                        <div 
                          style={{ 
                            width: '100%', 
                            height: '8px', 
                            backgroundColor: '#d0d0d0',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <div 
                            style={{ 
                              width: animateProgress ? '50%' : '0%', 
                              height: '100%', 
                              background: 'linear-gradient(to right, #3cb4b4, #2d8a8a)',
                              borderRadius: '10px',
                              position: 'relative',
                              transition: 'width 1.5s ease-out 0.4s'
                            }}
                          >
                            <div 
                              style={{ 
                                position: 'absolute',
                                right: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '16px',
                                height: '16px',
                                backgroundColor: '#2d6a6a',
                                borderRadius: '50%',
                                marginRight: '-8px'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Diploma or Certification Courses */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 
                            style={{ 
                              fontSize: '20px', 
                              fontFamily: 'Georgia, serif',
                              color: '#2d3748',
                              fontWeight: '400'
                            }}
                          >
                            Diploma or Certification Courses
                          </h4>
                          <span 
                            style={{ 
                              fontSize: '18px', 
                              color: '#2d3748',
                              fontWeight: '500'
                            }}
                          >
                            70%
                          </span>
                        </div>
                        <div 
                          style={{ 
                            width: '100%', 
                            height: '8px', 
                            backgroundColor: '#d0d0d0',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <div 
                            style={{ 
                              width: animateProgress ? '70%' : '0%', 
                              height: '100%', 
                              background: 'linear-gradient(to right, #3cb4b4, #2d8a8a)',
                              borderRadius: '10px',
                              position: 'relative',
                              transition: 'width 1.5s ease-out 0.6s'
                            }}
                          >
                            <div 
                              style={{ 
                                position: 'absolute',
                                right: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '16px',
                                height: '16px',
                                backgroundColor: '#2d6a6a',
                                borderRadius: '50%',
                                marginRight: '-8px'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {/* Review 1 - Rachel Morgan */}
                    <div 
                      className="relative"
                      style={{
                        borderBottom: expandedReview === 1 ? 'none' : '1px solid #d0d0d0',
                        paddingBottom: '24px'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Profile Picture */}
                        <img
                          src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Njk2NTYwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Rachel Morgan"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />

                        {/* Review Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 
                                style={{ 
                                  fontSize: '20px', 
                                  color: '#00b8b8',
                                  fontFamily: 'Georgia, serif',
                                  fontWeight: '400',
                                  marginBottom: '4px'
                                }}
                              >
                                Rachel Morgan
                                <span 
                                  style={{ 
                                    fontSize: '14px', 
                                    color: '#718096',
                                    marginLeft: '8px',
                                    fontFamily: 'system-ui, sans-serif'
                                  }}
                                >
                                  (UI/UX DESIGNER @ amazon)
                                </span>
                              </h4>
                              <div style={{ color: '#f59e0b', fontSize: '16px' }}>★★★★☆</div>
                            </div>
                            <button
                              onClick={() => setExpandedReview(expandedReview === 1 ? null : 1)}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '2px solid #2d4a4a',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: '#2d4a4a',
                                fontWeight: '300'
                              }}
                            >
                              {expandedReview === 1 ? '−' : '+'}
                            </button>
                          </div>
                          {expandedReview === 1 && (
                            <p 
                              style={{ 
                                fontSize: '15px', 
                                color: '#5a5a5a', 
                                lineHeight: '1.7',
                                marginTop: '12px',
                                fontFamily: 'system-ui, sans-serif'
                              }}
                            >
                              "After Struggling With Neck Pain For Months, I Finally Found Relief Here. The Team Listened, Cared, And Created A Plan Just For Me. I Can Now Work Comfortably And Sleep Peacefully Again."
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Review 2 - David Lee */}
                    <div 
                      className="relative"
                      style={{
                        borderBottom: expandedReview === 2 ? 'none' : '1px solid #d0d0d0',
                        paddingBottom: '24px'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Profile Picture */}
                        <img
                          src="https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjY5MzQwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="David Lee"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />

                        {/* Review Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 
                                style={{ 
                                  fontSize: '20px', 
                                  color: '#5a5a5a',
                                  fontFamily: 'Georgia, serif',
                                  fontWeight: '400',
                                  marginBottom: '4px'
                                }}
                              >
                                David Lee
                                <span 
                                  style={{ 
                                    fontSize: '14px', 
                                    color: '#718096',
                                    marginLeft: '8px',
                                    fontFamily: 'system-ui, sans-serif'
                                  }}
                                >
                                  ( SCHOOL TEACHER @ cmhss school )
                                </span>
                              </h4>
                              <div style={{ color: '#f59e0b', fontSize: '16px' }}>★★★☆☆</div>
                            </div>
                            <button
                              onClick={() => setExpandedReview(expandedReview === 2 ? null : 2)}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '2px solid #2d4a4a',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: '#2d4a4a',
                                fontWeight: '300'
                              }}
                            >
                              {expandedReview === 2 ? '−' : '+'}
                            </button>
                          </div>
                          {expandedReview === 2 && (
                            <p 
                              style={{ 
                                fontSize: '15px', 
                                color: '#5a5a5a', 
                                lineHeight: '1.7',
                                marginTop: '12px',
                                fontFamily: 'system-ui, sans-serif'
                              }}
                            >
                              Professional service with good results. The treatment helped reduce my back pain significantly. Would recommend to others seeking physiotherapy care.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Review 3 - Elena Cruz */}
                    <div 
                      className="relative"
                      style={{
                        paddingBottom: '24px'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Profile Picture */}
                        <img
                          src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2Njk3NjMxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Elena Cruz"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />

                        {/* Review Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 
                                style={{ 
                                  fontSize: '20px', 
                                  color: '#5a5a5a',
                                  fontFamily: 'Georgia, serif',
                                  fontWeight: '400',
                                  marginBottom: '4px'
                                }}
                              >
                                Elena Cruz
                                <span 
                                  style={{ 
                                    fontSize: '14px', 
                                    color: '#718096',
                                    marginLeft: '8px',
                                    fontFamily: 'system-ui, sans-serif'
                                  }}
                                >
                                  (RESTAURANT MANAGER @ Vivega grande )
                                </span>
                              </h4>
                              <div style={{ color: '#f59e0b', fontSize: '16px' }}>★★★★★</div>
                            </div>
                            <button
                              onClick={() => setExpandedReview(expandedReview === 3 ? null : 3)}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '2px solid #2d4a4a',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: '#2d4a4a',
                                fontWeight: '300'
                              }}
                            >
                              {expandedReview === 3 ? '−' : '+'}
                            </button>
                          </div>
                          {expandedReview === 3 && (
                            <p 
                              style={{ 
                                fontSize: '15px', 
                                color: '#5a5a5a', 
                                lineHeight: '1.7',
                                marginTop: '12px',
                                fontFamily: 'system-ui, sans-serif'
                              }}
                            >
                              Exceptional care and attention to detail! The therapist took time to understand my condition and create a personalized treatment plan. Highly recommend!
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Merged Card - Opening Hours, Skill Overview, Book Appointment */}
              <div 
                className="rounded-2xl p-6 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #1a4d4d 0%, #2d6a6a 100%)',
                  color: 'white'
                }}
              >
                {/* Opening Hours */}
                <div className="mb-8">
                  <h3 className="mb-4" style={{ fontSize: '24px', fontFamily: 'Georgia, serif' }}>
                    Opening Hours
                  </h3>
                  <p style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.9 }}>
                    Subscribe now for expert physiotherapy tips, recovery guides, and wellness updates delivered directly to your inbox!
                  </p>
                  <div className="space-y-3" style={{ fontSize: '14px' }}>
                    <div className="flex justify-between">
                      <span>Monday :</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday :</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday :</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday :</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday :</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday :</span>
                      <span>11:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday :</span>
                      <span>Holiday</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '32px 0' }}></div>

                {/* Skill Overview */}
                <div className="mb-8">
                  <h3 className="mb-6" style={{ fontSize: '24px', fontFamily: 'Georgia, serif' }}>
                    Skill Overview
                  </h3>
                  <div className="space-y-4">
                    {therapist.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2" style={{ fontSize: '14px' }}>
                          <span>• {skill.name}:</span>
                          <span>{skill.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '32px 0' }}></div>

                {/* Book Appointment */}
                <div>
                  <h3 className="mb-6" style={{ fontSize: '24px', fontFamily: 'Georgia, serif' }}>
                    Book Appointment
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-full"
                      style={{
                        backgroundColor: 'white',
                        color: '#2d3748',
                        border: 'none',
                        fontSize: '14px'
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail Address*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-full"
                      style={{
                        backgroundColor: 'white',
                        color: '#2d3748',
                        border: 'none',
                        fontSize: '14px'
                      }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Mobile Number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-full"
                      style={{
                        backgroundColor: 'white',
                        color: '#2d3748',
                        border: 'none',
                        fontSize: '14px'
                      }}
                    />
                    <input
                      type="text"
                      name="service"
                      placeholder="Type of Services*"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-full"
                      style={{
                        backgroundColor: 'white',
                        color: '#2d3748',
                        border: 'none',
                        fontSize: '14px'
                      }}
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full transition-all"
                      style={{
                        backgroundColor: '#0f8987',
                        color: 'white',
                        border: 'none',
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#0f8987';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0f8987';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      Schedule Your Visit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}