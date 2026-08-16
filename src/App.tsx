import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { KnowledgeCenter } from './components/KnowledgeCenter';
import { PractitionerProfile } from './components/PractitionerProfile';
import { BirthStories } from './components/BirthStories';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { ArticleModal } from './components/ArticleModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ArticleItem } from './data/content';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      {/* 1. Header Navigation (Home, Layanan Kami, Artikel, About Us) */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
      />

      {/* ================= SECTION 1: HOME ================= */}
      <Hero 
        onOpenBooking={handleOpenBooking} 
      />

      {/* ================= SECTION 2: LAYANAN KAMI ================= */}
      <ServicesSection 
        onOpenBooking={handleOpenBooking} 
      />

      {/* ================= SECTION 3: ARTIKEL (ARTICLE) ================= */}
      <KnowledgeCenter 
        onOpenArticle={(article) => setSelectedArticle(article)} 
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} 
      />

      {/* ================= SECTION 4: ABOUT US ================= */}
      <div id="about-section">
        {/* Founder & Practitioner Profile */}
        <PractitionerProfile 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Social Proof & Birth Stories */}
        <BirthStories />

        {/* FAQ Accordion */}
        <FAQSection />
      </div>

      {/* Bottom Booking Banner & Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialServiceId={selectedServiceId} 
      />

      <LeadMagnetModal 
        isOpen={isLeadMagnetOpen} 
        onClose={() => setIsLeadMagnetOpen(false)} 
      />

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
