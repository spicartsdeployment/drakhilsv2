import { Heart, Shield, Award, Users, CheckCircle, Target, Brain, Activity } from 'lucide-react';
import React from 'react';

export const specialitiesData = {
  nursingCare: {
    name: 'Nursing Care',
    heroImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional nursing care providing comprehensive patient support, medical monitoring, wound care, medication management, and health education to ensure optimal recovery and well-being.\n\nOur registered nurses are the cornerstone of compassionate, patient-centered care delivery. They work closely with physicians and the entire healthcare team to provide coordinated, evidence-based treatment that addresses both your immediate medical needs and long-term health goals.\n\nFrom post-operative care to chronic disease management, our nursing staff brings clinical expertise combined with genuine empathy and understanding. They monitor vital signs, administer medications, perform wound care, and ensure patient safety while maintaining the highest standards of professional practice.\n\nOur nurses also serve as patient educators and advocates, helping you understand your condition, treatment options, and self-care strategies. They take time to answer questions, address concerns, and ensure you feel supported throughout your healthcare journey.\n\nWith continuous professional development and specialized training, our nursing team stays current with the latest clinical protocols and best practices to provide you with exceptional care that promotes healing and optimal health outcomes.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Compassionate Care',
        description: 'Registered nurses providing empathetic, patient-centered care with attention to physical and emotional needs.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Medical Expertise',
        description: 'Skilled in clinical procedures, health monitoring, and coordination with physicians for comprehensive care.'
      },
      {
        icon: React.createElement(Users, { size: 24 }),
        title: 'Family Support',
        description: 'Education and guidance for patients and families on care management and health promotion.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '8000+',
      yearsExperience: '15+',
      visitorRating: '4.9/5',
      happyPatients: '7500+'
    },
    whatWeOffer: [
      {
        question: 'Post-Operative Care',
        answer: 'Specialized nursing care following surgery including wound care, pain management, vital sign monitoring, and prevention of complications.'
      },
      {
        question: 'Chronic Disease Management',
        answer: 'Ongoing nursing support for chronic conditions like diabetes, hypertension, and COPD with medication management and lifestyle counseling.'
      },
      {
        question: 'Home Health Nursing',
        answer: 'Skilled nursing services in the comfort of your home for patients requiring medical care and monitoring.'
      },
      {
        question: 'Medication Administration',
        answer: 'Safe medication management, IV therapy, injections, and education on proper medication use.'
      },
      {
        question: 'Patient Education',
        answer: 'Comprehensive health education on disease management, nutrition, exercise, and preventive care.'
      },
      {
        question: 'Vital Signs Monitoring',
        answer: 'Regular monitoring and assessment of blood pressure, heart rate, temperature, and other vital indicators to track health status.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Nursing Assessment',
        description: 'Comprehensive evaluation of health status, medical history, and current needs.'
      },
      {
        step: '2',
        title: 'Care Planning',
        description: 'Development of individualized nursing care plan in collaboration with physicians and patient.'
      },
      {
        step: '3',
        title: 'Care Implementation',
        description: 'Delivery of skilled nursing interventions including treatments, monitoring, and education.'
      },
      {
        step: '4',
        title: 'Ongoing Monitoring',
        description: 'Regular assessment of progress and adjustment of care plan as needed.'
      },
      {
        step: '5',
        title: 'Care Coordination',
        description: 'Communication with healthcare team and family to ensure continuity of care.'
      }
    ]
  },
  physicalTherapist: {
    name: 'Physical Therapist',
    heroImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Licensed physical therapists specializing in movement restoration, pain management, and functional improvement through therapeutic exercises, manual therapy, and advanced treatment techniques.\n\nOur doctorate-level physical therapists are movement experts who combine advanced clinical knowledge with hands-on skills to help you recover from injury, manage pain, and optimize physical function. They use evidence-based assessment techniques to identify the root cause of your movement dysfunction.\n\nThrough a combination of manual therapy, therapeutic exercise, and patient education, our PTs create personalized treatment plans designed to restore your mobility, strength, and independence. They employ the latest rehabilitation techniques backed by scientific research to accelerate your recovery.\n\nOur physical therapists work collaboratively with physicians, surgeons, and other healthcare providers to ensure comprehensive, coordinated care throughout your rehabilitation journey. They continuously monitor your progress and adjust treatment strategies to ensure optimal outcomes.\n\nBeyond treating your immediate condition, our PTs educate you on injury prevention, proper body mechanics, and home exercise programs to maintain long-term health and prevent future problems.',
    whyUsPoints: [
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Licensed Professionals',
        description: 'Doctorate-level physical therapists with specialized certifications and extensive clinical experience.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Movement Experts',
        description: 'Advanced knowledge of biomechanics, anatomy, and therapeutic exercise to optimize movement patterns.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Evidence-Based Practice',
        description: 'Treatment approaches backed by current research and proven clinical outcomes.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwcmVoYWJpbGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc2NDY3NTYwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '10000+',
      yearsExperience: '18+',
      visitorRating: '4.9/5',
      happyPatients: '9500+'
    },
    whatWeOffer: [
      {
        question: 'Manual Therapy',
        answer: 'Hands-on techniques including joint mobilization, soft tissue massage, and myofascial release to improve mobility and reduce pain.'
      },
      {
        question: 'Therapeutic Exercise',
        answer: 'Customized exercise programs to improve strength, flexibility, balance, and functional abilities.'
      },
      {
        question: 'Pain Management',
        answer: 'Comprehensive approach to reduce pain through modalities, manual therapy, and movement strategies.'
      },
      {
        question: 'Movement Analysis',
        answer: 'Detailed assessment of movement patterns to identify dysfunctions and develop targeted interventions.'
      },
      {
        question: 'Post-Surgical Rehabilitation',
        answer: 'Structured recovery programs following orthopedic, neurological, or other surgical procedures.'
      },
      {
        question: 'Gait Training',
        answer: 'Walking and balance training to improve mobility, reduce fall risk, and enhance functional independence.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Physical Therapy Evaluation',
        description: 'Comprehensive assessment of movement, strength, flexibility, and functional limitations.'
      },
      {
        step: '2',
        title: 'Diagnosis and Prognosis',
        description: 'Identification of movement dysfunction and establishment of realistic recovery timeline.'
      },
      {
        step: '3',
        title: 'Treatment Plan',
        description: 'Development of individualized program with specific goals and intervention strategies.'
      },
      {
        step: '4',
        title: 'Hands-On Treatment',
        description: 'Combination of manual therapy, exercise, and education tailored to your needs.'
      },
      {
        step: '5',
        title: 'Home Program',
        description: 'Self-management strategies and exercises to maintain gains and prevent recurrence.'
      }
    ]
  },
  occupationalTherapist: {
    name: 'Occupational Therapist',
    heroImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Skilled occupational therapists helping individuals regain independence in daily activities through adaptive techniques, cognitive training, and environmental modifications.\n\nOur occupational therapists focus on what matters most to you - the ability to perform meaningful daily activities and participate fully in life. They assess how injury, illness, or disability affects your capacity to complete self-care tasks, work responsibilities, and leisure activities.\n\nUsing a client-centered approach, our OTs work collaboratively with you to identify goals that reflect your values and priorities. They develop creative solutions including adaptive equipment, environmental modifications, and compensatory strategies to help you overcome functional limitations.\n\nOur therapists address physical, cognitive, sensory, and psychosocial factors that impact your ability to engage in daily occupations. Whether you need to relearn basic self-care skills or return to complex work tasks, we provide the support and expertise to help you succeed.\n\nThrough skilled intervention and practical problem-solving, our occupational therapists empower you to achieve maximum independence and quality of life, regardless of your current functional level.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Independence Focused',
        description: 'Dedicated to helping you perform meaningful daily activities and return to valued roles.'
      },
      {
        icon: React.createElement(Brain, { size: 24 }),
        title: 'Holistic Approach',
        description: 'Addressing physical, cognitive, sensory, and psychosocial factors affecting function.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Activity Analysis',
        description: 'Expert evaluation of task demands and modification of activities for success.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '6500+',
      yearsExperience: '12+',
      visitorRating: '4.8/5',
      happyPatients: '6000+'
    },
    whatWeOffer: [
      {
        question: 'Activities of Daily Living Training',
        answer: 'Relearning self-care skills like dressing, bathing, grooming, and eating with adaptive techniques as needed.'
      },
      {
        question: 'Cognitive Rehabilitation',
        answer: 'Therapeutic activities to improve memory, attention, problem-solving, and executive function.'
      },
      {
        question: 'Hand Therapy',
        answer: 'Specialized treatment for hand and upper extremity injuries including splinting and fine motor retraining.'
      },
      {
        question: 'Home Modifications',
        answer: 'Assessment and recommendations for environmental adaptations to improve safety and accessibility.'
      },
      {
        question: 'Assistive Technology',
        answer: 'Training in use of adaptive equipment and devices to maximize independence in daily tasks.'
      },
      {
        question: 'Work Rehabilitation',
        answer: 'Programs to help you return to work safely after injury or illness with job-specific training.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Occupational Profile',
        description: 'Understanding your roles, routines, interests, and what activities are most important to you.'
      },
      {
        step: '2',
        title: 'Functional Assessment',
        description: 'Evaluation of ability to perform daily activities and identification of barriers to participation.'
      },
      {
        step: '3',
        title: 'Goal Collaboration',
        description: 'Setting meaningful, client-centered goals focused on activities you want and need to do.'
      },
      {
        step: '4',
        title: 'Therapeutic Interventions',
        description: 'Skills training, adaptive strategies, and environmental modifications to improve function.'
      },
      {
        step: '5',
        title: 'Community Integration',
        description: 'Transition support to apply skills in home, work, and community settings.'
      }
    ]
  },
  speechSwallowTherapist: {
    name: 'Speech Swallow Therapist',
    heroImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Certified speech-language pathologists specializing in communication disorders, swallowing difficulties, voice problems, and cognitive-communication impairments.\n\nOur speech-language pathologists are experts in evaluating and treating disorders that affect communication and swallowing. They use specialized diagnostic tools and evidence-based interventions to help you regain or improve these essential life functions.\n\nFrom stroke survivors working to regain speech abilities to individuals with swallowing difficulties requiring diet modifications, our SLPs provide compassionate, skilled care tailored to each person\'s needs. They understand the frustration that communication challenges bring and work patiently to help you express yourself effectively.\n\nOur therapists collaborate closely with physicians, dietitians, and other team members to provide comprehensive care for complex communication and swallowing disorders. They use innovative therapy techniques backed by current research to maximize your recovery potential.\n\nWhether addressing speech clarity, language comprehension, voice quality, or safe swallowing, our speech-language pathologists are committed to helping you communicate confidently and eat safely.',
    whyUsPoints: [
      {
        icon: React.createElement(Users, { size: 24 }),
        title: 'Communication Specialists',
        description: 'Expert assessment and treatment of speech, language, and cognitive-communication disorders.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Swallowing Expertise',
        description: 'Advanced training in dysphagia evaluation and treatment to ensure safe eating and drinking.'
      },
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Evidence-Based Therapy',
        description: 'Research-supported interventions to improve communication and swallowing function.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '4500+',
      yearsExperience: '14+',
      visitorRating: '4.8/5',
      happyPatients: '4200+'
    },
    whatWeOffer: [
      {
        question: 'Aphasia Therapy',
        answer: 'Intensive treatment for language impairment following stroke or brain injury to improve speaking, understanding, reading, and writing.'
      },
      {
        question: 'Dysphagia Treatment',
        answer: 'Swallowing therapy including exercises, compensatory strategies, and diet modifications for safe eating.'
      },
      {
        question: 'Articulation Therapy',
        answer: 'Treatment to improve speech clarity and intelligibility through targeted sound production practice.'
      },
      {
        question: 'Voice Therapy',
        answer: 'Intervention for voice disorders including vocal cord dysfunction, vocal nodules, and voice strain.'
      },
      {
        question: 'Cognitive-Communication Training',
        answer: 'Therapy to address memory, attention, and problem-solving as they relate to communication.'
      },
      {
        question: 'Fluency Disorders',
        answer: 'Treatment for stuttering and other fluency disorders using evidence-based techniques to improve speech flow.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Speech-Language Evaluation',
        description: 'Comprehensive assessment of speech, language, voice, cognition, and swallowing abilities.'
      },
      {
        step: '2',
        title: 'Diagnostic Testing',
        description: 'Specialized assessments as needed including swallow studies and standardized language tests.'
      },
      {
        step: '3',
        title: 'Treatment Planning',
        description: 'Development of individualized therapy goals targeting specific communication or swallowing needs.'
      },
      {
        step: '4',
        title: 'Therapeutic Exercises',
        description: 'Evidence-based exercises and strategies to improve function and compensate for deficits.'
      },
      {
        step: '5',
        title: 'Caregiver Training',
        description: 'Education for family on communication strategies and safe feeding techniques.'
      }
    ]
  },
  psychology: {
    name: 'Psychology',
    heroImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Licensed clinical psychologists providing mental health support, counseling, and psychological services to address emotional well-being during rehabilitation and recovery.\n\nOur licensed clinical psychologists understand that physical injury or illness often brings emotional challenges including anxiety, depression, grief, and difficulty adjusting to life changes. They provide a safe, confidential space to process these feelings and develop healthy coping strategies.\n\nUsing evidence-based therapeutic approaches including cognitive-behavioral therapy, mindfulness-based interventions, and trauma-informed care, our psychologists help you address psychological barriers to recovery. They work collaboratively with your medical team to ensure integrated, whole-person care.\n\nOur psychologists specialize in the intersection of mental and physical health, understanding how chronic pain, disability, and medical conditions affect emotional well-being. They provide practical tools and strategies to manage stress, improve mood, and maintain motivation throughout your rehabilitation journey.\n\nBeyond individual therapy, our psychologists offer support for families adjusting to a loved one\'s illness or injury, helping to improve communication and strengthen relationships during challenging times.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Compassionate Support',
        description: 'Safe, non-judgmental space to process emotions and develop coping strategies.'
      },
      {
        icon: React.createElement(Brain, { size: 24 }),
        title: 'Evidence-Based Therapy',
        description: 'Proven therapeutic approaches including CBT, mindfulness, and trauma-informed care.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Integrated Care',
        description: 'Collaboration with medical team to address psychological aspects of physical rehabilitation.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '3500+',
      yearsExperience: '16+',
      visitorRating: '4.9/5',
      happyPatients: '3300+'
    },
    whatWeOffer: [
      {
        question: 'Individual Counseling',
        answer: 'One-on-one therapy to address anxiety, depression, stress, and emotional challenges related to injury or illness.'
      },
      {
        question: 'Pain Psychology',
        answer: 'Psychological strategies for chronic pain management including relaxation, cognitive restructuring, and coping skills.'
      },
      {
        question: 'Adjustment Counseling',
        answer: 'Support in adapting to disability, lifestyle changes, and loss of function following injury or illness.'
      },
      {
        question: 'Stress Management',
        answer: 'Training in relaxation techniques, mindfulness, and stress reduction strategies.'
      },
      {
        question: 'Family Therapy',
        answer: 'Counseling for families adjusting to a loved one\'s illness or injury and improving communication.'
      },
      {
        question: 'Behavioral Health Integration',
        answer: 'Collaborative care addressing both mental health and physical health needs in rehabilitation.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Initial Consultation',
        description: 'Confidential meeting to discuss concerns, history, and what you hope to achieve through therapy.'
      },
      {
        step: '2',
        title: 'Psychological Assessment',
        description: 'Evaluation of mental health symptoms, coping patterns, and psychosocial factors.'
      },
      {
        step: '3',
        title: 'Treatment Planning',
        description: 'Collaborative development of therapy goals and selection of appropriate therapeutic approaches.'
      },
      {
        step: '4',
        title: 'Therapy Sessions',
        description: 'Regular counseling using evidence-based techniques to address identified concerns.'
      },
      {
        step: '5',
        title: 'Progress Monitoring',
        description: 'Ongoing assessment of symptom reduction and achievement of therapy goals.'
      }
    ]
  },
  dietNutrition: {
    name: 'Diet & Nutrition',
    heroImage: 'https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHlvZ2F8ZW58MXx8fHwxNzY0Njc1NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Registered dietitian nutritionists providing medical nutrition therapy, personalized meal planning, and nutrition education to support recovery and optimal health.\n\nOur registered dietitian nutritionists are food and nutrition experts who translate the science of nutrition into practical eating strategies that support your health goals. They provide evidence-based medical nutrition therapy for a wide range of conditions including diabetes, heart disease, kidney disease, and gastrointestinal disorders.\n\nThrough comprehensive nutritional assessment, our dietitians identify dietary factors that may be contributing to your health concerns and develop personalized meal plans that fit your lifestyle, preferences, and cultural background. They work collaboratively with your medical team to ensure nutrition interventions support your overall treatment plan.\n\nOur nutritionists recognize that sustainable change requires more than just meal plans - it requires education, motivation, and ongoing support. They help you understand the "why" behind nutrition recommendations and develop practical skills for making healthy food choices in real-world situations.\n\nWhether you need to manage a chronic condition, optimize sports performance, or simply improve your overall nutrition, our dietitians provide the expertise and support to help you achieve lasting results through healthy eating.',
    whyUsPoints: [
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Registered Dietitians',
        description: 'Credentialed nutrition experts with specialized training in medical nutrition therapy.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Personalized Plans',
        description: 'Customized nutrition strategies based on your medical condition, goals, and preferences.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Science-Based Guidance',
        description: 'Evidence-based nutrition recommendations tailored to support healing and wellness.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '5000+',
      yearsExperience: '11+',
      visitorRating: '4.8/5',
      happyPatients: '4700+'
    },
    whatWeOffer: [
      {
        question: 'Medical Nutrition Therapy',
        answer: 'Specialized nutrition care for chronic diseases including diabetes, heart disease, kidney disease, and GI disorders.'
      },
      {
        question: 'Weight Management',
        answer: 'Sustainable approaches to healthy weight loss or gain with focus on behavior change and nutrition education.'
      },
      {
        question: 'Sports Nutrition',
        answer: 'Performance-focused nutrition strategies for athletes to optimize training, recovery, and competition.'
      },
      {
        question: 'Meal Planning',
        answer: 'Personalized meal plans considering medical needs, food preferences, lifestyle, and budget.'
      },
      {
        question: 'Nutritional Counseling',
        answer: 'Education on healthy eating, label reading, portion control, and making sustainable dietary changes.'
      },
      {
        question: 'Eating Disorder Support',
        answer: 'Compassionate nutritional rehabilitation for individuals recovering from eating disorders.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Nutrition Assessment',
        description: 'Comprehensive evaluation of dietary intake, medical history, and nutritional status.'
      },
      {
        step: '2',
        title: 'Goal Setting',
        description: 'Collaborative identification of nutrition goals aligned with health objectives and lifestyle.'
      },
      {
        step: '3',
        title: 'Nutrition Plan',
        description: 'Development of personalized eating plan with specific recommendations and strategies.'
      },
      {
        step: '4',
        title: 'Education and Coaching',
        description: 'Guidance on implementing nutrition changes and overcoming barriers to healthy eating.'
      },
      {
        step: '5',
        title: 'Follow-up Support',
        description: 'Regular monitoring of progress and adjustment of plan to ensure long-term success.'
      }
    ]
  },
  yogaTherapy: {
    name: 'Yoga Therapy',
    heroImage: 'https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHlvZ2F8ZW58MXx8fHwxNzY0Njc1NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Certified yoga therapists using therapeutic yoga practices to complement medical treatment, reduce stress, improve flexibility, and enhance overall well-being.\n\nOur certified yoga therapists integrate the ancient wisdom of yoga with modern healthcare to provide a holistic approach to healing and wellness. They use therapeutic yoga practices adapted specifically for your health condition and physical abilities to support your rehabilitation goals.\n\nUnlike general yoga classes, yoga therapy is individualized and medically oriented, with specific techniques selected to address your unique health concerns. Our therapists work collaboratively with your medical team to ensure yoga interventions complement your overall treatment plan.\n\nThrough gentle movement, breath work, meditation, and mindfulness practices, yoga therapy helps reduce stress, manage pain, improve flexibility and balance, and promote overall well-being. Our therapists teach you practical techniques you can use independently to support your ongoing health.\n\nWhether you\'re recovering from injury, managing a chronic condition, or seeking to enhance your overall wellness, our yoga therapists provide compassionate, knowledgeable guidance tailored to your individual needs and abilities.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Mind-Body Integration',
        description: 'Holistic approach addressing physical, mental, and emotional aspects of health through yoga.'
      },
      {
        icon: React.createElement(Activity, { size: 24 }),
        title: 'Adaptive Practice',
        description: 'Modified yoga postures and breathing techniques suitable for all abilities and conditions.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Therapeutic Focus',
        description: 'Evidence-based yoga interventions tailored to specific health conditions and rehabilitation goals.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '2500+',
      yearsExperience: '9+',
      visitorRating: '4.8/5',
      happyPatients: '2300+'
    },
    whatWeOffer: [
      {
        question: 'Therapeutic Yoga Sessions',
        answer: 'One-on-one or small group sessions with modified poses, breathing, and meditation for specific health conditions.'
      },
      {
        question: 'Stress and Anxiety Reduction',
        answer: 'Yoga-based practices including pranayama and meditation to reduce stress and improve mental well-being.'
      },
      {
        question: 'Pain Management',
        answer: 'Gentle yoga movements and mindfulness techniques to reduce chronic pain and improve body awareness.'
      },
      {
        question: 'Flexibility and Balance',
        answer: 'Targeted yoga practices to improve range of motion, strength, and balance for fall prevention.'
      },
      {
        question: 'Breath Work',
        answer: 'Pranayama techniques to improve respiratory function, reduce anxiety, and enhance relaxation.'
      },
      {
        question: 'Meditation and Mindfulness',
        answer: 'Guided meditation practices to cultivate present-moment awareness and reduce mental stress.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Intake Assessment',
        description: 'Evaluation of health status, movement limitations, and goals for yoga therapy.'
      },
      {
        step: '2',
        title: 'Customized Practice',
        description: 'Design of personalized yoga program with appropriate modifications for your needs.'
      },
      {
        step: '3',
        title: 'Guided Sessions',
        description: 'One-on-one instruction in yoga postures, breathing, and meditation techniques.'
      },
      {
        step: '4',
        title: 'Home Practice',
        description: 'Simple sequences and practices to continue yoga therapy benefits between sessions.'
      },
      {
        step: '5',
        title: 'Integration',
        description: 'Incorporation of yoga principles into daily life for sustained health and wellness.'
      }
    ]
  },
  physicalFitness: {
    name: 'Physical Fitness',
    heroImage: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbiUyMGF0aGxldGV8ZW58MXx8fHwxNzY0NTY4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Certified fitness professionals and exercise physiologists providing personalized training programs to improve strength, endurance, and overall physical fitness.\n\nOur certified fitness professionals combine scientific knowledge of exercise physiology with practical coaching skills to help you achieve your fitness and health goals. They create safe, effective, progressive training programs tailored to your current fitness level, goals, and any medical considerations.\n\nWhether you\'re new to exercise, returning to fitness after injury, or an experienced athlete seeking performance optimization, our trainers provide expert guidance, motivation, and accountability. They teach proper exercise technique to maximize results while minimizing injury risk.\n\nOur fitness specialists work collaboratively with your rehabilitation team when appropriate, ensuring exercise programming complements your medical treatment and supports your recovery. They understand how to modify exercises for various conditions and limitations while still providing challenging, effective workouts.\n\nBeyond just prescribing exercises, our trainers educate you on principles of fitness, helping you develop the knowledge and skills to maintain an active, healthy lifestyle long-term.',
    whyUsPoints: [
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Certified Trainers',
        description: 'Experienced fitness professionals with credentials in exercise science and personal training.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Goal-Oriented Programs',
        description: 'Customized workout plans designed to help you achieve specific fitness and health goals.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Safe and Effective',
        description: 'Evidence-based exercise prescription with attention to proper form and injury prevention.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '7000+',
      yearsExperience: '13+',
      visitorRating: '4.9/5',
      happyPatients: '6700+'
    },
    whatWeOffer: [
      {
        question: 'Personal Training',
        answer: 'One-on-one coaching with customized workout programs, form correction, and motivation to reach your goals.'
      },
      {
        question: 'Strength Training',
        answer: 'Progressive resistance programs to build muscle strength, power, and endurance safely and effectively.'
      },
      {
        question: 'Cardiovascular Fitness',
        answer: 'Aerobic exercise programming to improve heart health, stamina, and overall cardiovascular function.'
      },
      {
        question: 'Functional Training',
        answer: 'Exercise focused on improving daily movement patterns and real-world physical performance.'
      },
      {
        question: 'Group Fitness Classes',
        answer: 'Motivating group exercise sessions including circuit training, boot camp, and conditioning classes.'
      },
      {
        question: 'Athletic Performance',
        answer: 'Sport-specific training programs to enhance speed, power, agility, and athletic performance.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Fitness Assessment',
        description: 'Baseline evaluation of strength, cardiovascular fitness, flexibility, and body composition.'
      },
      {
        step: '2',
        title: 'Goal Setting',
        description: 'Discussion of fitness goals and development of specific, measurable, achievable targets.'
      },
      {
        step: '3',
        title: 'Program Design',
        description: 'Creation of periodized training plan with progressive overload and variety.'
      },
      {
        step: '4',
        title: 'Training Sessions',
        description: 'Guided workouts with instruction on proper technique, intensity, and exercise modifications.'
      },
      {
        step: '5',
        title: 'Progress Tracking',
        description: 'Regular reassessment and program adjustments to ensure continued improvement.'
      }
    ]
  },
  musicTherapy: {
    name: 'Music Therapy',
    heroImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Board-certified music therapists using music interventions to address physical, emotional, cognitive, and social needs in a therapeutic relationship.\n\nOur board-certified music therapists harness the power of music to support healing, rehabilitation, and well-being across a wide range of conditions and populations. They use evidence-based music interventions tailored to your specific therapeutic needs and goals.\n\nMusic therapy is much more than simply listening to music - it\'s an active, clinical intervention where our therapists use music-making, song, rhythm, and melody to facilitate positive changes in physical, emotional, cognitive, and social functioning. They create personalized treatment plans that leverage music\'s unique ability to engage multiple brain areas simultaneously.\n\nOur music therapists work collaboratively with your rehabilitation team, providing interventions that complement other therapies and enhance overall treatment outcomes. They understand how to use specific musical elements to target specific therapeutic goals, from improving motor coordination to reducing anxiety.\n\nWhether you\'re recovering from stroke, managing chronic pain, addressing cognitive deficits, or seeking emotional support, our music therapists provide creative, engaging interventions that make therapy enjoyable while producing meaningful results.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Holistic Approach',
        description: 'Addressing physical, emotional, cognitive, and social needs through therapeutic music interventions.'
      },
      {
        icon: React.createElement(Brain, { size: 24 }),
        title: 'Neurologic Benefits',
        description: 'Leveraging music\'s effect on the brain to support recovery and enhance neuroplasticity.'
      },
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Board-Certified Therapists',
        description: 'Professionally trained music therapists with credentials and clinical expertise.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '2800+',
      yearsExperience: '10+',
      visitorRating: '4.9/5',
      happyPatients: '2600+'
    },
    whatWeOffer: [
      {
        question: 'Neurologic Music Therapy',
        answer: 'Specialized interventions for stroke, brain injury, and neurological conditions using rhythm and melody to support motor and cognitive recovery.'
      },
      {
        question: 'Pain Management',
        answer: 'Music-based techniques to reduce perception of pain, anxiety, and promote relaxation during treatment.'
      },
      {
        question: 'Emotional Support',
        answer: 'Music interventions to process emotions, reduce stress and anxiety, and improve mood and well-being.'
      },
      {
        question: 'Cognitive Rehabilitation',
        answer: 'Musical activities to improve attention, memory, problem-solving, and other cognitive functions.'
      },
      {
        question: 'Motor Skills Development',
        answer: 'Rhythm-based interventions to improve coordination, gait training, and fine motor skills.'
      },
      {
        question: 'Social Skills',
        answer: 'Group music-making activities to enhance communication, cooperation, and social interaction.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Music Therapy Assessment',
        description: 'Evaluation of therapeutic needs, musical preferences, and functional abilities.'
      },
      {
        step: '2',
        title: 'Treatment Planning',
        description: 'Development of individualized music therapy goals and intervention strategies.'
      },
      {
        step: '3',
        title: 'Active Music-Making',
        description: 'Participation in therapeutic music experiences including playing, singing, and listening.'
      },
      {
        step: '4',
        title: 'Skill Application',
        description: 'Transfer of skills and benefits gained through music therapy to functional activities.'
      },
      {
        step: '5',
        title: 'Integration',
        description: 'Application of skills gained in music therapy to daily life and other areas of rehabilitation.'
      }
    ]
  }
};
