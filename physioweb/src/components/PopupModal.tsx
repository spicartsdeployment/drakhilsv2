import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopupModal({ isOpen, onClose }: PopupModalProps) {
  const [email, setEmail] = React.useState('');
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [showCloseIcon, setShowCloseIcon] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing! We will keep you updated.');
      setEmail('');
      // Mark popup as seen for this browser session
      sessionStorage.setItem('hasSeenWelcomePopup', 'true');
      onClose();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleOverlayMouseEnter = () => {
    setShowCloseIcon(true);
  };

  const handleOverlayMouseLeave = () => {
    setShowCloseIcon(false);
  };

  const handleCardMouseEnter = () => {
    setShowCloseIcon(false);
  };

  const handleCardMouseLeave = () => {
    setShowCloseIcon(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full-screen dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', cursor: showCloseIcon ? 'none' : 'default' }}
            onClick={onClose}
            data-testid="popup-overlay"
            onMouseEnter={handleOverlayMouseEnter}
            onMouseLeave={handleOverlayMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {/* Floating X icon that follows cursor */}
            {showCloseIcon && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed pointer-events-none z-[60]"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'transparent'
                  }}
                >
                  <X size={120} color="white" strokeWidth={0.8} />
                </div>
              </motion.div>
            )}

            {/* Centered popup card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
              style={{ 
                maxWidth: '900px', 
                width: '100%',
                maxHeight: '85vh',
                borderRadius: window.innerWidth < 768 ? '16px' : '24px'
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Content container */}
              <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-y-visible">
                {/* Left Section - Image */}
                <div 
                  className="w-full md:w-1/2 relative overflow-hidden" 
                  style={{ 
                    maxHeight: window.innerWidth < 768 ? '180px' : 'none',
                    minHeight: window.innerWidth < 768 ? 'auto' : '100%'
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXBpc3QlMjBoZWxwaW5nJTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY2MjQ4MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Physiotherapy Treatment"
                    className="w-full h-full object-cover"
                    style={{
                      minHeight: window.innerWidth < 768 ? '180px' : '100%'
                    }}
                  />
                  {/* Gradient overlay on image */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 100%)'
                    }}
                  />
                </div>

                {/* Right Section - Content */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center" style={{ marginTop: window.innerWidth < 768 ? '0' : '-140px' }}>
                  {/* Heading */}
                  <h2 
                    className="mb-3 md:mb-4"
                    style={{ 
                      fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      color: '#1a1a1a'
                    }}
                  >
                    Strengthen{' '}
                    <span style={{ color: '#0f8987' }}>With</span>{' '}
                    Physiotherapy
                  </h2>

                  {/* Description */}
                  <p 
                    className="mb-4 md:mb-6"
                    style={{
                      fontSize: window.innerWidth < 768 ? '0.85rem' : '0.95rem',
                      lineHeight: '1.6',
                      color: '#555',
                      fontWeight: '300'
                    }}
                  >
                    Experience professional care that restores mobility, relieves pain, 
                    and accelerates recovery. Join our community and receive expert 
                    wellness tips, treatment updates, and exclusive offers.
                  </p>

                  {/* Email form */}
                  <form onSubmit={handleSubmit} className="mb-3 md:mb-4">
                    <div className="relative mb-3 md:mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        required
                        className="w-full px-4 md:px-5 py-2.5 md:py-3 rounded-full border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                        style={{
                          fontSize: window.innerWidth < 768 ? '0.875rem' : '0.95rem',
                          color: '#333'
                        }}
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full py-2.5 md:py-3 rounded-full text-white transition-all hover:shadow-lg hover:scale-[1.02]"
                      style={{
                        backgroundColor: '#0f8987',
                        fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 14px rgba(15, 137, 135, 0.3)'
                      }}
                    >
                      Submit
                    </button>
                  </form>

                  {/* Terms text */}
                  <p 
                    className="text-center mb-4 md:mb-6"
                    style={{
                      fontSize: window.innerWidth < 768 ? '0.7rem' : '0.75rem',
                      color: '#888',
                      lineHeight: '1.4'
                    }}
                  >
                    By subscribing, you agree to our{' '}
                    <a 
                      href="/terms" 
                      className="underline hover:text-teal-600"
                      style={{ color: '#0f8987' }}
                    >
                      Terms & Conditions
                    </a>
                  </p>

                  {/* Social media icons */}
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ 
                        backgroundColor: '#c1f5f1',
                        color: '#0f8987'
                      }}
                      aria-label="Instagram"
                    >
                      <Instagram size={window.innerWidth < 768 ? 18 : 20} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ 
                        backgroundColor: '#c1f5f1',
                        color: '#0f8987'
                      }}
                      aria-label="Facebook"
                    >
                      <Facebook size={window.innerWidth < 768 ? 18 : 20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ 
                        backgroundColor: '#c1f5f1',
                        color: '#0f8987'
                      }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={window.innerWidth < 768 ? 18 : 20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}