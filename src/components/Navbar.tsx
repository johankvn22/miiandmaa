import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Layanan Kami', href: '#layanan' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Artikel', href: '#artikel' },
    { label: 'About Us', href: '#about-us' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled 
          ? 'rgba(252, 250, 248, 0.96)' 
          : 'rgba(252, 250, 248, 0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(142, 50, 96, 0.12)' : '1px solid rgba(142, 50, 96, 0.06)',
        padding: isScrolled ? '10px 0' : '16px 0',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo with mii and maa Image */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
        >
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--plum-200)',
            boxShadow: '0 4px 12px rgba(142, 50, 96, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img 
              src="/logo.png" 
              alt="mii and maa Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <div>
            <div style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: '1.75rem', 
              fontWeight: 700, 
              color: 'var(--plum-800)',
              lineHeight: 0.95,
              letterSpacing: '0.02em'
            }}>
              mii and maa
            </div>
            <div style={{ 
              fontSize: '0.72rem', 
              color: 'var(--plum-600)', 
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '3px'
            }}>
              DAILY HOMECARE
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: 'var(--charcoal-800)',
                    transition: 'color 0.2s',
                    position: 'relative',
                    padding: '6px 0'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--plum-600)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--charcoal-800)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="desktop-actions">
          <button 
            onClick={() => onOpenBooking()}
            className="btn btn-primary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <Sparkles size={16} />
            <span>Konsultasi Sekarang</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            backgroundColor: 'var(--plum-50)',
            color: 'var(--plum-800)',
            border: '1px solid var(--plum-200)'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-light)',
          padding: '24px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--charcoal-900)',
                    display: 'block'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={18} />
              <span>Konsultasi Sekarang</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
