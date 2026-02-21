import React, { useState } from 'react';
import { User, Heart, Phone, Upload, FileText, CheckCircle, Settings, Lock, AlertTriangle, Camera } from 'lucide-react';

export function PatientProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Basic Information
    fullName: 'John Doe',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    phoneNumber: '+91 98765 43210',
    email: 'patient@drakhils.com',
    address: '123 Medical Street, City',
    
    // Medical Information
    primaryCondition: 'Back Pain',
    affectedBodyParts: ['Back', 'Neck'],
    medicalHistory: 'Previous lower back injury from sports activity in 2020.',
    
    // Emergency Contact
    emergencyName: 'Jane Doe',
    emergencyRelationship: 'Spouse',
    emergencyPhone: '+91 98765 43211',
    
    // Documents
    documents: [
      { id: 1, name: 'X-Ray Report.pdf', type: 'X-ray', date: '2025-01-15', size: '2.3 MB' },
      { id: 2, name: 'MRI Scan.pdf', type: 'MRI', date: '2025-01-10', size: '4.1 MB' }
    ]
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (bodyPart: string) => {
    const updatedParts = profileData.affectedBodyParts.includes(bodyPart)
      ? profileData.affectedBodyParts.filter(p => p !== bodyPart)
      : [...profileData.affectedBodyParts, bodyPart];
    
    setProfileData({
      ...profileData,
      affectedBodyParts: updatedParts
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)]);
    }
  };

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const calculateCompletion = () => {
    let completed = 0;
    let total = 13;
    
    if (profileData.fullName) completed++;
    if (profileData.dateOfBirth) completed++;
    if (profileData.gender) completed++;
    if (profileData.phoneNumber) completed++;
    if (profileData.email) completed++;
    if (profileData.address) completed++;
    if (profileData.primaryCondition) completed++;
    if (profileData.affectedBodyParts.length > 0) completed++;
    if (profileData.medicalHistory) completed++;
    if (profileData.emergencyName) completed++;
    if (profileData.emergencyRelationship) completed++;
    if (profileData.emergencyPhone) completed++;
    if (profileData.documents.length > 0) completed++;
    
    return Math.round((completed / total) * 100);
  };

  const steps = [
    { number: 1, title: 'Basic Info', icon: User },
    { number: 2, title: 'Medical Info', icon: Heart },
    { number: 3, title: 'Emergency', icon: Phone },
    { number: 4, title: 'Documents', icon: FileText },
    { number: 5, title: 'Settings', icon: Settings }
  ];

  const bodyParts = ['Knee', 'Shoulder', 'Back', 'Neck', 'Ankle', 'Wrist', 'Hip', 'Elbow'];

  return (
    <div>
      {/* Step Navigation */}
      <div 
        style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '32px',
          overflowX: 'auto',
          paddingBottom: '8px'
        }}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          
          return (
            <button
              key={step.number}
              onClick={() => setCurrentStep(step.number)}
              style={{
                flex: '1',
                minWidth: '150px',
                padding: '16px',
                backgroundColor: isActive ? '#0f8987' : isCompleted ? '#c1f5f1' : 'white',
                color: isActive ? 'white' : '#2d4a4a',
                border: isActive ? 'none' : '2px solid #e5e7eb',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Icon size={24} />
              <div>
                {step.number !== 5 && <div style={{ fontSize: '12px', opacity: 0.8 }}>Step {step.number}</div>}
                <div style={{ fontSize: '14px', fontWeight: '600' }}>{step.title}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Form Content */}
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div>
            <h3 style={{ fontSize: '20px', color: '#2d4a4a', marginBottom: '24px', fontWeight: '600' }}>
              Basic Information
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Full Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Date of Birth <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split('T')[0]}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
                {profileData.dateOfBirth && (
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                    Age: {calculateAge(profileData.dateOfBirth)} years
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Gender <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Phone Number <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  readOnly
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    backgroundColor: '#f9fafb',
                    cursor: 'not-allowed'
                  }}
                />
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                  Verified and locked for security
                </p>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Medical Information */}
        {currentStep === 2 && (
          <div>
            <h3 style={{ fontSize: '20px', color: '#2d4a4a', marginBottom: '24px', fontWeight: '600' }}>
              Medical Information
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Primary Condition
                </label>
                <select
                  name="primaryCondition"
                  value={profileData.primaryCondition}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select Condition</option>
                  <option value="Back Pain">Back Pain</option>
                  <option value="Knee Pain">Knee Pain</option>
                  <option value="Shoulder Pain">Shoulder Pain</option>
                  <option value="Neck Pain">Neck Pain</option>
                  <option value="Sports Injury">Sports Injury</option>
                  <option value="Post-Surgery Rehab">Post-Surgery Rehab</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '12px' }}>
                  Affected Body Parts (Select all that apply)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                  {bodyParts.map((part) => (
                    <label
                      key={part}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 12px',
                        backgroundColor: profileData.affectedBodyParts.includes(part) ? '#c1f5f1' : '#f9fafb',
                        border: `2px solid ${profileData.affectedBodyParts.includes(part) ? '#0f8987' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={profileData.affectedBodyParts.includes(part)}
                        onChange={() => handleCheckboxChange(part)}
                        style={{ cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '14px', color: '#2d4a4a' }}>{part}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Medical History
                </label>
                <textarea
                  name="medicalHistory"
                  value={profileData.medicalHistory}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Describe your medical history, previous injuries, surgeries, chronic conditions, etc."
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Emergency Contact */}
        {currentStep === 3 && (
          <div>
            <h3 style={{ fontSize: '20px', color: '#2d4a4a', marginBottom: '24px', fontWeight: '600' }}>
              Emergency Contact
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Contact Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="emergencyName"
                  value={profileData.emergencyName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Relationship <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="emergencyRelationship"
                  value={profileData.emergencyRelationship}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select Relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2d4a4a', marginBottom: '8px' }}>
                  Phone Number <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={profileData.emergencyPhone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Documents */}
        {currentStep === 4 && (
          <div>
            <h3 style={{ fontSize: '20px', color: '#2d4a4a', marginBottom: '24px', fontWeight: '600' }}>
              Medical Documents
            </h3>
            
            {/* Upload Section */}
            <div 
              style={{
                border: '2px dashed #e5e7eb',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                marginBottom: '24px'
              }}
            >
              <Upload size={48} color="#0f8987" style={{ margin: '0 auto 16px' }} />
              <h4 style={{ fontSize: '16px', color: '#2d4a4a', marginBottom: '8px' }}>
                Upload Medical Documents
              </h4>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
                PDF or Image files (Max 10MB per file)
              </p>
              <label
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  backgroundColor: '#0f8987',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                Choose Files
                <input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  style={{ display: 'none' }}
                />
              </label>
            </div>

            {/* Uploaded Documents List */}
            <div>
              <h4 style={{ fontSize: '16px', color: '#2d4a4a', marginBottom: '16px' }}>
                Your Documents ({profileData.documents.length})
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {profileData.documents.map((doc) => (
                  <div
                    key={doc.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      backgroundColor: '#f9fafb',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <FileText size={24} color="#0f8987" />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: '#2d4a4a' }}>
                          {doc.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          {doc.type} • {doc.size} • {doc.date}
                        </div>
                      </div>
                    </div>
                    <button
                      style={{
                        padding: '6px 16px',
                        backgroundColor: '#0f8987',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        cursor: 'pointer'
                      }}
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Settings */}
        {currentStep === 5 && (
          <div>
            <h3 style={{ fontSize: '20px', color: '#2d4a4a', marginBottom: '24px', fontWeight: '600' }}>
              Account Settings
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* User Info Card */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#c1f5f1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: '600',
                    color: '#0f8987',
                    border: '3px solid #0f8987',
                    flexShrink: 0
                  }}
                >
                  SJ
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '20px', fontWeight: '600', color: '#2d4a4a', marginBottom: '4px' }}>
                    Sarah Johnson
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '2px' }}>
                    PAT-2024-1001 | Patient
                  </div>
                  <div style={{ fontSize: '13px', color: '#0f8987', fontWeight: '500' }}>
                    Member since January 2024
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Camera size={24} color="#0f8987" />
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a' }}>
                    Profile Picture
                  </h4>
                </div>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
                  Upload a profile picture to personalize your account
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  {/* Profile Picture Preview */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      backgroundColor: '#c1f5f1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '36px',
                      fontWeight: '600',
                      color: '#0f8987',
                      border: '3px solid #0f8987'
                    }}
                  >
                    SJ
                  </div>
                  <div>
                    <label
                      style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#0f8987',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}
                    >
                      Change Picture
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            alert('Profile picture updated successfully!');
                          }
                        }}
                        style={{ display: 'none' }}
                      />
                    </label>
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>
                      JPG, PNG or GIF (Max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Change Password */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Lock size={24} color="#0f8987" />
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a' }}>
                    Change Password
                  </h4>
                </div>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
                  Update your password to keep your account secure
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input
                    type="password"
                    placeholder="Current Password"
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '14px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '14px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '14px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                  />
                </div>
                <button
                  onClick={() => alert('Password updated successfully!')}
                  style={{
                    marginTop: '12px',
                    padding: '10px 20px',
                    backgroundColor: '#0f8987',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#33a9b1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0f8987';
                  }}
                >
                  Update Password
                </button>
              </div>

              {/* Deactivate Account */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '12px',
                  border: '2px solid #fecaca'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <AlertTriangle size={24} color="#ef4444" />
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ef4444' }}>
                    Deactivate Account
                  </h4>
                </div>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px', lineHeight: '1.6' }}>
                  Deactivating your account will:
                </p>
                <ul style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px', paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Cancel all your upcoming appointments</li>
                  <li>Remove access to your medical records and history</li>
                  <li>Prevent you from logging into the patient portal</li>
                  <li>This action cannot be undone</li>
                </ul>
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
                        alert('Your account has been deactivated. We\'re sorry to see you go!');
                      }
                    }}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#dc2626';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ef4444';
                    }}
                  >
                    Deactivate My Account
                  </button>
                </div>
              </div>

              {/* Privacy & Security Info */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#c1f5f1',
                  borderRadius: '12px',
                  border: '2px solid #0f8987'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <CheckCircle size={24} color="#0f8987" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                      Your Privacy Matters
                    </h4>
                    <p style={{ fontSize: '14px', color: '#2d4a4a', lineHeight: '1.6' }}>
                      Your data is encrypted and stored securely. We follow strict privacy guidelines to protect your medical information. For questions about data handling, please contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep !== 5 && (
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #e5e7eb'
            }}
          >
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              style={{
                padding: '12px 24px',
                backgroundColor: currentStep === 1 ? '#e5e7eb' : 'white',
                color: currentStep === 1 ? '#9ca3af' : '#2d4a4a',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>

            <button
              onClick={() => {
                if (currentStep < 4) {
                  setCurrentStep(currentStep + 1);
                } else {
                  alert('Profile saved successfully!');
                }
              }}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0f8987',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#33a9b1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0f8987';
              }}
            >
              {currentStep === 4 ? 'Save Profile' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}