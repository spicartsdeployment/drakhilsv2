import React from 'react';
import { Heart, Users, Award, Target } from 'lucide-react';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>
          
          <h1 className="text-center mb-6" style={{ color: '#0f8987' }}>About Us</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
            Leading the way in rehabilitation and therapy services with compassionate care and evidence-based treatment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6" style={{ color: '#0f8987' }}>Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At PhysioTherapy, we are committed to providing exceptional rehabilitation services that empower our patients to achieve their highest level of function and quality of life. Our multidisciplinary team works collaboratively to deliver personalized, evidence-based care in a supportive and healing environment.
              </p>
              <p className="text-gray-700">
                We believe in treating the whole person, not just the condition, and we strive to build lasting relationships with our patients based on trust, respect, and open communication.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjQ1OTkwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical team"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#c1f5f1' }}>
                <Heart size={32} style={{ color: '#0f8987' }} />
              </div>
              <h4 className="mb-2">Patient-Centered</h4>
              <p className="text-gray-600">Your goals and needs drive every aspect of your care plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#c1f5f1' }}>
                <Award size={32} style={{ color: '#0f8987' }} />
              </div>
              <h4 className="mb-2">Excellence</h4>
              <p className="text-gray-600">Committed to the highest standards of clinical care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#c1f5f1' }}>
                <Users size={32} style={{ color: '#0f8987' }} />
              </div>
              <h4 className="mb-2">Collaboration</h4>
              <p className="text-gray-600">Teamwork between providers, patients, and families</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#c1f5f1' }}>
                <Target size={32} style={{ color: '#0f8987' }} />
              </div>
              <h4 className="mb-2">Innovation</h4>
              <p className="text-gray-600">Using the latest evidence-based treatment approaches</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
