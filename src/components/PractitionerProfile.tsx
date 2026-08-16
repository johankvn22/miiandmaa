import React from 'react';
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Tv, 
  CheckCircle2, 
  Quote
} from 'lucide-react';
import { PRACTITIONER_DATA } from '../data/content';

interface PractitionerProfileProps {
  onOpenBooking: () => void;
}

export const PractitionerProfile: React.FC<PractitionerProfileProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="about-us" 
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={16} />
            <span>About Us & Profil Praktisi</span>
          </div>
          <h2 className="section-title">
            Didampingi oleh Tenaga Medis Berpengalaman & Tersertifikasi
          </h2>
          <p className="section-subtitle">
            Kombinasi keilmuan kebidanan formal, lisensi resmi Dinas Kesehatan, serta sertifikasi gentle birth internasional untuk rasa aman maksimal.
          </p>
        </div>

        {/* Profile Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '56px'
        }}>
          
          {/* Left Column: Portrait Image & Credentials Badges */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '6px solid var(--sand-50)',
              backgroundColor: 'var(--sage-100)',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1594824813590-77a83d47f9fa?auto=format&fit=crop&w=900&q=80" 
                alt={PRACTITIONER_DATA.name}
                style={{
                  width: '100%',
                  height: '520px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(28, 38, 33, 0.7) 0%, transparent 45%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Founder & Principal Midwife
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}>
                  {PRACTITIONER_DATA.name}
                </div>
                <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>
                  {PRACTITIONER_DATA.licenseSTR}
                </div>
              </div>
            </div>

            {/* License Floating Card */}
            <div className="glass-card" style={{
              position: 'absolute',
              top: '-15px',
              right: '-10px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: 'var(--shadow-md)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}>
              <ShieldCheck size={26} color="var(--sage-600)" />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--charcoal-500)', fontWeight: 600 }}>SIPB Resmi Kemenkes</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Praktik Mandiri Sah</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials */}
          <div>
            
            <div style={{ marginBottom: '20px' }}>
              <span className="badge badge-sage" style={{ marginBottom: '12px' }}>
                14+ Tahun Pengabdian Kebidanan
              </span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--charcoal-900)', marginBottom: '12px' }}>
                {PRACTITIONER_DATA.shortName}
              </h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--charcoal-700)', lineHeight: 1.7, marginBottom: '20px' }}>
                {PRACTITIONER_DATA.bio}
              </p>
            </div>

            {/* Quote / Philosophy Box */}
            <div style={{
              backgroundColor: 'var(--sand-50)',
              borderLeft: '4px solid var(--sage-600)',
              padding: '20px',
              borderRadius: '0 16px 16px 0',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                <Quote size={24} color="var(--sage-600)" style={{ flexShrink: 0, opacity: 0.6 }} />
                <p style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontStyle: 'italic', 
                  fontSize: '0.98rem', 
                  color: 'var(--charcoal-800)', 
                  lineHeight: 1.6 
                }}>
                  "{PRACTITIONER_DATA.philosophy}"
                </p>
              </div>
            </div>

            {/* Certifications List */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--charcoal-900)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Sertifikasi & Pelatihan Khusus:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {PRACTITIONER_DATA.certifications.map((cert, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--charcoal-700)' }}>
                    <CheckCircle2 size={16} color="var(--sage-600)" style={{ flexShrink: 0 }} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Books & Media Section */}
            <div style={{
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{ flex: '1 1 200px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sand-800)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <BookOpen size={16} />
                  <span>Buku Karya Bidan:</span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)' }}>
                  "Lahir dengan Senyuman"
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)' }}>
                  Gramedia Bestseller (Cetakan ke-7)
                </div>
              </div>

              <div style={{ flex: '1 1 200px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sand-800)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <Tv size={16} />
                  <span>Liputan Media:</span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)' }}>
                  Kompas TV, DetikHealth & IBI
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)' }}>
                  Narasumber Nasional Gentle Birth
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
