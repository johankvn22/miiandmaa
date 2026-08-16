import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  Quote, 
  Baby, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { BIRTH_STORIES } from '../data/content';

export const BirthStories: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const nextStory = () => {
    setActiveStoryIndex((prev) => (prev + 1) % BIRTH_STORIES.length);
  };

  const prevStory = () => {
    setActiveStoryIndex((prev) => (prev - 1 + BIRTH_STORIES.length) % BIRTH_STORIES.length);
  };

  const current = BIRTH_STORIES[activeStoryIndex];

  return (
    <section 
      id="birth-stories" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--sage-50)',
        position: 'relative',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ backgroundColor: 'var(--terracotta-100)', color: 'var(--terracotta-700)' }}>
            <Heart size={16} fill="currentColor" />
            <span>Kisah Kelahiran Nyata (Birth Stories)</span>
          </div>
          <h2 className="section-title">
            Momen Damai Menyambut Buah Hati Tercinta
          </h2>
          <p className="section-subtitle">
            Dengarkan langsung penuturan para orang tua yang berhasil mengubah kepanikan menjadi pengalaman bersalin yang memberdayakan dan penuh cinta.
          </p>
        </div>

        {/* Featured Story Carousel / Showcase */}
        <div className="glass-card" style={{
          borderRadius: '28px',
          overflow: 'hidden',
          padding: '40px',
          boxShadow: 'var(--shadow-lg)',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-warm)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            
            {/* Story Image & Baby Badge */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                height: '380px',
                position: 'relative',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img 
                  src={current.image} 
                  alt={current.motherName} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28, 38, 33, 0.6) 0%, transparent 50%)'
                }} />

                {/* Baby Name Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Baby size={22} color="var(--sage-700)" />
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--charcoal-500)', textTransform: 'uppercase' }}>Kelahiran Buah Hati</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>{current.babyName}</div>
                  </div>
                </div>
              </div>

              {/* Highlight Ribbon */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px'
              }}>
                <span className="badge badge-gold" style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                  ✨ {current.highlight}
                </span>
              </div>
            </div>

            {/* Story Text & Testimonial */}
            <div>
              
              {/* Rating Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4A373" color="#D4A373" />
                ))}
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--charcoal-700)', marginLeft: '6px' }}>
                  5.0 / 5.0 Pengalaman Luar Biasa
                </span>
              </div>

              {/* Main Quote */}
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <Quote size={36} color="var(--sage-200)" style={{ position: 'absolute', top: '-10px', left: '-12px', zIndex: 0 }} />
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.45rem', 
                  color: 'var(--charcoal-900)', 
                  position: 'relative', 
                  zIndex: 1,
                  lineHeight: 1.4
                }}>
                  "{current.quote}"
                </h3>
              </div>

              {/* Detailed Story Narrative */}
              <p style={{
                fontSize: '0.98rem',
                color: 'var(--charcoal-600)',
                lineHeight: 1.75,
                marginBottom: '24px'
              }}>
                {current.story}
              </p>

              {/* Mother & Father Details */}
              <div style={{
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                    {current.motherName} & {current.fatherName}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--sage-700)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <MapPin size={13} /> {current.birthLocation}
                  </div>
                </div>

                {/* Carousel Navigation Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={prevStory}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%', cursor: 'pointer' }}
                    aria-label="Previous Story"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextStory}
                    className="btn btn-primary btn-sm"
                    style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%', cursor: 'pointer' }}
                    aria-label="Next Story"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Story Selector Mini Thumbnails */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px'
        }}>
          {BIRTH_STORIES.map((story, sIdx) => (
            <div 
              key={story.id}
              onClick={() => setActiveStoryIndex(sIdx)}
              className="card-hover"
              style={{
                backgroundColor: activeStoryIndex === sIdx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                border: activeStoryIndex === sIdx ? '2px solid var(--sage-500)' : '1px solid var(--border-light)',
                borderRadius: '16px',
                padding: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              <img 
                src={story.image} 
                alt={story.motherName} 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--charcoal-900)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {story.motherName}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--sage-700)', fontWeight: 600 }}>
                  {story.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
