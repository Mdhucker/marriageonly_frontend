import React from "react";
import { motion } from "framer-motion";
import { ShieldX } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content";

const StrictPolicySection = () => {
  const { lang } = useLanguage();
  const t = languages[lang]?.strictPolicy || languages.en.strictPolicy;

  return (
    <section className="py-10 px-5 bg-[#1A2A1C]/60">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#2C0F0F] to-[#1A0909] p-10 md:p-14 rounded-2xl border-l-8 border-red-600 shadow-2xl relative overflow-hidden"
        >
          <ShieldX className="absolute -right-16 -top-16 text-red-600/10 rotate-12" size={180} />
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="bg-red-600/90 text-white p-5 rounded-full">
                <ShieldX size={48} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-white">
                {t.strictPolicyTitle}
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                {t.strictPolicyDesc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrictPolicySection;
