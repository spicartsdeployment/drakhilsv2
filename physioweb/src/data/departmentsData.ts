import { Heart, Shield, Award, Users, CheckCircle, Target } from 'lucide-react';
import React from 'react';

export const departmentsData = {
  orthopedic: {
    name: 'Orthopedic Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwcmVoYWJpbGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc2NDY3NTYwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Our orthopedic rehabilitation program specializes in helping patients recover from bone, joint, and muscle injuries. We use evidence-based treatments and advanced techniques to restore mobility and strength.\n\nWhether you\'re recovering from surgery, dealing with chronic pain, or healing from a sports injury, our expert team provides comprehensive care tailored to your specific condition. We combine hands-on manual therapy with therapeutic exercises to accelerate your recovery.\n\nOur state-of-the-art facility features the latest rehabilitation equipment and technology to support your healing journey. From joint mobilization to strength training, we employ proven methods that have helped thousands of patients regain their function.\n\nWe work closely with your orthopedic surgeon and other healthcare providers to ensure a coordinated approach to your recovery. Our therapists stay current with the latest research and techniques in orthopedic rehabilitation.\n\nOur goal is not just to help you recover, but to prevent future injuries and optimize your long-term musculoskeletal health. We provide education and home exercise programs to empower you in your recovery journey.',
    whyUsPoints: [
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Expert Care Team',
        description: 'Board-certified therapists with specialized orthopedic training and years of experience in treating complex musculoskeletal conditions.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment and innovative treatment methods to accelerate healing and improve outcomes.'
      },
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Personalized Programs',
        description: 'Customized rehabilitation plans tailored to your specific condition, goals, and lifestyle needs.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '5000+',
      yearsExperience: '15+',
      visitorRating: '4.9/5',
      happyPatients: '4500+'
    },
    whatWeOffer: [
      {
        question: 'Post-Surgical Rehabilitation',
        answer: 'Comprehensive recovery programs for patients following orthopedic surgery, including joint replacements, ligament repairs, and fracture repairs. Our therapists work closely with your surgeon to ensure optimal healing.'
      },
      {
        question: 'Sports Injury Recovery',
        answer: 'Specialized treatment for athletes recovering from sports-related injuries, focusing on safe return to play and prevention of future injuries.'
      },
      {
        question: 'Joint Pain Management',
        answer: 'Non-surgical treatments for chronic joint pain, including arthritis management, manual therapy, and therapeutic exercises to improve function and reduce pain.'
      },
      {
        question: 'Spine Rehabilitation',
        answer: 'Evidence-based programs for back and neck pain, including disc injuries, spinal stenosis, and postural dysfunction.'
      },
      {
        question: 'Manual Therapy',
        answer: 'Hands-on techniques including joint mobilization, soft tissue massage, and myofascial release to improve mobility and reduce pain.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Initial Assessment',
        description: 'Comprehensive evaluation of your condition, medical history, and functional limitations to create a baseline for treatment.'
      },
      {
        step: '2',
        title: 'Treatment Plan Development',
        description: 'Customized rehabilitation program designed to address your specific needs and goals, with clear milestones and timelines.'
      },
      {
        step: '3',
        title: 'Active Rehabilitation',
        description: 'Guided therapy sessions combining manual therapy, therapeutic exercises, and modalities to promote healing and restore function.'
      },
      {
        step: '4',
        title: 'Progress Monitoring',
        description: 'Regular assessments to track your improvement and adjust the treatment plan as needed to ensure optimal outcomes.'
      },
      {
        step: '5',
        title: 'Return to Function',
        description: 'Gradual progression to full activity with education on injury prevention and home exercise programs for long-term success.'
      }
    ]
  },
  neurological: {
    name: 'Neurological Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1566669419640-ae09e20a18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ2ljYWwlMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2NzU2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Specialized care for individuals with neurological conditions such as stroke, spinal cord injury, brain injury, Parkinson\'s disease, and multiple sclerosis. Our goal is to maximize independence and quality of life.\n\nOur multidisciplinary team brings together neurologists, physical therapists, and rehabilitation specialists who understand the complex nature of neurological conditions. We use cutting-edge, evidence-based techniques to promote neural recovery and functional improvement.\n\nThrough intensive, repetitive practice and task-specific training, we harness the brain\'s neuroplasticity to help you regain lost skills and develop compensatory strategies. Every treatment session is designed to challenge you appropriately while building confidence.\n\nWe address all aspects of neurological recovery including motor control, balance, coordination, cognitive function, and activities of daily living. Our therapists are specially trained in the latest neurological rehabilitation techniques and technologies.\n\nOur commitment extends beyond therapy sessions - we provide comprehensive education to you and your family, helping everyone understand the recovery process and how to support continued progress at home.',
    whyUsPoints: [
      {
        icon: React.createElement(Users, { size: 24 }),
        title: 'Multidisciplinary Team',
        description: 'Collaborative care involving neurologists, therapists, and specialists working together for comprehensive treatment.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Goal-Oriented Approach',
        description: 'Focused rehabilitation programs designed to help you achieve meaningful functional goals in daily life.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Evidence-Based Methods',
        description: 'Proven neuroplasticity-based techniques to promote brain recovery and neural pathway development.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '3000+',
      yearsExperience: '20+',
      visitorRating: '4.8/5',
      happyPatients: '2800+'
    },
    whatWeOffer: [
      {
        question: 'Stroke Rehabilitation',
        answer: 'Comprehensive recovery programs focusing on regaining motor skills, speech, cognitive function, and independence after stroke.'
      },
      {
        question: 'Balance and Gait Training',
        answer: 'Specialized exercises to improve balance, coordination, and walking ability for safer mobility and fall prevention.'
      },
      {
        question: 'Cognitive Rehabilitation',
        answer: 'Therapeutic interventions to address memory, attention, problem-solving, and other cognitive challenges following neurological injury.'
      },
      {
        question: 'Spasticity Management',
        answer: 'Treatment strategies to reduce muscle stiffness and improve movement quality through stretching, positioning, and therapeutic techniques.'
      },
      {
        question: 'Adaptive Equipment Training',
        answer: 'Education and training on using assistive devices and adaptive equipment to maximize independence in daily activities.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Neurological Evaluation',
        description: 'Detailed assessment of motor function, sensation, balance, coordination, and cognitive abilities to understand your unique needs.'
      },
      {
        step: '2',
        title: 'Individualized Goal Setting',
        description: 'Collaborative development of meaningful, achievable goals focused on improving daily function and quality of life.'
      },
      {
        step: '3',
        title: 'Intensive Therapy',
        description: 'Targeted interventions using neuroplasticity principles to promote brain recovery and skill relearning.'
      },
      {
        step: '4',
        title: 'Functional Training',
        description: 'Practice of real-world activities and tasks to transfer therapy gains to everyday life situations.'
      },
      {
        step: '5',
        title: 'Long-term Management',
        description: 'Ongoing support, home programs, and strategies to maintain gains and continue progress beyond formal therapy.'
      }
    ]
  },
  cardio: {
    name: 'Cardio Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1715111641688-ea364ec391f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZXxlbnwxfHx8fDE3NjQ2NzU2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Evidence-based cardiac rehabilitation program designed to help patients recover from heart conditions, improve cardiovascular fitness, and reduce the risk of future cardiac events.\n\nOur comprehensive cardiac rehab program combines supervised exercise, education, and lifestyle counseling to support your heart health journey. We create a safe, monitored environment where you can rebuild strength and confidence after a cardiac event.\n\nEvery exercise session is carefully supervised by cardiac rehabilitation specialists who monitor your heart rate, blood pressure, and symptoms to ensure your safety. We gradually progress your exercise intensity based on your individual response and recovery.\n\nBeyond exercise, we provide extensive education on heart-healthy living, medication management, nutrition, stress reduction, and risk factor modification. This holistic approach addresses all aspects of cardiac health to reduce your risk of future events.\n\nOur program empowers you to take control of your heart health through sustainable lifestyle changes. We support you every step of the way from hospital discharge to independent, confident living.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Cardiac Specialists',
        description: 'Experienced cardiac rehab professionals who understand heart disease and safe exercise progression.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Monitored Programs',
        description: 'Carefully supervised exercise sessions with continuous heart rate and blood pressure monitoring for safety.'
      },
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Comprehensive Care',
        description: 'Holistic approach including exercise, education, nutrition counseling, and stress management.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '2500+',
      yearsExperience: '18+',
      visitorRating: '4.9/5',
      happyPatients: '2300+'
    },
    whatWeOffer: [
      {
        question: 'Post-Heart Attack Recovery',
        answer: 'Supervised rehabilitation program to safely rebuild strength and endurance after myocardial infarction.'
      },
      {
        question: 'Post-Cardiac Surgery Rehabilitation',
        answer: 'Structured recovery program following bypass surgery, valve replacement, or other cardiac procedures.'
      },
      {
        question: 'Heart Failure Management',
        answer: 'Exercise and education programs to improve functional capacity and quality of life for heart failure patients.'
      },
      {
        question: 'Risk Factor Modification',
        answer: 'Comprehensive education on managing cholesterol, blood pressure, diabetes, and lifestyle factors to prevent future events.'
      },
      {
        question: 'Exercise Prescription',
        answer: 'Individualized aerobic and resistance training programs designed to improve cardiovascular fitness safely.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Medical Clearance',
        description: 'Review of medical history and physician clearance to ensure safe participation in cardiac rehabilitation.'
      },
      {
        step: '2',
        title: 'Baseline Assessment',
        description: 'Comprehensive evaluation including fitness testing, risk stratification, and goal setting.'
      },
      {
        step: '3',
        title: 'Supervised Exercise',
        description: 'Monitored exercise sessions with gradual progression in intensity and duration based on your response.'
      },
      {
        step: '4',
        title: 'Education Sessions',
        description: 'Classes on heart-healthy living, medication management, nutrition, and stress reduction.'
      },
      {
        step: '5',
        title: 'Transition to Independence',
        description: 'Graduation to independent exercise with a home program and community resources for long-term maintenance.'
      }
    ]
  },
  pediatrics: {
    name: 'Pediatrics Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1672457666348-745875c92fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjB0aGVyYXB5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzY0Njc1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Specialized rehabilitation services for infants, children, and adolescents with developmental delays, injuries, or disabilities. We help children reach their full potential through play-based therapy.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Child-Focused Care',
        description: 'Pediatric specialists trained in child development and age-appropriate therapeutic techniques.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Family-Centered Approach',
        description: 'Collaborative care involving parents and caregivers as essential partners in the therapy process.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Fun and Engaging',
        description: 'Play-based therapy that motivates children while achieving therapeutic goals.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '4000+',
      yearsExperience: '12+',
      visitorRating: '4.9/5',
      happyPatients: '3800+'
    },
    whatWeOffer: [
      {
        question: 'Developmental Delays',
        answer: 'Early intervention for children not meeting developmental milestones in motor skills, coordination, or strength.'
      },
      {
        question: 'Cerebral Palsy Management',
        answer: 'Comprehensive therapy to improve movement, posture, and functional abilities for children with cerebral palsy.'
      },
      {
        question: 'Torticollis and Plagiocephaly',
        answer: 'Treatment for infants with neck tightness and head shape asymmetries through positioning and gentle stretching.'
      },
      {
        question: 'Sports Injury Rehabilitation',
        answer: 'Safe recovery programs for young athletes to return to sports after injury while preventing re-injury.'
      },
      {
        question: 'Orthopedic Conditions',
        answer: 'Treatment for growing pains, scoliosis, gait abnormalities, and post-surgical rehabilitation in children.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Developmental Screening',
        description: 'Assessment of motor skills, strength, coordination, and functional abilities appropriate for age.'
      },
      {
        step: '2',
        title: 'Family Consultation',
        description: 'Discussion with parents about concerns, goals, and how therapy can support your child\'s development.'
      },
      {
        step: '3',
        title: 'Play-Based Therapy',
        description: 'Engaging therapy sessions using games, toys, and activities to work on therapeutic goals.'
      },
      {
        step: '4',
        title: 'Home Program',
        description: 'Exercises and activities for parents to practice at home to reinforce therapy gains.'
      },
      {
        step: '5',
        title: 'Progress Celebration',
        description: 'Regular updates on achievements and adjustment of goals as your child grows and develops.'
      }
    ]
  },
  oncology: {
    name: 'Oncology Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Specialized rehabilitation for cancer patients and survivors to manage treatment side effects, restore function, and improve quality of life throughout the cancer journey.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Compassionate Care',
        description: 'Understanding and supportive therapists who specialize in oncology rehabilitation and survivorship.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Safe Exercise Programs',
        description: 'Evidence-based exercise protocols adapted for cancer patients at all stages of treatment and recovery.'
      },
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Holistic Support',
        description: 'Addressing physical, emotional, and functional challenges to enhance overall well-being.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '1800+',
      yearsExperience: '10+',
      visitorRating: '4.9/5',
      happyPatients: '1700+'
    },
    whatWeOffer: [
      {
        question: 'Fatigue Management',
        answer: 'Energy conservation techniques and graded exercise programs to combat cancer-related fatigue and improve stamina.'
      },
      {
        question: 'Lymphedema Treatment',
        answer: 'Specialized manual lymphatic drainage, compression therapy, and exercise to manage and prevent lymphedema.'
      },
      {
        question: 'Pain Management',
        answer: 'Non-pharmacological approaches to reduce cancer-related pain and treatment side effects.'
      },
      {
        question: 'Strength and Conditioning',
        answer: 'Safe resistance and aerobic exercise programs to rebuild strength lost during treatment.'
      },
      {
        question: 'Return to Activity',
        answer: 'Guidance on safely resuming work, hobbies, and daily activities during and after cancer treatment.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Oncology Assessment',
        description: 'Evaluation of treatment history, current status, and specific challenges related to cancer and its treatment.'
      },
      {
        step: '2',
        title: 'Personalized Plan',
        description: 'Development of individualized program addressing your unique needs and working within treatment constraints.'
      },
      {
        step: '3',
        title: 'Therapeutic Interventions',
        description: 'Combination of manual therapy, exercise, and education tailored to your energy level and medical status.'
      },
      {
        step: '4',
        title: 'Symptom Management',
        description: 'Ongoing support to manage side effects and adapt program as treatment progresses.'
      },
      {
        step: '5',
        title: 'Survivorship Care',
        description: 'Long-term wellness strategies to maintain function and prevent complications after treatment completion.'
      }
    ]
  },
  sports: {
    name: 'Sports Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbiUyMGF0aGxldGV8ZW58MXx8fHwxNzY0NTY4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-performance rehabilitation for athletes of all levels. We specialize in sports injury recovery, injury prevention, and performance optimization to get you back in the game.',
    whyUsPoints: [
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Sports Medicine Experts',
        description: 'Therapists with advanced sports specialization and experience working with elite athletes.'
      },
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Sport-Specific Training',
        description: 'Rehabilitation programs tailored to the demands of your specific sport and position.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Return to Play Focus',
        description: 'Proven protocols for safe and timely return to competition with reduced re-injury risk.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '6000+',
      yearsExperience: '15+',
      visitorRating: '4.9/5',
      happyPatients: '5500+'
    },
    whatWeOffer: [
      {
        question: 'ACL Reconstruction Rehab',
        answer: 'Comprehensive protocol-based rehabilitation following ACL surgery with focus on strength, stability, and sport-specific training.'
      },
      {
        question: 'Concussion Management',
        answer: 'Evidence-based concussion rehabilitation including vestibular therapy and graded return to play protocols.'
      },
      {
        question: 'Shoulder Injury Treatment',
        answer: 'Specialized care for rotator cuff injuries, labral tears, and shoulder instability common in overhead athletes.'
      },
      {
        question: 'Running Injury Prevention',
        answer: 'Gait analysis, biomechanical assessment, and training modification to prevent and treat running-related injuries.'
      },
      {
        question: 'Performance Enhancement',
        answer: 'Strength, power, and agility training programs designed to improve athletic performance and reduce injury risk.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Sports Assessment',
        description: 'Detailed evaluation of injury, movement patterns, and sport-specific demands to guide treatment.'
      },
      {
        step: '2',
        title: 'Early Phase Rehab',
        description: 'Initial focus on pain reduction, swelling control, and restoration of basic movement and strength.'
      },
      {
        step: '3',
        title: 'Strength Development',
        description: 'Progressive resistance training to rebuild muscle strength and address any imbalances.'
      },
      {
        step: '4',
        title: 'Sport-Specific Training',
        description: 'Gradual introduction of sport-specific movements, drills, and conditioning.'
      },
      {
        step: '5',
        title: 'Return to Competition',
        description: 'Final clearance testing and ongoing performance optimization to excel in your sport.'
      }
    ]
  },
  obstetrics: {
    name: 'Obstetrics Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDU4NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Specialized care for women during pregnancy and postpartum recovery. We address pelvic floor dysfunction, diastasis recti, pain, and help you return to optimal function.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Women\'s Health Specialists',
        description: 'Therapists with advanced training in pelvic floor and obstetric rehabilitation.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Private and Comfortable',
        description: 'Confidential, supportive environment where you can discuss sensitive health concerns.'
      },
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Evidence-Based Care',
        description: 'Current research-backed treatments for pregnancy-related and postpartum conditions.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '2200+',
      yearsExperience: '8+',
      visitorRating: '4.9/5',
      happyPatients: '2000+'
    },
    whatWeOffer: [
      {
        question: 'Pelvic Floor Rehabilitation',
        answer: 'Treatment for pelvic floor weakness, incontinence, prolapse, and pain through specialized exercises and manual therapy.'
      },
      {
        question: 'Prenatal Care',
        answer: 'Safe exercise programs and treatment for pregnancy-related pain including back pain, pelvic girdle pain, and sciatica.'
      },
      {
        question: 'Postpartum Recovery',
        answer: 'Comprehensive rehabilitation following delivery to restore core strength, pelvic floor function, and overall fitness.'
      },
      {
        question: 'Diastasis Recti Treatment',
        answer: 'Evidence-based programs to address abdominal separation and restore core function after pregnancy.'
      },
      {
        question: 'C-Section Recovery',
        answer: 'Specialized care following cesarean delivery including scar mobilization and gradual return to activity.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Women\'s Health Assessment',
        description: 'Comprehensive evaluation of pelvic floor function, core strength, and any pregnancy-related concerns.'
      },
      {
        step: '2',
        title: 'Education and Goals',
        description: 'Discussion of findings and collaborative goal setting for pregnancy or postpartum recovery.'
      },
      {
        step: '3',
        title: 'Therapeutic Exercises',
        description: 'Pelvic floor training, core strengthening, and functional exercises appropriate for your stage.'
      },
      {
        step: '4',
        title: 'Manual Therapy',
        description: 'Hands-on treatment for scar tissue, muscle tension, and joint dysfunction as needed.'
      },
      {
        step: '5',
        title: 'Return to Activities',
        description: 'Guidance on safely resuming exercise, lifting, and daily activities with confidence.'
      }
    ]
  },
  geriatrics: {
    name: 'Geriatrics Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1762955913084-96ea3f986468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGdlcmlhdHJpY3xlbnwxfHx8fDE3NjQ2NzU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Specialized rehabilitation for older adults focused on maintaining independence, preventing falls, managing chronic conditions, and optimizing quality of life.',
    whyUsPoints: [
      {
        icon: React.createElement(Heart, { size: 24 }),
        title: 'Geriatric Specialists',
        description: 'Therapists with expertise in age-related conditions and the unique needs of older adults.'
      },
      {
        icon: React.createElement(Shield, { size: 24 }),
        title: 'Fall Prevention Focus',
        description: 'Comprehensive balance and strength training to reduce fall risk and increase confidence.'
      },
      {
        icon: React.createElement(Users, { size: 24 }),
        title: 'Independence Centered',
        description: 'Programs designed to help you maintain functional abilities and continue living independently.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '3500+',
      yearsExperience: '17+',
      visitorRating: '4.8/5',
      happyPatients: '3200+'
    },
    whatWeOffer: [
      {
        question: 'Balance and Fall Prevention',
        answer: 'Evidence-based balance training, strength exercises, and home safety assessment to reduce fall risk.'
      },
      {
        question: 'Arthritis Management',
        answer: 'Joint protection strategies, therapeutic exercises, and pain management for osteoarthritis and rheumatoid arthritis.'
      },
      {
        question: 'Post-Fracture Rehabilitation',
        answer: 'Safe recovery programs following hip fracture, wrist fracture, and other common fractures in older adults.'
      },
      {
        question: 'Mobility Training',
        answer: 'Gait training and exercises to improve walking ability, endurance, and safe use of assistive devices.'
      },
      {
        question: 'Chronic Disease Management',
        answer: 'Exercise programs adapted for conditions like diabetes, osteoporosis, and cardiovascular disease.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Comprehensive Screening',
        description: 'Assessment of balance, strength, mobility, fall risk, and functional independence.'
      },
      {
        step: '2',
        title: 'Safety Planning',
        description: 'Identification of risk factors and development of strategies to enhance safety at home and in community.'
      },
      {
        step: '3',
        title: 'Functional Training',
        description: 'Exercises and activities focused on improving daily tasks like walking, transfers, and stairs.'
      },
      {
        step: '4',
        title: 'Strength and Balance',
        description: 'Progressive exercise program to build strength, improve balance, and increase confidence.'
      },
      {
        step: '5',
        title: 'Active Aging',
        description: 'Transition to community programs and home exercises to maintain gains and stay active.'
      }
    ]
  },
  wellness: {
    name: 'Wellness and Lifestyle Rehabilitation',
    heroImage: 'https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHlvZ2F8ZW58MXx8fHwxNzY0Njc1NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Holistic approach to health and wellness focusing on prevention, lifestyle modification, and optimal physical function. We help you achieve and maintain your best health.',
    whyUsPoints: [
      {
        icon: React.createElement(Target, { size: 24 }),
        title: 'Preventive Care',
        description: 'Proactive approach to identify and address risk factors before they become problems.'
      },
      {
        icon: React.createElement(Award, { size: 24 }),
        title: 'Whole Person Wellness',
        description: 'Integration of physical fitness, nutrition, stress management, and lifestyle coaching.'
      },
      {
        icon: React.createElement(CheckCircle, { size: 24 }),
        title: 'Sustainable Habits',
        description: 'Evidence-based strategies to create lasting lifestyle changes for long-term health.'
      }
    ],
    sideImage: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjQ2MDcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      supportGiven: '5500+',
      yearsExperience: '10+',
      visitorRating: '4.9/5',
      happyPatients: '5200+'
    },
    whatWeOffer: [
      {
        question: 'Injury Prevention Programs',
        answer: 'Movement screening, biomechanical assessment, and corrective exercise to prevent injuries before they occur.'
      },
      {
        question: 'Posture and Ergonomics',
        answer: 'Workstation evaluation, postural training, and exercises to reduce strain from prolonged sitting or repetitive work.'
      },
      {
        question: 'Stress Management',
        answer: 'Relaxation techniques, breathing exercises, and mindfulness strategies to reduce physical effects of stress.'
      },
      {
        question: 'Fitness Optimization',
        answer: 'Personalized exercise programming to improve strength, flexibility, cardiovascular health, and overall fitness.'
      },
      {
        question: 'Lifestyle Coaching',
        answer: 'Guidance on creating sustainable healthy habits including activity, nutrition, sleep, and self-care.'
      }
    ],
    roadmap: [
      {
        step: '1',
        title: 'Wellness Assessment',
        description: 'Comprehensive evaluation of current health status, risk factors, and wellness goals.'
      },
      {
        step: '2',
        title: 'Goal Setting',
        description: 'Collaborative development of specific, achievable wellness goals aligned with your values and lifestyle.'
      },
      {
        step: '3',
        title: 'Program Design',
        description: 'Creation of personalized plan integrating exercise, lifestyle modifications, and behavioral strategies.'
      },
      {
        step: '4',
        title: 'Implementation',
        description: 'Guided introduction of new habits with support, accountability, and adjustment as needed.'
      },
      {
        step: '5',
        title: 'Long-term Success',
        description: 'Transition to independent wellness maintenance with periodic check-ins to sustain results.'
      }
    ]
  }
};