import React from 'react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';

interface SimplePageProps {
  title: string;
  content: React.ReactNode;
}

export function SimplePage({ title, content }: SimplePageProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>
          
          <h1 className="mb-6" style={{ color: '#0f8987' }}>{title}</h1>
          <div className="bg-white p-8 rounded-xl shadow-md prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}