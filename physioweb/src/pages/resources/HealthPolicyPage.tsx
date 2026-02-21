import React from 'react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { Shield, Lock, FileText, User, Phone, Mail } from 'lucide-react';

export function HealthPolicyPage() {
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
            Health Information Policy
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
                marginBottom: '0'
              }}>
                At Dr. AKHIL'S Physiotherapy Clinic, we are committed to protecting your health information and maintaining the highest standards of privacy and confidentiality. This policy outlines how we collect, use, and safeguard your personal health information in accordance with applicable laws and regulations.
              </p>
            </div>

            {/* Privacy and Confidentiality */}
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
                  <Shield size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Privacy and Confidentiality
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px'
              }}>
                We are committed to protecting your health information. All patient records are kept confidential in accordance with HIPAA regulations and applicable state laws. Your personal and medical information is handled with the utmost care and professionalism.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Our staff members are trained in privacy practices and are required to sign confidentiality agreements. We maintain secure physical and electronic systems to protect your information from unauthorized access.
              </p>
            </div>

            {/* Information Collection */}
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
                  <FileText size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Information Collection
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px'
              }}>
                We collect health information necessary to provide quality care, including:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Medical history and current health status',
                  'Physical examination findings and assessment results',
                  'Treatment plans and progress notes',
                  'Diagnostic test results and imaging reports',
                  'Insurance and billing information',
                  'Contact information for emergency situations',
                  'Referral information from other healthcare providers'
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

            {/* How We Use Your Information */}
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
                  <Lock size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  How We Use Your Information
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px'
              }}>
                Your health information is used for the following purposes:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#0f8987',
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '8px'
                  }}>
                    Treatment
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    To provide, coordinate, and manage your healthcare treatment and services. This includes sharing information with other healthcare professionals involved in your care.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#0f8987',
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '8px'
                  }}>
                    Payment
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    To obtain payment for services provided, including billing, claims management, and collection activities.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#0f8987',
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '8px'
                  }}>
                    Healthcare Operations
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    To improve the quality of care we provide, train staff, and conduct business planning activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
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
                  <User size={24} color="#0f8987" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#000',
                  fontFamily: 'Philosopher, serif',
                  margin: 0
                }}>
                  Your Rights
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px'
              }}>
                You have important rights regarding your health information:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Right to access and review your health records',
                  'Right to request amendments or corrections to your records',
                  'Right to request restrictions on how your information is used or disclosed',
                  'Right to receive a copy of this privacy policy',
                  'Right to request confidential communications',
                  'Right to file a complaint if you believe your privacy rights have been violated',
                  'Right to be notified in the event of a data breach'
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
                  Contact Our Privacy Officer
                </h2>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  For questions about our health information policies or to exercise your privacy rights, please contact:
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
                        privacy@drakhilsclinic.com
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
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}