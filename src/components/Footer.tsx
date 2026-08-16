import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO, PRACTITIONER_DATA } from '../data/content';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer style={{ backgroundColor: 'var(--charcoal-900)', color: '#FFFFFF', position: 'relative' }}>
      
      {/* Bottom CTA Banner Section (Clean document flow with no overlap) */}
      <div style={{
        paddingTop: '64px',
        paddingBottom: '32px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #7A2350 0%, #46142C 100%)',
            borderRadius: '24px',
            padding: '44px 36px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', color: '#FFFFFF', marginBottom: '14px' }}>
                mii and maa • Daily Homecare Terpercaya
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', lineHeight: 1.25, marginBottom: '14px' }}>
                Siap Menyambut Buah Hati dengan Tenang, Hangat & Berdaya?
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.02rem', lineHeight: 1.65 }}>
                Hadirkan asuhan kebidanan terbaik langsung di kenyamanan rumah Anda. Jadwalkan kunjungan Daily Homecare atau kelas edukasi bersama tim bidan mii and maa sekarang.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'start', justifySelf: 'start', width: '100%', maxWidth: '340px' }}>
              <button 
                onClick={onOpenBooking}
                className="btn btn-terracotta btn-lg"
                style={{ width: '100%', cursor: 'pointer' }}
              >
                <Sparkles size={18} />
                <span>Jadwalkan Homecare Sekarang</span>
              </button>

              <a 
                href={CLINIC_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{ 
                  width: '100%', 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  color: '#FFFFFF', 
                  border: '1px solid rgba(255, 255, 255, 0.25)' 
                }}
              >
                <Phone size={18} />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div style={{ paddingTop: '56px', paddingBottom: '60px' }}>
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
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--plum-300)',
                  flexShrink: 0
                }}>
                  <img src="/logo.png" alt="mii and maa Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1 }}>
                    mii and maa
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--plum-300)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    DAILY HOMECARE
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.65, marginBottom: '20px' }}>
                Pusat asuhan kebidanan holistik mandiri dan layanan daily homecare yang berfokus pada kenyamanan ibu hamil, persalinan tenang minim trauma, serta pemulihan nifas dan laktasi di rumah.
              </p>

              <div style={{ fontSize: '0.82rem', color: 'var(--gold-accent)' }}>
                {PRACTITIONER_DATA.licenseSTR}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--gold-accent)' }}>
                SIPB: {PRACTITIONER_DATA.licenseSIPB}
              </div>
            </div>

            {/* Column 2: Navigation Links (Home, Layanan Kami, Artikel, About Us) */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '18px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Navigasi Utama
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li><a href="#home" style={{ transition: 'color 0.2s' }}>Home</a></li>
                <li><a href="#layanan" style={{ transition: 'color 0.2s' }}>Layanan Kami (Daily Homecare & Kelas)</a></li>
                <li><a href="#artikel" style={{ transition: 'color 0.2s' }}>Artikel & Hospital Bag Checklist</a></li>
                <li><a href="#about-us" style={{ transition: 'color 0.2s' }}>About Us & Profil Praktisi</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Operational */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '18px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Kontak & Jangkauan Layanan
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <MapPin size={18} color="var(--plum-300)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{CLINIC_INFO.address} (Layanan Home Visit Jabodetabek)</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={18} color="var(--plum-300)" style={{ flexShrink: 0 }} />
                  <span>{CLINIC_INFO.phone}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={18} color="var(--plum-300)" style={{ flexShrink: 0 }} />
                  <span>{CLINIC_INFO.email}</span>
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

            {/* Column 4: Emergency Hotline & Trust Note */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '18px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Panggilan Darurat Homecare
              </h4>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                  On-Call 24 Jam Bidan & Doula
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  0812-8899-2345
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  Khusus bagi pasien terdaftar yang mengalami ketuban pecah dini atau tanda persalinan aktif.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                <ShieldCheck size={16} color="var(--plum-300)" />
                <span>Terhubung dengan Jejaring RS Rujukan Maternal</span>
              </div>
            </div>

          </div>

          {/* Medical Disclaimer & Copyright */}
          <div style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.55)',
            lineHeight: 1.6
          }}>
            <p style={{ marginBottom: '12px' }}>
              <strong>Disclaimer Medis:</strong> Informasi yang disajikan di situs web ini bertujuan untuk edukasi umum dan bukan merupakan pengganti diagnosis medis langsung, pemeriksaan USG formal, atau instruksi gawat darurat dari dokter spesialis obstetri & ginekologi (Sp.OG). Selalu konsultasikan kondisi kehamilan Anda dengan tenaga medis berlisensi resmi.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                © {new Date().getFullYear()} mii and maa (DAILY HOMECARE - Praktik Mandiri Bidan Annisa Larasati). Hak Cipta Dilindungi.
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#home" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Kebijakan Privasi Medis</a>
                <a href="#home" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Syarat & Ketentuan Layanan</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
