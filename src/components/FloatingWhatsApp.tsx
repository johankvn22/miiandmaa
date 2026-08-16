import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'Pesan Layanan Daily Homecare',
      text: 'Halo mii and maa 🌿 Saya ingin memesan kunjungan Daily Homecare untuk perawatan nifas / pijat laktasi / baby spa.'
    },
    {
      title: 'Tanya Jadwal Kelas Gentle Birth',
      text: 'Halo mii and maa 🌿 Saya ingin bertanya mengenai jadwal Kelas Gentle Birth & Workshop terdekat.'
    },
    {
      title: 'Konsultasi ANC & Pemeriksaan',
      text: 'Halo mii and maa 🌿 Saya ingin membuat janji temu konsultasi kehamilan (ANC) bersama bidan.'
    },
    {
      title: 'Pendampingan Doula 24 Jam',
      text: 'Halo mii and maa 🌿 Saya ingin berkonsultasi mengenai paket pendampingan persalinan privat / Doula.'
    }
  ];

  const handleSendMessage = (msgText: string) => {
    const url = `https://wa.me/6281288992345?text=${encodeURIComponent(msgText)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99 }}>
      
      {/* Quick Menu Popover */}
      {isOpen && (
        <div 
          className="glass-card"
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '330px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-plum)',
            overflow: 'hidden',
            animation: 'slideDown 0.25s ease'
          }}
        >
          {/* Popover Header */}
          <div style={{
            backgroundColor: 'var(--plum-700)',
            color: '#FFFFFF',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--plum-300)',
                flexShrink: 0
              }}>
                <img src="/logo.png" alt="mii and maa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem', fontWeight: 700, lineHeight: 1 }}>
                  mii and maa
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.9, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  DAILY HOMECARE
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              style={{ color: '#FFFFFF', cursor: 'pointer' }}
              aria-label="Tutup Menu Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Questions Chips */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-500)', fontWeight: 600, marginBottom: '4px' }}>
              Pilih Layanan / Topik Chat:
            </div>
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(item.text)}
                style={{
                  textAlign: 'left',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--sand-50)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--charcoal-800)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--plum-50)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--sand-50)')}
              >
                <span>{item.title}</span>
                <Send size={13} color="var(--plum-600)" />
              </button>
            ))}
          </div>

        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn-whatsapp animate-pulse-glow"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          cursor: 'pointer',
          border: 'none',
          position: 'relative'
        }}
        aria-label="Hubungi WhatsApp mii and maa"
      >
        <MessageCircle size={30} color="#FFFFFF" />
      </button>

    </div>
  );
};
