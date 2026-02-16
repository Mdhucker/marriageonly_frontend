// // AboutUs.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   ChevronRight,
//   Heart,
//   ShieldCheck,
//   Users,
//   Award,
//   Calendar,
//   Trophy,
//   BookOpen,
//   HelpCircle,
// } from 'lucide-react';
// import Header from "../../components/layout/Header/Header";


// const sidebarItems = [
//   { id: 'ceo-letter', label: 'Letter From CEO' },
//   { id: 'we-care', label: 'We Care' },
//   { id: 'mission', label: 'Mission & Promise' },
//   { id: 'about-us', label: 'About Us' },
//   { id: '30-years', label: 'Celebrating 30 years' },
//   { id: '6-cs', label: '6 Cs of happy marriages' },
//   { id: 'advantage', label: 'Advantage MarriageAfrican' },
//   { id: 'awards', label: 'Awards' },
//   { id: 'true-stories', label: 'True Stories' },
//   { id: 'how-to-use', label: 'How to use MarriageAfrican' },
//   { id: 'membership', label: 'Membership Plans' },
//   { id: 'money-back', label: 'Money Back Guarantee' },
//   { id: 'secure', label: '100% Secure' },
// ];

// const AboutUs = () => {
//   const [activeSection, setActiveSection] = useState('about-us');

//   const scrollToSection = (id) => {
//     setActiveSection(id);
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen mt-12 bg-gradient-to-b from-[#0a120b] via-[#0f1710] to-[#1a2a1c] text-[#f5f5f0] relative">
//       {/* Header */}
//      <Header />
//       {/* Main Layout */}
//       <div className="flex max-w-7xl mx-auto relative">
//         {/* Static (Fixed) Sidebar - Desktop */}
//         <aside className="hidden lg:block w-80 flex-shrink-0 fixed top-[6rem] bottom-0 left-0 bg-[#0f1710]/95 backdrop-blur-xl border-r border-[#d4c78a]/10 overflow-y-auto z-40">
//           <nav className="p-8">
//             <h2 className="text-xl font-semibold text-[#d4c78a] mb-8 tracking-wide uppercase">Help Topics</h2>
//             <ul className="space-y-1">
//               {sidebarItems.map((item) => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => scrollToSection(item.id)}
//                     className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
//                       activeSection === item.id
//                         ? 'bg-[#d4c78a]/15 text-[#d4c78a] font-medium border-l-4 border-[#d4c78a] shadow-sm'
//                         : 'text-[#f5f5f0]/80 hover:bg-[#1a2a1c] hover:text-[#d4c78a]'
//                     }`}
//                   >
//                     <span>{item.label}</span>
//                     {activeSection === item.id && (
//                       <ChevronRight size={18} className="text-[#d4c78a]" />
//                     )}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Mobile Top Navigation */}
//         <div className="lg:hidden sticky top-[4.5rem] z-40 bg-[#0f1710]/95 backdrop-blur-xl border-b border-[#d4c78a]/20">
//           <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto flex gap-3 scrollbar-hide">
//             {sidebarItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
//                   activeSection === item.id
//                     ? 'bg-[#d4c78a] text-[#0f1710] shadow-lg'
//                     : 'bg-[#1a2a1c] text-[#f5f5f0]/80 hover:bg-[#d4c78a]/20 hover:text-[#d4c78a]'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <main className="flex-1 px-4 sm:px-6 lg:pl-[20rem] lg:pr-8 py-12 lg:py-16">
//           <div className="max-w-4xl mx-auto space-y-20">
//             {/* Letter From CEO */}
//             <section id="ceo-letter" className="scroll-mt-24">
//               <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] bg-clip-text text-transparent mb-8">
//                 Letter From The CEO
//               </h1>
//               <div className="prose prose-lg max-w-none text-[#f5f5f0]/90 leading-relaxed">
//                 <p>Dear Valued Member,</p>
//                 <p className="mt-6">
//                   Welcome to MarriageAfrican. For over three decades, we have been entrusted by families across East Africa and the diaspora to help them find meaningful, lasting partnerships.
//                 </p>
//                 <p className="mt-6">
//                   Marriage is one of life’s most important journeys. Our mission is to make that journey dignified, safe, and successful by connecting people who share values, vision, and respect for family.
//                 </p>
//                 <p className="mt-10 font-medium text-[#d4c78a]">
//                   With sincere gratitude,<br />
//                   Founder & CEO
//                 </p>
//               </div>
//             </section>

//             {/* We Care */}
//             <section id="we-care" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <ShieldCheck size={36} /> We Care
//               </h2>
//               <div className="prose prose-lg text-[#f5f5f0]/90">
//                 <p>
//                   Your safety, privacy, and peace of mind are at the heart of everything we do. We continuously invest in:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mt-6">
//                   <li>Advanced identity verification systems</li>
//                   <li>Strict anti-fraud and moderation policies</li>
//                   <li>Secure, encrypted communication channels</li>
//                   <li>24/7 dedicated support team</li>
//                   <li>Regular safety education for our community</li>
//                 </ul>
//               </div>
//             </section>

//             {/* Mission & Promise */}
//             <section id="mission" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <Heart size={36} /> Mission & Promise
//               </h2>
//               <div className="prose prose-lg text-[#f5f5f0]/90">
//                 <p className="font-medium text-xl">
//                   To help every person find a life partner who brings them happiness, respect, and a strong foundation for the future.
//                 </p>
//                 <p className="mt-6">We promise to uphold the highest standards of:</p>
//                 <ul className="list-disc pl-6 space-y-3 mt-6">
//                   <li>Integrity and transparency</li>
//                   <li>Respect for family and cultural values</li>
//                   <li>Privacy and data protection</li>
//                   <li>Support throughout your journey</li>
//                 </ul>
//               </div>
//             </section>

//             {/* About Us */}
//             <section id="about-us" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <Users size={36} /> About Us
//               </h2>
//               <div className="prose prose-lg text-[#f5f5f0]/90">
//                 <p>
//                   Founded in 1996, MarriageAfrican has grown to become East Africa’s most respected matrimonial platform. 
//                   We have helped thousands of families find meaningful, lasting partnerships built on trust, compatibility, and shared values.
//                 </p>
//                 <p className="mt-6">
//                   Our platform combines advanced technology with a deep understanding of family expectations and cultural traditions.
//                 </p>
//               </div>
//             </section>

//             {/* Celebrating 30 years */}
//             <section id="30-years" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <Calendar size={36} /> Celebrating 30 Years
//               </h2>
//               <div className="prose prose-lg text-[#f5f5f0]/90">
//                 <p>
//                   2026 marks three decades of trust. From a small beginning to a platform that has united countless families, we are deeply grateful for the confidence placed in us.
//                 </p>
//               </div>
//             </section>

//             {/* 6 Cs of happy marriages */}
//             <section id="6-cs" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-10 flex items-center gap-4">
//                 <Heart size={36} /> 6 Cs of Happy Marriages
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   { title: "Compatibility", desc: "Shared values, goals, and lifestyle" },
//                   { title: "Communication", desc: "Open, honest, and respectful dialogue" },
//                   { title: "Commitment", desc: "Dedication to building a strong future together" },
//                   { title: "Compassion", desc: "Kindness, empathy, and emotional support" },
//                   { title: "Compromise", desc: "Flexibility and willingness to grow together" },
//                   { title: "Celebration", desc: "Gratitude for each other and life’s blessings" },
//                 ].map((c, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.08 }}
//                     className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-7 border border-[#d4c78a]/20 hover:border-[#d4c78a]/40 transition-all"
//                   >
//                     <h4 className="text-xl font-semibold text-[#d4c78a] mb-3">{c.title}</h4>
//                     <p className="text-[#f5f5f0]/90">{c.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </section>

//             {/* Advantage MarriageAfrican */}
//             <section id="advantage" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <Trophy size={36} /> Advantage MarriageAfrican
//               </h2>
//               <ul className="list-disc pl-6 space-y-4 text-lg text-[#f5f5f0]/90">
//                 <li>Largest verified database in East Africa</li>
//                 <li>Advanced, intelligent matchmaking system</li>
//                 <li>Secure and private communication tools</li>
//                 <li>Professional support team available 24/7</li>
//                 <li>Trusted by families for three decades</li>
//                 <li>Real success stories and lasting marriages</li>
//               </ul>
//             </section>

//             {/* Awards */}
//             <section id="awards" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <Award size={36} /> Awards & Recognition
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
//                   <Trophy className="text-[#d4c78a] mx-auto mb-4" size={48} />
//                   <h4 className="text-xl font-bold">Most Trusted Matrimonial Brand</h4>
//                   <p className="text-[#f5f5f0]/70 mt-2">East Africa Awards 2025</p>
//                 </div>
//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
//                   <Award className="text-[#d4c78a] mx-auto mb-4" size={48} />
//                   <h4 className="text-xl font-bold">Best Digital Marriage Platform</h4>
//                   <p className="text-[#f5f5f0]/70 mt-2">Consumer Choice Awards 2024</p>
//                 </div>
//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
//                   <Trophy className="text-[#d4c78a] mx-auto mb-4" size={48} />
//                   <h4 className="text-xl font-bold">Excellence in Family Services</h4>
//                   <p className="text-[#f5f5f0]/70 mt-2">Community Leadership Awards 2025</p>
//                 </div>
//               </div>
//             </section>

//             {/* True Stories */}
//             <section id="true-stories" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <BookOpen size={36} /> True Stories
//               </h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-7 border border-[#d4c78a]/20">
//                   <p className="italic text-[#f5f5f0]/90">
//                     "We found each other through MarriageAfrican. Our families connected beautifully, and today we are happily married. Thank you for making this possible."
//                   </p>
//                   <p className="mt-6 font-medium text-right text-[#d4c78a]">— Sarah & Michael, 2025</p>
//                 </div>
//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-7 border border-[#d4c78a]/20">
//                   <p className="italic text-[#f5f5f0]/90">
//                     "After searching for years, we finally found the right person. MarriageAfrican made the process respectful and successful."
//                   </p>
//                   <p className="mt-6 font-medium text-right text-[#d4c78a]">— Fatima & David, 2024</p>
//                 </div>
//               </div>
//             </section>

//             {/* How to use MarriageAfrican */}
//             <section id="how-to-use" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <HelpCircle size={36} /> How to Use MarriageAfrican
//               </h2>
//               <ol className="list-decimal pl-6 space-y-6 text-lg text-[#f5f5f0]/90">
//                 <li>Create your profile with honesty and care</li>
//                 <li>Complete verification for better trust</li>
//                 <li>Use smart search to find compatible matches</li>
//                 <li>Send respectful interest or connect directly</li>
//                 <li>Communicate safely through our platform</li>
//                 <li>Involve families when ready to move forward</li>
//               </ol>
//             </section>

//             {/* Membership Plans */}
//             <section id="membership" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <Users size={36} /> Membership Plans
//               </h2>
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
//                   <h4 className="text-2xl font-bold text-[#d4c78a] mb-4">Free</h4>
//                   <p className="text-4xl font-bold text-white mb-2">0</p>
//                   <p className="text-[#f5f5f0]/70 mb-6">Forever</p>
//                   <ul className="space-y-3 text-[#f5f5f0]/90">
//                     <li>Profile creation</li>
//                     <li>Search matches</li>
//                     <li>Send interest</li>
//                   </ul>
//                 </div>

//                 <div className="bg-gradient-to-br from-[#d4c78a]/10 to-[#1a2a1c] rounded-2xl p-6 border-2 border-[#d4c78a] text-center relative">
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4c78a] text-[#0f1710] px-6 py-1 rounded-full text-sm font-bold">
//                     Most Popular
//                   </div>
//                   <h4 className="text-2xl font-bold text-[#d4c78a] mb-4">Premium</h4>
//                   <p className="text-4xl font-bold text-white mb-2">$49</p>
//                   <p className="text-[#f5f5f0]/70 mb-6">6 Months</p>
//                   <ul className="space-y-3 text-[#f5f5f0]/90 font-medium">
//                     <li>All free features</li>
//                     <li>View contact details</li>
//                     <li>Priority visibility</li>
//                     <li>Personal support</li>
//                   </ul>
//                 </div>

//                 <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
//                   <h4 className="text-2xl font-bold text-[#d4c78a] mb-4">Elite</h4>
//                   <p className="text-4xl font-bold text-white mb-2">$99</p>
//                   <p className="text-[#f5f5f0]/70 mb-6">12 Months</p>
//                   <ul className="space-y-3 text-[#f5f5f0]/90">
//                     <li>All Premium features</li>
//                     <li>Featured placement</li>
//                     <li>Dedicated manager</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* Money Back Guarantee */}
//             <section id="money-back" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <ShieldCheck size={36} /> Money Back Guarantee
//               </h2>
//               <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-8 border border-[#d4c78a]/20">
//                 <p className="text-lg text-[#f5f5f0]/90">
//                   If you do not find a suitable match during your membership period, we offer a full refund (subject to fair usage terms). Your trust matters to us.
//                 </p>
//               </div>
//             </section>

//             {/* 100% Secure */}
//             <section id="secure" className="scroll-mt-24">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
//                 <ShieldCheck size={36} /> 100% Secure Platform
//               </h2>
//               <div className="prose prose-lg text-[#f5f5f0]/90">
//                 <p>
//                   We use industry-leading encryption, strict privacy policies, and continuous monitoring to protect your personal information and ensure a safe experience.
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mt-6">
//                   <li>SSL encryption for all communication</li>
//                   <li>Verified profiles only</li>
//                   <li>Secure payment processing</li>
//                   <li>Regular security audits</li>
//                   <li>Privacy-first approach</li>
//                 </ul>
//               </div>
//             </section>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#0a120b] border-t border-[#d4c78a]/10 py-12 mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-[#f5f5f0]/70">
//           <p className="text-lg">© 1996–2026 MarriageAfrican. All rights reserved.</p>
//           <p className="mt-2 text-sm">Connecting hearts and families across East Africa and beyond</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutUs;

// AboutUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Heart,
  ShieldCheck,
  Users,
  Award,
  Calendar,
  Trophy,
  BookOpen,
  HelpCircle,
  Mail,
  Star,
  Globe,
  Handshake,
  Crown,
  Sparkles,
  Lock,
} from 'lucide-react';
import Header from "../../components/layout/Header/Header";

const sidebarItems = [
  { id: 'ceo-letter', label: 'Letter From CEO', icon: <Mail size={20} /> },
  { id: 'we-care', label: 'We Care', icon: <ShieldCheck size={20} /> },
  { id: 'mission', label: 'Mission & Promise', icon: <BookOpen size={20} /> },
  { id: 'about-us', label: 'About Us', icon: <Users size={20} /> },
  { id: '30-years', label: 'Celebrating 30 years', icon: <Calendar size={20} /> },
  { id: '6-cs', label: '6 Cs of happy marriages', icon: <Heart size={20} /> },
  { id: 'advantage', label: 'Advantage MarriageAfrican', icon: <Trophy size={20} /> },
  { id: 'awards', label: 'Awards', icon: <Award size={20} /> },
  { id: 'true-stories', label: 'True Stories', icon: <BookOpen size={20} /> },
  { id: 'how-to-use', label: 'How to use MarriageAfrican', icon: <HelpCircle size={20} /> },
  { id: 'membership', label: 'Membership Plans', icon: <Crown size={20} /> },
  { id: 'ambassador', label: 'Apply for Ambassador', icon: <Sparkles size={20} /> },
  { id: 'money-back', label: 'Money Back Guarantee', icon: <ShieldCheck size={20} /> },
  { id: 'secure', label: '100% Secure', icon: <Lock size={20} /> },
];

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('about-us');

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-[#0a120b] via-[#0f1710] to-[#1a2a1c] text-[#f5f5f0] relative">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto relative">
        {/* Static (Fixed) Sidebar - Desktop */}
        <aside className="hidden lg:block w-80 flex-shrink-0 fixed top-[6rem] bottom-0 left-0 bg-[#0f1710]/95 backdrop-blur-xl border-r border-[#d4c78a]/10 overflow-y-auto z-40">
          <nav className="p-8">
            <h2 className="text-xl font-semibold text-[#d4c78a] mb-8 tracking-wide uppercase">Help Topics</h2>
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-[#d4c78a]/15 text-[#d4c78a] font-medium border-l-4 border-[#d4c78a] shadow-sm'
                        : 'text-[#f5f5f0]/80 hover:bg-[#1a2a1c] hover:text-[#d4c78a]'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronRight size={18} className="text-[#d4c78a]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Mobile Top Navigation */}
        <div className="lg:hidden sticky top-[6rem] z-40 bg-[#0f1710]/95 backdrop-blur-xl border-b border-[#d4c78a]/20">
          <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto flex gap-3 scrollbar-hide">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'bg-[#d4c78a] text-[#0f1710] shadow-lg'
                    : 'bg-[#1a2a1c] text-[#f5f5f0]/80 hover:bg-[#d4c78a]/20 hover:text-[#d4c78a]'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:pl-[20rem] lg:pr-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Letter From CEO */}
            <section id="ceo-letter" className="scroll-mt-24">
              <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] bg-clip-text text-transparent mb-8">
                Letter From The CEO
              </h1>
              <div className="prose prose-lg max-w-none text-[#f5f5f0]/90 leading-relaxed">
                <p>Dear Valued Member,</p>
                <p className="mt-6">
                  Welcome to MarriageAfrican. For over three decades, we have been entrusted by families across East Africa and the diaspora to help them find meaningful, lasting partnerships.
                </p>
                <p className="mt-6">
                  Marriage is one of life’s most important journeys. Our mission is to make that journey dignified, safe, and successful by connecting people who share values, vision, and respect for family.
                </p>
                <p className="mt-10 font-medium text-[#d4c78a]">
                  With sincere gratitude,<br />
                  Founder & CEO
                </p>
              </div>
            </section>

            {/* We Care */}
            <section id="we-care" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <ShieldCheck size={36} /> We Care
              </h2>
              <div className="prose prose-lg text-[#f5f5f0]/90">
                <p>
                  Your safety, privacy, and peace of mind are at the heart of everything we do. We continuously invest in:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-6">
                  <li>Advanced identity verification systems</li>
                  <li>Strict anti-fraud and moderation policies</li>
                  <li>Secure, encrypted communication channels</li>
                  <li>24/7 dedicated support team</li>
                  <li>Regular safety education for our community</li>
                </ul>
              </div>
            </section>

            {/* Mission & Promise */}
            <section id="mission" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Heart size={36} /> Mission & Promise
              </h2>
              <div className="prose prose-lg text-[#f5f5f0]/90">
                <p className="font-medium text-xl">
                  To help every person find a life partner who brings them happiness, respect, and a strong foundation for the future.
                </p>
                <p className="mt-6">We promise to uphold the highest standards of:</p>
                <ul className="list-disc pl-6 space-y-3 mt-6">
                  <li>Integrity and transparency</li>
                  <li>Respect for family and cultural values</li>
                  <li>Privacy and data protection</li>
                  <li>Support throughout your journey</li>
                </ul>
              </div>
            </section>

            {/* About Us */}
            <section id="about-us" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Users size={36} /> About Us
              </h2>
              <div className="prose prose-lg text-[#f5f5f0]/90">
                <p>
                  Founded in 1996, MarriageAfrican has grown to become East Africa’s most respected matrimonial platform. 
                  We have helped thousands of families find meaningful, lasting partnerships built on trust, compatibility, and shared values.
                </p>
                <p className="mt-6">
                  Our platform combines advanced technology with a deep understanding of family expectations and cultural traditions.
                </p>
              </div>
            </section>

            {/* Celebrating 30 years */}
            <section id="30-years" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Calendar size={36} /> Celebrating 30 Years
              </h2>
              <div className="prose prose-lg text-[#f5f5f0]/90">
                <p>
                  2026 marks three decades of trust. From a small beginning to a platform that has united countless families, we are deeply grateful for the confidence placed in us.
                </p>
              </div>
            </section>

            {/* 6 Cs of happy marriages */}
            <section id="6-cs" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-10 flex items-center gap-4">
                <Heart size={36} /> 6 Cs of Happy Marriages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Compatibility", desc: "Shared values, goals, and lifestyle" },
                  { title: "Communication", desc: "Open, honest, and respectful dialogue" },
                  { title: "Commitment", desc: "Dedication to building a strong future together" },
                  { title: "Compassion", desc: "Kindness, empathy, and emotional support" },
                  { title: "Compromise", desc: "Flexibility and willingness to grow together" },
                  { title: "Celebration", desc: "Gratitude for each other and life’s blessings" },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-7 border border-[#d4c78a]/20 hover:border-[#d4c78a]/40 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-[#d4c78a] mb-3">{c.title}</h4>
                    <p className="text-[#f5f5f0]/90">{c.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Advantage MarriageAfrican */}
            <section id="advantage" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Trophy size={36} /> Advantage MarriageAfrican
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-lg text-[#f5f5f0]/90">
                <li>Largest verified database in East Africa</li>
                <li>Advanced, intelligent matchmaking system</li>
                <li>Secure and private communication tools</li>
                <li>Professional support team available 24/7</li>
                <li>Trusted by families for three decades</li>
                <li>Real success stories and lasting marriages</li>
              </ul>
            </section>

            {/* Awards */}
            <section id="awards" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Award size={36} /> Awards & Recognition
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
                  <Trophy className="text-[#d4c78a] mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold">Most Trusted Matrimonial Brand</h4>
                  <p className="text-[#f5f5f0]/70 mt-2">East Africa Awards 2025</p>
                </div>
                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
                  <Award className="text-[#d4c78a] mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold">Best Digital Marriage Platform</h4>
                  <p className="text-[#f5f5f0]/70 mt-2">Consumer Choice Awards 2024</p>
                </div>
                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
                  <Trophy className="text-[#d4c78a] mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold">Excellence in Family Services</h4>
                  <p className="text-[#f5f5f0]/70 mt-2">Community Leadership Awards 2025</p>
                </div>
              </div>
            </section>

            {/* True Stories */}
            <section id="true-stories" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <BookOpen size={36} /> True Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-7 border border-[#d4c78a]/20">
                  <p className="italic text-[#f5f5f0]/90">
                    "We found each other through MarriageAfrican. Our families connected beautifully, and today we are happily married. Thank you for making this possible."
                  </p>
                  <p className="mt-6 font-medium text-right text-[#d4c78a]">— Sarah & Michael, 2025</p>
                </div>
                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-7 border border-[#d4c78a]/20">
                  <p className="italic text-[#f5f5f0]/90">
                    "After searching for years, we finally found the right person. MarriageAfrican made the process respectful and successful."
                  </p>
                  <p className="mt-6 font-medium text-right text-[#d4c78a]">— Fatima & David, 2024</p>
                </div>
              </div>
            </section>

            {/* How to use MarriageAfrican */}
            <section id="how-to-use" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <HelpCircle size={36} /> How to Use MarriageAfrican
              </h2>
              <ol className="list-decimal pl-6 space-y-6 text-lg text-[#f5f5f0]/90">
                <li>Create your profile with honesty and care</li>
                <li>Complete verification for better trust</li>
                <li>Use smart search to find compatible matches</li>
                <li>Send respectful interest or connect directly</li>
                <li>Communicate safely through our platform</li>
                <li>Involve families when ready to move forward</li>
              </ol>
            </section>

            {/* Membership Plans */}
            <section id="membership" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Users size={36} /> Membership Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
                  <h4 className="text-2xl font-bold text-[#d4c78a] mb-4">Free</h4>
                  <p className="text-4xl font-bold text-white mb-2">0</p>
                  <p className="text-[#f5f5f0]/70 mb-6">Forever</p>
                  <ul className="space-y-3 text-[#f5f5f0]/90">
                    <li>Profile creation</li>
                    <li>Search matches</li>
                    <li>Send interest</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#d4c78a]/10 to-[#1a2a1c] rounded-2xl p-6 border-2 border-[#d4c78a] text-center relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4c78a] text-[#0f1710] px-6 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <h4 className="text-2xl font-bold text-[#d4c78a] mb-4">Premium</h4>
                  <p className="text-4xl font-bold text-white mb-2">$49</p>
                  <p className="text-[#f5f5f0]/70 mb-6">6 Months</p>
                  <ul className="space-y-3 text-[#f5f5f0]/90 font-medium">
                    <li>All free features</li>
                    <li>View contact details</li>
                    <li>Priority visibility</li>
                    <li>Personal support</li>
                  </ul>
                </div>

                <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#d4c78a]/20 text-center">
                  <h4 className="text-2xl font-bold text-[#d4c78a] mb-4">Elite</h4>
                  <p className="text-4xl font-bold text-white mb-2">$99</p>
                  <p className="text-[#f5f5f0]/70 mb-6">12 Months</p>
                  <ul className="space-y-3 text-[#f5f5f0]/90">
                    <li>All Premium features</li>
                    <li>Featured placement</li>
                    <li>Dedicated manager</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Apply for Ambassador */}
            <section id="ambassador" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <Sparkles size={36} /> Apply to Become an Ambassador
              </h2>
              <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-8 border border-[#d4c78a]/20">
                <p className="text-lg text-[#f5f5f0]/90 leading-relaxed">
                  Join the MarriageAfrican Ambassador Program and help more people discover meaningful relationships while earning rewards.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Eligibility</h4>
                    <p className="text-[#f5f5f0]/90">
                      Available only to active Premium or Elite members (must have held paid membership for at least 3 months with good standing).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Ambassador Benefits</h4>
                    <ul className="list-disc pl-6 space-y-3 text-[#f5f5f0]/90">
                      <li>Exclusive golden Ambassador badge on your profile</li>
                      <li>10% commission on every successful referral (lifetime)</li>
                      <li>Free 6-month membership extension annually</li>
                      <li>Invitation to exclusive ambassador events and recognition</li>
                      <li>Featured on our website, social media, and success stories</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">How to Apply</h4>
                    <ol className="list-decimal pl-6 space-y-3 text-[#f5f5f0]/90">
                      <li>Upgrade to Premium or Elite membership (if not already)</li>
                      <li>Go to Profile → Ambassador Program</li>
                      <li>Fill out the short application form and motivation statement</li>
                      <li>Our team reviews applications within 7–10 days</li>
                    </ol>
                    <p className="mt-6 text-[#d4c78a] font-medium text-center text-lg">
                      Be part of the movement — help others find love and earn while doing it!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Money Back Guarantee */}
            <section id="money-back" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <ShieldCheck size={36} /> Money Back Guarantee
              </h2>
              <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-8 border border-[#d4c78a]/20">
                <p className="text-lg text-[#f5f5f0]/90">
                  If you do not find a suitable match during your membership period, we offer a full refund (subject to fair usage terms). Your trust matters to us.
                </p>
              </div>
            </section>

            {/* 100% Secure */}
            <section id="secure" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4c78a] mb-8 flex items-center gap-4">
                <ShieldCheck size={36} /> 100% Secure Platform
              </h2>
              <div className="prose prose-lg text-[#f5f5f0]/90">
                <p>
                  We use industry-leading encryption, strict privacy policies, and continuous monitoring to protect your personal information and ensure a safe experience.
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-6">
                  <li>SSL encryption for all communication</li>
                  <li>Verified profiles only</li>
                  <li>Secure payment processing</li>
                  <li>Regular security audits</li>
                  <li>Privacy-first approach</li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a120b] border-t border-[#d4c78a]/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-[#f5f5f0]/70">
          <p className="text-lg">© 1996–2026 MarriageAfrican. All rights reserved.</p>
          <p className="mt-2 text-sm">Connecting hearts and families across East Africa and beyond</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;