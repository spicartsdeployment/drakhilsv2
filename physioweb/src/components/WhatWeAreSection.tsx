import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardCheck, Megaphone, Heart, FileText, X, AlertCircle, Thermometer, FileX } from 'lucide-react';

interface CardContent {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhatWeAreSection() {
  const [isWhatWeAre, setIsWhatWeAre] = React.useState(true);

  const whatWeAreContent: CardContent[] = [
    {
      icon: <ClipboardCheck className="w-10 h-10" strokeWidth={1.5} />,
      title: 'In-Depth Evaluation',
      description: 'We Thoroughly Assess Your Condition Through Physical Exams And Detailed Observations To Understand Your Unique Needs.'
    },
    {
      icon: <Megaphone className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Transparent Guidance',
      description: 'We Keep You Informed At Every Step, Explaining Your Treatment Clearly To Build Trust And Confidence In Your Healing Journey.'
    },
    {
      icon: <Heart className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Compassion & Care',
      description: 'We Respect Your Individual Path And Progress, Offering Patient-Centered Support That Adjusts To Your Evolving Needs.'
    },
    {
      icon: <FileText className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Detailed Records',
      description: 'Every Session Is Carefully Documented To Track Your Improvement And Ensure Consistency And Accuracy In Your Care.'
    }
  ];

  const whatWeAreNotContent: CardContent[] = [
    {
      icon: <X className="w-10 h-10" strokeWidth={1.5} />,
      title: 'No Rushed Diagnoses',
      description: 'We Never Jump To Conclusions. Your Condition Is Carefully Examined—Never Rushed Or Guessed. True Healing Comes From Patience.'
    },
    {
      icon: <AlertCircle className="w-10 h-10" strokeWidth={1.5} />,
      title: 'No Jargon Overload',
      description: 'We Don\'t Confuse With Complex Terms. Every Part Of Your Treatment Is Explained Clearly So You Always Feel Informed.'
    },
    {
      icon: <Thermometer className="w-10 h-10" strokeWidth={1.5} />,
      title: 'No Cold Treatment',
      description: 'We Don\'t Treat You Like A Case Number. Compassion And Understanding Are Central To Every Session.'
    },
    {
      icon: <FileX className="w-10 h-10" strokeWidth={1.5} />,
      title: 'No Missed Details',
      description: 'We Never Overlook Your Progress. Every Milestone Is Recorded And Reviewed To Ensure Steady, Safe Healing.'
    }
  ];

  const currentContent = isWhatWeAre ? whatWeAreContent : whatWeAreNotContent;

  // Get green background slab style - positioned absolutely behind each card
  // The green slab is offset diagonally and only partially visible (2 sides)
  const getGreenSlabStyle = (index: number) => {
    const baseStyle = {
      position: 'absolute' as const,
      background: 'linear-gradient(135deg, #2a9f9d 0%, #1a7270 100%)',
      boxShadow: '0 8px 24px rgba(15, 137, 135, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15)',
      zIndex: 0
    };

    switch(index) {
      case 0: // top-left card: green visible on LEFT and TOP
        return {
          ...baseStyle,
          top: '-30px',
          left: '-30px',
          bottom: '100px',
          right: '100px',
          borderTopLeftRadius: '48px',
          borderTopRightRadius: '30px',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '28px'
        };
      case 1: // top-right card: green visible on RIGHT and TOP
        return {
          ...baseStyle,
          top: '-30px',
          right: '-30px',
          bottom: '100px',
          left: '100px',
          borderTopRightRadius: '48px',
          borderTopLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          borderBottomLeftRadius: '28px'
        };
      case 2: // bottom-left card: green visible on LEFT and BOTTOM
        return {
          ...baseStyle,
          bottom: '-30px',
          left: '-30px',
          top: '100px',
          right: '100px',
          borderBottomLeftRadius: '48px',
          borderTopLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          borderTopRightRadius: '28px'
        };
      case 3: // bottom-right card: green visible on RIGHT and BOTTOM
        return {
          ...baseStyle,
          bottom: '-30px',
          right: '-30px',
          top: '100px',
          left: '100px',
          borderBottomRightRadius: '48px',
          borderBottomLeftRadius: '30px',
          borderTopRightRadius: '30px',
          borderTopLeftRadius: '28px'
        };
      default:
        return baseStyle;
    }
  };

  // Get dark card style with radial gradient mask for curved notch on inner corners
  const getDarkCardStyle = (index: number) => {
    const outerRadius = '40px';
    
    // Using radial-gradient mask to create smooth curved notch on inner corners
    // This creates a concave scoop effect around the center badge
    switch(index) {
      case 0: // top-left: curved notch on BOTTOM-RIGHT corner
        return {
          borderTopLeftRadius: outerRadius,
          borderTopRightRadius: '24px',
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '0px',
          maskImage: 'radial-gradient(circle at calc(100% + 20px) calc(100% + 20px), transparent 90px, black 91px)',
          WebkitMaskImage: 'radial-gradient(circle at calc(100% + 20px) calc(100% + 20px), transparent 90px, black 91px)'
        };
      case 1: // top-right: curved notch on BOTTOM-LEFT corner
        return {
          borderTopLeftRadius: '24px',
          borderTopRightRadius: outerRadius,
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '24px',
          maskImage: 'radial-gradient(circle at calc(0% - 20px) calc(100% + 20px), transparent 90px, black 91px)',
          WebkitMaskImage: 'radial-gradient(circle at calc(0% - 20px) calc(100% + 20px), transparent 90px, black 91px)'
        };
      case 2: // bottom-left: curved notch on TOP-RIGHT corner
        return {
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '0px',
          borderBottomLeftRadius: outerRadius,
          borderBottomRightRadius: '24px',
          maskImage: 'radial-gradient(circle at calc(100% + 20px) calc(0% - 20px), transparent 90px, black 91px)',
          WebkitMaskImage: 'radial-gradient(circle at calc(100% + 20px) calc(0% - 20px), transparent 90px, black 91px)'
        };
      case 3: // bottom-right: curved notch on TOP-LEFT corner
        return {
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '24px',
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: outerRadius,
          maskImage: 'radial-gradient(circle at calc(0% - 20px) calc(0% - 20px), transparent 90px, black 91px)',
          WebkitMaskImage: 'radial-gradient(circle at calc(0% - 20px) calc(0% - 20px), transparent 90px, black 91px)'
        };
      default:
        return { borderRadius: '36px' };
    }
  };

  return (
    <section className="py-24 relative" style={{ backgroundColor: '#E6F1EC', isolation: 'isolate', overflow: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 style={{
            letterSpacing: '-0.5px',
            color: '#1a1a1a'
          }}>
            Intentional <span style={{ color: '#0f8987' }}>Physiotherapy Practicing</span> What<br />
            Heals, <span style={{ color: '#0f8987' }}>Avoiding What</span> Harms
          </h2>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-20">
          <div 
            className="relative bg-white rounded-full p-1 inline-flex items-center"
            style={{
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}
          >
            {/* Sliding Knob Background */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, #0f8987 0%, #1a7270 100%)'
              }}
              initial={false}
              animate={{
                left: isWhatWeAre ? '4px' : '50%',
                right: isWhatWeAre ? '50%' : '4px'
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
            
            {/* Toggle Buttons */}
            <button
              onClick={() => setIsWhatWeAre(true)}
              className="relative z-10 px-9 py-3 rounded-full transition-all duration-300"
              style={{ 
                color: isWhatWeAre ? 'white' : '#6b7280',
                fontWeight: isWhatWeAre ? '600' : '500',
                fontSize: '14.5px',
                letterSpacing: '0.3px'
              }}
            >
              What We Are
            </button>
            <button
              onClick={() => setIsWhatWeAre(false)}
              className="relative z-10 px-9 py-3 rounded-full transition-all duration-300"
              style={{ 
                color: !isWhatWeAre ? 'white' : '#6b7280',
                fontWeight: !isWhatWeAre ? '600' : '500',
                fontSize: '14.5px',
                letterSpacing: '0.3px'
              }}
            >
              What We Are Not
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* 2x2 Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 relative"
            style={{ 
              gap: '20px' // Space between cards
            }}
          >
            
            {currentContent.map((card, index) => (
              <div
                key={index}
                className="relative"
                style={{ position: 'relative', minHeight: '280px' }}
              >
                {/* LAYER 1: GREEN BACKGROUND SLAB - Offset behind card */}
                <div style={getGreenSlabStyle(index)} />

                {/* LAYER 2: DARK CONTENT CARD - Front card */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #1a3d3c 0%, #0d1f1f 60%, #06100f 100%)',
                    minHeight: '280px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 1,
                    ...getDarkCardStyle(index)
                  }}
                >
                  {/* X-ray Background Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png')`,
                      backgroundPosition: 'center',
                      opacity: 1
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

                  {/* Card Content - ANIMATED */}
                  <div className="relative z-10 p-8 md:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${isWhatWeAre ? 'are' : 'not'}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        {/* Icon */}
                        <div className="mb-7" style={{ color: '#0f8987' }}>
                          {card.icon}
                        </div>

                        {/* Title */}
                        <h3 
                          className="mb-4"
                          style={{
                            color: 'white',
                            fontSize: '23px',
                            fontWeight: '600',
                            lineHeight: '1.25',
                            letterSpacing: '-0.2px'
                          }}
                        >
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p 
                          style={{
                            color: 'rgba(255, 255, 255, 0.65)',
                            fontSize: '14px',
                            lineHeight: '1.7',
                            letterSpacing: '0.1px'
                          }}
                        >
                          {card.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Circular Badge */}
          <motion.div
            key={isWhatWeAre ? 'badge-are' : 'badge-not'}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35, type: 'spring', stiffness: 300 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center text-center"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2a9f9d 0%, #1a6f6d 100%)',
              border: '10px solid white',
              boxShadow: '0 0 0 4px rgba(42, 159, 157, 0.2), 0 12px 40px rgba(0,0,0,0.3)'
            }}
          >
            <p 
              className="leading-tight px-4"
              style={{
                color: 'white',
                fontSize: '16.5px',
                fontWeight: '700',
                letterSpacing: '0.3px'
              }}
            >
              {isWhatWeAre ? 'What We Do' : 'What We Not Do'}
            </p>
          </motion.div>
        </div>

        {/* Mobile Fallback - Show Badge Below on Small Screens */}
        <motion.div
          key={`mobile-${isWhatWeAre ? 'are' : 'not'}`}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="hidden"
        >
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2a9f9d 0%, #1a6f6d 100%)',
              border: '8px solid white',
              boxShadow: '0 0 0 3px rgba(42, 159, 157, 0.2), 0 8px 30px rgba(0,0,0,0.2)'
            }}
          >
            <p 
              className="leading-tight px-3"
              style={{
                color: 'white',
                fontSize: '15px',
                fontWeight: '700',
                letterSpacing: '0.3px'
              }}
            >
              {isWhatWeAre ? 'What We Do' : 'What We Not Do'}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}