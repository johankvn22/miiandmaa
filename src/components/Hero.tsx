import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Award
} from 'lucide-react';
import { CLINIC_INFO, PRACTITIONER_DATA } from '../data/content';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="home" 
      style={{
        paddingTop: '130px',
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
            
            {/* Medical Authority & Trust Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--plum-50)',
              border: '1px solid var(--border-plum)',
              padding: '6px 18px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '20px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--plum-600)',
                animation: 'pulseGlow 2s infinite'
              }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--plum-800)', letterSpacing: '0.02em' }}>
                mii and maa • Daily Homecare & Gentle Birth Berlisensi Resmi
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ 
              marginBottom: '20px', 
              color: 'var(--charcoal-900)',
              lineHeight: 1.2
            }}>
              Mempersiapkan Persalinan <span style={{ color: 'var(--plum-600)', fontStyle: 'italic' }}>Nyaman, Tenang</span>, dan Asuhan Homecare Terpercaya
            </h1>

            {/* Subheadline with emotional connection */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--charcoal-700)',
              lineHeight: 1.75,
              marginBottom: '32px'
            }}>
              <strong>mii and maa Daily Homecare</strong> menggabungkan asuhan kebidanan medis berbasis bukti dengan kehangatan perawatan di rumah, relaksasi napas <em>hypnobirthing</em>, pijat laktasi, dan pendampingan keluarga yang penuh cinta.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '36px'
            }}>
              <button 
                onClick={() => onOpenBooking('postpartum-homecare')}
                className="btn btn-primary btn-lg"
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={18} />
                <span>Pesan Daily Homecare</span>
              </button>

              <button 
                onClick={() => onOpenBooking('gentle-birth-class')}
                className="btn btn-secondary btn-lg"
                style={{ cursor: 'pointer' }}
              >
                <Calendar size={18} />
                <span>Daftar Kelas & Konsultasi</span>
              </button>
            </div>

            {/* Quick Benefits Bullet List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Kunjungan Homecare Nifas & Bayi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Pijat Laktasi & Terapi Payudara</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Kelas Hypnobirthing & Birth Partner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--charcoal-700)' }}>
                <CheckCircle2 size={18} color="var(--plum-600)" />
                <span>Pendampingan Doula 24 Jam</span>
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
                alt="Ibu dan bayi baru lahir dalam dekapan penuh kasih asuhan mii and maa daily homecare"
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
                  mii and maa • Daily Homecare
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}>
                  Bersama {PRACTITIONER_DATA.name}
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
                  Daily Homecare
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
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)', fontWeight: 600 }}>Praktisi Bersertifikat</div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Hypnobirthing & Laktasi CLC</div>
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
