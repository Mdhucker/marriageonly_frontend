import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import MembershipModal from "./MembershipModal"; // adjust path as needed
import { languages } from "../../../content";

const ExperienceSection = () => {
  const { lang } = useLanguage();

  // Get experience content based on language
  const t = languages[lang]?.experience || languages.en.experience;

  return (
    <section className="py-16 px-5 bg-[#1A2A1C]/40">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#F5F5F0]">
          {t.experienceTitle}
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Assurance */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(212,199,138,0.25)" }}
            className="p-8 bg-[#0F1710]/70 backdrop-blur-md rounded-xl border border-[#D4C78A]/25 hover:border-[#D4C78A]/50 transition-all duration-500 shadow-lg"
          >
            <CheckCircle size={48} className="text-[#D4C78A] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t.assurance}</h3>
            <p className="text-[#F5F5F0]/80">{t.assuranceDesc}</p>
          </motion.div>

          {/* Verified */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(212,199,138,0.25)" }}
            className="p-8 bg-[#0F1710]/70 backdrop-blur-md rounded-xl border border-[#D4C78A]/25 hover:border-[#D4C78A]/50 transition-all duration-500 shadow-lg"
          >
            <ShieldCheck size={48} className="text-[#D4C78A] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t.verifiedBenefit}</h3>
            <p className="text-[#F5F5F0]/80">{t.verifiedDesc}</p>
          </motion.div>

          {/* Matchmaking */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(212,199,138,0.25)" }}
            className="p-8 bg-[#0F1710]/70 backdrop-blur-md rounded-xl border border-[#D4C78A]/25 hover:border-[#D4C78A]/50 transition-all duration-500 shadow-lg"
          >
            <Sparkles size={48} className="text-[#D4C78A] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t.matchmaking}</h3>
            <p className="text-[#F5F5F0]/80">{t.matchmakingDesc}</p>
          </motion.div>
        </div>

        {/* Mission Quote */}
        <div className="mt-12 text-center italic text-lg text-[#D4C78A]/90 max-w-3xl mx-auto">
          “{t.missionQuote}”
          <br />
          <span className="text-sm text-[#F5F5F0]/70">
            — {t.missionAuthor}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
