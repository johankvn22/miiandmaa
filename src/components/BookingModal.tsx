import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Phone, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  initialServiceId 
}) => {
  const [selectedService, setSelectedService] = useState<string>('postpartum-homecare');
  const [patientName, setPatientName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gestationalAge, setGestationalAge] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Pagi (09.00 - 12.00 WIB)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentServiceObj = SERVICES_DATA.find(s => s.id === selectedService) || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = encodeURIComponent(
      `🐘 *FORMULIR RESERVASI MII AND MAA DAILY HOMECARE*\n` +
      `----------------------------------------\n` +
      `👤 *Nama Calon Ibu / Klien:* ${patientName}\n` +
      `📱 *No. WhatsApp:* ${whatsapp}\n` +
      `🤰 *Usia Kehamilan / Usia Bayi:* ${gestationalAge || 'Belum diisi'}\n` +
      `📋 *Layanan yang Dipilih:* ${currentServiceObj.title}\n` +
      `💰 *Investasi:* ${currentServiceObj.price}\n` +
      `📅 *Rencana Tanggal Kunjungan:* ${bookingDate || 'Fleksibel'}\n` +
      `⏰ *Waktu Pilihan:* ${preferredTime}\n` +
      `📝 *Catatan Tambahan / Keluhan:* ${notes || 'Tidak ada'}\n` +
      `----------------------------------------\n` +
      `Mohon konfirmasi ketersediaan jadwal dan panduan persiapan kunjungan bidan. Terima kasih!`
    );

    // Open WhatsApp
    window.open(`https://wa.me/628112037714?text=${formattedMessage}`, '_blank');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(34, 27, 32, 0.65)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      overflowY: 'auto'
    }}>
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '620px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--plum-50)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1.5px solid var(--plum-300)',
              flexShrink: 0
            }}>
              <img src="/logo.png" alt="mii and maa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--charcoal-900)' }}>
                Reservasi Jadwal & Konsultasi
              </h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--plum-700)', fontWeight: 700 }}>
                mii and maa • DAILY HOMECARE
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--sand-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--charcoal-700)',
              cursor: 'pointer'
            }}
            aria-label="Tutup Modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--plum-100)',
                color: 'var(--plum-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--charcoal-900)', marginBottom: '8px' }}>
                Formulir Berhasil Dibuat!
              </h4>
              <p style={{ fontSize: '0.94rem', color: 'var(--charcoal-600)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px auto' }}>
                Pesan reservasi telah dibuka di WhatsApp Anda. Silakan kirim pesan tersebut kepada Admin mii and maa untuk konfirmasi jadwal kunjungan bidan.
              </p>
              <button 
                onClick={handleReset}
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Selesai & Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Service Selector */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                  Pilih Layanan / Kelas *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-light)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--charcoal-900)',
                    outline: 'none'
                  }}
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      [{srv.categoryLabel}] {srv.title} - {srv.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Name & WA Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                    Nama Lengkap Calon Ibu / Klien *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      required
                      placeholder="Contoh: Nadia Safira"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                    <User size={16} color="var(--charcoal-400)" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                    Nomor WhatsApp Aktif *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel" 
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                    <Phone size={16} color="var(--charcoal-400)" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                  </div>
                </div>
              </div>

              {/* Gestational Age & Booking Date */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                    Usia Kehamilan / Usia Bayi Saat Ini
                  </label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 32 Minggu / Bayi 1 Bulan"
                    value={gestationalAge}
                    onChange={(e) => setGestationalAge(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                    Rencana Tanggal Kunjungan / Kelas
                  </label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>
              </div>

              {/* Time Preference */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                  Pilihan Waktu / Sesi
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {['Pagi (09.00 - 12.00 WIB)', 'Sore (14.00 - 18.00 WIB)'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setPreferredTime(slot)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: preferredTime === slot ? '2px solid var(--plum-600)' : '1px solid var(--border-light)',
                        backgroundColor: preferredTime === slot ? 'var(--plum-50)' : '#FFFFFF',
                        color: preferredTime === slot ? 'var(--plum-800)' : 'var(--charcoal-700)',
                        fontSize: '0.85rem',
                        fontWeight: preferredTime === slot ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
                  Alamat Lengkap Kunjungan Homecare / Catatan Khusus
                </label>
                <textarea 
                  rows={3}
                  placeholder="Misal: Alamat rumah untuk home visit, atau keluhan nyeri payudara bengkak / konsultasi gentle birth..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-light)',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    backgroundColor: '#FFFFFF',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Submit to WhatsApp */}
              <button 
                type="submit"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem', cursor: 'pointer' }}
              >
                <MessageCircle size={20} />
                <span>Kirim Pemesanan via WhatsApp</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--charcoal-400)', marginTop: '12px' }}>
                🔒 Data pribadi Anda dijamin kerahasiaannya dan hanya digunakan untuk kepentingan asuhan medis.
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
