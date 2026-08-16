import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  GraduationCap,
  Stethoscope,
  Heart
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ServicesSectionProps {
  onOpenBooking: (serviceId: string) => void;
  selectedCategoryProp?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'class' | 'clinic' | 'doula'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section 
      id="layanan" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-main)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>Layanan Kami</span>
          </div>
          <h2 className="section-title">
            Pilihan Program Kelas Edukasi & Layanan Klinik Kebidanan
          </h2>
          <p className="section-subtitle">
            Pilih program yang paling sesuai dengan kebutuhan Anda dan buah hati, mulai dari edukasi prenatal, yoga relaksasi, pemeriksaan klinis, hingga pendampingan persalinan personal.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '48px'
        }}>
          <button 
            onClick={() => setActiveTab('all')}
            className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            Semua Layanan ({SERVICES_DATA.length})
          </button>

          <button 
            onClick={() => setActiveTab('class')}
            className={`btn btn-sm ${activeTab === 'class' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <GraduationCap size={16} />
            <span>Kelas & Workshop Edukasi</span>
          </button>

          <button 
            onClick={() => setActiveTab('clinic')}
            className={`btn btn-sm ${activeTab === 'clinic' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Stethoscope size={16} />
            <span>Layanan Klinik & Homecare</span>
          </button>

          <button 
            onClick={() => setActiveTab('doula')}
            className={`btn btn-sm ${activeTab === 'doula' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Heart size={16} />
            <span>Pendampingan Doula 24/7</span>
          </button>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px'
        }}>
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="glass-card card-hover"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-warm)',
                background: '#FFFFFF'
              }}
            >
              {/* Image Header */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28, 38, 33, 0.6) 0%, transparent 60%)'
                }} />

                {/* Badge Overlay */}
                {service.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px'
                  }}>
                    <span className="badge badge-gold">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Mode Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--charcoal-900)'
                }}>
                  <MapPin size={13} color="var(--sage-700)" />
                  <span>{service.mode}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  
                  {/* Category & Duration */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--sage-700)', textTransform: 'uppercase' }}>
                      {service.categoryLabel}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--charcoal-500)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {service.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--charcoal-900)' }}>
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-600)', marginBottom: '20px', lineHeight: 1.55 }}>
                    {service.tagline}
                  </p>

                  {/* Benefits Checkmarks */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--charcoal-800)', marginBottom: '10px', textTransform: 'uppercase' }}>
                      Materi & Manfaat Utama:
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.86rem', color: 'var(--charcoal-700)' }}>
                          <CheckCircle2 size={16} color="var(--sage-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule if exists */}
                  {service.schedule && (
                    <div style={{
                      backgroundColor: 'var(--sand-50)',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      color: 'var(--charcoal-600)',
                      marginBottom: '20px',
                      border: '1px solid var(--border-warm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Calendar size={15} color="var(--sand-700)" />
                      <span>{service.schedule}</span>
                    </div>
                  )}

                </div>

                {/* Footer of Card: Price & CTA */}
                <div style={{
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-400)', textTransform: 'uppercase' }}>Investasi</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sage-800)' }}>
                        {service.price}
                      </span>
                      {service.originalPrice && (
                        <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'var(--charcoal-400)' }}>
                          {service.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={() => onOpenBooking(service.id)}
                    className="btn btn-primary btn-sm"
                    style={{ cursor: 'pointer' }}
                  >
                    <span>Pesan / Daftar</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
