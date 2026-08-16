import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Download, 
  FileCheck2,
  CheckCircle2
} from 'lucide-react';
import { ARTICLES_DATA, ArticleItem } from '../data/content';

interface KnowledgeCenterProps {
  onOpenArticle: (article: ArticleItem) => void;
  onOpenLeadMagnet: () => void;
}

export const KnowledgeCenter: React.FC<KnowledgeCenterProps> = ({ onOpenArticle, onOpenLeadMagnet }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Kehamilan', 'Persalinan Alami', 'Laktasi'];

  const filteredArticles = selectedCategory === 'Semua'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter(a => a.category === selectedCategory);

  return (
    <section 
      id="artikel" 
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={16} />
            <span>Artikel & Pusat Edukasi</span>
          </div>
          <h2 className="section-title">
            Informasi Medis Terpercaya untuk Ibu Berdaya
          </h2>
          <p className="section-subtitle">
            Pelajari fisiologi tubuh wanita dan panduan praktis kehamilan langsung dari bidan tanpa mitos yang membingungkan.
          </p>
        </div>

        {/* Lead Magnet Banner: Free Hospital Bag & Birth Plan Guide */}
        <div style={{
          background: 'radial-gradient(ellipse at top right, rgba(243, 198, 188, 0.4) 0%, rgba(251, 249, 245, 1) 60%, rgba(227, 239, 233, 0.6) 100%)',
          borderRadius: '24px',
          padding: '36px',
          border: '1.5px solid var(--border-warm)',
          marginBottom: '56px',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--terracotta-100)', color: 'var(--terracotta-700)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '12px' }}>
              <Download size={14} />
              <span>GRATIS UNTUK BUMIL</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', marginBottom: '12px', color: 'var(--charcoal-900)' }}>
              Unduh Checklist Tas Persalinan (Hospital Bag) & Panduan Napas 4-7-8
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-700)', lineHeight: 1.65, marginBottom: '16px' }}>
              Daftar barang esensial lengkap untuk Ibu, Bayi, Suami, serta dokumen penting rumah sakit agar Anda tidak panik saat waktu persalinan tiba.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: 'var(--charcoal-600)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--sage-600)" /> Format Checklist Interaktif
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--sage-600)" /> Siap Unduh & Cetak PDF
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--sage-600)" /> 100% Bebas Biaya
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={onOpenLeadMagnet}
              className="btn btn-terracotta btn-lg"
              style={{ width: '100%', maxWidth: '320px', cursor: 'pointer', margin: '0 auto' }}
            >
              <FileCheck2 size={20} />
              <span>Buka Checklist Sekarang</span>
            </button>
            <div style={{ fontSize: '0.78rem', color: 'var(--charcoal-500)', marginTop: '10px' }}>
              Telah diunduh oleh 3.200+ calon ibu di Indonesia
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {filteredArticles.map((article) => (
            <article 
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="glass-card card-hover"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-light)',
                background: '#FFFFFF'
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px'
                }}>
                  <span className="badge badge-sage">
                    {article.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--charcoal-400)', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {article.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {article.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--charcoal-900)', marginBottom: '10px', lineHeight: 1.4 }}>
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--charcoal-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {article.summary}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)',
                  color: 'var(--sage-700)',
                  fontWeight: 600,
                  fontSize: '0.88rem'
                }}>
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} />
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
