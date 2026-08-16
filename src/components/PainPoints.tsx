import React from 'react';
import { 
  HeartHandshake, 
  BrainCircuit, 
  FileText, 
  Milk, 
  ShieldAlert, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PAIN_POINTS } from '../data/content';

interface PainPointsProps {
  onOpenBooking: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit size={26} />;
      case 'FileText':
        return <FileText size={26} />;
      case 'HeartHandshake':
        return <HeartHandshake size={26} />;
      case 'Milk':
        return <Milk size={26} />;
      default:
        return <Sparkles size={26} />;
    }
  };

  return (
    <section 
      id="pain-points" 
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ backgroundColor: 'var(--terracotta-50)', color: 'var(--terracotta-600)' }}>
            <HeartHandshake size={16} />
            <span>Empati & Solusi Holistik</span>
          </div>
          <h2 className="section-title">
            Persalinan Bukanlah Hal Menakutkan Bila Disiapkan dengan Benar
          </h2>
          <p className="section-subtitle">
            Kami memahami kegelisahan yang dirasakan calon orang tua. Di Bidan Sehati, setiap kekhawatiran dijawab dengan ilmu pengetahuan medis, latihan fisik terarah, dan bimbingan emosional.
          </p>
        </div>

        {/* 2x2 Interactive Pain Point & Solution Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px',
          marginBottom: '56px'
        }}>
          {PAIN_POINTS.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card card-hover"
              style={{
                padding: '32px',
                borderRadius: '24px',
                border: '1px solid var(--border-warm)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, var(--sand-50) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                
                {/* Fear / Pain Point Block */}
                <div style={{
                  padding: '16px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--terracotta-50)',
                  border: '1px solid rgba(216, 118, 97, 0.2)',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ShieldAlert size={18} color="var(--terracotta-500)" />
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--terracotta-600)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Kekhawatiran Umum
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--charcoal-900)', marginBottom: '6px' }}>
                    {item.fear}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--charcoal-600)', lineHeight: 1.6 }}>
                    "{item.fearDesc}"
                  </p>
                </div>

                {/* Solution Block */}
                <div style={{ padding: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sage-100)',
                      color: 'var(--sage-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--sage-700)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Solusi Asuhan Bidan Sehati
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--sage-800)', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                    {item.solution}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-700)', lineHeight: 1.65 }}>
                    {item.solutionDesc}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Philosophy Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--sage-700) 0%, var(--sage-900) 100%)',
          borderRadius: '24px',
          padding: '44px 36px',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div>
            <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', marginBottom: '14px' }}>
              Filosofi Gentle Birth
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', lineHeight: 1.35, marginBottom: '16px' }}>
              "Tubuh Wanita Didesain Sempurna untuk Melahirkan, dan Bayi Tahu Kapan Waktu Terbaik untuk Hadir."
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.98rem', lineHeight: 1.7 }}>
              Bidan bertindak sebagai penjaga ruang yang damai (*birth keeper*), membiarkan proses fisiologis berjalan alami tanpa intervensi medis yang terburu-buru, sembari tetap menjaga keselamatan medis dengan standar tertinggi.
            </p>
          </div>

          <div style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '32px 24px', borderRadius: '18px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--gold-accent)', marginBottom: '8px' }}>
              Mulai Perjalanan Anda Bersama Kami
            </div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '20px' }}>
              Konsultasikan Rencana Persalinan Anda Sekarang
            </h4>
            <button 
              onClick={onOpenBooking}
              className="btn btn-terracotta btn-lg"
              style={{ width: '100%', cursor: 'pointer' }}
            >
              <span>Jadwalkan Konsultasi Awal</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
