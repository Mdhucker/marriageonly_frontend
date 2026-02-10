
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Globe, Heart, Users,
  ArrowRight, ShieldCheck, Info,
  Sparkles, CheckCircle, ShieldX
} from 'lucide-react';
import MembershipModal from "./components/MembershipModal";
import Header from "../../components/layout/Header/Header";
// import { content } from "../../content";
import { languages } from '../../content';

import Footer from "../../components/layout/Footer"
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import MarriageAfricanExperience from './components/Legacy';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import ExploreCommunities from './components/ExploreCommunities';
import FeaturesSection from './components/FeaturesSection';
import StrictPolicySection from './components/StrictPolicySection';
import MembershipNotice from './components/MembershipNotice';




const Home = () => {
  const [lang, setLang] = useState('en');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const [setScrolled] = useState(false);

const t = languages[lang] ?? languages.en;
const navLinks = t.navLinks ?? [];  // fallback empty array to avoid .map error


    const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable page scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // restore scrolling
    }
  }, [isModalOpen]);



useEffect(() => {
  if (isModalOpen) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return () => {
    document.body.classList.remove("modal-open");
  };
}, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1710]  text-[#F5F5F0] font-sans antialiased selection:bg-[#D4AF37]/20 overflow-x-hidden relative">
      
      {/* Header */}
      <Header />
   

      {/* Hero – text left-aligned on lg+, image full size & responsive */}
    
     <HeroSection />


      {/* The NDOA Experience - Shaadi-inspired */}
     <ExperienceSection />

      {/* === WHY Ndoa Africa – Legacy & Trust Section === */}
      <MarriageAfricanExperience />

    {/* Real Stories – Enhanced Design */}
      <TestimonialSection />

      {/* FAQ */}
       <FAQSection />

      {/* Explore By */}
      <ExploreCommunities />

      {/* Features */}
     <FeaturesSection />


{/* Strict Policy Card */}
     
      <StrictPolicySection />

      
      {/* Footer */}
     <Footer />
    

      {/* Floating Note */}
      <MembershipNotice />

      {/* Pulse animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.95; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;