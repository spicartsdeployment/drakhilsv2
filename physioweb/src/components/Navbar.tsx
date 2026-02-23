import React, { useState, useEffect, useRef } from 'react';
import { Link, RouterContext } from '../App';
import { ChevronDown, Menu, X, MapPin, Clock, Send, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/fd3b26f01cc866255fba6d6aeee4ad8c7c85e539.png';

const departments = [
  { name: 'Orthopedic Rehabilitation', path: '/departments/orthopedic' },
  { name: 'Neurological Rehabilitation', path: '/departments/neurological' },
  { name: 'Cardio Rehabilitation', path: '/departments/cardio' },
  { name: 'Pediatrics Rehabilitation', path: '/departments/pediatrics' },
  { name: 'Oncology Rehabilitation', path: '/departments/oncology' },
  { name: 'Sports Rehabilitation', path: '/departments/sports' },
  { name: 'Obstetrics Rehabilitation', path: '/departments/obstetrics' },
  { name: 'Geriatrics Rehabilitation', path: '/departments/geriatrics' },
  { name: 'Wellness and Lifestyle Rehabilitation', path: '/departments/wellness' },
];

const specialities = [
  { name: 'Nursing Care', path: '/specialities/nursing-care' },
  { name: 'Physical Therapist', path: '/specialities/physical-therapist' },
  { name: 'Occupational Therapist', path: '/specialities/occupational-therapist' },
  { name: 'Speech Swallow Therapist', path: '/specialities/speech-swallow-therapist' },
  { name: 'Psychology', path: '/specialities/psychology' },
  { name: 'Diet & Nutrition', path: '/specialities/diet-nutrition' },
  { name: 'Yoga Therapy', path: '/specialities/yoga-therapy' },
  { name: 'Physical Fitness', path: '/specialities/physical-fitness' },
  { name: 'Music Therapy', path: '/specialities/music-therapy' },
];

const resources = [
  { name: 'Contact Us', path: '/resources/contact' },
  { name: 'Health Information Policy', path: '/resources/health-policy' },
  { name: 'Terms and Conditions', path: '/resources/terms' },
  { name: 'Blogs', path: '/resources/blogs' },
  { name: 'Events', path: '/resources/events' },
];

const aboutUs = [
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Therapist', path: '/resources/about-site' },
  { name: 'FAQ', path: '/resources/faq' },
  { name: 'Gallery', path: '/about-us/gallery' },
  { name: 'Locations', path: '/resources/locations' },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const lastScrollY = useRef(0);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false);
  const { navigate } = React.useContext(RouterContext);

  // Intersection Observer approach - works when scroll events don't
  useEffect(() => {
    let ticking = false;
    let scrollDirection = 'up';
    let lastKnownScrollPosition = 0;

    const checkScroll = () => {
      const currentScrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setScrollPos(currentScrollY);

      // Mark that user has scrolled at least once
      if (!hasScrolledRef.current && currentScrollY > 0) {
        hasScrolledRef.current = true;
      }

      if (currentScrollY > lastKnownScrollPosition && currentScrollY > 100) {
        scrollDirection = 'down';
        setIsVisible(false);
        setOpenDropdown(null);
      } else if (currentScrollY < lastKnownScrollPosition || currentScrollY <= 10) {
        scrollDirection = 'up';
        setIsVisible(true);
      }

      lastKnownScrollPosition = currentScrollY;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    // Multiple scroll event sources
    const targets = [window, document, document.body, document.documentElement];

    targets.forEach(target => {
      if (target) {
        target.addEventListener('scroll', requestTick, { passive: true });
      }
    });

    // Intersection Observer as backup - but only after initial load
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only use Intersection Observer after user has scrolled at least once
        if (hasScrolledRef.current) {
          // When sentinel goes out of view, hide navbar
          if (!entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      targets.forEach(target => {
        if (target) {
          target.removeEventListener('scroll', requestTick);
        }
      });
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Sentinel element for Intersection Observer */}
      <div ref={sentinelRef} style={{ position: 'absolute', top: 0, height: '1px', width: '100%', pointerEvents: 'none' }} />

      {/* Top Bar with Location, Timing, and Social Media */}
      <div
        className="w-full py-3 px-4 fixed left-0 right-0 hidden md:block"
        style={{
          backgroundColor: 'rgba(15, 137, 135, 0.95)',
          top: isVisible ? '0' : '-200px',
          zIndex: 50,
          transition: 'top 0.3s ease-in-out',
          willChange: 'top'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Location */}
          <div className="flex items-center gap-3 text-white text-sm">
            <a className="flex items-center gap-3 text-white text-sm"
              href="https://maps.app.goo.gl/3N3rYocaNkEGBNzbA"
              target="_blank"
              rel="noopener noreferrer">
              <MapPin size={18} className="flex-shrink-0" />
              <span>BanjaraHills, Hyderabad-500482</span>
            </a>
          </div>

          {/* Timing */}
          <div className="flex items-center gap-2 text-white text-sm">
            <Clock size={18} className="flex-shrink-0" />
            <span>Our Service Timing: 09:00 am To 06:00 pm (Mon to Saturday)</span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Send size={16} style={{ color: '#0f8987' }} />
            </a>
            <a
              href="https://www.instagram.com/dr_akhils_rehabs?igsh=aXE4eTF1d3I1ZjZn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Instagram size={16} style={{ color: '#0f8987' }} />
            </a>
            <a
              href="https://www.facebook.com/share/1CXrzcoiKY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Facebook size={16} style={{ color: '#0f8987' }} />
            </a>
            <a
              href="https://www.youtube.com/@drakhilshealthstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Youtube size={16} style={{ color: '#0f8987' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-akhilsrehab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Linkedin size={16} style={{ color: '#0f8987' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="bg-white shadow-md fixed left-0 right-0 mx-4 rounded-2xl md:rounded-full md:mx-4 lg:mx-8"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          top: isVisible ? 'var(--navbar-top, 0)' : '-150px',
          zIndex: 40,
          transition: 'top 0.3s ease-in-out',
          willChange: 'top',
          ['--navbar-top' as any]: window.innerWidth >= 768 ? '64px' : '12px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Dr. AKHIL'S Physio Rehab Research" className="h-12 md:h-14" />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Departments Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('departments')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:opacity-70 transition-opacity">
                  <span>Departments</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: openDropdown === 'departments' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'departments' && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                    >
                      {departments.map((dept) => (
                        <Link
                          key={dept.path}
                          to={dept.path}
                          className="block px-4 py-2 text-black transition-all duration-200 ease-in-out hover:!bg-[#0f8987f2] hover:!text-white"
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Specialities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('specialities')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:opacity-70 transition-opacity">
                  <span>Specialities</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: openDropdown === 'specialities' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'specialities' && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                    >
                      {specialities.map((spec) => (
                        <Link
                          key={spec.path}
                          to={spec.path}
                          className="block px-4 py-2 text-black transition-all duration-200 ease-in-out hover:!bg-[#0f8987f2] hover:!text-white"
                        >
                          {spec.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:opacity-70 transition-opacity">
                  <span>Resources</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: openDropdown === 'resources' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                    >
                      {resources.map((res) => (
                        <Link
                          key={res.path}
                          to={res.path}
                          className="block px-4 py-2 text-black transition-all duration-200 ease-in-out hover:!bg-[#0f8987f2] hover:!text-white"
                        >
                          {res.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:opacity-70 transition-opacity">
                  <span>About Us</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: openDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                    >
                      {aboutUs.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-black transition-all duration-200 ease-in-out hover:!bg-[#0f8987f2] hover:!text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Contact Us Button - Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-6 py-2 rounded-full transition-colors"
                style={{ backgroundColor: '#0f8987', color: '#ffffff' }}
              >
                Contact Us
              </Link>

              <Link
                to="/login"
                className="px-6 py-2 rounded-full border-2 transition-colors hover:bg-gray-50"
                style={{ borderColor: '#0f8987', color: '#0f8987' }}
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden pb-4 max-h-[70vh] overflow-y-auto"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
                WebkitOverflowScrolling: 'touch' /* Smooth scrolling on iOS */
              }}
            >
              <style>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .lg\\:hidden::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'departments' ? null : 'departments')}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>Departments</span>
                    <ChevronDown size={16} />
                  </button>
                  {openDropdown === 'departments' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {departments.map((dept) => (
                        <div
                          key={dept.path}
                          className="block py-2 px-3 rounded text-black transition-all duration-200 active:!bg-[#0f8987f2] active:!text-white hover:!bg-[#0f8987f2] hover:!text-white cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenDropdown(null);
                            navigate(dept.path);
                          }}
                        >
                          {dept.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'specialities' ? null : 'specialities')}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>Specialities</span>
                    <ChevronDown size={16} />
                  </button>
                  {openDropdown === 'specialities' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {specialities.map((spec) => (
                        <div
                          key={spec.path}
                          className="block py-2 px-3 rounded text-black transition-all duration-200 active:!bg-[#0f8987f2] active:!text-white hover:!bg-[#0f8987f2] hover:!text-white cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenDropdown(null);
                            navigate(spec.path);
                          }}
                        >
                          {spec.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>Resources</span>
                    <ChevronDown size={16} />
                  </button>
                  {openDropdown === 'resources' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {resources.map((res) => (
                        <div
                          key={res.path}
                          className="block py-2 px-3 rounded text-black transition-all duration-200 active:!bg-[#0f8987f2] active:!text-white hover:!bg-[#0f8987f2] hover:!text-white cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenDropdown(null);
                            navigate(res.path);
                          }}
                        >
                          {res.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>About Us</span>
                    <ChevronDown size={16} />
                  </button>
                  {openDropdown === 'about' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {aboutUs.map((item) => (
                        <div
                          key={item.path}
                          className="block py-2 px-3 rounded text-black transition-all duration-200 active:!bg-[#0f8987f2] active:!text-white hover:!bg-[#0f8987f2] hover:!text-white cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenDropdown(null);
                            navigate(item.path);
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="block px-6 py-2 rounded-full text-center"
                  style={{ backgroundColor: '#0f8987', color: '#ffffff' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>

                <Link
                  to="/login"
                  className="block px-6 py-2 rounded-full border-2 text-center"
                  style={{ borderColor: '#0f8987', color: '#0f8987' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}