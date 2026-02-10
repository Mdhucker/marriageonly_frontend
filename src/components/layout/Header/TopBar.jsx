
import { useLanguage } from '../../../context/LanguageContext';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';
import { languages } from '../../../content'; // centralized language object

const TopBar = () => {
  const { lang, setLang } = useLanguage();

  // select topBar content for current language, fallback to English
  const t = languages[lang]?.topBar || languages.en.topBar;

  return (
    <div className="w-full">
      <div className="bg-[#1A2A1C] text-[#D4C78A] py-3 px-5 text-xs font-semibold uppercase tracking-wide border-b border-[#D4C78A]/20">
        <div className="max-w-9xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Sparkles size={14} /> {t.seriousLine}       
          </span>

          <button 
            onClick={() => setLang(lang === 'en' ? 'sw' : 'en')} 
            className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none "
          >
            <Globe size={14} />
            {lang === 'en' ? 'English' : 'Kiswahili'} <ChevronDown size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
