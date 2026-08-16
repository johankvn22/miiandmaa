import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MessageCircle
} from 'lucide-react';
import { CLINIC_INFO, PRACTITIONER_DATA } from '../data/content';

interface FooterProps {
  onOpenBooking: () => void;
}

const InstagramIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer style={{ backgroundColor: 'var(--charcoal-900)', color: '#FFFFFF', position: 'relative' }}>
      
      {/* Main Clean Footer Body */}
      <div style={{ paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}>
            
            {/* Column 1: Brand & Bio with Logo */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--plum-300)',
                  flexShrink: 0
                }}>
                  <img src="/logo.png" alt="mii and maa Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.85rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1 }}>
                    mii and maa
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--plum-300)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '2px' }}>
                    DAILY HOMECARE
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.65, marginBottom: '16px' }}>
                Pelayanan kesehatan ibu dan anak oleh Tim Bidan Berkompeten & Berpengalaman. Layanan Baby Spa, Pijat Hamil, Nifas, Laktasi, Kelas Parenting, dan Jasa Infus langsung ke rumah Anda.
              </p>

              <div style={{ fontSize: '0.85rem', color: 'var(--gold-accent)', fontWeight: 600 }}>
                Dipimpin oleh {PRACTITIONER_DATA.name}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px' }}>
                📍 Bandung • Cimahi • KBB • Jabodetabek
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.08rem', marginBottom: '18px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Navigasi Utama
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li><a href="#home" style={{ transition: 'color 0.2s' }}>Home</a></li>
                <li><a href="#layanan" style={{ transition: 'color 0.2s' }}>Layanan Mom & Baby Spa</a></li>
                <li><a href="#pricing" style={{ transition: 'color 0.2s' }}>Paket Bundling Lebih Untung</a></li>
                <li><a href="#artikel" style={{ transition: 'color 0.2s' }}>Artikel & Checklist Tas Persalinan</a></li>
                <li><a href="#about-us" style={{ transition: 'color 0.2s' }}>About Us & Profil Tim Bidan</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Operational */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.08rem', marginBottom: '18px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Kontak & Jangkauan Layanan
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <MapPin size={18} color="var(--plum-300)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{CLINIC_INFO.coverageAreas}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={18} color="var(--plum-300)" style={{ flexShrink: 0 }} />
                  <span>{CLINIC_INFO.phone}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <InstagramIcon size={18} color="var(--plum-300)" />
                  <a href={CLINIC_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    {CLINIC_INFO.instagram} (56.4K Followers)
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <Clock size={18} color="var(--plum-300)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div>{CLINIC_INFO.operatingHours}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--plum-200)', marginTop: '2px' }}>
                      {CLINIC_INFO.emergencyNote}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: WhatsApp Reservasi Box */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.08rem', marginBottom: '18px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Reservasi Homecare Bidan
              </h4>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '22px',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                  WhatsApp Resmi (Daftar H-1)
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                  0811-2037-714
                </div>
                <a 
                  href={CLINIC_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={16} />
                  <span>Chat Admin WhatsApp</span>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                <ShieldCheck size={16} color="var(--plum-300)" />
                <span>Ditangani Bidan Berkompeten & Berpengalaman</span>
              </div>
            </div>

          </div>

          {/* Medical Disclaimer & Copyright */}
          <div style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.55)',
            lineHeight: 1.6
          }}>
            <p style={{ marginBottom: '12px' }}>
              <strong>Disclaimer Medis:</strong> Informasi yang disajikan di situs web ini bertujuan untuk edukasi dan informasi layanan kesehatan ibu dan anak. Untuk penanganan kegawatdaruratan medis darurat, hubungi fasilitas kesehatan atau rumah sakit terdekat.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                © {new Date().getFullYear()} mii and maa Daily Homecare (Dipimpin oleh {PRACTITIONER_DATA.name}). Hak Cipta Dilindungi.
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={CLINIC_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Instagram Resmi</a>
                <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>WhatsApp Resmi</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
