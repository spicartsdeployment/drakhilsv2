import React, { useState } from 'react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Facilities', 'Team', 'Therapy Sessions', 'Events'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?w=600', category: 'Therapy Sessions', caption: 'Physical Therapy Session' },
    { src: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?w=600', category: 'Team', caption: 'Our Expert Team' },
    { src: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?w=600', category: 'Team', caption: 'Team Collaboration' },
    { src: 'https://images.unsplash.com/photo-1582380375444-275b280990a9?w=600', category: 'Therapy Sessions', caption: 'Orthopedic Rehabilitation' },
    { src: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?w=600', category: 'Therapy Sessions', caption: 'Sports Rehabilitation' },
    { src: 'https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?w=600', category: 'Facilities', caption: 'Wellness Center' },
    { src: 'https://images.unsplash.com/photo-1672457666348-745875c92fdc?w=600', category: 'Therapy Sessions', caption: 'Pediatric Care' },
    { src: 'https://images.unsplash.com/photo-1762955913084-96ea3f986468?w=600', category: 'Therapy Sessions', caption: 'Geriatric Services' },
    { src: 'https://images.unsplash.com/photo-1715111641688-ea364ec391f1?w=600', category: 'Facilities', caption: 'Cardio Rehab Center' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>
          
          <h1 className="text-center mb-6" style={{ color: '#0f8987' }}>Gallery</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Take a virtual tour of our facilities, meet our team, and see our services in action.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'border-2'
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundColor: '#0f8987' }
                    : { borderColor: '#0f8987', color: '#0f8987' }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p>{image.caption}</p>
                    <span className="text-sm" style={{ color: '#c1f5f1' }}>{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}