
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Legacy = () => {
  const { lang } = useLanguage();

  // safely get content
  const t =
    languages[lang]?.Legacy?.marriageLegacy ||
    languages.en.marriageAfricanLegacy?.marriageLegacy ||
    {};

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-[#0F1710] to-[#0A120B]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative mb-6 md:mb-8">
          <div className="absolute -left-5 md:-left-8 top-1/2 w-10 md:w-16 h-0.5 bg-gradient-to-r from-[#D4C78A] to-transparent" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#F5F5F0] tracking-tight leading-tight"
          >
            {t.heading}
          </motion.h2>
        </div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-[#D4C78A]/90 font-light leading-relaxed max-w-4xl mb-6 md:mb-8"
        >
          {t.intro}
        </motion.p>

        {/* Main content */}
        <div className="text-base md:text-lg text-[#F5F5F0]/90 leading-relaxed space-y-5 md:space-y-6">
          {/* Paragraphs */}
          {(t.coreDescription || []).map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.25, duration: 0.6 }}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Features List */}
          <ul className="space-y-4 md:space-y-5 mt-6 md:mt-8">
            {(t.features || []).map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 + 0.4, duration: 0.6 }}
                className="flex items-start gap-3.5"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-[#D4C78A]" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Closing */}
          {t.closing && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="
                mt-8 md:mt-10 text-center md:text-left 
                font-serif italic text-lg md:text-xl 
                text-[#D4C78A] font-medium tracking-wide
              "
            >
              {t.closing}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Legacy;