import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle 
} from 'lucide-react';
import { FAQ_DATA, CLINIC_INFO } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        paddingBottom: '80px'
      }}
    >
      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ backgroundColor: 'var(--plum-50)', color: 'var(--plum-700)', borderColor: 'var(--border-plum)' }}>
            <HelpCircle size={16} />
            <span>Tanya Jawab (FAQ)</span>
          </div>
          <h2 className="section-title">
            Pertanyaan yang Sering Diajukan Seputar Homecare & Kelas
          </h2>
          <p className="section-subtitle">
            Temukan jawaban cepat seputar tata cara reservasi homecare, jangkauan kunjungan bidan, persiapan kelas, dan sistem rujukan medis.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  borderRadius: '18px',
                  border: isOpen ? '1.5px solid var(--plum-400)' : '1px solid var(--border-light)',
                  backgroundColor: isOpen ? 'var(--plum-50)' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'transparent'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? 'var(--plum-800)' : 'var(--charcoal-900)' }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--plum-200)' : 'var(--sand-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? 'var(--plum-800)' : 'var(--charcoal-600)',
                    flexShrink: 0
                  }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 24px 24px',
                    fontSize: '0.94rem',
                    color: 'var(--charcoal-700)',
                    lineHeight: 1.7
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner if question not listed */}
        <div style={{
          backgroundColor: 'var(--plum-50)',
          borderRadius: '20px',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          border: '1px solid var(--border-plum)'
        }}>
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--plum-900)', marginBottom: '4px' }}>
              Punya Pertanyaan Spesifik Lainnya?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-600)' }}>
              Tim bidan mii and maa siap membantu menjawab pertanyaan Anda dengan ramah dan penuh empati.
            </p>
          </div>

          <a 
            href={CLINIC_INFO.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>Tanya Bidan via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
