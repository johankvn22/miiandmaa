import React from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Phone,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { PRICING_PACKAGES, CLINIC_INFO } from '../data/content';

interface PricingSectionProps {
  onOpenBooking: (packageId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="pricing" 
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
            <CreditCard size={16} />
            <span>Paket Biaya Layanan</span>
          </div>
          <h2 className="section-title">
            Investasi Transparan untuk Kesehatan Ibu & Buah Hati
          </h2>
          <p className="section-subtitle">
            Pilih paket asuhan Daily Homecare dan pendampingan persalinan yang paling sesuai dengan kebutuhan keluarga Anda di rumah.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          alignItems: 'stretch',
          marginBottom: '56px'
        }}>
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className="glass-card card-hover"
              style={{
                borderRadius: '24px',
                padding: '32px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                backgroundColor: pkg.popular ? 'var(--plum-50)' : '#FFFFFF',
                border: pkg.popular ? '2px solid var(--plum-500)' : '1px solid var(--border-warm)',
                boxShadow: pkg.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
              }}
            >
              {/* Popular Ribbon */}
              {pkg.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap'
                }}>
                  <span className="badge" style={{
                    backgroundColor: pkg.popular ? 'var(--plum-600)' : 'var(--sand-200)',
                    color: pkg.popular ? '#FFFFFF' : 'var(--charcoal-900)',
                    boxShadow: '0 4px 12px rgba(142, 50, 96, 0.25)',
                    padding: '5px 16px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div style={{ marginBottom: '16px', marginTop: pkg.badge ? '8px' : '0' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--charcoal-900)', marginBottom: '6px' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--charcoal-600)', lineHeight: 1.5, minHeight: '38px' }}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div style={{
                  padding: '16px 0',
                  borderTop: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--plum-800)', fontFamily: 'var(--font-sans)' }}>
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: 'var(--charcoal-400)' }}>
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-500)', marginTop: '2px' }}>
                    {pkg.period}
                  </div>
                </div>

                {/* Target Audience Note */}
                <div style={{
                  backgroundColor: pkg.popular ? '#FFFFFF' : 'var(--sand-50)',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  color: 'var(--charcoal-700)',
                  marginBottom: '20px',
                  border: '1px solid var(--border-light)',
                  fontStyle: 'italic'
                }}>
                  💡 {pkg.target}
                </div>

                {/* Inclusions Feature List */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--charcoal-800)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Fasilitas & Asuhan Termasuk:
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.86rem', color: 'var(--charcoal-700)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color="var(--plum-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button 
                  onClick={() => onOpenBooking(pkg.id)}
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', padding: '14px', fontSize: '0.98rem', cursor: 'pointer', justifyContent: 'center' }}
                >
                  <Sparkles size={16} />
                  <span>Pilih {pkg.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Guarantee & Transparency Trust Banner */}
        <div style={{
          backgroundColor: 'var(--sand-50)',
          borderRadius: '20px',
          padding: '24px 32px',
          border: '1px solid var(--border-warm)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--plum-100)',
              color: 'var(--plum-700)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Tanpa Biaya Tersembunyi</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-600)' }}>Harga sudah termasuk alat steril & bahan herbal berkualitas.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--plum-100)',
              color: 'var(--plum-700)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MessageCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Jadwal Kunjungan Fleksibel</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-600)' }}>Dapat dijadwalkan ulang (*reschedule*) tanpa biaya tambahan.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <a 
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} />
              <span>Tanya Ketersediaan Jadwal</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
