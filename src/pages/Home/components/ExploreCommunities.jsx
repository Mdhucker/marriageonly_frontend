import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content";

const ExploreCommunities = () => {
  const { lang } = useLanguage();
  const t = languages[lang]?.explore || languages.en.explore; // ✅ get nested explore

  return (
    <section className="py-16 px-5 bg-[#1A2A1C]/60">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-[#F5F5F0]">
          {t.exploreBy}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {(t.communities || []).map((comm, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "#D4C78A/10" }}
              className="px-6 py-3 bg-[#1A2A1C]/60 rounded-full text-sm md:text-base border border-[#D4C78A]/30 hover:border-[#D4C78A] transition-all shadow-sm cursor-pointer"
            >
              {comm}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCommunities;
