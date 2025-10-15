"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Lightbulb } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/2953806/pexels-photo-2953806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A rainy window view from a train in Tallinn, Estonia, capturing an atmospheric and moody landscape." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/15097860/pexels-photo-15097860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Low angle view of a modern glass office building in Tallinn, Estonia against a clear sky." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/2882555/pexels-photo-2882555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Flat lay of keyboard letter tiles spelling 'email' on coral backdrop." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Estonia"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Estonia"
            description="Discover the beauty and innovation of Estonia."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url ?? '/public/images/placeholder.webp'}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "History", description: "Rich cultural heritage", icon: Award },
              { title: "Innovation", description: "Leader in technology", icon: Lightbulb }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url ?? '/public/images/placeholder.webp'}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Estonia"
            description="We'd love to hear from you. Reach out to us anytime."
            imageSrc={assetMap.find(a => a.id === 'contact-image')?.url ?? '/public/images/placeholder.webp'}
          />
        </div>
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            { title: "Explore", items: [
              { label: "Home", href: "home" },
              { label: "About", href: "about" }
            ] },
            { title: "Contact", items: [
              { label: "Email Us", href: "contact" },
              { label: "Location", href: "location" }
            ] }
          ]}
          copyrightText="© 2025 | Estonia"
        />
      </div>
    </ThemeProvider>
  );
}
