import React from 'react';
import { Link } from '../App';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/fd3b26f01cc866255fba6d6aeee4ad8c7c85e539.png';

export function Footer() {
  const instagramImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwc2Vzc2lvbiUyMHBhdGllbnR8ZW58MXx8fHwxNzY2NTAwNDg5fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Physiotherapy Session' },
    { id: 2, url: 'https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjY0NzU5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Physical Therapy Exercise' },
    { id: 3, url: 'https://images.unsplash.com/photo-1764314399496-aa49b4e4d127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY2NTAwNDkwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Rehabilitation Equipment' },
    { id: 4, url: 'https://images.unsplash.com/photo-1758274531664-6f340855f3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJldGNoaW5nJTIwdGhlcmFweSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NjUwMDQ5MXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Wellness Therapy' },
    { id: 5, url: 'https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwdGhlcmFweXxlbnwxfHx8fDE3NjY1MDA0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Medical Professional' },
  ];

  return (
    <footer className="relative" style={{ backgroundColor: '#1a3333', overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
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

      {/* Instagram Gallery Section */}
      <div
        className="py-16 overflow-hidden relative z-10"
        style={{
          backgroundColor: 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrolling Image Gallery */}
          <div className="relative overflow-hidden">
            <style>{`
              @keyframes scroll-instagram {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .instagram-scroll-container {
                display: flex;
                animation: scroll-instagram 30s linear infinite;
                gap: 24px;
                padding: 0;
                margin: 0;
              }
              .instagram-scroll-container:hover {
                animation-play-state: paused;
              }
              .instagram-card {
                flex-shrink: 0;
                width: 218px;
                height: 190px;
                border-radius: 16px;
                overflow: hidden;
                position: relative;
                cursor: pointer;
              }
              .instagram-card-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
                filter: brightness(0.95);
              }
              .instagram-card:hover .instagram-card-image {
                transform: scale(1.1);
              }
              .instagram-card-overlay {
                position: absolute;
                inset: 0;
                background: rgba(51, 169, 177, 0.5);
                clip-path: inset(calc(100% - 48px) 0 0 calc(100% - 48px) round 12px);
                transition: clip-path 0.6s ease-in-out;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .instagram-card:hover .instagram-card-overlay {
                clip-path: inset(0 0 0 0 round 16px);
              }
              .instagram-icon-container {
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.5s ease;
                position: absolute;
                bottom: 4px;
                right: 4px;
                padding: 8px;
                border-radius: 8px;
              }
              .instagram-card:hover .instagram-icon-container {
                bottom: 50%;
                right: 50%;
                transform: translate(50%, 50%) scale(1.3);
              }
            `}</style>

            <div className="instagram-scroll-container">
              {/* First set of images */}
              {instagramImages.map((image) => (
                <div key={image.id} className="instagram-card">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="instagram-card-image"
                  />
                  <div className="instagram-card-overlay">
                    <div className="instagram-icon-container">
                      <Instagram
                        size={26}
                        style={{
                          color: 'white',
                          strokeWidth: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {instagramImages.map((image) => (
                <div key={`duplicate-${image.id}`} className="instagram-card">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="instagram-card-image"
                  />
                  <div className="instagram-card-overlay">
                    <div className="instagram-icon-container">
                      <Instagram
                        size={26}
                        style={{
                          color: 'white',
                          strokeWidth: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10" style={{ backgroundColor: 'transparent' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            {/* <div className="mb-4">
              <img src={logo} alt="Dr. AKHIL'S" className="h-10" />
            </div> */}
            <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Providing comprehensive rehabilitation and therapy services to help you achieve optimal health and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-70" style={{ color: '#33a9b1' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-70" style={{ color: '#33a9b1' }}>
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-70" style={{ color: '#33a9b1' }}>
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-70" style={{ color: '#33a9b1' }}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ color: '#c1f5f1' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>About Us</Link></li>
              <li><Link to="/resources/contact" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Contact Us</Link></li>
              <li><Link to="/resources/locations" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Locations</Link></li>
              <li><Link to="/resources/blogs" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Blogs</Link></li>
              <li><Link to="/resources/events" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Events</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ color: '#c1f5f1' }}>Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/departments/orthopedic" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Orthopedic Rehab</Link></li>
              <li><Link to="/departments/sports" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Sports Rehab</Link></li>
              <li><Link to="/departments/neurological" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Neurological Rehab</Link></li>
              <li><Link to="/departments/cardio" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Cardio Rehab</Link></li>
              <li><Link to="/specialities/physical-therapist" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Physical Therapy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4" style={{ color: '#c1f5f1' }}>Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: '#33a9b1' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Dr Akhil’s Physio Rehabs, Irrum Colony, Venkatramana Colony,Beside Silver Star Benz Showroom lane, Hyderabad-500482</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} style={{ color: '#33a9b1' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>+91 83338 90389

                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} style={{ color: '#33a9b1' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>drakhilsrehabs@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              © 2025 Dr. AKHIL'S. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/resources/terms" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Terms & Conditions</Link>
              <Link to="/resources/health-policy" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Privacy Policy</Link>
              <Link to="/resources/pricing" className="hover:text-gray-300" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Price Transparency</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}