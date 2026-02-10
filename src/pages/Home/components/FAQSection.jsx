
import { useLanguage } from "../../../context/LanguageContext";
import { languages } from "../../../content";

const FAQSectionMultilang = () => {
  const { lang } = useLanguage();
  const t = languages[lang]?.faq || languages.en.faq;

  const faqItems = Array.isArray(t.faq) ? t.faq : [];

  return (
    <section className="py-12 px-5 bg-[#1A2A1C]/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-10 text-[#F5F5F0]">
          {t.faqTitle || "FAQ"}
        </h2>

        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="bg-[#0F1710]/70 backdrop-blur-md p-5 md:p-6 rounded-xl border border-[#D4C78A]/20 hover:border-[#D4C78A]/40 transition-all shadow-md group"
            >
              <summary className="font-semibold text-lg md:text-xl cursor-pointer text-[#D4C78A] group-hover:text-[#E0D4A0] transition-colors">
                {item.q}
              </summary>
              <p className="mt-3 text-[#F5F5F0]/85 leading-relaxed md:mt-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionMultilang;
