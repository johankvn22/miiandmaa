import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PRODUCTS_DATA, ProductItem, CLINIC_INFO } from '../data/content';

export const StoreSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleOrderWhatsApp = (product: ProductItem) => {
    const text = encodeURIComponent(
      `Halo Admin Toko Bidan Sehati 🌿\n\nSaya ingin memesan produk:\n📦 *${product.name}*\n💰 Harga: *${product.priceFormatted}*\n\nMohon info ketersediaan stok dan estimasi ongkir ke alamat saya. Terima kasih!`
    );
    window.open(`https://wa.me/628112037714?text=${text}`, '_blank');
  };

  return (
    <section 
      id="store" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-main)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShoppingBag size={16} />
            <span>Toko Pendukung Ibu & Bayi</span>
          </div>
          <h2 className="section-title">
            Perlengkapan Pilihan Kurasi Medis Bidan
          </h2>
          <p className="section-subtitle">
            Produk berkualitas tinggi yang teruji aman dan efektif mendukung kehamilan yang nyaman, persalinan lancar, serta pemulihan nifas yang cepat.
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {PRODUCTS_DATA.map((product) => (
            <div 
              key={product.id}
              className="glass-card card-hover"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-warm)',
                background: '#FFFFFF'
              }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden', backgroundColor: 'var(--sand-50)' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {product.badge && (
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    <span className="badge badge-gold">
                      {product.badge}
                    </span>
                  </div>
                )}

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--charcoal-800)'
                }}>
                  <Star size={13} fill="#D4A373" color="#D4A373" />
                  <span>{product.rating}</span>
                  <span style={{ color: 'var(--charcoal-400)', fontWeight: 400 }}>({product.reviewsCount})</span>
                </div>
              </div>

              {/* Product Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--sage-700)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {product.category}
                  </div>

                  <h3 style={{ fontSize: '1.18rem', color: 'var(--charcoal-900)', marginBottom: '10px', lineHeight: 1.4 }}>
                    {product.name}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-600)', marginBottom: '16px', lineHeight: 1.55 }}>
                    {product.description}
                  </p>

                  {/* Feature Highlights */}
                  <div style={{ marginBottom: '20px' }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {product.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'start', gap: '6px', fontSize: '0.82rem', color: 'var(--charcoal-700)' }}>
                          <CheckCircle2 size={14} color="var(--sage-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing and Order Action */}
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--charcoal-400)', textTransform: 'uppercase' }}>Harga Resmi</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--charcoal-900)' }}>
                      {product.priceFormatted}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleOrderWhatsApp(product)}
                    className="btn btn-whatsapp btn-sm"
                    style={{ cursor: 'pointer' }}
                  >
                    <MessageCircle size={15} />
                    <span>Pesan via WA</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Store Trust Badges */}
        <div style={{
          marginTop: '48px',
          padding: '24px',
          borderRadius: '20px',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-light)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <ShieldCheck size={24} color="var(--sage-600)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>100% Produk Asli & Steril</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--charcoal-500)' }}>Garansi kualitas kurasi kebidanan</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Sparkles size={24} color="var(--terracotta-500)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Pengiriman Cepat & Aman</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--charcoal-500)' }}>Packing bubble wrap higienis tebal</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <MessageCircle size={24} color="var(--sage-700)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--charcoal-900)' }}>Konsultasi Penggunaan Gratis</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--charcoal-500)' }}>Dipandu langsung oleh tim bidan</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
