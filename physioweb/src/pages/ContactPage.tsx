import React, { useState } from 'react';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import locationMapImage from 'figma:asset/15f6c91872c4e81d146eb371af8b9d3f6e41fa12.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    dateTime: '',
    message: ''
  });

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/wHR9gGpxTZfRZDDx8', '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .contact-left-side {
            padding-right: 0 !important;
          }
          .contact-info-row {
            flex-direction: column !important;
            gap: 20px !important;
            align-items: flex-start !important;
          }
          .contact-divider {
            display: none !important;
          }
          .contact-form-container {
            margin-left: 0 !important;
            margin-top: 0 !important;
            padding: 20px !important;
          }
          .contact-input-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
          }
          .contact-image-overlay {
            position: relative !important;
            top: 0 !important;
            right: 0 !important;
            width: 100% !important;
            padding: 20px !important;
          }
          .contact-curve-cutout {
            display: none !important;
          }
          .contact-main-image {
            display: none !important;
          }
          .contact-right-side {
            padding-left: 0 !important;
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
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6" style={{ marginTop: '105px' }}>
            <BackButton />
          </div>

          <h1
            className="text-white text-center"
            style={{
              letterSpacing: '0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ backgroundColor: '#dee8de', padding: '0', position: 'relative' }}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', paddingTop: '80px', paddingBottom: '60px' }}>

          {/* Single Parent Container for Left, Right, and Image */}
          <div style={{ position: 'relative' }}>

            {/* Top Grid - Contact Info and Form Top Part */}
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', position: 'relative' }}>
              {/* LEFT SIDE - Contact Information */}
              <div className="contact-left-side" style={{ paddingRight: '40px' }}>
                {/* Header with decorative line */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#0f8987',
                    borderRadius: '2px'
                  }}></div>
                  <p style={{
                    fontSize: '11px',
                    color: '#0f8987',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '500',
                    margin: 0
                  }}>
                    REACH OUT FOR MASSAGE
                  </p>
                </div>

                {/* Main Heading */}
                <h2
                  style={{
                    fontFamily: 'Philosopher, serif',
                    fontSize: '42px',
                    marginBottom: '12px',
                    color: '#000',
                    lineHeight: '1.2',
                    fontWeight: '400'
                  }}
                >
                  Feel <span style={{ color: '#0f8987' }}>Better, Book</span> Today
                </h2>

                {/* Subtext */}
                <p
                  style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '32px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  You can easily contact us for an advice or the appointments.
                </p>

                {/* Contact Information Row - Horizontal Layout */}
                <div className="contact-info-row" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '30px',
                  marginBottom: '40px',
                  flexWrap: 'nowrap'
                }}>
                  {/* Contact Number */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p style={{
                      fontSize: '13px',
                      color: '#000',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '500',
                      margin: 0,
                      marginBottom: '4px'
                    }}>
                      Contact Number
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#1a3d3d',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Phone size={18} style={{ color: '#fff' }} />
                      </div>
                      <p style={{
                        fontSize: '16px',
                        color: '#000',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '400',
                        margin: 0
                      }}>
                        +91 83338 90389
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="contact-divider" style={{
                    width: '1px',
                    height: '60px',
                    backgroundColor: '#ccc',
                    flexShrink: 0,
                    marginTop: '24px'
                  }}></div>

                  {/* Mail Address */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p style={{
                      fontSize: '13px',
                      color: '#000',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '500',
                      margin: 0,
                      marginBottom: '4px'
                    }}>
                      Mail Address
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#1a3d3d',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Mail size={18} style={{ color: '#fff' }} />
                      </div>
                      <p style={{
                        fontSize: '16px',
                        color: '#000',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '400',
                        margin: 0
                      }}>
                        drakhilsrehabs@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="contact-divider" style={{
                    width: '1px',
                    height: '60px',
                    backgroundColor: '#ccc',
                    flexShrink: 0,
                    marginTop: '24px'
                  }}></div>

                  {/* Message Timing */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p style={{
                      fontSize: '13px',
                      color: '#000',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '500',
                      margin: 0,
                      marginBottom: '4px'
                    }}>
                      Timings ( Mon To Sat )
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#1a3d3d',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Clock size={18} style={{ color: '#fff' }} />
                      </div>
                      <p style={{
                        fontSize: '16px',
                        color: '#000',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '400',
                        margin: 0
                      }}>
                        9Am To 6Pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Form Top Part (First 4 fields) */}
              <div className="contact-right-side" style={{ paddingLeft: '20px' }}>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div
                    className="contact-form-container"
                    style={{
                      backgroundColor: 'rgb(222, 232, 222)',
                      borderRadius: '24px 24px 0px 0px',
                      padding: '15px',
                      boxShadow: 'none',
                      border: 'none',
                      marginLeft: '35px',
                      marginTop: '115px'
                    }}
                  >
                    {/* Name and Email Row */}
                    <div className="contact-input-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
                      <input
                        type="text"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{
                          padding: '16px 20px',
                          borderRadius: '50px',
                          border: '1px solid #ddd',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          color: '#333',
                          fontFamily: 'Poppins, sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#0f8987';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#ddd';
                        }}
                      />
                      <input
                        type="email"
                        placeholder="E-mail Address*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{
                          padding: '16px 20px',
                          borderRadius: '50px',
                          border: '1px solid #ddd',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          color: '#333',
                          fontFamily: 'Poppins, sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#0f8987';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#ddd';
                        }}
                      />
                    </div>

                    {/* Service and Date Row */}
                    <div className="contact-input-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div style={{ position: 'relative' }}>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            borderRadius: '50px',
                            border: '1px solid #ddd',
                            fontSize: '14px',
                            backgroundColor: 'white',
                            color: '#888',
                            fontFamily: 'Poppins, sans-serif',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M1 1L6 6L11 1%27 stroke=%27%23888%27 stroke-width=%272%27 stroke-linecap=%27round%27/%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 22px center',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#0f8987';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#ddd';
                          }}
                        >
                          <option value="">Type Of Service En...</option>
                          <option value="orthopedic">Orthopedic Rehabilitation</option>
                          <option value="neurological">Neurological Rehabilitation</option>
                          <option value="cardio">Cardio Pulmonary</option>
                          <option value="pediatric">Pediatric Rehabilitation</option>
                          <option value="geriatric">Geriatric Rehabilitation</option>
                          <option value="sports">Sports Rehabilitation</option>
                          <option value="womens">Women's Health</option>
                          <option value="posture">Posture Correction</option>
                          <option value="pain">Pain Management</option>
                        </select>
                      </div>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="text"
                          placeholder="Select Date & Time*"
                          value={formData.dateTime}
                          onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                          onFocus={(e) => {
                            e.target.type = 'datetime-local';
                            e.target.style.borderColor = '#0f8987';
                          }}
                          onBlur={(e) => {
                            if (!e.target.value) {
                              e.target.type = 'text';
                            }
                            e.target.style.borderColor = '#ddd';
                          }}
                          required
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            borderRadius: '50px',
                            border: '1px solid #ddd',
                            fontSize: '14px',
                            backgroundColor: 'white',
                            color: '#888',
                            fontFamily: 'Poppins, sans-serif',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M12.667 2.667h-9.334c-.736 0-1.333.597-1.333 1.333v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM10.667 1.333v2.667M5.333 1.333v2.667M2 6.667h12%27 stroke=%27%23888%27 stroke-width=%271.5%27 stroke-linecap=%27round%27/%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 22px center'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Image with Curved Cut-out - Full Width */}
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Image Wrapper with Curve */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '32px',
                  overflow: 'hidden'
                }}
              >
                <img
                  className="contact-main-image"
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200"
                  alt="Hands clasping"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Curve Cut-out Container */}
                <div
                  className="contact-curve-cutout"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    borderRadius: '20px',
                    right: '0px',
                    width: '470px',
                    height: '250px',
                    pointerEvents: 'none',
                    background: 'rgb(222, 232, 222)'
                  }}
                >
                  {/* First Curve */}
                  <span
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#dee8de',
                      borderBottomLeftRadius: '200px'
                    }}
                  ></span>

                  {/* Second Soft Curve */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '150px',
                      height: '150px',
                      background: '#dee8de',
                      borderTopLeftRadius: '80px'
                    }}
                  ></span>
                </div>

                {/* Form Fields Overlay in Curve Area - Bottom Part of Form */}
                <div
                  className="contact-image-overlay"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    width: '445px',
                    pointerEvents: 'auto',
                    zIndex: 10
                  }}
                >
                  {/* Message Textarea */}
                  <textarea
                    placeholder="Enter Your Message Here"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    form="contact-form"
                    rows={7}
                    style={{
                      width: '100%',
                      height: '140px',
                      padding: '5px',
                      borderRadius: '20px',
                      border: '1px solid rgb(221, 221, 221)',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: 'rgb(136, 136, 136)',
                      resize: 'none',
                      fontFamily: 'Poppins, sans-serif',
                      outline: 'none',
                      transition: '0.3s',
                      marginBottom: '18px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#0f8987';
                      e.target.style.color = '#333';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgb(221, 221, 221)';
                      if (!e.target.value) {
                        e.target.style.color = 'rgb(136, 136, 136)';
                      }
                    }}
                  />

                  {/* Submit Button */}
                  <button
                    style={{
                      backgroundColor: isButtonHovered ? 'white' : '#0f8987',
                      color: isButtonHovered ? '#0f8987' : 'white',
                      padding: '16px 36px 16px 36px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Poppins, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      width: '100%',
                      height: '60px',
                      boxShadow: '0 4px 16px rgba(51, 169, 177, 0.3)',
                      transform: isButtonHovered ? 'translateY(-2px)' : 'translateY(0)',
                      position: 'relative',
                    }}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                  >
                    <style>{`
                      .contact-arrow-btn::after {
                        content: "→";
                        font-family: "wdt-ext";
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%) rotate(${isButtonHovered ? '-45deg' : '0deg'});
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        background-color: ${isButtonHovered ? '#0f8987' : 'white'};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 22px;
                        font-weight: bold;
                        color: ${isButtonHovered ? 'white' : '#0f8987'};
                        transition: 0.3s ease;
                        text-indent: 0;
                      }
                    `}</style>
                    <span>Schedule Your Visit</span>
                    <div className="contact-arrow-btn" style={{ width: '44px', height: '44px' }}></div>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Location Map Image */}
          <div
            style={{
              marginTop: '40px',
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
            onClick={handleMapClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={locationMapImage}
              alt="Location Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}