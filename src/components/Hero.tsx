import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin,
  Heart
} from 'lucide-react';
import { CLINIC_INFO, PRACTITIONER_DATA } from '../data/content';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

const InstagramIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="home" 
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'radial-gradient(ellipse at top left, rgba(248, 226, 236, 0.6) 0%, rgba(252, 250, 248, 1) 55%, rgba(243, 248, 245, 0.7) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Blur Circles */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '-5%',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'rgba(222, 156, 184, 0.22)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'rgba(110, 167, 142, 0.15)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Copywriting & CTAs */}
          <div>

            {/* Main Headline */}
            <h1 style={{ 
              marginBottom: '20px', 
              color: 'var(--charcoal-900)',
              lineHeight: 1.2
            }}>
              Jasa Perawatan Mama dan Si Kecil <span style={{ color: 'var(--plum-600)', fontStyle: 'italic' }}>Kapan Saja & Di Mana Saja</span> Tanpa Harus Keluar Rumah
            </h1>

            {/* Subheadline aligned with Instagram Bio */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--charcoal-700)',
              lineHeight: 1.75,
              marginBottom: '24px'
            }}>
              Pelayanan kesehatan ibu dan anak oleh <strong>Tim Bidan Berkompeten & Berpengalaman</strong>. Layanan Mom & Baby Spa, Pijat Laktasi & Oksitosin, Pijat Pediatric Bayi Kembung/Kolik, hingga Perawatan Nifas langsung ke kediaman Anda.
            </p>

            {/* Area Badge Banner */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--plum-50)',
              border: '1px solid var(--border-plum)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '32px'
            }}>
              <MapPin size={16} color="var(--plum-700)" />
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--plum-800)' }}>
                📍 {CLINIC_INFO.coverageAreas}
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '36px'
            }}>
              <button 
                onClick={() => onOpenBooking('bundling-3-hari')}
                className="btn btn-primary btn-lg"
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={18} />
                <span>Daftar via WhatsApp (H-1)</span>
              </button>

              <a 
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <InstagramIcon size={18} color="var(--plum-700)" />
                <span>Lihat Instagram (56.4K)</span>
              </a>
            </div>

            {/* Quick Benefits Bullet List based on Real Instagram Offerings */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Baby & Kids Spa (Pijat Bayi)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Breast Care (Pijat Laktasi & Oksitosin)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Pijat Hamil & Nifas (Postnatal)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Pediatric Kolik, Tindik & Jasa Infus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero with Logo Card */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Visual Image Card */}
            <div style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '6px solid #FFFFFF',
              background: '#F8E2EC'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80" 
                alt="Ibu dan bayi baru lahir asuhan mii and maa daily homecare"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(70, 20, 44, 0.5) 0%, transparent 45%)'
              }} />
              
              {/* Bottom Overlay Info on Image */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.85rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Mom & Baby Spa • Daily Homecare
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}>
                  Dipimpin oleh {PRACTITIONER_DATA.name}
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Top Left with Logo */}
            <div 
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-15px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-md)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                backgroundColor: '#FFFFFF',
                zIndex: 3
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--plum-200)',
                flexShrink: 0
              }}>
                <img src="/logo.png" alt="mii and maa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.35rem', color: 'var(--plum-800)', lineHeight: 1 }}>
                  mii and maa
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--plum-600)', textTransform: 'uppercase' }}>
                  Mom & Baby Spa
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Bottom Right */}
            <div 
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-15px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-md)',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                animationDelay: '1.5s',
                zIndex: 3
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--plum-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--plum-700)'
              }}>
                <Heart size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)', fontWeight: 600 }}>Terbukti Bermanfaat untuk</div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Ribuan Mama & Si Kecil 💖</div>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Row Bar */}
        <div style={{
          marginTop: '64px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-warm)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            {CLINIC_INFO.stats.map((stat, idx) => (
              <div key={idx} style={{
                borderRight: idx !== CLINIC_INFO.stats.length - 1 ? '1px solid rgba(206, 173, 142, 0.3)' : 'none',
                paddingRight: '12px'
              }}>
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2.4rem', 
                  fontWeight: 700, 
                  color: 'var(--plum-700)',
                  lineHeight: 1.1
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--charcoal-900)', marginTop: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--charcoal-500)', marginTop: '2px' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
