import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  CheckSquare, 
  Square, 
  Sparkles, 
  Heart,
  Baby,
  FileCheck2
} from 'lucide-react';
import { HOSPITAL_BAG_CHECKLIST } from '../data/content';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const [checklist, setChecklist] = useState(HOSPITAL_BAG_CHECKLIST);
  const [activeCategory, setActiveCategory] = useState(0);

  if (!isOpen) return null;

  const toggleItem = (catIdx: number, itemIdx: number) => {
    const updated = [...checklist];
    updated[catIdx].items[itemIdx].done = !updated[catIdx].items[itemIdx].done;
    setChecklist(updated);
  };

  const totalItems = checklist.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = checklist.reduce(
    (acc, cat) => acc + cat.items.filter(i => i.done).length, 
    0
  );
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  const handlePrint = () => {
    window.print();
  };

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
          maxWidth: '680px',
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
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--sand-50)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--terracotta-100)',
              color: 'var(--terracotta-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileCheck2 size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--charcoal-900)' }}>
                Hospital Bag Checklist (Tas Persalinan)
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-500)' }}>
                Panduan Persiapan Menjelang Hari HPL
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
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ padding: '16px 24px', backgroundColor: 'var(--sage-50)', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: 600, color: 'var(--charcoal-800)', marginBottom: '6px' }}>
            <span>Kesiapan Tas Persalinan:</span>
            <span style={{ color: 'var(--sage-700)' }}>{completedItems} dari {totalItems} item ({progressPercent}%)</span>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--sage-200)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: 'var(--sage-600)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          borderBottom: '1px solid var(--border-light)',
          padding: '8px 16px',
          gap: '8px',
          backgroundColor: '#FFFFFF'
        }}>
          {checklist.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: activeCategory === idx ? 700 : 500,
                backgroundColor: activeCategory === idx ? 'var(--sage-600)' : 'var(--sand-100)',
                color: activeCategory === idx ? '#FFFFFF' : 'var(--charcoal-700)',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              {cat.category} ({cat.items.filter(i => i.done).length}/{cat.items.length})
            </button>
          ))}
        </div>

        {/* Checklist Items Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flexGrow: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {checklist[activeCategory].items.map((item, itemIdx) => (
              <div 
                key={item.id}
                onClick={() => toggleItem(activeCategory, itemIdx)}
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: item.done ? 'var(--sage-50)' : '#FFFFFF',
                  border: item.done ? '1.5px solid var(--sage-400)' : '1px solid var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ color: item.done ? 'var(--sage-600)' : 'var(--charcoal-400)', marginTop: '2px' }}>
                  {item.done ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
                <div style={{
                  fontSize: '0.94rem',
                  color: item.done ? 'var(--sage-900)' : 'var(--charcoal-800)',
                  textDecoration: item.done ? 'line-through' : 'none',
                  lineHeight: 1.5
                }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer with Print / Action */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--sand-50)'
        }}>
          <button 
            onClick={handlePrint}
            className="btn btn-secondary btn-sm"
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Printer size={16} />
            <span>Cetak Checklist</span>
          </button>

          <button 
            onClick={onClose}
            className="btn btn-primary btn-sm"
            style={{ cursor: 'pointer' }}
          >
            Simpan & Selesai
          </button>
        </div>

      </div>
    </div>
  );
};
