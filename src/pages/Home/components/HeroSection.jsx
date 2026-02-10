
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import MembershipModal from "./MembershipModal"; // adjust path as needed
import { languages } from "../../../content";

const HeroSection = ({ heroOpacity = 1 }) => {
  const { lang } = useLanguage();
  const t = languages[lang]?.hero || languages.en.hero;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      style={{ opacity: heroOpacity }}
      className="pt-34 pb-2 px-5 md:px-8 relative overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1710] via-transparent to-[#0F1710]/80 pointer-events-none" />

      <div className="max-w-7xl  mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8 text-[#F5F5F0]"
          >
            {t.heroTitle}
          </motion.h1>

          <p className="text-lg md:text-xl text-[#F5F5F0]/80 max-w-3xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
            {t.heroSub}
          </p>

          {/* CTA Button and Reserved Text */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-10">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(212,199,138,0.4)" }}
              className="bg-[#D4C78A] text-[#0F1710] px-10 py-5 font-semibold uppercase tracking-wider text-base rounded shadow-lg hover:bg-[#E0D4A0] transition-all flex items-center gap-3 whitespace-nowrap"
              onClick={() => setIsModalOpen(true)}
            >
              {t.cta} <ArrowRight size={20} />
            </motion.button>

            <div className="text-sm text-[#D4C78A]/80 font-medium">
              {t.reserved}
            </div>

            {/* Membership Modal */}
            <MembershipModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title={t.modalTitle || "Join Ndoa Africa"}
            />
          </div>

          <p className="text-sm text-[#F5F5F0]/60 italic">{t.trustLine}</p>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="relative order-1 lg:order-2"
        >
          <img
            src="https://media.gettyimages.com/id/1174343525/photo/when-two-hearts-became-one.jpg?s=612x612&w=0&k=20&c=BNXU1LdSt2t4f3j7-SvYt761E3ghXTRiAZU_XzVxktM="
            alt="Serious East African matrimonial alliance – lifelong commitment"
            className="w-full h-auto min-h-[400px] z-40 lg:min-h-[600px] object-cover lg:rounded-2xl shadow-2xl transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F1710]/70 via-transparent to-transparent/40 pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
