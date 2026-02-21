import React, { useState } from 'react';
import { useParams } from '../App';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { Phone, Clock, ArrowRight, ArrowUpRight, ChevronDown, ChevronUp, Play, X } from 'lucide-react';

interface ServiceData {
  title: string;
  heroImage: string;
  description: string[];
  services: string[];
  benefits: string[];
  benefitsImage: string;
  videoImage: string;
  faqs: { question: string; answer: string }[];
}

const servicesData: Record<string, ServiceData> = {
  'advanced-physiotherapy': {
    title: 'Advanced Physiotherapy Treatment',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
    description: [
      'Our advanced physiotherapy treatment provides comprehensive care using the latest techniques and equipment. We specialize in treating a wide range of musculoskeletal conditions with evidence-based approaches that deliver measurable results.',
      'From acute injuries to chronic pain management, our experienced therapists create personalized treatment plans that address your specific needs and goals. We combine manual therapy, therapeutic exercises, and modern modalities to optimize your recovery.'
    ],
    services: [
      'Advanced Physiotherapy Treatment',
      'Manual Therapy',
      'Strength Recovery Therapy',
      'Lower Back Pain Management',
      'Neuromuscular Rehabilitation',
      'Sports Injury Recovery'
    ],
    benefits: [
      'Comprehensive Assessment and Diagnosis',
      'Advanced Treatment Modalities',
      'Pain Reduction and Management',
      'Improved Mobility and Function',
      'Personalized Exercise Programs'
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?w=800',
    videoImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    faqs: [
      {
        question: 'What Conditions Can Advanced Physiotherapy Treat?',
        answer: 'Advanced physiotherapy can treat a wide range of conditions including sports injuries, post-surgical rehabilitation, chronic pain, arthritis, neurological conditions, and musculoskeletal disorders. Our therapists use advanced techniques to address both acute and chronic conditions effectively.'
      },
      {
        question: 'How Is Advanced Physiotherapy Different From Regular Treatment?',
        answer: 'Advanced physiotherapy incorporates cutting-edge techniques, specialized equipment, and evidence-based protocols. It includes manual therapy, therapeutic exercises, electrotherapy, ultrasound, and other modern modalities to provide comprehensive and effective treatment.'
      },
      {
        question: 'How Long Does A Typical Treatment Session Last?',
        answer: 'A typical advanced physiotherapy session lasts 45-60 minutes. This includes assessment, hands-on treatment, therapeutic exercises, and education. The duration may vary based on your specific condition and treatment plan.'
      },
      {
        question: 'Will I Need Multiple Sessions To See Results?',
        answer: 'Most patients require multiple sessions to achieve optimal results. The number of sessions depends on your condition severity, overall health, and treatment goals. Some patients notice improvement within 3-5 sessions, while others may need longer-term care.'
      },
      {
        question: 'Is Advanced Physiotherapy Covered By Insurance?',
        answer: 'Many insurance plans cover physiotherapy treatments. We recommend checking with your insurance provider regarding coverage details, co-pays, and the number of sessions allowed. Our staff can help you understand your benefits and submit claims.'
      },
      {
        question: 'Can I Continue My Regular Activities During Treatment?',
        answer: 'Your therapist will provide specific guidance based on your condition. In many cases, you can continue modified activities while avoiding movements that aggravate your symptoms. Your treatment plan will include progressive exercises to safely return you to full activity.'
      }
    ]
  },
  'manual-therapy': {
    title: 'Manual Therapy',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
    description: [
      'Manual therapy is a hands-on physiotherapy technique designed to alleviate muscle tension, reduce joint stiffness, and improve overall mobility. Our skilled therapists use specialized techniques to target problem areas and restore function.',
      'Through precise manipulation and mobilization techniques, we address soft tissue restrictions, joint dysfunctions, and movement impairments. This targeted approach helps reduce pain, improve circulation, and enhance your body\'s natural healing process.'
    ],
    services: [
      'Advanced Physiotherapy Treatment',
      'Manual Therapy',
      'Strength Recovery Therapy',
      'Lower Back Pain Management',
      'Neuromuscular Rehabilitation',
      'Sports Injury Recovery'
    ],
    benefits: [
      'Hands-On Treatment Techniques',
      'Joint Mobilization and Manipulation',
      'Soft Tissue Release',
      'Improved Range of Motion',
      'Reduced Muscle Tension and Spasms'
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=800',
    videoImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    faqs: [
      {
        question: 'What Exactly Is Manual Therapy?',
        answer: 'Manual therapy is a specialized form of physical therapy where therapists use their hands to manipulate, mobilize, and massage soft tissues and joints. It includes techniques like joint mobilization, soft tissue massage, myofascial release, and spinal manipulation to reduce pain and improve function.'
      },
      {
        question: 'Does Manual Therapy Hurt?',
        answer: 'Manual therapy should not be painful, though you may experience some discomfort during treatment, especially in sensitive areas. Our therapists adjust pressure and techniques based on your tolerance. Most patients find manual therapy relaxing and report immediate relief after sessions.'
      },
      {
        question: 'What Conditions Benefit Most From Manual Therapy?',
        answer: 'Manual therapy is highly effective for back pain, neck pain, shoulder problems, headaches, joint stiffness, muscle strains, and sports injuries. It\'s also beneficial for improving posture, reducing scar tissue, and addressing movement restrictions.'
      },
      {
        question: 'How Soon Will I Feel Relief After Manual Therapy?',
        answer: 'Many patients experience immediate relief after the first session, including reduced pain and improved mobility. However, lasting results typically require multiple sessions as tissues need time to adapt and heal. Your therapist will discuss expected timelines based on your condition.'
      },
      {
        question: 'Can Manual Therapy Replace Surgery?',
        answer: 'In many cases, manual therapy can help avoid surgery by addressing the underlying cause of pain and dysfunction. However, it depends on the condition severity. For some conditions, manual therapy is an excellent conservative treatment option before considering surgical intervention.'
      },
      {
        question: 'How Does Manual Therapy Work With Exercise Therapy?',
        answer: 'Manual therapy and exercise therapy complement each other perfectly. Manual therapy prepares your body by reducing pain and improving mobility, while exercises strengthen muscles and maintain gains. This combination provides comprehensive treatment for long-term results.'
      }
    ]
  },
  'strength-recovery': {
    title: 'Strength Recovery Therapy',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200',
    description: [
      'Our strength recovery therapy is specially designed to restore muscle strength, power, and endurance after injury or surgery. We use progressive resistance training and functional exercises to help you regain optimal physical performance.',
      'Whether recovering from orthopedic surgery, dealing with muscle weakness, or rebuilding after illness, our structured strengthening programs are tailored to your current abilities and gradually progress to meet your goals safely and effectively.'
    ],
    services: [
      'Advanced Physiotherapy Treatment',
      'Manual Therapy',
      'Strength Recovery Therapy',
      'Lower Back Pain Management',
      'Neuromuscular Rehabilitation',
      'Sports Injury Recovery'
    ],
    benefits: [
      'Progressive Resistance Training',
      'Muscle Rebuilding Programs',
      'Functional Strength Development',
      'Improved Physical Performance',
      'Injury Prevention Strategies'
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?w=800',
    videoImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    faqs: [
      {
        question: 'Who Needs Strength Recovery Therapy?',
        answer: 'Strength recovery therapy is ideal for post-surgery patients, individuals recovering from injuries, athletes returning to sport, seniors experiencing age-related weakness, and anyone who has experienced prolonged inactivity or muscle loss due to illness or immobilization.'
      },
      {
        question: 'How Long Does It Take To Rebuild Strength?',
        answer: 'The timeline varies based on factors like injury severity, baseline fitness, age, and consistency with exercises. Most patients see noticeable improvements within 4-6 weeks of consistent training. Complete recovery may take 3-6 months depending on individual circumstances.'
      },
      {
        question: 'Will Strength Training Cause More Pain or Injury?',
        answer: 'When properly supervised, strength training is safe and actually helps prevent future injuries. Our therapists carefully design programs that start at your current level and progress gradually. We monitor your form and adjust exercises to ensure safe, pain-free strengthening.'
      },
      {
        question: 'What Equipment Is Used In Strength Recovery?',
        answer: 'We use a variety of equipment including resistance bands, free weights, cable machines, stability balls, and bodyweight exercises. The equipment is selected based on your specific needs and current strength level, progressing as you improve.'
      },
      {
        question: 'Can Older Adults Participate In Strength Recovery?',
        answer: 'Absolutely! Strength training is especially important for older adults to maintain independence, prevent falls, and improve quality of life. Our programs are tailored to each individual\'s abilities and progress safely at an appropriate pace for optimal results.'
      },
      {
        question: 'How Do You Measure Progress In Strength Recovery?',
        answer: 'We track progress through regular assessments including strength tests, functional movement evaluations, endurance measures, and patient-reported outcomes. This objective data helps us adjust your program and demonstrate your improvement over time.'
      }
    ]
  },
  'cardio-rehabilitation': {
    title: 'Cardio Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200',
    description: [
      'Comprehensive cardiovascular rehabilitation program designed to improve heart health and overall fitness. Our expert team provides personalized care to help you recover and maintain a healthy heart.',
      'Our cardiac rehabilitation program combines supervised exercise, education, and lifestyle modification to reduce cardiovascular risk factors. We work closely with your medical team to ensure safe, effective recovery and long-term heart health.'
    ],
    services: [
      'Advanced Physiotherapy Treatment',
      'Manual Therapy',
      'Strength Recovery Therapy',
      'Lower Back Pain Management',
      'Neuromuscular Rehabilitation',
      'Sports Injury Recovery'
    ],
    benefits: [
      'Supervised Exercise Programs',
      'Heart Rate Monitoring',
      'Cardiovascular Fitness Improvement',
      'Risk Factor Management',
      'Lifestyle and Nutrition Guidance'
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1713428856219-20e151269843?w=800',
    videoImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    faqs: [
      {
        question: 'What Is Cardiac Rehabilitation?',
        answer: 'Cardiac rehabilitation is a medically supervised program designed to improve cardiovascular health following heart attack, heart surgery, or diagnosis of heart disease. It includes monitored exercise, education on heart-healthy living, and counseling to reduce stress and improve quality of life.'
      },
      {
        question: 'Who Should Participate In Cardiac Rehab?',
        answer: 'Cardiac rehab is recommended for patients after heart attack, coronary artery bypass surgery, valve surgery, heart failure, angioplasty, or stent placement. It\'s also beneficial for those with chronic angina or peripheral arterial disease.'
      },
      {
        question: 'How Is Exercise Monitored During Cardiac Rehab?',
        answer: 'During sessions, we continuously monitor your heart rate, blood pressure, and symptoms. Our team uses telemetry equipment to track your heart rhythm in real-time, ensuring safe exercise intensity. We adjust your program based on your response and progress.'
      },
      {
        question: 'How Long Does A Cardiac Rehabilitation Program Last?',
        answer: 'Standard cardiac rehab programs typically last 12 weeks with 2-3 sessions per week. Some patients may need longer programs depending on their condition and progress. Many insurance plans cover 36 sessions over 12 weeks.'
      },
      {
        question: 'What Are The Benefits Of Cardiac Rehabilitation?',
        answer: 'Cardiac rehab significantly reduces risk of future cardiac events, improves exercise capacity, reduces symptoms like chest pain and shortness of breath, improves cholesterol levels and blood pressure, helps with weight management, and enhances overall quality of life.'
      },
      {
        question: 'Can I Exercise On My Own After A Heart Event?',
        answer: 'While eventual independent exercise is a goal, supervised cardiac rehab provides the safest environment initially. Medical supervision ensures proper intensity, monitors for complications, and teaches you how to exercise safely. Once you complete the program, you\'ll have the knowledge to continue safely on your own.'
      }
    ]
  },
  'pediatric-therapy': {
    title: 'Pediatric Therapy',
    heroImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200',
    description: [
      'Specialized therapy programs tailored for children to support developmental milestones and physical growth. Our compassionate team creates engaging treatment plans for young patients.',
      'We provide a fun, supportive environment where children can develop strength, coordination, and motor skills. Our pediatric specialists use play-based therapy and family-centered approaches to help children reach their full potential.'
    ],
    services: [
      'Advanced Physiotherapy Treatment',
      'Manual Therapy',
      'Strength Recovery Therapy',
      'Lower Back Pain Management',
      'Neuromuscular Rehabilitation',
      'Sports Injury Recovery'
    ],
    benefits: [
      'Developmental Milestone Support',
      'Improved Motor Skills',
      'Balance and Coordination Training',
      'Family-Centered Care',
      'Play-Based Therapy Approach'
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1597075958693-75173d1c837f?w=800',
    videoImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    faqs: [
      {
        question: 'At What Age Can Children Start Physiotherapy?',
        answer: 'Pediatric physiotherapy can begin as early as infancy. We treat children from birth through adolescence. Early intervention is crucial for addressing developmental delays, congenital conditions, or injuries to optimize outcomes and prevent long-term complications.'
      },
      {
        question: 'What Conditions Do Pediatric Physiotherapists Treat?',
        answer: 'We treat developmental delays, cerebral palsy, torticollis, plagiocephaly, genetic disorders, sports injuries, post-surgical rehabilitation, coordination difficulties, gait abnormalities, and musculoskeletal conditions. Each treatment plan is customized to the child\'s unique needs.'
      },
      {
        question: 'How Do You Make Therapy Fun For Children?',
        answer: 'We use play-based therapy techniques, incorporating games, toys, and activities that children enjoy while working on therapeutic goals. Treatment feels like play, which increases engagement, motivation, and cooperation, leading to better outcomes.'
      },
      {
        question: 'How Are Parents Involved In Pediatric Therapy?',
        answer: 'Parents are essential partners in pediatric therapy. We provide education, training, and home exercise programs so you can support your child\'s progress between sessions. We encourage parent participation during sessions and maintain open communication about goals and progress.'
      },
      {
        question: 'How Long Will My Child Need Therapy?',
        answer: 'The duration depends on your child\'s condition, severity, and individual progress. Some children need a few weeks of therapy, while others with chronic conditions may benefit from ongoing support. We regularly reassess and adjust treatment plans as your child grows and develops.'
      },
      {
        question: 'Will Therapy Help My Child Reach Developmental Milestones?',
        answer: 'Yes! Pediatric physiotherapy is designed to help children achieve developmental milestones like rolling, sitting, crawling, standing, and walking. Through targeted exercises and activities, we support your child\'s physical development and help them reach their full potential.'
      }
    ]
  },
  'sports-injury': {
    title: 'Sports Injury Recovery',
    heroImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200',
    description: [
      'Expert sports rehabilitation to help athletes recover from injuries and return to peak performance safely. Our specialized programs target specific sports-related conditions with advanced treatment techniques.',
      'We understand the demands of athletic performance and create sport-specific rehabilitation programs. From acute injuries to overuse conditions, we combine manual therapy, strength training, and functional exercises to get you back in the game.'
    ],
    services: [
      'Advanced Physiotherapy Treatment',
      'Manual Therapy',
      'Strength Recovery Therapy',
      'Lower Back Pain Management',
      'Neuromuscular Rehabilitation',
      'Sports Injury Recovery'
    ],
    benefits: [
      'Sport-Specific Rehabilitation',
      'Injury Prevention Programs',
      'Performance Enhancement',
      'Safe Return-to-Sport Protocols',
      'Advanced Athletic Training'
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1691675996849-78a298efe96a?w=800',
    videoImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    faqs: [
      {
        question: 'What Types Of Sports Injuries Do You Treat?',
        answer: 'We treat all types of sports injuries including sprains, strains, tendonitis, ligament tears (ACL, MCL), meniscus injuries, shoulder injuries, tennis elbow, runner\'s knee, shin splints, stress fractures, and concussions. We specialize in both acute injuries and chronic overuse conditions.'
      },
      {
        question: 'How Soon Can I Return To My Sport After Injury?',
        answer: 'Return-to-sport timing varies based on injury type, severity, and individual healing. We use objective criteria and functional testing to determine readiness. Rushing back increases re-injury risk, so we ensure you meet specific strength, flexibility, and performance benchmarks before clearance.'
      },
      {
        question: 'Do You Work With Professional Athletes?',
        answer: 'Yes, we treat athletes of all levels from weekend warriors to professional competitors. Our therapists have experience with various sports and understand the specific demands and movements of different athletic activities, allowing us to create highly effective, sport-specific rehabilitation programs.'
      },
      {
        question: 'Can You Help Prevent Sports Injuries?',
        answer: 'Absolutely! We offer injury prevention programs including movement screening, biomechanical analysis, strength and conditioning programs, flexibility training, and education on proper techniques. Preventing injuries is always better than treating them, and our proactive approach reduces injury risk significantly.'
      },
      {
        question: 'What Is Sport-Specific Rehabilitation?',
        answer: 'Sport-specific rehab tailors treatment to the demands of your particular sport. It includes exercises and drills that mimic your sport\'s movements, addressing the specific physical requirements and movement patterns you\'ll need. This approach ensures you\'re truly ready to perform at your best.'
      },
      {
        question: 'Will Physiotherapy Help Improve My Athletic Performance?',
        answer: 'Yes! Beyond injury recovery, physiotherapy can enhance performance through improved strength, flexibility, movement efficiency, and biomechanics. We identify and address weaknesses, imbalances, and movement compensations that may be limiting your performance potential.'
      }
    ]
  }
};

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const data = servicesData[serviceId || 'advanced-physiotherapy'];

  if (!data) {
    return <div>Service not found</div>;
  }

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
          .mobile-card-width {
            width: 340px !important;
          }
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

        <div className="relative max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
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
            {data.title}
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mobile-section-padding py-20" style={{ backgroundColor: 'rgb(222, 232, 222)' }}>
        <div className="max-w-7xl mx-auto mobile-padding-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT CONTAINER: Main Content */}
            <div className="lg:col-span-8">
              {/* Hero Image */}
              <img 
                src={data.heroImage}
                alt={data.title}
                style={{
                  width: '853px',
                  height: '383px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  marginBottom: '32px'
                }}
              />

              {/* Description */}
              <h2 
                style={{ 
                  fontFamily: 'Philosopher, serif',
                  fontSize: '32px',
                  marginBottom: '24px',
                  color: '#000'
                }}
              >
                Description For Our Service
              </h2>
              {data.description.map((para, idx) => (
                <p 
                  key={idx}
                  style={{
                    color: '#666',
                    fontSize: '15px',
                    lineHeight: '1.8',
                    marginBottom: '16px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {para}
                </p>
              ))}

              {/* HORIZONTAL BENEFITS SECTION - 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginTop: '48px' }}>
                {/* Left: Benefits Image */}
                <div>
                  <img 
                    src={data.benefitsImage}
                    alt="Benefits"
                    style={{
                      width: '100%',
                      maxWidth: '450px',
                      height: '320px',
                      objectFit: 'cover',
                      borderRadius: '20px'
                    }}
                  />
                </div>

                {/* Right: Benefits Content */}
                <div>
                  <h2 
                    style={{ 
                      fontFamily: 'Philosopher, serif',
                      fontSize: '28px',
                      marginBottom: '16px',
                      color: '#000',
                      letterSpacing: '0.3px'
                    }}
                  >
                    Benefits Of Our Service
                  </h2>
                  <p 
                    style={{
                      color: '#666',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      marginBottom: '20px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    Many individuals struggle with discomfort that interferes with daily activities, work, and overall quality of life. At our physiotherapy center, we focus on helping you:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {data.benefits.map((benefit, idx) => (
                      <li 
                        key={idx}
                        style={{
                          fontSize: '14px',
                          marginBottom: '12px',
                          color: '#333',
                          fontFamily: 'Poppins, sans-serif',
                          lineHeight: '1.6',
                          paddingLeft: '0'
                        }}
                      >
                        <span style={{ color: '#000', fontWeight: '500' }}>•</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Few Of The Common Concerns - Full Width Below Benefits */}
              <div style={{ marginTop: '48px', maxWidth: '800px' }}>
                <h3 
                  style={{ 
                    fontFamily: 'Philosopher, serif',
                    fontSize: '28px',
                    marginBottom: '16px',
                    color: '#000',
                    letterSpacing: '0.3px'
                  }}
                >
                  Few Of The Common Concerns
                </h3>
                <p 
                  style={{
                    color: '#666',
                    fontSize: '15px',
                    lineHeight: '1.8',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Sports injuries and physical discomfort can significantly impact daily routines and athletic performance. At our center, we address common concerns such as reduced mobility, persistent pain, muscle stiffness, and joint instability.
                </p>
              </div>

            </div>

            {/* RIGHT CONTAINER: Sidebar Cards */}
            <div className="lg:col-span-4">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Card 1: Get In Touch With Us */}
                <div 
                  className="mobile-card-width"
                  style={{
                    backgroundColor: '#1a3d3d',
                    borderRadius: '24px',
                    padding: '40px 32px 36px 32px',
                    color: 'white',
                    width: '400px',
                    height: '665px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(26, 61, 61, 0.1)',
                    borderRadius: '24px',
                    zIndex: 0
                  }} />
                  <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 
                    style={{ 
                      fontFamily: 'Philosopher, serif',
                      fontSize: '26px',
                      marginBottom: '28px',
                      borderBottom: '1px solid rgba(255,255,255,0.2)',
                      paddingBottom: '18px',
                      fontWeight: '400',
                      letterSpacing: '0.5px',
                      color: 'white'
                    }}
                  >
                    Get In Touch With Us
                  </h3>

                  {/* Phone Number */}
                  <div style={{ marginBottom: '26px' }}>
                    <p style={{ 
                      fontSize: '13px', 
                      marginBottom: '10px', 
                      color: '#d0d0d0',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.3px'
                    }}>
                      Phone Number
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Phone size={18} style={{ color: '#fff' }} />
                      </div>
                      <span style={{ 
                        fontSize: '19px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '400',
                        letterSpacing: '0.3px'
                      }}>
                        + 864 846 75324
                      </span>
                    </div>
                  </div>

                  {/* Service Timing */}
                  <div style={{ marginBottom: '36px' }}>
                    <p style={{ 
                      fontSize: '13px', 
                      marginBottom: '10px', 
                      color: '#d0d0d0',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.3px'
                    }}>
                      Service Timing ( Mon To Sat )
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Clock size={18} style={{ color: '#fff' }} />
                      </div>
                      <span style={{ 
                        fontSize: '19px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '400',
                        letterSpacing: '0.3px'
                      }}>
                        10 Am To 9 Pm
                      </span>
                    </div>
                  </div>

                  {/* Our Services */}
                  <div style={{ flex: 1 }}>
                    <h4 
                      style={{ 
                        fontFamily: 'Philosopher, serif',
                        fontSize: '24px',
                        marginBottom: '18px',
                        fontWeight: '400',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Our Services
                    </h4>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      margin: 0
                    }}>
                      {['Advanced Physiotherapy Treatment', 'Manual Therapy', 'Strength Recovery Therapy', 'Cardio Rehabilitation', 'Pediatric Therapy', 'Sports Injury Rehabilitation'].map((service, idx) => (
                        <li 
                          key={idx}
                          style={{
                            fontSize: '18px',
                            marginBottom: '13px',
                            paddingLeft: '0',
                            color: service === data.title ? '#0f8987' : '#fff',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '400',
                            lineHeight: '1.5',
                            letterSpacing: '0.2px'
                          }}
                        >
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </div>

                {/* Card 2: PHYSIOTHERAPY SERVICES */}
                <div 
                  className="mobile-card-width"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '24px',
                    padding: '32px 28px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    width: '400px',
                    textAlign: 'center'
                  }}
                >
                  {/* Header with decorative lines */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
                    <div style={{ width: '40px', height: '2px', backgroundColor: '#0f8987' }}></div>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#0f8987', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1.5px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      PHYSIOTHERAPY SERVICES
                    </p>
                    <div style={{ width: '40px', height: '2px', backgroundColor: '#0f8987' }}></div>
                  </div>

                  <h3 
                    style={{ 
                      fontFamily: 'Philosopher, serif',
                      fontSize: '24px',
                      marginBottom: '24px',
                      color: '#000',
                      lineHeight: '1.4',
                      fontWeight: '700'
                    }}
                  >
                    How To Start A <span style={{ color: '#0f8987' }}>Physiotherapy</span> For Beginners?
                  </h3>

                  {/* Video Thumbnail */}
                  <div 
                    style={{
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      marginBottom: '24px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                    }}
                    onClick={() => setShowVideo(true)}
                  >
                    <img 
                      src={data.videoImage}
                      alt="Video thumbnail"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(15, 137, 135, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Play size={24} fill="white" color="white" />
                    </div>
                  </div>

                  {/* Lotus Icon - Detailed SVG */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#0f8987">
                      <path d="M90.2,54.6c-0.8-0.8-1.4-1.6-1.3-1.7c0,0,0,0,0,0c0.2,0,0.9,0.5,1.6,1.3c0.4-0.4,0.8-0.7,1.1-0.9c0,0,0,0,0,0 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1 c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1s-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2 c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c0,0,0,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0.1,0.1 c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1 c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0 c-0.3-0.2-0.7-0.6-1.1-0.9c-0.8,0.7-1.4,1.3-1.6,1.3c0,0,0,0,0,0C88.8,56.2,89.4,55.4,90.2,54.6z M6.7,54.6 c-0.8-0.8-1.4-1.6-1.3-1.7c0,0,0,0,0,0c0.2,0,0.9,0.5,1.6,1.3c0.4-0.4,0.8-0.7,1.1-0.9c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1 c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1 c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c0,0,0,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0.1,0.1C7.9,55,8,55.1,8,55.1 c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-0.3-0.2-0.7-0.6-1.1-0.9 c-0.8,0.7-1.4,1.3-1.6,1.3c0,0,0,0,0,0C5.4,56.2,5.9,55.4,6.7,54.6z M47.6,17c-1.4-1.5-2.4-2.8-2.2-2.9c0,0,0,0,0.1,0 c0.3,0,1.5,0.9,2.9,2.3c1.4-1.3,2.6-2.3,2.9-2.3c0,0,0,0,0.1,0c0.2,0.2-0.8,1.5-2.2,2.9c1.4,1.5,2.4,2.8,2.2,2.9c0,0,0,0-0.1,0 c-0.3,0-1.5-0.9-2.9-2.3c-1.4,1.3-2.6,2.3-2.9,2.3c0,0-0.1,0-0.1,0C45.2,19.7,46.1,18.4,47.6,17z M66.4,31.1 c-1.4-1.5-2.4-2.8-2.2-2.9c0,0,0,0,0.1,0c0.3,0,1.5,0.9,2.9,2.3c1.4-1.3,2.5-2.3,2.9-2.3c0,0,0.1,0,0.1,0c0.2,0.2-0.8,1.5-2.2,2.9 c1.4,1.5,2.4,2.8,2.2,2.9c0,0,0,0-0.1,0c-0.3,0-1.5-0.9-2.9-2.3c-1.4,1.3-2.6,2.3-2.9,2.3c0,0,0,0-0.1,0 C64,33.9,64.9,32.6,66.4,31.1z M30.8,31.9c-1.4-1.5-2.4-2.8-2.2-2.9c0,0,0,0,0.1,0c0.3,0,1.5,0.9,2.9,2.3c0.7-0.7,1.4-1.3,1.9-1.7 c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1 c0.1,0,0.1,0,0.2,0l0,0c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1 c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2 c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.3 c0,0-0.1,0.1-0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3 c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.1,0.2,0.2 c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.1 c0,0,0,0-0.1,0h0c0,0-0.1,0-0.2,0c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1 c-0.1-0.1-0.2-0.1-0.2-0.2c0,0-0.1,0-0.1-0.1c-0.5-0.4-1.2-1-1.9-1.7c-1.4,1.3-2.6,2.3-2.9,2.3c0,0,0,0-0.1,0 C28.3,34.7,29.3,33.4,30.8,31.9z M30.5,85.6c-2.4,0-4.8-0.3-7.2-0.7c-8.4-1.8-15.8-6.5-20.9-13.4c-0.1-0.2-0.1-0.4-0.1-0.5 c0-0.1,0.1-0.3,0.3-0.4c1.2-0.7,2.5-1.4,3.9-1.9c0,0,0.1,0,0.1,0c3-1.3,6.2-2.1,9.4-2.5c1.6,2.7,3.6,5.2,5.8,7.4 c5.2,5.2,11.8,8.8,18.9,10.5C37.4,85.1,34,85.6,30.5,85.6z M16.7,64.8c-3.6,0.3-7.2,1.2-10.7,2.6c0,0,0,0,0,0 c-1.4,0.6-2.7,1.2-4.1,2c-1,0.6-1.3,1.9-0.6,2.8C6.8,79.7,14.6,84.4,23,86.2c2.5,0.5,5,0.8,7.5,0.8c5,0,9.9-1,14.6-3.1 c0.2-0.1,0.4-0.2,0.6-0.3c-8.7-0.8-16.8-4.6-23-10.9C20.4,70.3,18.4,67.7,16.7,64.8z M37.3,55.2c-0.2,9.7,3.4,19.5,10.7,27 c-9.4-0.4-17.9-4.3-24.2-10.6c-6.1-6.1-10-14.4-10.6-23.5c-0.1-1.1,0.8-2,1.9-2v1.3c-0.2,0-0.4,0.1-0.4,0.2 c-0.1,0.1-0.2,0.2-0.2,0.4c0.5,8.5,4.1,16.6,10.2,22.6c5.4,5.4,12.4,8.9,19.9,9.9C39,73.6,36,64.9,36,55.8c-5.8-5-13.1-7.9-20.7-8.4 l0-1.4c0,0,0.1,0,0.1,0C23.8,46.5,31.4,49.9,37.3,55.2z M54,80.4c5.8-6.9,8.9-15.6,9-24.7c5.8-4.9,13.1-7.8,20.6-8.1l0,0 c0.3,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c-0.6,8.5-4.3,16.4-10.4,22.4C68.6,76.1,61.6,79.5,54,80.4z M85.8,48.4 c0.1-1.2-0.9-2.2-2-2.2c0,0-0.1,0-0.1,0c-8.4,0.4-16,3.7-21.9,8.9c0.1,9.7-3.6,19.5-11,26.9c9.4-0.3,18-4.2,24.3-10.3 C81.1,65.7,85.1,57.5,85.8,48.4z M80.3,83c-0.7,0.3-1.5,0.5-2.2,0.7l-0.2,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.5,0.1-0.7,0.2 l-0.1,0l-0.1,0c-2.7,0.7-5.6,1-8.4,1c-3.1,0-6.2-0.4-9.2-1.2c6.9-1.7,13.2-5.3,18.3-10.3c2.5-2.5,4.6-5.3,6.4-8.4 c1.8,0.2,3.5,0.4,5.1,0.8c0,0,0.1,0,0.1,0c0.7,0.2,1.3,0.3,2,0.5c0.3,0.1,0.7,0.2,1,0.3c1.7,0.6,3.3,1.3,4.9,2.1 c0.3,0.2,0.4,0.4,0.4,0.7C92.9,75.9,87.1,80.5,80.3,83z M97.3,67.9c-1.7-0.9-3.4-1.6-5.1-2.2c-0.3-0.1-0.7-0.2-1-0.3 c-0.7-0.2-1.4-0.4-2.1-0.6c0,0,0,0,0,0c-2.1-0.5-4.2-0.8-6.3-0.9c-1.7,3.2-3.9,6.2-6.6,8.8c-6.1,6.1-13.9,9.8-22.4,10.8 c-0.1,0-0.1,0-0.2,0c4.7,2,9.6,3,14.4,3c2.9,0,5.9-0.4,8.7-1c0.1,0,0.1,0,0.2,0c0.3-0.1,0.5-0.1,0.8-0.2c0.3-0.1,0.5-0.1,0.8-0.2 c0.8-0.2,1.5-0.5,2.3-0.8c7-2.6,13.2-7.3,17.5-13.9C98.6,69.4,98.2,68.4,97.3,67.9z M49.5,79.5c-9.1-9.8-11.8-23.9-6.8-36.4 c0.3-0.7,0.5-1.3,0.8-1.9c1.4-3.1,3.3-6,5.6-8.6c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.3,0,0.4,0.2c3.9,4.4,6.7,9.7,8.1,15.4 c0.1,0.3,0.1,0.7,0.2,1c0.1,0.2,0.1,0.5,0.1,0.7l0,0.1c0.2,1.2,0.4,2.5,0.4,3.8c0,0.7,0.1,1.3,0.1,2C58.7,64.7,55.5,73,49.5,79.5z  M51,79.8c0.2-0.2,0.4-0.4,0.5-0.6c0.3-0.3,0.5-0.6,0.8-1c0.1-0.2,0.3-0.4,0.4-0.6c0.3-0.4,0.6-0.8,0.8-1.2c0.1-0.1,0.2-0.3,0.3-0.4 c0.3-0.5,0.6-1,0.9-1.5c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0c3.4-5.7,5.1-12.2,5.1-18.6c0-0.7,0-1.4-0.1-2.1c-0.1-1.3-0.2-2.7-0.4-4 c-0.1-0.3-0.1-0.6-0.2-0.9c-0.1-0.4-0.1-0.7-0.2-1.1C57.8,42,55,36.5,50.8,31.8c-0.4-0.4-0.9-0.6-1.4-0.6c-0.4,0-0.8,0.1-1.2,0.4 c-2.5,2.8-4.5,5.8-6,9c-0.3,0.6-0.6,1.3-0.9,2c-5.1,13-2.4,28.4,8.1,38.9c0,0,0,0,0,0c0,0,0,0,0,0h0l0.3-0.3 c0.1-0.1,0.3-0.3,0.4-0.4C50.5,80.4,50.7,80.1,51,79.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Section with Enquiry Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" style={{ marginTop: '48px' }}>
            {/* Left: FAQs */}
            <div className="lg:col-span-8">
              {data.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '12px 0',
                      textAlign: 'left'
                    }}
                  >
                    <span 
                      style={{ 
                        fontFamily: 'Philosopher, serif',
                        fontSize: '18px',
                        color: '#000'
                      }}
                    >
                      {idx + 1}. {faq.question}
                    </span>
                    {expandedFAQ === idx ? (
                      <ChevronUp size={24} style={{ flexShrink: 0, marginLeft: '12px' }} />
                    ) : (
                      <ChevronDown size={24} style={{ flexShrink: 0, marginLeft: '12px' }} />
                    )}
                  </button>
                  {expandedFAQ === idx && (
                    <p 
                      style={{
                        color: '#666',
                        fontSize: '15px',
                        lineHeight: '1.8',
                        marginTop: '12px',
                        fontFamily: 'Poppins, sans-serif',
                        paddingLeft: '0'
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-4">
              <div 
                className="mobile-card-width"
                style={{
                  backgroundColor: '#1a3d3d',
                  borderRadius: '24px',
                  padding: '36px 32px',
                  width: '400px',
                  backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative'
                }}
              >
                {/* Overlay for better text readability */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(26, 61, 61, 0.1)',
                  borderRadius: '24px',
                  zIndex: 0
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 
                  style={{ 
                    fontFamily: 'Philosopher, serif',
                    fontSize: '28px',
                    marginBottom: '28px',
                    color: 'white'
                  }}
                >
                  Register Appointment
                </h3>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input 
                    type="text"
                    placeholder="Name*"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '15px',
                      backgroundColor: '#fff',
                      color: '#333'
                    }}
                  />
                  <input 
                    type="email"
                    placeholder="E-mail Address*"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '15px',
                      backgroundColor: '#fff',
                      color: '#333'
                    }}
                  />
                  <select
                    style={{
                      padding: '16px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '15px',
                      backgroundColor: '#fff',
                      color: '#666',
                      appearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M1 1L6 6L11 1%27 stroke=%27%23666%27 stroke-width=%272%27 stroke-linecap=%27round%27/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center'
                    }}
                  >
                    <option>Type Of Service*</option>
                    <option>Advanced Physiotherapy Treatment</option>
                    <option>Manual Therapy</option>
                    <option>Strength Recovery Therapy</option>
                    <option>Sports Injury Recovery</option>
                  </select>
                  <input 
                    type="text"
                    placeholder="Select Date & Time"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '15px',
                      backgroundColor: '#fff',
                      color: '#666',
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM5.333 1.333V4M10.667 1.333V4M2 6.667h12%27 stroke=%27%23666%27 stroke-width=%271.5%27 stroke-linecap=%27round%27/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '0 28px 0 28px',
                      paddingRight: '10px',
                      borderRadius: '50px',
                      border: '2px solid #0f8987',
                      fontSize: '16px',
                      backgroundColor: isButtonClicked ? 'white' : (isButtonHovered ? 'white' : '#0f8987'),
                      color: isButtonClicked ? '#0f8987' : (isButtonHovered ? '#1f3d3f' : 'white'),
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '8px',
                      height: '60px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={() => !isButtonClicked && setIsButtonHovered(true)}
                    onMouseLeave={() => !isButtonClicked && setIsButtonHovered(false)}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsButtonClicked(!isButtonClicked);
                      setIsButtonHovered(false);
                    }}
                  >
                    <span>Schedule Your Visit</span>
                    <div 
                      className="arrow-container"
                      style={{
                        backgroundColor: isButtonClicked ? '#0f8987' : (isButtonHovered ? '#33a9b1' : '#1f3d3f'),
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        marginLeft: '12px'
                      }}
                    >
                      {isButtonHovered ? (
                        <ArrowUpRight size={20} color="white" />
                      ) : (
                        <ArrowRight size={20} color="white" />
                      )}
                    </div>
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overlay Modal */}
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
              title="Physiotherapy Video"
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
