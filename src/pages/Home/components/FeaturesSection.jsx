// File: FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content";

const FeaturesSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang]?.features || languages.en.features; // ✅ get features for current language

  return (
    <section className="py-20 px-5 bg-[#0F1710]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#D4C78A] mb-4">
            {t.subTitle}
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-[#F5F5F0]">
            {t.title}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {(t.features || []).map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(212,199,138,0.2)" }}
              className="bg-[#1A2A1C]/60 backdrop-blur-sm border border-[#D4C78A]/20 p-8 rounded-xl hover:border-[#D4C78A]/40 transition-all duration-500 shadow-lg"
            >
              <div className="text-[#D4C78A] mb-6">{f.icon}</div>
              <h3 className="text-xl font-serif mb-4 text-[#F5F5F0]">{f.title}</h3>
              <p className="text-[#F5F5F0]/75 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
