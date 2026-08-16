import React from 'react';
import { 
  X, 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  Share2, 
  Heart, 
  Sparkles 
} from 'lucide-react';
import { ArticleItem } from '../data/content';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ 
  article, 
  onClose, 
  onOpenBooking 
}) => {
  if (!article) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(28, 38, 33, 0.65)',
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
          maxWidth: '750px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--sand-50)'
        }}>
          <span className="badge badge-sage">
            {article.category}
          </span>

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
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px', overflowY: 'auto', flexGrow: 1 }}>
          
          <h2 style={{ fontSize: '1.7rem', color: 'var(--charcoal-900)', marginBottom: '16px', lineHeight: 1.3 }}>
            {article.title}
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--charcoal-500)', marginBottom: '24px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <User size={14} color="var(--sage-700)" /> {article.author}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {article.date}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '280px', marginBottom: '24px' }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Key Takeaways Highlight */}
          <div style={{
            backgroundColor: 'var(--sage-50)',
            borderLeft: '4px solid var(--sage-600)',
            padding: '18px 20px',
            borderRadius: '0 16px 16px 0',
            marginBottom: '28px'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--sage-900)', marginBottom: '8px' }}>
              💡 Poin Penting untuk Ibu & Pasangan:
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {article.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.88rem', color: 'var(--charcoal-700)' }}>
                  <CheckCircle2 size={16} color="var(--sage-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1rem', color: 'var(--charcoal-800)', lineHeight: 1.8 }}>
            {article.content.map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Box at bottom of article */}
          <div style={{
            marginTop: '36px',
            padding: '24px',
            borderRadius: '18px',
            backgroundColor: 'var(--sand-100)',
            border: '1px solid var(--border-warm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>
                Ingin Berlatih Langsung Bersama Bidan?
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--charcoal-600)' }}>
                Ikuti kelas persiapan persalinan & workshop offline/online kami.
              </div>
            </div>

            <button 
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn btn-primary btn-sm"
              style={{ cursor: 'pointer' }}
            >
              <Sparkles size={16} />
              <span>Daftar Kelas Terdekat</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
