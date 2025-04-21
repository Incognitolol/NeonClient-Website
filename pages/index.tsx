import { useState, useEffect, useCallback, useRef } from 'react';
import { LogoIcon, ArrowDownIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';
import { AnimatedTitle } from '@/components/animated-title';
import { TOSModal } from '@/components/tos-modal';
import { Particles } from '@/components/particles';
import { Footer } from '@/components/footer';
import { PricingCard } from '@/components/pricing-card';
import { FeatureCard } from '@/components/feature-card';
import { 
  Zap, 
  Palette, 
  Gauge, 
  RefreshCw, 
  Layout, 
  Download,
  X
} from 'lucide-react';
import { Carousel } from '@/components/carousel';

export default function Home() {
  const [isTOSOpen, setIsTOSOpen] = useState(false);
  const showcaseSectionRef = useRef<HTMLElement>(null);
  const [isShowcaseVisible, setIsShowcaseVisible] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // TODO: Make this into a config file maybe?
  //  hopefully it's not too much of a pain to do so
  const showcaseItems = [
    {
      type: 'video' as const,
      src: 'https://cdn.crunchservices.xyz/stitch/videos/stitch-website/mmc.mp4'
    },
    {
      type: 'video' as const,
      src: 'https://cdn.crunchservices.xyz/stitch/videos/stitch-website/Hypixel.webm'
    },
    {
      type: 'video' as const,
      src: 'https://cdn.crunchservices.xyz/stitch/videos/stitch-website/elevate.mp4'
    },
    {
      type: 'video' as const,
      src: 'https://cdn.crunchservices.xyz/stitch/videos/stitch-website/bray.mp4'
    },
    {
      type: 'image' as const,
      src: '/neon-client-screenshot.png'
    },
    {
      type: 'image' as const,
      src: '/neon-client-screenshot2.png'
    },
    {
      type: 'image' as const,
      src: '/neon-client-screenshot3.png'
    },
    {
      type: 'image' as const,
      src: '/neon-client-screenshot4.png'
    }
  ];

  // Set up intersection observer for the showcase section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsShowcaseVisible(true);
        }
      },
      { threshold: 0.3 } // When 30% of the section is visible
    );

    if (showcaseSectionRef.current) {
      observer.observe(showcaseSectionRef.current);
    }

    return () => {
      if (showcaseSectionRef.current) {
        observer.unobserve(showcaseSectionRef.current);
      }
    };
  }, []);

  return (
    <DefaultLayout onTOSClick={() => setIsTOSOpen(true)}>
      <TOSModal 
        isOpen={isTOSOpen}
        onClose={() => setIsTOSOpen(false)}
        onAccept={() => {
          console.log('TOS accepted');
          setIsTOSOpen(false);
        }}
      />

      <header className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Particles />
        </div>
        
        <div className="relative mb-20 z-10">
          <LogoIcon className="w-24 h-24 filter drop-shadow-neon animate-float" />
        </div>

        <div className="relative flex flex-col items-center z-10">
          <div className="relative">
            <h1 className="text-8xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 text-[#06b6d4]">
                  Neon Client
                </span>
              </span>
            </h1>
          </div>

          <p className="mt-8 text-lg text-gray-400/90 max-w-2xl text-center leading-relaxed">
          Offers multi-server support, active development, affordable pricing, and bypasses most anti-cheats
          </p>

          <button className="mt-12 px-8 py-3 bg-[#06b6d4] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/20 filter drop-shadow-neon"
            onClick={() => scrollToSection('pricing')}
          >
            Get Started
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <button 
            onClick={() => scrollToSection('features')}
            className="cursor-pointer"
          >
            <ArrowDownIcon className="w-6 h-6 text-[#06b6d4] animate-bounce filter drop-shadow-neon" />
          </button>
        </div>
      </header>

      <section id="features" className="py-32">
        <AnimatedTitle 
          subtitle="Neon Client is a Minecraft client, including 50+ modules that ensure a great experience no matter what gamemode you're playing."
        >
          Feature-packed.
        </AnimatedTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          <FeatureCard
            icon={Zap}
            title="Advanced Bypasses"
            description="Neon is developed with fluid bypasses in mind, and with the newly developed Addons, the end user can make what meets their needs, whether it's visuals or bypasses"
          />
          <FeatureCard
            icon={Palette}
            title="High Customizability"
            description="Tailor your experience with extensive customization options for both visual elements and functional features, with an intuitive and user-friendly interface."
          />
          <FeatureCard
            icon={Gauge}
            title="Performance Optimization"
            description="Advanced rendering engine and optimized code provide significant FPS improvements even on low-end systems, giving you a competitive edge like no other client."
          />
          <FeatureCard
            icon={RefreshCw}
            title="Active Development"
            description="Our team provides weekly and sometimes daily updates with fixes and new features to ensure the client stays current with anti-cheat developments."
          />
          <FeatureCard
            icon={Layout}
            title="Customizable Interface"
            description="Fully modular HUD system with drag-and-drop elements, real-time previews, and profiles to switch between different setups instantly."
          />
          <FeatureCard
            icon={Download}
            title="Addon Support"
            description="Extend functionality with custom addons that let you create the perfect client for your needs, whether it's for bypasses or visual enhancements."
          />
        </div>
      </section>

      {/* Showcase Section */}
      <section ref={showcaseSectionRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1420]/0 via-[#22d3ee]/3 to-[#0f1420]/0" />
        
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedTitle subtitle="Neon Clients features a rendering engine and optimized code that provides minimal impact on in-game performance, ensuring smooth gameplay with all advantages enabled.">
            Showcase
          </AnimatedTitle>

          {/* Client Showcase */}
          <div className="mt-24 relative">
            {/* Ambient glow effect */}
            <div className="absolute -inset-1">
              <div className="w-full h-full max-w-full max-h-full bg-gradient-to-r from-[#22d3ee]/20 via-[#3b82f6]/10 to-[#22d3ee]/20 rounded-2xl blur-2xl opacity-20 animate-pulse" />
            </div>
            
            {/* Main container */}
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-[#1f2937]/50 bg-gradient-to-b from-[#1f2937]/30 to-[#1f2937]/40">
              {isShowcaseVisible && <Carousel items={showcaseItems} />}
              
              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/80 to-transparent pointer-events-none" />
              
              {/* Edge highlights */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#22d3ee]/5 to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-[#0f1420]/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#22d3ee] mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Select the perfect plan for your gaming needs and unlock the full potential of Neon Client
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Neon Client (1.8.* - 1.20.*)"
              description="Great for blatant cheating"
              compatibility="Compatible with: Arch Linux, Windows"
              price="20"
              features={[
                "Advanced Skripting/API",
                "Dedicated support",
                "All features",
                "Weekly Updates",
                "1.20 Coming Soon"
              ]}
              isPermanent
            />
            <PricingCard
              title="Neon Ghost (1.7.* - 1.8.*)"
              description="Great for closet cheating"
              compatibility="Compatible with: Arch Linux, Windows"
              price="10"
              features={[
                "Coming Soon!",
              ]}
              isPremium
            />
          </div>
        </div>
      </section>

      <Footer onTOSClick={() => setIsTOSOpen(true)} />
    </DefaultLayout>
  );
}
