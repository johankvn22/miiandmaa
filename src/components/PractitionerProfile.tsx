import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Quote,
  MapPin
} from 'lucide-react';
import { PRACTITIONER_DATA, CLINIC_INFO } from '../data/content';

interface PractitionerProfileProps {
  onOpenBooking: () => void;
}

const InstagramIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

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
          <div className="section-tag" style={{ backgroundColor: 'var(--plum-50)', color: 'var(--plum-700)', borderColor: 'var(--border-plum)' }}>
            <Award size={16} />
            <span>About Us & Tim Bidan</span>
          </div>
          <h2 className="section-title">
            Tentang mii and maa Daily Homecare
          </h2>
          <p className="section-subtitle">
            Pelayanan kesehatan ibu dan anak yang dipimpin oleh Bidan Sulastria TM dan didukung oleh tim bidan yang berkompeten, berpengalaman, serta tersertifikasi khusus.
          </p>
        </div>

        {/* Profile Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '48px'
        }}>
          
          {/* Left Column: Portrait Image & Credentials Badges */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '6px solid var(--plum-50)',
              backgroundColor: 'var(--plum-100)',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1594824813590-77a83d47f9fa?auto=format&fit=crop&w=900&q=80" 
                alt={PRACTITIONER_DATA.name}
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(70, 20, 44, 0.75) 0%, transparent 45%)'
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
                  mii and maa Daily Homecare (Bandung, Cimahi, KBB & Jabodetabek)
                </div>
              </div>
            </div>

            {/* Floating Card */}
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
              <ShieldCheck size={26} color="var(--plum-600)" />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--charcoal-500)', fontWeight: 600 }}>Tim Bidan Resmi</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Berlisensi & Berpengalaman</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials */}
          <div>
            
            <div style={{ marginBottom: '20px' }}>
              <span className="badge badge-plum" style={{ marginBottom: '12px' }}>
                Terbukti Bermanfaat untuk Ribuan Mama & Si Kecil
              </span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--charcoal-900)', marginBottom: '12px' }}>
                {PRACTITIONER_DATA.name}
              </h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--charcoal-700)', lineHeight: 1.7, marginBottom: '20px' }}>
                {PRACTITIONER_DATA.bio}
              </p>
            </div>

            {/* Quote / Philosophy Box */}
            <div style={{
              backgroundColor: 'var(--plum-50)',
              borderLeft: '4px solid var(--plum-600)',
              padding: '20px',
              borderRadius: '0 16px 16px 0',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                <Quote size={24} color="var(--plum-600)" style={{ flexShrink: 0, opacity: 0.6 }} />
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
                Keahlian & Keunggulan Layanan:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {PRACTITIONER_DATA.certifications.map((cert, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--charcoal-700)' }}>
                    <CheckCircle2 size={16} color="var(--plum-600)" style={{ flexShrink: 0 }} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location and Instagram Info */}
            <div style={{
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--plum-800)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <MapPin size={16} />
                  <span>Jangkauan Wilayah Homecare:</span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)' }}>
                  Bandung, Cimahi, KBB & Jabodetabek
                </div>
              </div>

              <a 
                href={CLINIC_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <InstagramIcon size={16} color="var(--plum-700)" />
                <span>Follow @miiandmaa.dailyhomecare</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
