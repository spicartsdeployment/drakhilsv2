export interface BlogContent {
  heroTitle: string;
  introText: string;
  quoteText: string;
  image1: string;
  image2: string;
  conclusionText: string;
}

export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  category: string;
  content?: BlogContent;
}

export const blogContentData: Record<string, BlogContent> = {
  '1': {
    heroTitle: 'Expert Physiotherapy Support For Faster Recovery',
    introText: 'Modern physiotherapy combines clinical expertise with advanced technology to offer patients a highly personalized path to recovery. Techniques like therapeutic ultrasound target deep tissue layers to reduce inflammation, improve circulation, and accelerate healing. These non-invasive treatments are especially effective for conditions like muscle strain, joint pain, and post-surgical rehabilitation.',
    quoteText: 'Each session is carefully customized to meet the patient\'s needs—whether it\'s managing chronic pain, recovering from an injury, or improving athletic performance. By using state-of-the-art tools and evidence-based practices, physiotherapists ensure faster results with minimal discomfort.',
    image1: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500',
    image2: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500',
    conclusionText: 'Beyond physical healing, this holistic approach supports long-term wellness, empowering patients to regain strength, flexibility, and confidence in their movement. From manual therapy to electrotherapy, physiotherapy today is not just about recovery—it\'s about enhancing your quality of life through science-backed care.'
  },
  '2': {
    heroTitle: 'Ultrasound Therapy: A Revolutionary Approach To Body Recovery',
    introText: 'Therapeutic ultrasound has emerged as one of the most effective non-invasive treatments for accelerating tissue repair and reducing pain. This advanced technology uses high-frequency sound waves to penetrate deep into muscle tissues, promoting cellular regeneration and improving blood flow to injured areas.',
    quoteText: 'Ultrasound therapy works at the cellular level, stimulating the body\'s natural healing processes. It\'s particularly effective for treating tendonitis, bursitis, muscle spasms, and chronic soft tissue injuries that haven\'t responded well to traditional treatments.',
    image1: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500',
    image2: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500',
    conclusionText: 'Patients typically notice significant improvements in mobility and pain reduction after just a few sessions. Combined with manual therapy and targeted exercises, ultrasound treatment offers a comprehensive solution for body recovery that addresses both symptoms and underlying causes.'
  },
  '3': {
    heroTitle: 'Gentle Yet Effective Approaches To Shoulder Pain Relief',
    introText: 'Shoulder pain can significantly impact daily activities, from reaching overhead to carrying groceries. Our gentle physiotherapy techniques focus on restoring range of motion, strengthening supporting muscles, and addressing the root causes of discomfort without aggressive interventions.',
    quoteText: 'The shoulder is one of the most complex joints in the body, requiring a delicate balance of mobility and stability. Our specialized techniques include manual mobilization, therapeutic stretching, and progressive strengthening exercises tailored to each patient\'s specific condition.',
    image1: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500',
    image2: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    conclusionText: 'Whether you\'re dealing with rotator cuff issues, frozen shoulder, or post-surgical rehabilitation, our gentle approach prioritizes your comfort while delivering lasting results. Most patients experience significant improvement within 6-8 weeks of consistent treatment.'
  },
  '4': {
    heroTitle: 'Customized Rehabilitation For Active Aging And Wellness',
    introText: 'Senior health requires a specialized approach that respects age-related changes while maximizing functional independence. Our personalized rehabilitation programs are designed to improve balance, strength, flexibility, and cognitive function, helping seniors maintain their quality of life.',
    quoteText: 'We understand that every senior has unique health challenges and goals. Our programs incorporate fall prevention strategies, mobility training, and exercises that can be safely performed at home, ensuring continuous progress between therapy sessions.',
    image1: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=500',
    image2: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500',
    conclusionText: 'From managing chronic conditions to recovering from strokes or neurological events, our senior rehabilitation programs focus on restoring independence and confidence. We work closely with families to create supportive home environments that promote continued healing and wellness.'
  },
  '5': {
    heroTitle: 'Return To Peak Performance With Advanced Sports Rehabilitation',
    introText: 'Athletes require specialized rehabilitation that not only heals injuries but also prevents re-injury and optimizes performance. Our advanced sports injury recovery techniques combine biomechanical analysis, sport-specific training, and cutting-edge therapies to get you back in the game stronger than before.',
    quoteText: 'Whether you\'re a professional athlete or weekend warrior, sports injuries need expert attention. We use functional movement screening, progressive loading protocols, and sport-specific exercises to ensure you return to your activity with confidence and reduced injury risk.',
    image1: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500',
    image2: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    conclusionText: 'Our sports rehabilitation program doesn\'t just treat the injury—it addresses movement patterns, muscle imbalances, and training techniques that may have contributed to the problem. The result is a more resilient athlete ready to perform at their highest level.'
  },
  '6': {
    heroTitle: 'Effective Solutions For Chronic And Acute Back Pain',
    introText: 'Back pain affects millions of people worldwide, limiting mobility and reducing quality of life. Our comprehensive back pain management solutions address the underlying causes through a combination of manual therapy, therapeutic exercises, posture correction, and pain-relief techniques.',
    quoteText: 'We don\'t just mask symptoms—we identify and treat the root causes of back pain. Whether it\'s disc problems, muscle strain, or postural dysfunction, our evidence-based approach provides lasting relief and prevents future episodes.',
    image1: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500',
    image2: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500',
    conclusionText: 'Most back pain can be successfully managed without surgery through proper physiotherapy. Our patients learn self-management strategies, ergonomic principles, and strengthening exercises that empower them to take control of their back health for the long term.'
  },
  '7': {
    heroTitle: 'Simple Yet Powerful Exercises To Relieve Lower Back Pain',
    introText: 'Lower back pain doesn\'t always require complex treatments. These five essential exercises can be performed at home and have been proven to reduce pain, improve flexibility, and strengthen the core muscles that support your spine. Regular practice can lead to significant improvements in just a few weeks.',
    quoteText: 'The key to managing lower back pain is consistency and proper form. These exercises target the deep stabilizing muscles of the core, improve hip flexibility, and promote healthy spinal alignment. Always start gently and progress gradually.',
    image1: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500',
    image2: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500',
    conclusionText: 'Remember, these exercises are most effective when combined with good posture habits throughout your day. If pain persists or worsens, consult with a physiotherapist for a personalized assessment and treatment plan tailored to your specific needs.'
  },
  '8': {
    heroTitle: 'Navigating The Journey Of Stroke Recovery And Rehabilitation',
    introText: 'Recovering from a stroke is a challenging journey that requires patience, dedication, and expert guidance. Understanding the recovery process helps patients and families set realistic expectations and actively participate in rehabilitation. Neuroplasticity—the brain\'s ability to rewire itself—is the foundation of stroke recovery.',
    quoteText: 'Every stroke is unique, and so is every recovery journey. Early intervention is crucial, but improvements can continue for months or even years after the initial event. Our comprehensive approach addresses motor function, speech, cognition, and emotional well-being.',
    image1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500',
    image2: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=500',
    conclusionText: 'Stroke recovery requires a multidisciplinary team approach, including physiotherapy, occupational therapy, and speech therapy. With consistent effort and appropriate support, many stroke survivors regain significant function and independence, returning to meaningful activities and improved quality of life.'
  },
  '9': {
    heroTitle: 'Strengthening Your Heart Through Supervised Rehabilitation',
    introText: 'Cardiac rehabilitation is a medically supervised program designed to improve cardiovascular health for people recovering from heart attacks, heart surgery, or managing chronic heart conditions. This comprehensive approach combines monitored exercise, education, and lifestyle counseling to reduce cardiac risk factors.',
    quoteText: 'Studies show that cardiac rehabilitation can reduce the risk of future cardiac events by up to 30%. Our program provides a safe environment where patients can exercise under professional supervision while learning to manage stress, improve nutrition, and maintain heart-healthy habits.',
    image1: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500',
    image2: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500',
    conclusionText: 'Cardiac rehabilitation isn\'t just about physical recovery—it\'s about reclaiming your life with confidence. Patients who complete cardiac rehab programs report better quality of life, reduced anxiety about their heart condition, and greater independence in daily activities.'
  },
  '10': {
    heroTitle: 'Keeping Young Athletes Safe And Performing Their Best',
    introText: 'Young athletes face unique injury risks as their bodies continue to grow and develop. Prevention is key to ensuring long, healthy athletic careers. Our sports injury prevention program focuses on proper warm-up techniques, strength training, flexibility work, and education about recognizing early warning signs of overuse injuries.',
    quoteText: 'Growing bodies need special attention. Youth athletes are particularly vulnerable to growth plate injuries, overuse conditions, and acute trauma. Teaching proper movement patterns and load management early helps prevent injuries that could sideline them from the sports they love.',
    image1: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500',
    image2: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500',
    conclusionText: 'Prevention programs that include neuromuscular training, sport-specific conditioning, and appropriate rest periods can reduce injury rates by up to 50%. We work with coaches, parents, and young athletes to create sustainable training programs that promote long-term athletic development.'
  },
  '11': {
    heroTitle: 'Understanding And Improving Pelvic Floor Function',
    introText: 'Pelvic floor health is often overlooked but plays a crucial role in core stability, bladder control, and overall quality of life. Whether you\'re experiencing incontinence, pelvic pain, or recovering from childbirth, specialized pelvic floor physiotherapy can provide significant relief and functional improvement.',
    quoteText: 'Pelvic floor dysfunction affects both men and women but is often not discussed openly. Our specialized therapists provide confidential, compassionate care using evidence-based techniques to restore pelvic floor function, reduce pain, and improve confidence.',
    image1: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500',
    image2: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500',
    conclusionText: 'Don\'t suffer in silence. Pelvic floor issues are common and highly treatable with proper physiotherapy intervention. Most patients see significant improvement in symptoms within a few months of starting a personalized treatment program that may include exercises, manual therapy, and lifestyle modifications.'
  },
  '12': {
    heroTitle: 'Reducing Fall Risk Through Targeted Interventions',
    introText: 'Falls are the leading cause of injury among seniors, but they\'re not an inevitable part of aging. Our comprehensive fall prevention program combines balance training, strength exercises, home safety assessments, and medication reviews to significantly reduce fall risk and help seniors maintain their independence.',
    quoteText: 'Balance and strength naturally decline with age, but these changes can be slowed and even reversed with appropriate interventions. Our evidence-based program has been shown to reduce fall rates by up to 40% among participants.',
    image1: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500',
    image2: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500',
    conclusionText: 'Fall prevention requires a multifaceted approach that addresses physical, environmental, and medical factors. Our therapists work with seniors and their families to create safer home environments while building the strength, balance, and confidence needed to stay active and independent.'
  }
};
