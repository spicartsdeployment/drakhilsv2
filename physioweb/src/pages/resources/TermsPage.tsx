import React from 'react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { FileCheck, Globe, AlertCircle, Copyright, Scale, RefreshCw, Mail, Phone } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
      {/* Hero Header Section matching department pages */}
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
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: '#dee8de', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            
            {/* Introduction */}
            <div style={{ marginBottom: '50px' }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                Welcome to Dr. AKHIL'S Physiotherapy Clinic website. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '0'
              }}>
                Please read these terms carefully before using our website. If you do not agree with these terms, please do not use this website.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileCheck size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Acceptance of Terms
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Any participation in this website will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this website.
              </p>
            </div>

            {/* Use of Website */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Globe size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Use of Website
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px'
              }}>
                This website is provided for informational purposes. You agree to use this site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of this website.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px'
              }}>
                You agree not to:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Use the website in any way that violates any applicable federal, state, local, or international law',
                  'Transmit any material that is defamatory, offensive, or otherwise objectionable',
                  'Attempt to gain unauthorized access to any portion of the website',
                  'Interfere with or disrupt the integrity or performance of the website',
                  'Collect or store personal data about other users without their consent',
                  'Use automated systems or software to extract data from the website'
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#0f8987',
                      marginTop: '8px',
                      flexShrink: 0
                    }} />
                    <span style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#555',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AlertCircle size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Medical Disclaimer
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                The information provided on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Dr. AKHIL'S Physiotherapy Clinic does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website.
              </p>
            </div>

            {/* Intellectual Property */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Copyright size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Intellectual Property
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Dr. AKHIL'S Physiotherapy Clinic or its content suppliers and is protected by international copyright laws.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}>
                The compilation of all content on this website is the exclusive property of Dr. AKHIL'S Physiotherapy Clinic. You may not reproduce, duplicate, copy, sell, resell, visit, or otherwise exploit any portion of the website without express written permission from us.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Scale size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Limitation of Liability
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                Dr. AKHIL'S Physiotherapy Clinic shall not be liable for any damages arising from the use of or inability to use this website or its content, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                This website is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation of the website or the information, content, materials, or products included on this website.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}>
                We do not warrant that the website, its servers, or emails sent from Dr. AKHIL'S Physiotherapy Clinic are free of viruses or other harmful components.
              </p>
            </div>

            {/* Changes to Terms */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#c1f5f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <RefreshCw size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Changes to Terms
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '15px'
              }}>
                We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of the website following any changes indicates your acceptance of the new terms.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Please review this page periodically for changes. The date of the last update will be displayed at the bottom of this page.
              </p>
            </div>

            {/* Contact Information */}
            <div style={{
              backgroundColor: '#1a3d3d',
              borderRadius: '20px',
              padding: '40px',
              backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                inset: '0px',
                backgroundColor: 'rgba(26, 61, 61, 0.85)',
                borderRadius: '20px'
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: 'white',
                  fontFamily: 'Philosopher, serif',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Questions About These Terms?
                </h2>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(193, 245, 241, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Mail size={22} color="#c1f5f1" />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: 'Poppins, sans-serif',
                        marginBottom: '4px'
                      }}>
                        Email
                      </p>
                      <p style={{
                        fontSize: '16px',
                        color: 'white',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '500'
                      }}>
                        legal@drakhilsclinic.com
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(193, 245, 241, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone size={22} color="#c1f5f1" />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: 'Poppins, sans-serif',
                        marginBottom: '4px'
                      }}>
                        Phone
                      </p>
                      <p style={{
                        fontSize: '16px',
                        color: 'white',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '500'
                      }}>
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Poppins, sans-serif',
                  marginTop: '30px',
                  textAlign: 'center'
                }}>
                  Last Updated: January 28, 2026
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}