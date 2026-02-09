
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Globe, Heart, Users, Fingerprint, Landmark,
  ChevronDown, ArrowRight, ShieldCheck, Info,
  Sparkles, Quote, CheckCircle, ShieldX
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MembershipModal from "./components/MembershipModal";


const content = {
  en: {
    heroTitle: "Find Your ❤️ Partner for True Marriage ",

    heroSub: "A vetted matrimonial platform for serious individuals and families seeking lifelong marriage rooted in faith, culture, and shared values across Africa and the diaspora.",
    cta: "Apply for Membership",
    reserved: "Reserved for those with serious matrimonial intent",
    trustLine: "Serving Tanzania, Kenya, Uganda, and the African diaspora",
    experienceTitle: "The NDOA Experience",
    assurance: "30-Day Serious Intent Assurance",
    assuranceDesc: "Get meaningful family introductions within 30 days of approval, or we extend your free access — our commitment to real results.",
    verifiedBenefit: "Verified Badge for Serious Connections",
    verifiedDesc: "Verified profiles (NIDA + human review) receive priority visibility and more genuine interest from families.",
    matchmaking: "Matchmaking Powered by AI & Human Expertise",
    matchmakingDesc: "Smart technology combined with cultural understanding and family values to help you find a compatible life partner.",
    missionQuote: "Our mission is to revive meaningful, faith-rooted unions using technology while honoring African family traditions.",
    missionAuthor: "— Founder, NDOA Only",
    realStoriesTitle: "Real Stories, True Alliances",
    realStoriesDesc: "Discover how NDOA Only has connected families through shared values and lifelong commitments. Your story could be next.",
    faqTitle: "Frequently Asked Questions   (FAQ)",
    faq: [
      {
        q: "Why choose NDOA Only over other platforms?",
        a: "We focus exclusively on serious marriage intent with NIDA verification, human review, and cultural/family alignment — no casual browsing. Built for East African values and trust."
      },
      {
        q: "Is NDOA Only trustworthy?",
        a: "Yes — every profile undergoes strict verification. We prioritize privacy, authenticity, and permanent removal of non-serious users."
      },
      {
        q: "What is the difference between free and paid membership?",
        a: "Free: Create profile, limited blurred matches. Paid: Full access, direct contact, priority matching, advanced filters, and family tools."
      },
      {
        q: "What extra benefits do Premium members get?",
        a: "Priority in suggestions, profile boosts, concierge support, video intros, and cross-diaspora matching."
      },
      {
        q: "How do I connect with other members?",
        a: "After mutual interest and verification, send respectful messages or requests for family introduction."
      }
    ],
    exploreBy: "Explore Matrimonial Profiles By",
    communities: ["Tanzanian", "Kenyan", "Ugandan", "Somali", "Coastal Swahili", "Christian", "Muslim", "Highland Tribes", "Diaspora", "More Regions"],
    features: [
      { title: "Verified Identity", desc: "NIDA and human-reviewed for trust.", icon: <Fingerprint size={36} /> },
      { title: "Family-Centered Matching", desc: "Aligning faith, culture, and long-term goals.", icon: <Users size={36} /> },
      { title: "Lifelong Stability", desc: "Building strong families for generations.", icon: <Landmark size={36} /> }
    ],
    strictPolicyTitle: "Zero Tolerance for Non-Serious Behavior",
    strictPolicyDesc: "Any unusual, casual, or non-matrimonial activity (browsing without intent, inappropriate messages, fake profiles, etc.) will result in immediate and permanent account suspension — usually within 1 hour of detection or when reported by another user. No refunds will be issued under any circumstances. This platform exists only for genuine marriage seekers."
  },
  sw: {
    heroTitle: "Pata mwenza Wako ❤️ kwa Ndoa ya Kweli",
    heroSub: "Jukwaa la ndoa lililohakikishwa kwa watu na familia wenye nia ya dhati ya kupata ndoa ya maisha yote, zikiwa zinatokana na imani, utamaduni, na maadili ya pamoja kote Afrika na diaspora.",
    cta: "Omba Uanachama",
    reserved: "Imehifadhiwa kwa wale wenye nia ya dhati ya ndoa",
    trustLine: "Inawahudumia Tanzania, Kenya, Uganda na Waafrica walioko nje ya nchi",
    experienceTitle: "Uzoefu wa NDOA",
    assurance: "Dhamana ya Nia ya Siku 30",
    assuranceDesc: "Pata maelezo ya familia yenye maana ndani ya siku 30 baada ya idhini, au tunapanua upatikanaji wako bila malipo — ahadi yetu kwa matokeo halisi.",
    verifiedBenefit: "Badge Iliyothibitishwa kwa Muungano wa Dhati",
    verifiedDesc: "Wasifu uliothibitishwa (NIDA + ukaguzi wa binadamu) hupata mwonekano wa kipaumbele na nia halisi kutoka kwa familia.",
    matchmaking: "Ulinganifu unaoendeshwa na AI na Utaalamu wa Kibinadamu",
    matchmakingDesc: "Teknolojia mahiri pamoja na uelewa wa kitamaduni na maadili ya familia kukusaidia kupata mwenzi anayefaa.",
    missionQuote: "Dhamira yetu ni kurudisha muungano wenye maana na imani kwa kutumia teknolojia huku tukistahi mila za familia za Kiafrika.",
    missionAuthor: "— Mwanzilishi, NDOA Only",
    realStoriesTitle: "Hadithi Halisi, Muungano wa Kweli",
    realStoriesDesc: "Gundua jinsi NDOA Only imeunganisha familia kupitia maadili ya pamoja na ahadi za maisha. Hadithi yako inaweza kuwa ijayo.",
    faqTitle: "Masuala Yanayoulizwa Mara kwa Mara",
    faq: [
      { q: "Kwa nini uchague NDOA Only kuliko majukwaa mengine?", a: "Tunazingatia ndoa ya dhati pekee na uhakiki wa NIDA, ukaguzi wa binadamu, na uwiano wa kitamaduni/familia — hakuna kutalii." },
      { q: "Je, NDOA Only ni ya kuaminika?", a: "Ndiyo — kila wasifu hupitia uhakiki mkali. Tunatanguliza faragha, uhalisia, na kuondoa wa milele kwa wasio na nia." },
      { q: "Tofauti gani kati ya uanachama wa bure na wa kulipia?", a: "Bure: Unda wasifu, mechi chache zilizofichwa. Kulipia: Upatikanaji kamili, mawasiliano moja kwa moja, mechi za kipaumbele." },
      { q: "Faida za ziada kwa wanachama wa Premium ni zipi?", a: "Kipaumbele katika mapendekezo, kuimarisha wasifu, msaada wa concierge, video intro, na ulinganifu wa diaspora." },
      { q: "Ninawezaje kuwasiliana na wanachama wengine?", a: "Baada ya nia ya pande mbili na uhakiki, tuma ujumbe wa heshima au ombi la utangulizi wa familia." }
    ],
    exploreBy: "Chunguza Wasifu wa Ndoa Kwa",
    communities: ["Kitanzania", "Kikenya", "Kiuganda", "Kisomali", "Pwani Swahili", "Mkristo", "Muislamu", "Makabila ya Juu", "Diaspora", "Mengineyo"],
    features: [
      { title: "Utambulisho Uliothibitishwa", desc: "NIDA na ukaguzi wa binadamu kwa imani.", icon: <Fingerprint size={36} /> },
      { title: "Ulinganifu wa Familia", desc: "Kuunganisha imani, utamaduni na malengo ya maisha.", icon: <Users size={36} /> },
      { title: "Uthabiti wa Maisha", desc: "Kujenga familia zenye nguvu kwa vizazi.", icon: <Landmark size={36} /> }
    ],
    strictPolicyTitle: "Hakuna Kuvumilia kwa Tabia Isiyo ya Dhati",
    strictPolicyDesc: "Tabia yoyote isiyo ya kawaida, ya kipindi au isiyo ya ndoa (kutalii bila nia, ujumbe usiofaa, wasifu bandia, n.k.) itasababisha kusimamishwa kwa akaunti mara moja na kwa kudumu — mara nyingi ndani ya saa 1 baada ya kugunduliwa. Hakuna marejesho yatakayotolewa kwa hali yoyote. Jukwaa hili lipo kwa ajili ya wanaotafuta ndoa ya dhati pekee."
  }
};

const Home = () => {
  const [lang, setLang] = useState('en');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const [scrolled, setScrolled] = useState(false);

  const t = content[lang];

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
    <div className="min-h-screen bg-[#0F1710] text-[#F5F5F0] font-sans antialiased selection:bg-[#D4AF37]/20 overflow-x-hidden relative">
      
      {/* Top Bar */}
      <div className="bg-[#1A2A1C] text-[#D4C78A] py-3 px-5 text-xs font-semibold uppercase tracking-wide border-b border-[#D4C78A]/20">
        <div className="max-w-9xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Sparkles size={14} /> Serious Unions Only • East Africa & Diaspora
          </span>
          <button 
            onClick={() => setLang(lang === 'en' ? 'sw' : 'en')} 
            className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4C78A]/50 rounded"
          >
            <Globe size={14} />
            {lang === 'en' ? 'English' : 'Kiswahili'} <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* Navbar */}
    <nav
  className={`sticky top-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#0F1710]/95 backdrop-blur-xl shadow-2xl py-5 border-b border-[#D4C78A]/20"
      : "bg-transparent py-6"
  }`}
>
  <div className="max-w-8xl mx-auto px-5 flex items-center justify-between">
    {/* Logo / Brand */}
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 8 }}
        className="w-8 h-8 border border-[#D4C78A]/70 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1A2A1C] to-[#0F1710] shadow-inner"
      >
        <Heart size={18} className="text-[#bd1010] " fill="#bd1010" />
      </motion.div>
      <span className="text-xl font-serif font-medium">
        Ndoa<span className="text-[#D4C78A]">Africa</span>
      </span>
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#F5F5F0]/80">
      <motion.a
        whileHover={{ y: -2, color: "#D4C78A" }}
        href="#how-it-works"
        className="transition-colors"
      >
        How It Works
      </motion.a>
      <motion.a
        whileHover={{ y: -2, color: "#D4C78A" }}
        href="#vetting"
        className="transition-colors"
      >
        Matches
      </motion.a>
       <motion.a
        whileHover={{ y: -2, color: "#D4C78A" }}
        href="#Partner-Search"
        className="transition-colors"
      >
        Partner Search
      </motion.a>
      <motion.a
        whileHover={{ y: -2, color: "#D4C78A" }}
        href="#about-us"
        className="transition-colors"
      >
        About Us
      </motion.a>
      <motion.a
        whileHover={{ y: -2, color: "#D4C78A" }}
        href="#contact-us"
        className="transition-colors"
      >
        Contact Us
      </motion.a>

   <motion.a
        whileHover={{ y: -2, color: "#D4C78A" }}
        href="#Help"
        className="transition-colors"
      >
        Get Help
      </motion.a>


      {/* Sign In Button */}
      <Link to="/membershipForm">
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#D4C78A",
            color: "#0F1710",
            boxShadow: "0 0 25px rgba(212,199,138,0.4)",
          }}
          className="border border-[#D4C78A]/60 text-[#D4C78A] px-7 py-2.5 rounded hover:bg-[#D4C78A]/10 transition-all shadow-md"
        >
          Sign In
        </motion.button>
      </Link>
    </div>
  </div>
</nav>


      {/* Hero – text left-aligned on lg+, image full size & responsive */}
      <motion.section 
        style={{ opacity: heroOpacity }} 
        className="pt-2 pb-24 px-5 md:px-8 relative overflow-hidden min-h-[80vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1710] via-transparent to-[#0F1710]/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
            

            {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-10">
                <Link to="/membershipForm">
                  <motion.button 
                    whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(212,199,138,0.4)" }} 
                    className="bg-[#D4C78A] text-[#0F1710] px-10 py-5 font-semibold uppercase tracking-wider text-base rounded shadow-lg hover:bg-[#E0D4A0] transition-all flex items-center gap-3 whitespace-nowrap"
                  >
                    {t.cta} <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <div className="text-sm text-[#D4C78A]/80 font-medium">{t.reserved}</div>
              </div> */}
<div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-10">
  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(212,199,138,0.4)" }}
    className="bg-[#D4C78A] text-[#0F1710] px-10 py-5 font-semibold uppercase tracking-wider text-base rounded shadow-lg hover:bg-[#E0D4A0] transition-all flex items-center gap-3 whitespace-nowrap"
    onClick={() => setIsModalOpen(true)}
  >
    {t.cta} <ArrowRight size={20} />
  </motion.button>

  {/* Reserved Text */}
  <div className="text-sm text-[#D4C78A]/80 font-medium">
    {t.reserved}
  </div>

 {/* Membership Modal */}
      <MembershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Join NDOA Only"
      />
</div>




            <p className="text-sm text-[#F5F5F0]/60 italic">{t.trustLine}</p>
          </div>

          {/* Right/Bottom: Larger Attention Image – visible on all sizes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            // whileHover={{ scale: 1.04 }}
            className="relative order-1 lg:order-2"
          >
            <img
              src="https://t4.ftcdn.net/jpg/18/47/06/21/240_F_1847062157_Tw7qk8wbBb2Hj9dutAUotfyIzzbDD9Em.jpg"
              // Replace with your own photo URL
              alt="Serious East African matrimonial alliance – lifelong commitment"
              className="w-full h-auto min-h-[400px] z-40 lg:min-h-[600px] object-cover lg:rounded-2xl shadow-2xl  lg:border-4 border-[#D4C78A]/40 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F1710]/70 via-transparent to-transparent/40 pointer-events-none" />
          </motion.div>
        </div>
      </motion.section>



      {/* The NDOA Experience - Shaadi-inspired */}
      <section className="py-16 px-5 bg-[#1A2A1C]/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#F5F5F0]">{t.experienceTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(212,199,138,0.25)" }} 
              className="p-8 bg-[#0F1710]/70 backdrop-blur-md rounded-xl border border-[#D4C78A]/25 hover:border-[#D4C78A]/50 transition-all duration-500 shadow-lg"
            >
              <CheckCircle size={48} className="text-[#D4C78A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.assurance}</h3>
              <p className="text-[#F5F5F0]/80">{t.assuranceDesc}</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(212,199,138,0.25)" }} 
              className="p-8 bg-[#0F1710]/70 backdrop-blur-md rounded-xl border border-[#D4C78A]/25 hover:border-[#D4C78A]/50 transition-all duration-500 shadow-lg"
            >
              <ShieldCheck size={48} className="text-[#D4C78A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.verifiedBenefit}</h3>
              <p className="text-[#F5F5F0]/80">{t.verifiedDesc}</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(212,199,138,0.25)" }} 
              className="p-8 bg-[#0F1710]/70 backdrop-blur-md rounded-xl border border-[#D4C78A]/25 hover:border-[#D4C78A]/50 transition-all duration-500 shadow-lg"
            >
              <Sparkles size={48} className="text-[#D4C78A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.matchmaking}</h3>
              <p className="text-[#F5F5F0]/80">{t.matchmakingDesc}</p>
            </motion.div>
          </div>
          <div className="mt-12 text-center italic text-lg text-[#D4C78A]/90 max-w-3xl mx-auto">
            "{t.missionQuote}"<br />
            <span className="text-sm text-[#F5F5F0]/70">— {t.missionAuthor}</span>
          </div>
        </div>
      </section>

      {/* === WHY NDOA ONLY – Legacy & Trust Section === */}
<section className="bg-[#0F1710]/70 backdrop-blur-md p-6  border border-[#D4C78A]/20  transition-all shadow-md group">
  <div className="max-w-6xl mx-auto">

    {/* --- Heading & Intro --- */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-16 text-left"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5F0] mb-6 md:mb-8 tracking-tight">
        For Generations, East African Families Have Trusted Meaningful Unions
      </h2>
      <p className="text-lg md:text-xl text-[#D4C78A]/90 max-w-4xl leading-relaxed font-light">
        For years, the beautiful tradition of intentional, faith-rooted marriage in East Africa has been preserved through family networks, community elders, and shared values. Today, NDOA Only brings that sacred legacy into the modern age — making it accessible, secure, respectful, and powerful with cutting-edge technology and uncompromising seriousness.
      </p>
    </motion.div>

    {/* --- Core Description & Features --- */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-lg md:text-xl text-[#F5F5F0]/90 max-w-5xl leading-relaxed space-y-6 mb-16"
    >
      <p>
        NDOA Only’s credibility as East Africa’s most trusted serious matrimonial platform comes from real families united through genuine intent. With thousands of verified profiles and growing success stories, we empower you to find a life partner who aligns with your faith, culture, family expectations, and future vision — no matter your age, tribe, religion, location, or whether you’re in Dar es Salaam, Nairobi, Kampala, or the diaspora.
      </p>

      <p>
        While many platforms prioritize endless swiping and casual connections, NDOA Only stands apart by focusing on <span className="text-[#D4C78A] font-semibold">quality over quantity</span>. We evolve the matchmaking experience through:
      </p>

      <ul className="list-none space-y-4 max-w-4xl">
        <li className="flex items-start gap-4">
          <CheckCircle className="text-[#D4C78A] flex-shrink-0 mt-1" size={24} />
          <span>AI-powered matching combined with human cultural understanding for faster, deeper compatibility</span>
        </li>
        <li className="flex items-start gap-4">
          <CheckCircle className="text-[#D4C78A] flex-shrink-0 mt-1" size={24} />
          <span>Strict NIDA + human verification and zero-tolerance policy — non-serious behavior banned within 1 hour</span>
        </li>
        <li className="flex items-start gap-4">
          <CheckCircle className="text-[#D4C78A] flex-shrink-0 mt-1" size={24} />
          <span>Priority visibility for verified profiles, advanced family-focused filters, curated suggestions, and concierge support</span>
        </li>
      </ul>

      <p className="font-medium text-[#D4C78A] italic mt-10">
        Start with a free profile today — open the door to meaningful opportunities that lead to a blessed marriage. Our 30-day serious intent assurance ensures we stand by every connection we facilitate.
      </p>
    </motion.div>

   

  </div>
</section>


    {/* Real Stories – Enhanced Design */}
<section className="py-20 px-5 bg-[#1A2A1C]/40">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading & Intro */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5F0] mb-6 tracking-tight">
        Real Stories, True Connections
      </h2>
      <p className="text-xl md:text-2xl text-[#D4C78A]/90 max-w-3xl mx-auto leading-relaxed font-light">
        Discover how NDOA Only has brought families together through meaningful values, faith, and lifelong commitments.
        <br className="hidden sm:block" />
        <span className="italic">Your success story could be next...</span>
      </p>
    </motion.div>

    {/* Testimonial Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        whileHover={{ scale: 1.03, y: -8 }}
        className="bg-[#1A2A1C]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4C78A]/20 shadow-2xl hover:border-[#D4C78A]/50 transition-all duration-300"
      >
        <div className="h-64 overflow-hidden">
          <img
            src="https://t3.ftcdn.net/jpg/09/14/81/96/240_F_914819611_3JvbqY8pxJ8MJ5WSISaqeZbDtWpGy9Ih.jpg"
            alt="Couple who found their life partner"
            className="w-full h-full object-cover brightness-90"
            loading="lazy"
          />
        </div>
        <div className="p-8">
          <p className="text-lg italic text-[#F5F5F0]/90 mb-6 leading-relaxed">
            "We were looking for someone who shares our faith and family values. NDOA Only connected us in a respectful, serious way — Alhamdulillah, we're now planning our nikah."
          </p>
          <p className="text-sm font-medium text-[#D4C78A]">
            — Amina & Yusuf, Dar es Salaam
          </p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.03, y: -8 }}
        className="bg-[#1A2A1C]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4C78A]/20 shadow-2xl hover:border-[#D4C78A]/50 transition-all duration-300"
      >
        <div className="h-64 overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1917423435/photo/senior-african-american-couple-walking-with-daughter.jpg?s=612x612&w=0&k=20&c=vrzgVc1fsWuwMqtfgWDRWCg3HMmbU65a2pyaiXa5OCY="
            alt="Family celebrating matrimonial success"
            className="w-full h-full object-cover brightness-90"
            loading="lazy"
          />
        </div>
        <div className="p-8">
          <p className="text-lg italic text-[#F5F5F0]/90 mb-6 leading-relaxed">
            "The verification process gave both families peace of mind. We met through NDOA Only and within months our children were engaged. Truly a blessed platform."
          </p>
          <p className="text-sm font-medium text-[#D4C78A]">
            — Mama Aisha & Baba John, Nairobi
          </p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.03, y: -8 }}
        className="bg-[#1A2A1C]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4C78A]/20 shadow-2xl hover:border-[#D4C78A]/50 transition-all duration-300"
      >
        <div className="h-64 overflow-hidden">
          <img
            src="https://t4.ftcdn.net/jpg/08/04/20/43/240_F_804204398_Q3r0rqw01FMQ380hkyT2nwLMprS1Z4oM.jpg"
            alt="Diaspora couple connected through platform"
            className="w-full h-full object-cover brightness-90"
            loading="lazy"
          />
        </div>
        <div className="p-8">
          <p className="text-lg italic text-[#F5F5F0]/90 mb-6 leading-relaxed">
            "Living in the UK, finding someone from home who understands our culture was hard — until NDOA Only. We are now married and grateful for this serious platform."
          </p>
          <p className="text-sm font-medium text-[#D4C78A]">
            — Fatima & Ahmed, London (Diaspora)
          </p>
        </div>
      </motion.div>
    </div>



  
    {/* Optional Call-to-Action at bottom */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.6 }}

      className="mt-16 inline-flex items-center gap-3 px-10 py-5 bg-[#D4C78A] text-[#0F1710] font-semibold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#E0D4A0] transition-all text-lg"
    >
    
        Know More Stories <ArrowRight size={20} />
    </motion.div>
  </div>
</section>

      {/* FAQ */}
      <section className="py-16 px-5 bg-[#1A2A1C]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-10 text-[#F5F5F0]">{t.faqTitle}</h2>
          <div className="space-y-6">
            {t.faq.map((item, i) => (
              <details 
                key={i} 
                className="bg-[#0F1710]/70 backdrop-blur-md p-6 rounded-xl border border-[#D4C78A]/20 hover:border-[#D4C78A]/40 transition-all shadow-md group"
              >
                <summary className="font-semibold text-lg cursor-pointer text-[#D4C78A] group-hover:text-[#E0D4A0] transition-colors">
                  {item.q}
                </summary>
                <p className="mt-4 text-[#F5F5F0]/85 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Explore By */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-8 text-[#F5F5F0]">{t.exploreBy}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.communities.map((comm, i) => (
              <motion.span 
                key={i} 
                whileHover={{ scale: 1.05, backgroundColor: '#D4C78A/10' }} 
                className="px-6 py-3 bg-[#1A2A1C]/60 rounded-full text-sm border border-[#D4C78A]/30 hover:border-[#D4C78A] transition-all shadow-sm cursor-pointer"
              >
                {comm}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 bg-[#0F1710]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#D4C78A] mb-4">Built on Trust & Intention</h2>
            <p className="text-3xl md:text-4xl font-serif text-[#F5F5F0]">Creating Strong Foundations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((f, i) => (
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


{/* Strict Policy Card */}
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
      

      
      {/* Footer */}
     
     <footer className="py-20 border-t border-[#D4C78A]/20 bg-[#0F1710]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-16">
      
      {/* Column 1: Need Help? */}
      <div>
        <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">Need Help?</h3>
        <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Member Login</a></li>
          <li><a href="/membershipForm" className="hover:text-[#D4C78A] transition-colors">Sign Up</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Partner Search</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">How to Use NDOA Only</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Premium Memberships</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Customer Support</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Site Map</a></li>
        </ul>
      </div>

      {/* Column 2: Company */}
      <div>
        <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">Company</h3>
        <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">NDOA Blog</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Awards & Recognition</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Contact Us</a></li>
        </ul>
      </div>

      {/* Column 3: Privacy & You */}
      <div>
        <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">Privacy & You</h3>
        <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Terms of Use</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Be Safe Online</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Report Misuse</a></li>
        </ul>
      </div>

      {/* Column 4: More / Services */}
      <div>
        <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">More</h3>
        <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">VIP Membership</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Success Stories</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Events & Meetups</a></li>
          <li><a href="#" className="hover:text-[#D4C78A] transition-colors">Diaspora Services</a></li>
        </ul>
      </div>

      {/* Column 5: App Download & Social */}
      <div className="col-span-2 md:col-span-1 lg:col-span-1">
        <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">Get the App</h3>
        <div className="flex flex-col gap-4 mb-8">
         <a 
  href="#" 
  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all"
  target="_blank" 
  rel="noopener noreferrer"
>
  {/* Google Play Multi-Color Icon */}
  <svg className="w-8 h-8" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M11.5 5.5l25 14.5-25 14.5V5.5z" />
    <path fill="#FBBC05" d="M36.5 20l-25 14.5 25-14.5z" />
    <path fill="#34A853" d="M11.5 42.5l25-14.5-25-14.5v29z" />
    <path fill="#4285F4" d="M11.5 5.5v29l25-14.5-25-14.5z" />
  </svg>

  <div>
    <div className="text-xs">GET IT ON</div>
    <div className="text-lg font-semibold">Google Play</div>
  </div>
</a>

          <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.06 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 justify-center lg:justify-start">
          <a href="#" className="text-[#D4C78A] hover:text-white transition-colors"><Globe size={24} /></a>
          <a href="#" className="text-[#D4C78A] hover:text-white transition-colors"><Heart size={24} /></a>
          <a href="#" className="text-[#D4C78A] hover:text-white transition-colors"><Users size={24} /></a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-16 pt-10 border-t border-[#D4C78A]/10 text-center text-sm text-[#F5F5F0]/60">
      <p>© {new Date().getFullYear()} NDOA ONLY • The Leading Serious Matrimonial Platform in Africa</p>
      <p className="mt-3 text-[#D4C78A]/80">Passionately built for meaningful, faith-rooted unions</p>
    </div>
  </div>
</footer>

      {/* Floating Note */}
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
              Membership is granted only to those with genuine marriage intent. We reserve the right to decline or remove profiles.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

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