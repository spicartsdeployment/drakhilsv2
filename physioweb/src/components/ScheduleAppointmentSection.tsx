import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AKHIL } from '../const';
import emailjs from '@emailjs/browser';

export function ScheduleAppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',

    service: '',
    contact: '',
    date: '',
    staff: ''
  });

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Handle form submission
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      console.log("Form Submitted:", formData);
      // emailjs.
      //   send(
      //     "service_qsm8f4",
      //     "template_w7upb1",
      //     formData,
      //     "1AZTh6dOkB_Uzld2d"


      //   )

      const phone = '918333890389';
      const whatsappURL = ` https://wa.me/${phone}?text=Hi, my name is  ${formData.name}, and Iam looking for  ${formData.service} connect me with at  : ${formData.contact} my preffered date is  ${formData.date} and preffered staff is  ${formData.staff} to begin healing!`;
      window.open(whatsappURL, "_blank");



      // Reset form
      setFormData({ name: "", service: "", contact: "", date: "", staff: "" });
      e.target.reset();
    } else {
      // Force native validation messages to show
      e.target.reportValidity();
    }
  };

  return (
    <section
      className="relative py-20 px-6 sm:px-8"
      style={{
        backgroundColor: '#1a3333',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${AKHIL[3]})`, // xrayBg
          backgroundPosition: 'center center',
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center relative">

          {/* Left Side - Heading & Branding */}
          <div className="lg:col-span-2">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#33a9b1'
                }}
              />
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                SCHEDULE WITH EASE
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="mb-8"
              style={{
                color: 'white',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: '400'
              }}
            >
              Register<br />
              <span style={{ color: '#c1f5f1', fontFamily: 'Georgia, "Times New Roman", serif' }}>Appointment</span>
            </h2>

            {/* Happy Clients */}
            <div className="flex items-center gap-3">
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                HAPPY CLIENTS
              </span>
              <div className="flex items-center -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Client"
                  className="rounded-full object-cover border-2"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderColor: '#1a3333'
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Client"
                  className="rounded-full object-cover border-2"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderColor: '#1a3333'
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Client"
                  className="rounded-full object-cover border-2"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderColor: '#1a3333'
                  }}
                />
                <div
                  className="rounded-full flex items-center justify-center border-2"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#33a9b1',
                    borderColor: '#1a3333'
                  }}
                >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: '700'
                    }}
                  >
                    2k+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Line Separator */}
          <div
            className="hidden lg:block absolute"
            style={{
              left: '40%',
              top: '10%',
              bottom: '10%',
              width: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }}
          />

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Row 1: Name and Looking For */}
              <div className="flex flex-wrap items-end gap-4">
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    whiteSpace: 'nowrap',
                    marginBottom: '8px'
                  }}
                >
                  Hey, My Name Is
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-shrink-0 bg-transparent outline-none transition-all duration-300"
                  style={{
                    width: '180px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    paddingBottom: '8px',
                    color: 'white',
                    fontSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderBottomColor = '#33a9b1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                />
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    whiteSpace: 'nowrap',
                    marginBottom: '8px'
                  }}
                >
                  And I'm Looking For
                </span>
              </div>

              {/* Row 2: Service and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none appearance-none cursor-pointer transition-all duration-300"
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                      paddingBottom: '8px',
                      paddingRight: '30px',
                      color: formData.service ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: '15px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    <option value="">Type of Services*</option>
                    <option value="orthopedic" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Orthopedic Rehabilitation</option>
                    <option value="neurological" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Neurological Rehabilitation</option>
                    <option value="cardio" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Cardio Respiratory Care</option>
                    <option value="sports" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Sports Injury Recovery</option>
                    <option value="pediatric" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Pediatric Therapy</option>
                    <option value="geriatric" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Geriatric Care</option>
                    <option value="women" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Women's Health</option>
                    <option value="manual" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Manual Therapy</option>
                    <option value="vestibular" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Vestibular Rehabilitation</option>
                  </select>
                  <div
                    className="absolute right-0 top-0 pointer-events-none"
                    style={{ color: '#33a9b1' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '15px',
                      whiteSpace: 'nowrap',
                      marginBottom: '8px'
                    }}
                  >
                    Connect With Me At
                  </span>
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact Number*"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent outline-none transition-all duration-300"
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                      paddingBottom: '8px',
                      color: 'white',
                      fontSize: '15px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Date and Staff */}
              <div className="flex flex-wrap items-end gap-4">
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '15px',
                    whiteSpace: 'nowrap',
                    marginBottom: '8px'
                  }}
                >
                  My Preferred Date Is
                </span>
                <input
                  type="date"
                  name="date"
                  placeholder="Select Date*"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="flex-shrink-0 bg-transparent outline-none transition-all duration-300 cursor-pointer"
                  style={{
                    width: '160px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    paddingBottom: '8px',
                    color: formData.date ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    fontSize: '15px',
                    colorScheme: 'dark'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderBottomColor = '#33a9b1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                />
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '15px',
                    whiteSpace: 'nowrap',
                    marginBottom: '8px'
                  }}
                >
                  And Preferred Staff Is
                </span>
              </div>

              {/* Row 4: Staff Selection */}
              <div className="flex flex-wrap items-end gap-4">
                <div className="relative flex-shrink-0" style={{ width: '200px' }}>
                  <select
                    name="staff"
                    value={formData.staff}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none appearance-none cursor-pointer transition-all duration-300"
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                      paddingBottom: '8px',
                      paddingRight: '30px',
                      color: formData.staff ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: '15px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#33a9b1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    <option value="">Select Staff*</option>
                    <option value="dr-akhil" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Dr. Akhil</option>
                    <option value="dr-kavya" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Dr. Kavya</option>
                    {/* <option value="michael-chen" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Michael Chen - Sports Therapist</option>
                    <option value="emily-white" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Emily White - Neurological Specialist</option>
                    <option value="david-kumar" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>David Kumar - Cardio Specialist</option>
                    <option value="lisa-brown" style={{ backgroundColor: 'rgb(26, 51, 51)', color: 'white' }}>Lisa Brown - Pediatric Therapist</option> */}
                  </select>
                  <div
                    className="absolute right-0 top-0 pointer-events-none"
                    style={{ color: '#33a9b1' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '15px',
                    whiteSpace: 'nowrap',
                    marginBottom: '8px'
                  }}
                >
                  To Begin Healing!
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <style>{`
                  .schedule-btn-arrow::after {
                    content: "→";
                    font-family: "wdt-ext";
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    text-indent: 0;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background-color: white;
                    color: #33a9b1;
                    transform: translateY(-50%) rotate(0deg);
                  }

                  .schedule-btn-arrow:hover::after {
                    transform: translateY(-50%) rotate(-45deg);
                    background-color: #33a9b1;
                    color: white;
                  }
                `}</style>
                <button
                  type="submit"
                  className="group schedule-btn-arrow relative overflow-hidden transition-all duration-300"
                  style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: isButtonHovered ? 'white' : '#33a9b1',
                    border: isButtonHovered ? '2px solid #33a9b1' : 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: isButtonHovered ? '#33a9b1' : 'white',
                    letterSpacing: '0.5px',
                    textIndent: 0,
                    paddingRight: '60px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(51, 169, 177, 0.3)';
                    setIsButtonHovered(true);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    setIsButtonHovered(false);
                  }}
                >
                  <span style={{ paddingLeft: '32px', textIndent: 0 }}>Schedule Your Visit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}