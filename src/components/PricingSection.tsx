import React from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Phone,
  Gift
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
            <span>Paket Bundling Lebih Untung</span>
          </div>
          <h2 className="section-title">
            Pilihan Paket Perawatan Mama & Si Kecil di Rumah
          </h2>
          <p className="section-subtitle">
            Dapatkan harga lebih hemat dan bonus treatment gratis dengan memilih Paket Bundling Kunjungan Homecare Bidan (Tersedia Paket 3 Hari, 5 Hari, & 7 Hari).
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
          marginBottom: '56px'
        }}>
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className="glass-card card-hover"
              style={{
                borderRadius: '24px',
                padding: '28px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                backgroundColor: pkg.popular ? 'var(--plum-50)' : '#FFFFFF',
                border: pkg.popular ? '2px solid var(--plum-500)' : '1px solid var(--border-warm)',
                boxShadow: pkg.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                boxSizing: 'border-box'
              }}
            >
              {/* Popular Ribbon */}
              {pkg.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  zIndex: 2
                }}>
                  <span className="badge" style={{
                    backgroundColor: pkg.popular ? 'var(--plum-600)' : 'var(--sand-200)',
                    color: pkg.popular ? '#FFFFFF' : 'var(--charcoal-900)',
                    boxShadow: '0 4px 12px rgba(142, 50, 96, 0.25)',
                    padding: '5px 16px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div style={{ marginBottom: '14px', marginTop: pkg.badge ? '8px' : '0' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--charcoal-900)', marginBottom: '6px', lineHeight: 1.3 }}>
                    {pkg.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--charcoal-600)', lineHeight: 1.5, minHeight: '38px' }}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div style={{
                  padding: '14px 0',
                  borderTop: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--plum-800)', fontFamily: 'var(--font-sans)' }}>
                    {pkg.price}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)', marginTop: '2px' }}>
                    {pkg.period}
                  </div>
                </div>

                {/* Target Audience Note */}
                <div style={{
                  backgroundColor: pkg.popular ? '#FFFFFF' : 'var(--sand-50)',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  color: 'var(--charcoal-700)',
                  marginBottom: '18px',
                  border: '1px solid var(--border-light)',
                  fontStyle: 'italic',
                  lineHeight: 1.45
                }}>
                  💡 {pkg.target}
                </div>

                {/* Inclusions Feature List */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--charcoal-800)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Kombinasi Tindakan:
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.82rem', color: 'var(--charcoal-700)', lineHeight: 1.45 }}>
                        <CheckCircle2 size={15} color="var(--plum-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Clean and properly sized */}
              <div style={{ paddingTop: '12px' }}>
                <button 
                  onClick={() => onOpenBooking(pkg.id)}
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', padding: '12px 16px', fontSize: '0.92rem', cursor: 'pointer', justifyContent: 'center', boxSizing: 'border-box' }}
                >
                  <Sparkles size={16} />
                  <span>Pilih Paket Ini</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Guarantee & Instagram Promotion Trust Banner */}
        <div style={{
          backgroundColor: 'var(--plum-50)',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid var(--border-plum)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--plum-200)',
              color: 'var(--plum-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Gift size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--plum-900)' }}>Dapatkan Free Treatment</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--charcoal-600)' }}>Bonus perawatan ekstra untuk pemesanan paket sebelum kelahiran si kecil.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--plum-200)',
              color: 'var(--plum-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--plum-900)' }}>Jadwal Kunjungan Fleksibel</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--charcoal-600)' }}>Daftar via WhatsApp H-1 untuk menyesuaikan waktu tidur si kecil.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <a 
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} />
              <span>Daftar via WhatsApp H-1</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
