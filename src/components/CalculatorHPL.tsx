import React, { useState } from 'react';
import { 
  Calculator, 
  Calendar, 
  Sparkles, 
  Baby, 
  Clock, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Info
} from 'lucide-react';

interface CalculatorHPLProps {
  onSelectClass: (classId: string) => void;
}

export const CalculatorHPL: React.FC<CalculatorHPLProps> = ({ onSelectClass }) => {
  const [hphtDate, setHphtDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [result, setResult] = useState<{
    hplFormatted: string;
    weeks: number;
    days: number;
    trimester: number;
    daysRemaining: number;
    babySize: string;
    fetalDevelopment: string;
    recommendedClass: string;
    recommendedClassId: string;
    milestoneTips: string[];
  } | null>(null);

  const calculateHPL = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hphtDate) return;

    const hpht = new Date(hphtDate);
    const today = new Date();

    // Naegele's rule calculation adjusted for cycle length:
    // Due Date = HPHT + 280 days + (cycleLength - 28) days
    const totalDaysGestational = 280 + (cycleLength - 28);
    const hpl = new Date(hpht.getTime() + totalDaysGestational * 24 * 60 * 60 * 1000);

    // Gestational age from HPHT to today
    const diffTime = today.getTime() - hpht.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const weeks = Math.max(0, Math.floor(diffDays / 7));
    const days = Math.max(0, diffDays % 7);

    // Days remaining until HPL
    const remainingTime = hpl.getTime() - today.getTime();
    const daysRemaining = Math.max(0, Math.ceil(remainingTime / (1000 * 60 * 60 * 24)));

    let trimester = 1;
    let babySize = 'Sebesar Biji Apel / Jeruk Nipis 🍋';
    let fetalDevelopment = 'Organ vital utama, detak jantung, dan sistem saraf bayi sedang terbentuk pesat.';
    let recommendedClass = 'Konsultasi ANC Holistik & Edukasi Nutrisi Awal';
    let recommendedClassId = 'anc-holistic-clinic';
    let milestoneTips = [
      'Penuhi asupan asam folat dan zat besi alami dari sayuran hijau',
      'Atasi morning sickness dengan jahe hangat & makan porsi kecil sering',
      'Hindari kelelahan fisik dan stres berlebih'
    ];

    if (weeks >= 14 && weeks <= 27) {
      trimester = 2;
      babySize = 'Sebesar Buah Mangga / Kelapa Muda 🥥';
      fetalDevelopment = 'Bayi mulai bisa mendengar suara ibu dan ayah, bergerak aktif, dan kelopak mata mulai terbentuk.';
      recommendedClass = 'Hypnobirthing & Prenatal Gentle Yoga';
      recommendedClassId = 'hypnobirthing-yoga';
      milestoneTips = [
        'Mulai rutin relaksasi napas & latihan kelenturan panggul',
        'Bangun komunikasi prenatal: ajak janin mengobrol & dengarkan murottal/musik klasik',
        'Pijat lembut perut ibu dengan minyak almond organik'
      ];
    } else if (weeks >= 28) {
      trimester = 3;
      babySize = 'Sebesar Buah Melon / Semangka Madu 🍉';
      fetalDevelopment = 'Paru-paru bayi mematangkan fungsinya, posisi kepala mulai turun mencari pintu atas panggul.';
      recommendedClass = 'Kelas Persiapan Gentle Birth & Pelatihan Suami';
      recommendedClassId = 'gentle-birth-class';
      milestoneTips = [
        'Rutin latihan goyang panggul dengan Birth Ball untuk membuka pintu panggul',
        'Mulai pijat perineum teratur (mulai minggu ke-34) untuk mencegah robekan',
        'Susun Lembar Rencana Persalinan (Birth Plan) & siapkan Hospital Bag'
      ];
    }

    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const hplFormatted = hpl.toLocaleDateString('id-ID', options);

    setResult({
      hplFormatted,
      weeks,
      days,
      trimester,
      daysRemaining,
      babySize,
      fetalDevelopment,
      recommendedClass,
      recommendedClassId,
      milestoneTips
    });
  };

  return (
    <section 
      id="calculator-hpl" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--sage-50)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={16} />
            <span>Kalkulator Kesehatan Ibu</span>
          </div>
          <h2 className="section-title">
            Hitung Hari Perkiraan Lahir (HPL) & Usia Kehamilan
          </h2>
          <p className="section-subtitle">
            Ketahui fase perkembangan buah hati Anda dan dapatkan panduan persiapan persalinan yang tepat sesuai usia kehamilan saat ini.
          </p>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>
          
          {/* Input Form Card */}
          <div className="glass-card" style={{ padding: '36px 28px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={22} color="var(--sage-600)" />
              <span>Data Menstruasi Terakhir</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-600)', marginBottom: '24px' }}>
              Masukkan tanggal hari pertama siklus haid terakhir (HPHT) Anda.
            </p>

            <form onSubmit={calculateHPL}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '8px' }}>
                  Hari Pertama Haid Terakhir (HPHT) *
                </label>
                <input 
                  type="date" 
                  required
                  value={hphtDate}
                  onChange={(e) => setHphtDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-light)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--charcoal-900)',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--charcoal-800)' }}>
                    Rata-rata Panjang Siklus Haid
                  </label>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--sage-700)' }}>
                    {cycleLength} Hari
                  </span>
                </div>
                <input 
                  type="range" 
                  min={21} 
                  max={35} 
                  value={cycleLength}
                  onChange={(e) => setCycleLength(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--sage-600)',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--charcoal-400)', marginTop: '4px' }}>
                  <span>21 Hari (Pendek)</span>
                  <span>28 Hari (Normal)</span>
                  <span>35 Hari (Panjang)</span>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '15px', fontSize: '1.02rem', cursor: 'pointer' }}
              >
                <Sparkles size={18} />
                <span>Hitung Usia Kehamilan & HPL</span>
              </button>
            </form>

            <div style={{ marginTop: '20px', display: 'flex', gap: '8px', alignItems: 'start', fontSize: '0.82rem', color: 'var(--charcoal-500)' }}>
              <Info size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--sage-600)' }} />
              <span>
                Perhitungan menggunakan metode Rumus Naegele standar medis. Konfirmasikan kembali dengan pemeriksaan USG pertama Anda bersama bidan/dokter.
              </span>
            </div>
          </div>

          {/* Result Card */}
          <div className="glass-card" style={{ 
            padding: '36px 28px', 
            backgroundColor: result ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
            border: result ? '2px solid var(--sage-400)' : '1px dashed var(--sage-300)'
          }}>
            {!result ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--sage-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  color: 'var(--sage-600)'
                }}>
                  <Baby size={32} />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--charcoal-800)' }}>
                  Hasil Perhitungan Akan Tampil di Sini
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-500)', maxWidth: '340px', margin: '0 auto' }}>
                  Pilih tanggal HPHT Anda pada formulir di sebelah kiri untuk melihat estimasi HPL dan panduan persiapan kehamilan.
                </p>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="badge badge-sage">
                    Trimester {result.trimester}
                  </span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--charcoal-500)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {result.daysRemaining} Hari Menuju HPL
                  </span>
                </div>

                <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.88rem', color: 'var(--charcoal-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Hari Perkiraan Lahir (HPL)
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--sage-800)', marginTop: '4px' }}>
                    {result.hplFormatted}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--charcoal-800)', marginTop: '6px' }}>
                    Usia Kehamilan Saat Ini: <span style={{ color: 'var(--terracotta-500)' }}>{result.weeks} Minggu {result.days} Hari</span>
                  </div>
                </div>

                {/* Milestone Info */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--charcoal-900)', marginBottom: '6px' }}>
                    Ukuran Bayi: {result.babySize}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--charcoal-600)', lineHeight: 1.6 }}>
                    {result.fetalDevelopment}
                  </p>
                </div>

                {/* Checklist Recommendations */}
                <div style={{ backgroundColor: 'var(--sand-50)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '24px', border: '1px solid var(--border-warm)' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--sand-800)', marginBottom: '10px' }}>
                    Fokus Persiapan Trimester {result.trimester}:
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {result.milestoneTips.map((tip, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.84rem', color: 'var(--charcoal-700)' }}>
                        <CheckCircle2 size={16} color="var(--sage-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Class Button */}
                <div style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--sage-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--sage-700)', fontWeight: 600 }}>Rekomendasi Kelas / Layanan:</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>{result.recommendedClass}</div>
                  </div>
                  <button 
                    onClick={() => onSelectClass(result.recommendedClassId)}
                    className="btn btn-primary btn-sm"
                    style={{ cursor: 'pointer', flexShrink: 0 }}
                  >
                    <span>Lihat Jadwal</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
