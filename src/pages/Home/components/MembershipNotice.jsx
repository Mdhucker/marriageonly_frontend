import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content";

const MembershipNotice = () => {
  const { lang } = useLanguage();
  const t = languages[lang]?.infoToast || languages.en.infoToast;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-6 right-6 hidden md:block max-w-xs bg-[#1A2A1C]/80 backdrop-blur-lg p-6 rounded-xl border-t-4 border-[#D4C78A] shadow-2xl"
      >
        <div className="flex items-start gap-3">
          <Info size={20} className="text-[#D4C78A] mt-1" />
          <p className="text-sm text-[#F5F5F0]/90 leading-relaxed">
            {t.membershipNotice}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MembershipNotice;
