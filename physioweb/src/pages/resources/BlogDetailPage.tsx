import React, { useState } from 'react';
import { useParams, useNavigate } from '../../App';
import { Calendar, User, ChevronLeft, ChevronRight, Search, Quote, Facebook, Instagram, Twitter, Youtube, Linkedin, Play, X } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { blogContentData } from '../../data/blogContent';

export function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  // Blog data (same as BlogsPage)
  const allBlogs = [
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

  const currentBlog = allBlogs.find(blog => blog.id === id);
  const currentIndex = allBlogs.findIndex(blog => blog.id === id);

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }

  const blogCategories = [
    { name: 'Back Pain Management', count: 2 },
    { name: 'Body Recovery', count: 1 },
    { name: 'Cardiac Rehabilitation', count: 1 },
    { name: 'Neurological Rehabilitation', count: 3 },
    { name: 'Pain Management', count: 2 },
    { name: 'Physiotherapy Treatments', count: 1 },
    { name: 'Sports Rehabilitation', count: 2 }
  ];

  const recentPosts = allBlogs.slice(0, 3);

  // Get blog content from data file
  const blogContent = blogContentData[id || '1'] || blogContentData['1'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
      <style>{`
        @media (max-width: 768px) {
          section[style*="padding: 80px 0"] {
            padding: 40px 0 !important;
          }
          h1 {
            font-size: 28px !important;
          }
          h2 {
            font-size: 24px !important;
          }
          h3 {
            font-size: 20px !important;
          }
        }
      `}</style>
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
            {currentBlog.title}
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: '#dee8de', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-12 items-start">
            {/* Left Column - Main Content */}
            <div>
              {/* Hero Image */}
              <div style={{ 
                width: '100%',
                height: '450px',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: '30px'
              }}>
                <img 
                  src={currentBlog.image}
                  alt={currentBlog.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Meta Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '20px',
                fontSize: '14px',
                color: '#666',
                fontFamily: 'Poppins, sans-serif'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} />
                  <span>{currentBlog.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>Admin By <strong>{currentBlog.author}</strong></span>
                </div>
              </div>

              {/* Blog Title */}
              <h2 style={{
                fontSize: '32px',
                fontWeight: '400',
                lineHeight: '1.4',
                marginBottom: '12px',
                color: '#000',
                fontFamily: 'Philosopher, serif'
              }}>
                {blogContent.heroTitle}
              </h2>

              {/* Blog Category */}
              <div style={{ marginBottom: '25px' }}>
                <span 
                  onClick={() => navigate(`/blogs?category=${encodeURIComponent(currentBlog.category)}`)}
                  style={{
                    fontSize: '14px',
                    color: '#0f8987',
                    fontFamily: 'Poppins, sans-serif',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#33a9b1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#0f8987';
                  }}
                >
                  {currentBlog.category}
                </span>
              </div>

              {/* Intro Text */}
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '40px'
              }}>
                {blogContent.introText}
              </p>

              {/* Quote Section */}
              <div style={{
                backgroundColor: '#1a3d3d',
                borderRadius: '20px',
                padding: '40px',
                marginBottom: '40px',
                position: 'relative'
              }}>
                <Quote size={48} style={{ 
                  color: '#0f8987',
                  marginBottom: '20px'
                }} />
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'italic'
                }}>
                  {blogContent.quoteText}
                </p>
              </div>

              {/* Two Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
                <div style={{
                  height: '300px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={blogContent.image1}
                    alt="Physiotherapy session"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{
                  height: '300px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={blogContent.image2}
                    alt="Exercise therapy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Bottom Text */}
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '40px'
              }}>
                {blogContent.conclusionText}
              </p>

              {/* Comments Section */}
              <div style={{
                backgroundColor: 'transparent',
                borderRadius: '20px',
                padding: '40px 0'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  marginBottom: '30px',
                  color: '#000',
                  fontFamily: 'Philosopher, serif'
                }}>
                  Comments ( 1 )
                </h3>

                {/* Comment */}
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: '30px',
                  borderBottom: '1px solid #e0e0e0',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    border: '2px solid #ddd',
                    flexShrink: 0
                  }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '5px',
                      color: '#000',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      designer
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: '#999',
                      marginBottom: '12px',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      July 23, 2025 at 4:50 am
                    </p>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#555',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      Et officia temporis aut laborom nobis rerum quae aut voluptate laboriosam aut autem affiniit Nic asperiores lure. Ut facilis dicta est nostrum malesuada et velit quasi sit voluptate earum. Aut placeat accusamus ad facere voluptate Nic doloremque rerum est nabis voluptatem id necessitatibus lure sed omnis rerum ut omnis autem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Combined Container: Blog Categories + Recent Posts + Image */}
              <div style={{
                backgroundColor: '#1a3d3d',
                borderRadius: '20px',
                padding: '40px',
                backgroundImage: 'url(https://physeo.wpengine.com/wp-content/uploads/2025/06/Home-1-exray-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}>
                {/* Overlay for better text readability */}
                <div style={{
                  position: 'absolute',
                  inset: '0px',
                  backgroundColor: 'rgba(26, 61, 61, 0.1)',
                  borderRadius: '20px',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Blog Categories */}
                  <div style={{ marginBottom: '40px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '400',
                      marginBottom: '25px',
                      color: 'white',
                      fontFamily: 'Philosopher, serif'
                    }}>
                      Blog Categories
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {blogCategories.map((category, index) => (
                        <div
                          key={index}
                          onClick={() => navigate(`/blogs?category=${encodeURIComponent(category.name)}`)}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '15px 0',
                            borderBottom: index < blogCategories.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                            color: 'white',
                            fontSize: '15px',
                            fontFamily: 'Poppins, sans-serif',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#0f8987';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'white';
                          }}
                        >
                          <span>{category.name}</span>
                          <span>({category.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div style={{ marginBottom: '30px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '400',
                      marginBottom: '25px',
                      color: 'white',
                      fontFamily: 'Philosopher, serif'
                    }}>
                      Recent Posts
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {recentPosts.map((post, index) => (
                        <div key={post.id}>
                          <div
                            onClick={() => navigate(`/blog/${post.id}`)}
                            style={{
                              display: 'flex',
                              gap: '15px',
                              cursor: 'pointer',
                              transition: 'opacity 0.3s ease',
                              paddingTop: index === 0 ? '0' : '20px',
                              paddingBottom: '20px'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.opacity = '0.8';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = '1';
                            }}
                          >
                            <div style={{
                              width: '100px',
                              height: '100px',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              flexShrink: 0
                            }}>
                              <img
                                src={post.image}
                                alt={post.title}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            </div>
                            <div>
                              <p style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.7)',
                                marginBottom: '8px',
                                fontFamily: 'Poppins, sans-serif'
                              }}>
                                {post.date}
                              </p>
                              <h4 style={{
                                fontSize: '15px',
                                fontWeight: '400',
                                lineHeight: '1.4',
                                color: 'white',
                                fontFamily: 'Poppins, sans-serif'
                              }}>
                                {post.title}
                              </h4>
                            </div>
                          </div>
                          {index < recentPosts.length - 1 && (
                            <div style={{
                              height: '1px',
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              width: '100%'
                            }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div style={{
                    width: '100%',
                    height: '250px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    marginBottom: '30px'
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1758599880788-e49f6ee77bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwY2xpbmljJTIwcHJvZmVzc2lvbmFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5NDg5OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Physiotherapy clinic"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Social Media Links */}
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '400',
                      marginBottom: '20px',
                      color: 'white',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      Follow Us On :
                    </h3>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                      {[
                        { Icon: Twitter, color: '#1DA1F2' },
                        { Icon: Instagram, color: '#E4405F' },
                        { Icon: Facebook, color: '#1877F2' },
                        { Icon: Youtube, color: '#FF0000' },
                        { Icon: Linkedin, color: '#0A66C2' }
                      ].map(({ Icon, color }, index) => (
                        <button
                          key={index}
                          style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = color;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                          }}
                        >
                          <Icon size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* PHYSIOTHERAPY SERVICES Card */}
              <div 
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '30px'
                }}
              >
                {/* Header with decorative lines */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
                  <div style={{ width: '40px', height: '2px', backgroundColor: '#0f8987' }}></div>
                  <p style={{ 
                    fontSize: '12px', 
                    color: '#0f8987', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    PHYSIOTHERAPY SERVICES
                  </p>
                  <div style={{ width: '40px', height: '2px', backgroundColor: '#0f8987' }}></div>
                </div>

                <h3 
                  style={{ 
                    fontFamily: 'Philosopher, serif',
                    fontSize: '24px',
                    marginBottom: '24px',
                    color: '#000',
                    lineHeight: '1.4',
                    fontWeight: '700'
                  }}
                >
                  How To Start A <span style={{ color: '#0f8987' }}>Physiotherapy</span> For Beginners?
                </h3>

                {/* Video Thumbnail */}
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                  }}
                  onClick={() => setShowVideo(true)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
                    alt="Video thumbnail"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(15, 137, 135, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Play size={24} fill="white" color="white" />
                  </div>
                </div>

                {/* Lotus Icon - Detailed SVG */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#0f8987">
                    <path d="M90.2,54.6c-0.8-0.8-1.4-1.6-1.3-1.7c0,0,0,0,0,0c0.2,0,0.9,0.5,1.6,1.3c0.4-0.4,0.8-0.7,1.1-0.9c0,0,0,0,0,0 c0,0,0,0,0.1-0.1c0,0,0,0,0.1,0c0,0,0,0,0.1-0.1c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1 c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1s-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2 c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c0,0,0,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0.1,0.1 c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1 c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0 c-0.3-0.2-0.7-0.6-1.1-0.9c-0.8,0.7-1.4,1.3-1.6,1.3c0,0,0,0,0,0C88.8,56.2,89.4,55.4,90.2,54.6z M6.7,54.6 c-0.8-0.8-1.4-1.6-1.3-1.7c0,0,0,0,0,0c0.2,0,0.9,0.5,1.6,1.3c0.4-0.4,0.8-0.7,1.1-0.9c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1 c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1 c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0-0.1,0.1c0,0,0,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0.1,0.1C7.9,55,8,55.1,8,55.1 c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-0.3-0.2-0.7-0.6-1.1-0.9 c-0.8,0.7-1.4,1.3-1.6,1.3c0,0,0,0,0,0C5.4,56.2,5.9,55.4,6.7,54.6z M47.6,17c-1.4-1.5-2.4-2.8-2.2-2.9c0,0,0,0,0.1,0 c0.3,0,1.5,0.9,2.9,2.3c1.4-1.3,2.6-2.3,2.9-2.3c0,0,0,0,0.1,0c0.2,0.2-0.8,1.5-2.2,2.9c1.4,1.5,2.4,2.8,2.2,2.9c0,0,0,0-0.1,0 c-0.3,0-1.5-0.9-2.9-2.3c-1.4,1.3-2.6,2.3-2.9,2.3c0,0-0.1,0-0.1,0C45.2,19.7,46.1,18.4,47.6,17z M66.4,31.1 c-1.4-1.5-2.4-2.8-2.2-2.9c0,0,0,0,0.1,0c0.3,0,1.5,0.9,2.9,2.3c1.4-1.3,2.5-2.3,2.9-2.3c0,0,0.1,0,0.1,0c0.2,0.2-0.8,1.5-2.2,2.9 c1.4,1.5,2.4,2.8,2.2,2.9c0,0,0,0-0.1,0c-0.3,0-1.5-0.9-2.9-2.3c-1.4,1.3-2.6,2.3-2.9,2.3c0,0,0,0-0.1,0 C64,33.9,64.9,32.6,66.4,31.1z M30.8,31.9c-1.4-1.5-2.4-2.8-2.2-2.9c0,0,0,0,0.1,0c0.3,0,1.5,0.9,2.9,2.3c0.7-0.7,1.4-1.3,1.9-1.7 c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1 c0.1,0,0.1,0,0.2,0l0,0c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1 c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2 c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.3 c0,0-0.1,0.1-0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3 c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.1 c0,0,0,0-0.1,0h0c0,0-0.1,0-0.2,0c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1 c-0.1-0.1-0.2-0.1-0.2-0.2c0,0-0.1,0-0.1-0.1c-0.5-0.4-1.2-1-1.9-1.7c-1.4,1.3-2.6,2.3-2.9,2.3c0,0,0,0-0.1,0 C28.3,34.7,29.3,33.4,30.8,31.9z M30.5,85.6c-2.4,0-4.8-0.3-7.2-0.7c-8.4-1.8-15.8-6.5-20.9-13.4c-0.1-0.2-0.1-0.4-0.1-0.5 c0-0.1,0.1-0.3,0.3-0.4c1.2-0.7,2.5-1.4,3.9-1.9c0,0,0.1,0,0.1,0c3-1.3,6.2-2.1,9.4-2.5c1.6,2.7,3.6,5.2,5.8,7.4 c5.2,5.2,11.8,8.8,18.9,10.5C37.4,85.1,34,85.6,30.5,85.6z M16.7,64.8c-3.6,0.3-7.2,1.2-10.7,2.6c0,0,0,0,0,0 c-1.4,0.6-2.7,1.2-4.1,2c-1,0.6-1.3,1.9-0.6,2.8C6.8,79.7,14.6,84.4,23,86.2c2.5,0.5,5,0.8,7.5,0.8c5,0,9.9-1,14.6-3.1 c0.2-0.1,0.4-0.2,0.6-0.3c-8.7-0.8-16.8-4.6-23-10.9C20.4,70.3,18.4,67.7,16.7,64.8z M37.3,55.2c-0.2,9.7,3.4,19.5,10.7,27 c-9.4-0.4-17.9-4.3-24.2-10.6c-6.1-6.1-10-14.4-10.6-23.5c-0.1-1.1,0.8-2,1.9-2v1.3c-0.2,0-0.4,0.1-0.4,0.2 c-0.1,0.1-0.2,0.2-0.2,0.4c0.5,8.5,4.1,16.6,10.2,22.6c5.4,5.4,12.4,8.9,19.9,9.9C39,73.6,36,64.9,36,55.8c-5.8-5-13.1-7.9-20.7-8.4 l0-1.4c0,0,0.1,0,0.1,0C23.8,46.5,31.4,49.9,37.3,55.2z M54,80.4c5.8-6.9,8.9-15.6,9-24.7c5.8-4.9,13.1-7.8,20.6-8.1l0,0 c0.3,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5c-0.6,8.5-4.3,16.4-10.4,22.4C68.6,76.1,61.6,79.5,54,80.4z M85.8,48.4 c0.1-1.2-0.9-2.2-2-2.2c0,0-0.1,0-0.1,0c-8.4,0.4-16,3.7-21.9,8.9c0.1,9.7-3.6,19.5-11,26.9c9.4-0.3,18-4.2,24.3-10.3 C81.1,65.7,85.1,57.5,85.8,48.4z M80.3,83c-0.7,0.3-1.5,0.5-2.2,0.7l-0.2,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.5,0.1-0.7,0.2 l-0.1,0l-0.1,0c-2.7,0.7-5.6,1-8.4,1c-3.1,0-6.2-0.4-9.2-1.2c6.9-1.7,13.2-5.3,18.3-10.3c2.5-2.5,4.6-5.3,6.4-8.4 c1.8,0.2,3.5,0.4,5.1,0.8c0,0,0.1,0,0.1,0c0.7,0.2,1.3,0.3,2,0.5c0.3,0.1,0.7,0.2,1,0.3c1.7,0.6,3.3,1.3,4.9,2.1 c0.3,0.2,0.4,0.4,0.4,0.7C92.9,75.9,87.1,80.5,80.3,83z M97.3,67.9c-1.7-0.9-3.4-1.6-5.1-2.2c-0.3-0.1-0.7-0.2-1-0.3 c-0.7-0.2-1.4-0.4-2.1-0.6c0,0,0,0,0,0c-2.1-0.5-4.2-0.8-6.3-0.9c-1.7,3.2-3.9,6.2-6.6,8.8c-6.1,6.1-13.9,9.8-22.4,10.8 c-0.1,0-0.1,0-0.2,0c4.7,2,9.6,3,14.4,3c2.9,0,5.9-0.4,8.7-1c0.1,0,0.1,0,0.2,0c0.3-0.1,0.5-0.1,0.8-0.2c0.3-0.1,0.5-0.1,0.8-0.2 c0.8-0.2,1.5-0.5,2.3-0.8c7-2.6,13.2-7.3,17.5-13.9C98.6,69.4,98.2,68.4,97.3,67.9z M49.5,79.5c-9.1-9.8-11.8-23.9-6.8-36.4 c0.3-0.7,0.5-1.3,0.8-1.9c1.4-3.1,3.3-6,5.6-8.6c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.3,0,0.4,0.2c3.9,4.4,6.7,9.7,8.1,15.4 c0.1,0.3,0.1,0.7,0.2,1c0.1,0.2,0.1,0.5,0.1,0.7l0,0.1c0.2,1.2,0.4,2.5,0.4,3.8c0,0.7,0.1,1.3,0.1,2C58.7,64.7,55.5,73,49.5,79.5z  M51,79.8c0.2-0.2,0.4-0.4,0.5-0.6c0.3-0.3,0.5-0.6,0.8-1c0.1-0.2,0.3-0.4,0.4-0.6c0.3-0.4,0.6-0.8,0.8-1.2c0.1-0.1,0.2-0.3,0.3-0.4 c0.3-0.5,0.6-1,0.9-1.5c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0c3.4-5.7,5.1-12.2,5.1-18.6c0-0.7,0-1.4-0.1-2.1c-0.1-1.3-0.2-2.7-0.4-4 c-0.1-0.3-0.1-0.6-0.2-0.9c-0.1-0.4-0.1-0.7-0.2-1.1C57.8,42,55,36.5,50.8,31.8c-0.4-0.4-0.9-0.6-1.4-0.6c-0.4,0-0.8,0.1-1.2,0.4 c-2.5,2.8-4.5,5.8-6,9c-0.3,0.6-0.6,1.3-0.9,2c-5.1,13-2.4,28.4,8.1,38.9c0,0,0,0,0,0c0,0,0,0,0,0h0l0.3-0.3 c0.1-0.1,0.3-0.3,0.4-0.4C50.5,80.4,50.7,80.1,51,79.8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Comments Closed Text at Bottom */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0'
      }}>
        <p style={{
          fontSize: '15px',
          color: '#555',
          fontFamily: 'Poppins, sans-serif',
          margin: 0
        }}>
          Comments are closed.
        </p>
      </div>

      {/* Video Overlay Modal */}
      {showVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setShowVideo(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '1200px',
              maxHeight: '500px',
              aspectRatio: '16/7'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '40px',
                zIndex: 10000
              }}
            >
              <X size={40} />
            </button>

            {/* Video iFrame */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Physiotherapy Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}