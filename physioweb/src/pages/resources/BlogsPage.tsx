import React, { useState, useEffect } from 'react';
import { Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { useNavigate, RouterContext } from '../../App';

interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const blogsPerPage = 6;
  const navigate = useNavigate();
  const { currentPath } = React.useContext(RouterContext);

  // Get category from URL params
  const searchParams = new URLSearchParams(currentPath.split('?')[1] || '');
  const selectedCategory = searchParams.get('category');

  const allBlogs: Blog[] = [
    {
      id: '1',
      title: 'Recover Faster With Expert Physiotherapy Support',
      author: 'Developer',
      date: 'July 16, 2025',
      image: 'https://images.unsplash.com/photo-1758654860100-32cd2e83e74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Physiotherapy Treatments'
    },
    {
      id: '2',
      title: 'Body Recovery Through Targeted Ultrasound Treatment',
      author: 'Developer',
      date: 'July 16, 2025',
      image: 'https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Body Recovery'
    },
    {
      id: '3',
      title: 'Gentle Physiotherapy Techniques For Lasting Shoulder Relief',
      author: 'Developer',
      date: 'July 16, 2025',
      image: 'https://images.unsplash.com/photo-1611769423588-8f7586fb967f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Pain Management'
    },
    {
      id: '4',
      title: 'Personalized Rehabilitation Programs For Senior Health',
      author: 'Developer',
      date: 'July 17, 2025',
      image: 'https://images.unsplash.com/photo-1763631049892-e5d655429965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Neurological Rehabilitation'
    },
    {
      id: '5',
      title: 'Advanced Sports Injury Recovery Techniques',
      author: 'Developer',
      date: 'July 17, 2025',
      image: 'https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Sports Rehabilitation'
    },
    {
      id: '6',
      title: 'Comprehensive Back Pain Management Solutions',
      author: 'Developer',
      date: 'July 17, 2025',
      image: 'https://images.unsplash.com/photo-1768507423533-b87b62769758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'Back Pain Management'
    },
    {
      id: '7',
      title: '5 Essential Exercises for Lower Back Pain Relief',
      author: 'Dr. Sarah Johnson',
      date: 'November 28, 2025',
      image: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?w=400',
      category: 'Back Pain Management'
    },
    {
      id: '8',
      title: 'Understanding Stroke Recovery: A Patient\'s Guide',
      author: 'Dr. Michael Chen',
      date: 'November 25, 2025',
      image: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?w=400',
      category: 'Neurological Rehabilitation'
    },
    {
      id: '9',
      title: 'Heart Health: The Benefits of Cardiac Rehabilitation',
      author: 'Dr. Emily Roberts',
      date: 'November 20, 2025',
      image: 'https://images.unsplash.com/photo-1715111641688-ea364ec391f1?w=400',
      category: 'Cardiac Rehabilitation'
    },
    {
      id: '10',
      title: 'Sports Injury Prevention for Young Athletes',
      author: 'Dr. James Williams',
      date: 'November 15, 2025',
      image: 'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?w=400',
      category: 'Sports Rehabilitation'
    },
    {
      id: '11',
      title: 'The Importance of Pelvic Floor Health',
      author: 'Dr. Lisa Martinez',
      date: 'November 10, 2025',
      image: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?w=400',
      category: 'Pain Management'
    },
    {
      id: '12',
      title: 'Fall Prevention Strategies for Seniors',
      author: 'Dr. Robert Anderson',
      date: 'November 5, 2025',
      image: 'https://images.unsplash.com/photo-1762955913084-96ea3f986468?w=400',
      category: 'Neurological Rehabilitation'
    }
  ];

  // Filter blogs by category if a category is selected
  const filteredBlogs = selectedCategory ? allBlogs.filter(blog => blog.category === selectedCategory) : allBlogs;

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
      <style>{`
        @media (max-width: 768px) {
          section[style*="padding: 80px 0"] {
            padding: 40px 0 !important;
          }
          h1[style*="fontSize: '56px'"] {
            font-size: 32px !important;
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
            className="text-center"
            style={{
              fontSize: '56px',
              fontWeight: '400',
              color: 'white',
              fontFamily: 'Philosopher, serif',
              letterSpacing: '0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {selectedCategory ? selectedCategory : 'Our Blogs'}
          </h1>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section style={{ backgroundColor: '#dee8de', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {currentBlogs.map((blog, index) => {
              const isHovered = hoveredIndex === index;
              return (
              <article 
                key={index}
                onClick={() => navigate(`/blog/${blog.id}`)}
                style={{
                  backgroundColor: isHovered ? '#1a3d3d' : 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '20px'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Blog Image */}
                <div style={{ 
                  width: '100%', 
                  height: '170px', 
                  overflow: 'hidden',
                  borderRadius: '16px',
                  marginBottom: '20px'
                }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>

                {/* Blog Content */}
                <div style={{ padding: '0 4px' }}>
                  {/* Date and Author - Left and Right */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '16px',
                    fontSize: '13px',
                    color: isHovered ? 'rgba(255,255,255,0.7)' : '#666',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'color 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    marginBottom: '18px',
                    color: isHovered ? 'white' : '#000',
                    fontFamily: 'Philosopher, serif',
                    minHeight: '80px',
                    transition: 'color 0.3s ease'
                  }}>
                    {blog.title}
                  </h3>

                  {/* Explore More Link */}
                  <a 
                    href="#"
                    style={{
                      fontSize: '14px',
                      color: isHovered ? 'white' : '#0f8987',
                      textDecoration: 'underline',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate(`/blog/${blog.id}`);
                    }}
                  >
                    Explore More
                  </a>
                </div>
              </article>
            );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              marginTop: '40px'
            }}>
              {/* Previous Button */}
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: currentPage === 1 ? '#ccc' : '#0f8987',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = '#33a9b1';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = '#0f8987';
                  }
                }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: currentPage === number ? '#0f8987' : 'white',
                    color: currentPage === number ? 'white' : '#000',
                    fontSize: '15px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: currentPage === number ? '600' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== number) {
                      e.currentTarget.style.backgroundColor = '#c1f5f1';
                      e.currentTarget.style.color = '#0f8987';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== number) {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = '#000';
                    }
                  }}
                >
                  {number}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: currentPage === totalPages ? '#ccc' : '#0f8987',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = '#33a9b1';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = '#0f8987';
                  }
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}