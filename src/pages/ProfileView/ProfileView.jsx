


// // ProfileView.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   X,
//   Heart,
//   MapPin,
//   ArrowLeft,
//   ShieldCheck,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   GraduationCap,
//   Briefcase,
//   Calendar,
//   Users,
//   Phone,
// } from 'lucide-react';

// const ProfileView = () => {
//   // Demo profile data (Amina Juma) — unchanged
//   const profile = {
//     id: 1,
//     name: "Amina Juma",
//     age: 26,
//     heightCm: 165,
//     location: "Dar es Salaam, Tanzania",
//     religion: "Muslim",
//     sect: "Sunni",
//     prayerFrequency: "5 times daily",
//     hijab: "Yes – full hijab",
//     education: "Bachelor of Pharmacy",
//     occupation: "Pharmacist",
//     maritalStatus: "Never Married",
//     hasChildren: false,
//     wantsChildren: true,
//     smoking: false,
//     polygamy: "Acceptable",
//     verified: true,
//     profileCompleteness: 92,
//     about:
//       "Practicing Muslimah who loves her deen, family, and cooking traditional Swahili dishes. I am kind, respectful, patient, and ready to build a beautiful halal home with the right man. I enjoy reading Islamic books, volunteering at the mosque, and spending quality time with family.",
//     lookingFor:
//       "A pious, responsible, and kind man who fears Allah, leads with love, and is ready for a serious marriage. Someone who values family, honesty, and good character above everything.",
//   };

//   // Added: Parent/Wali information (for negotiation)
//   const wali = {
//     name: "Mr. Juma Hassan (Father & Wali)",
//     relationship: "Father",
//     phone: "+255 777 123 456",
//     whatsapp: "+255 777 123 456",
//     note: "Please contact respectfully for marriage discussions.",
//   };

//   // 6 different high-quality photos — unchanged
//   const photos = [
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop&q=90",
//     "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=90",
//     "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop&q=90",
//     "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&auto=format&fit=crop&q=90",
//     "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&auto=format&fit=crop&q=90",
//     "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?w=1200&auto=format&fit=crop&q=90",
//   ];

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [lightboxOpen, setLightboxOpen] = useState(false);

//   // Carousel navigation — unchanged
//   const goToPrev = () => {
//     setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
//   };

//   const goToNext = () => {
//     setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
//   };

//   // Open lightbox at specific index — unchanged
//   const openLightbox = (index) => {
//     setSelectedIndex(index);
//     setLightboxOpen(true);
//   };

//   // New: Open Google Maps with location pin
//   const openGoogleMaps = () => {
//     const query = encodeURIComponent(profile.location);
//     window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0a120b] via-[#0f1710] to-[#1a2a1c] text-[#f5f5f0] pb-24">
//       {/* Sticky Back Bar — unchanged */}
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         className="sticky top-0 z-50 bg-[#0f1710]/95 backdrop-blur-xl border-b border-[#d4c78a]/20 shadow-lg"
//       >
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
//           <button
//             onClick={() => window.history.back()}
//             className="flex items-center gap-3 text-[#d4c78a] hover:text-white transition-all group"
//           >
//             <ArrowLeft size={24} className="group-hover:-translate-x-1.5 transition-transform" />
//             <span className="font-medium text-lg">Back to Profiles</span>
//           </button>

//           {profile.verified && (
//             <div className="flex items-center gap-2 px-4 py-1.5 bg-[#d4c78a]/20 rounded-full text-[#d4c78a] font-medium">
//               <ShieldCheck size={18} />
//               Verified
//             </div>
//           )}
//         </div>
//       </motion.header>

//       <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
//         {/* Hero Photo + Name — unchanged except location is now clickable */}
//         <motion.section
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] mb-12 shadow-2xl shadow-black/60"
//         >
//           <img
//             src={photos[selectedIndex]}
//             alt={profile.name}
//             className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

//           <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//               <div>
//                 <h1 className="text-5xl md:text-7xl font-serif font-extrabold bg-gradient-to-r from-white via-[#d4c78a] to-white bg-clip-text text-transparent drop-shadow-lg">
//                   {profile.name}
//                 </h1>
//                 <div className="flex items-center gap-4 mt-3 text-xl md:text-3xl text-[#d4c78a]">
//                   <span>{profile.age}</span>
//                   <span className="text-white/50">•</span>
//                   {/* Clickable location with Google Maps */}
//                   <button
//                     onClick={openGoogleMaps}
//                     className="flex items-center gap-2 hover:underline hover:text-white transition-all cursor-pointer"
//                   >
//                     <MapPin size={28} />
//                     <span>{profile.location}</span>
//                   </button>
//                 </div>
//               </div>

//               <button className="self-start md:self-end px-8 py-4 bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] text-[#0f1710] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
//                 <Heart size={24} /> Send Interest
//               </button>
//             </div>
//           </div>

//           {/* Carousel Arrows — unchanged */}
//           <button
//             onClick={goToPrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all z-10"
//           >
//             <ChevronLeft size={32} />
//           </button>
//           <button
//             onClick={goToNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all z-10"
//           >
//             <ChevronRight size={32} />
//           </button>
//         </motion.section>

//         {/* Thumbnail Gallery — unchanged */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mb-16"
//         >
//           <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
//             <Star className="text-[#d4c78a]" size={32} /> Photo Gallery
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {photos.map((photo, idx) => (
//               <motion.button
//                 key={idx}
//                 whileHover={{ scale: 1.06 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => openLightbox(idx)}
//                 className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
//                   selectedIndex === idx
//                     ? 'border-[#d4c78a] shadow-2xl shadow-[#d4c78a]/40'
//                     : 'border-transparent opacity-75 hover:opacity-100 hover:border-[#d4c78a]/50'
//                 }`}
//               >
//                 <img src={photo} alt="" className="w-full h-full object-cover" />
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Main Content — unchanged except added new Wali/Parent card */}
//         <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
//           {/* Left: About + Looking For — unchanged */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="lg:col-span-2 space-y-10"
//           >
//             <section className="bg-[#1a2a1c]/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[#d4c78a]/20 shadow-xl">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#d4c78a]">About Me</h2>
//               <p className="text-lg md:text-xl leading-relaxed text-[#f5f5f0]/90">
//                 {profile.about}
//               </p>
//             </section>

//             <section className="bg-[#1a2a1c]/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[#d4c78a]/20 shadow-xl">
//               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 flex items-center gap-4 text-[#d4c78a]">
//                 <Heart size={32} /> What I'm Looking For
//               </h2>
//               <p className="text-lg md:text-xl leading-relaxed text-[#f5f5f0]/90">
//                 {profile.lookingFor}
//               </p>
//             </section>
//           </motion.div>

//           {/* Right: Info Cards — unchanged + NEW Wali card */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[#d4c78a]/20 shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-[#d4c78a] flex items-center gap-3">
//                 <GraduationCap size={28} /> Education
//               </h3>
//               <p className="text-xl">{profile.education}</p>
//             </div>

//             <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[#d4c78a]/20 shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-[#d4c78a] flex items-center gap-3">
//                 <Briefcase size={28} /> Occupation
//               </h3>
//               <p className="text-xl">{profile.occupation}</p>
//             </div>

//             <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[#d4c78a]/20 shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-[#d4c78a] flex items-center gap-3">
//                 <Calendar size={28} /> Religious Practice
//               </h3>
//               <p className="text-xl">
//                 Prays {profile.prayerFrequency} <br />
//                 Hijab: {profile.hijab}
//               </p>
//             </div>

//             <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[#d4c78a]/20 shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-[#d4c78a] flex items-center gap-3">
//                 <Users size={28} /> Family & Children
//               </h3>
//               <p className="text-xl">
//                 {profile.hasChildren ? "Has children" : "No children"} <br />
//                 Wants children: {profile.wantsChildren ? "Yes" : "No"}
//               </p>
//             </div>

//             {/* NEW: Wali / Parent for negotiation */}
//             <div className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[#d4c78a]/20 shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-[#d4c78a] flex items-center gap-3">
//                 <Users size={28} /> Wali / Guardian
//               </h3>
//               <div className="space-y-2 text-lg">
//                 <p className="font-medium">{wali.name}</p>
//                 <p className="text-[#f5f5f0]/80">{wali.relationship}</p>
//                 <div className="flex items-center gap-3 mt-3">
//                   <Phone size={20} className="text-[#d4c78a]" />
//                   <a
//                     href={`tel:${wali.phone}`}
//                     className="text-[#d4c78a] hover:underline"
//                   >
//                     {wali.phone}
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone size={20} className="text-[#d4c78a]" />
//                   <a
//                     href={`https://wa.me/${wali.whatsapp.replace(/\D/g, '')}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#d4c78a] hover:underline"
//                   >
//                     WhatsApp: {wali.whatsapp}
//                   </a>
//                 </div>
//                 <p className="text-sm text-[#f5f5f0]/70 mt-3 italic">
//                   {wali.note}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* CTA Buttons — unchanged */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
//         >
//           <button className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] text-[#0f1710] font-bold text-xl rounded-2xl shadow-2xl hover:shadow-[#d4c78a]/60 transition-all flex items-center justify-center gap-4 transform hover:scale-105">
//             <Heart size={28} /> Send Interest
//           </button>
//           <button className="w-full sm:w-auto px-12 py-6 border-2 border-[#d4c78a] text-[#d4c78a] font-bold text-xl rounded-2xl hover:bg-[#d4c78a]/10 transition-all">
//             Message Her
//           </button>
//         </motion.div>
//       </main>

//       {/* Lightbox — unchanged */}
//       <AnimatePresence>
//         {lightboxOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
//             onClick={() => setLightboxOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               className="relative max-w-[95vw] max-h-[95vh] px-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setLightboxOpen(false)}
//                 className="absolute -top-16 right-4 text-white hover:text-[#d4c78a] transition-colors z-10"
//               >
//                 <X size={48} strokeWidth={2.5} />
//               </button>

//               <img
//                 src={photos[selectedIndex]}
//                 alt={profile.name}
//                 className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain mx-auto"
//               />

//               <button
//                 onClick={goToPrev}
//                 className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full backdrop-blur-md transition-all"
//               >
//                 <ChevronLeft size={40} />
//               </button>
//               <button
//                 onClick={goToNext}
//                 className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full backdrop-blur-md transition-all"
//               >
//                 <ChevronRight size={40} />
//               </button>

//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-3 rounded-full text-white font-medium backdrop-blur-md">
//                 {selectedIndex + 1} / {photos.length}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProfileView;


// ProfileView.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Heart,
  MapPin,
  ArrowLeft,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Calendar,
  Users,
  Phone,
  BookOpen,
  Dumbbell,
  Utensils,
  Home as HomeIcon,
  School,
  ChevronDown,
  ChevronUp,
  HandHeart,
} from 'lucide-react';

const ProfileView = () => {
  const profile = {
    id: 1,
    name: "Amina Juma",
    age: 26,
    heightCm: 165,
    weightKg: 58,
    bodyType: "Slim-Athletic",
    location: "Dar es Salaam, Tanzania",
    religion: "Muslim",
    sect: "Sunni",
    prayerFrequency: "5 times daily",
    hijab: "Yes – full hijab",
    education: "Bachelor of Pharmacy",
    occupation: "Pharmacist",
    maritalStatus: "Never Married",
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: "Acceptable",
    verified: true,
    profileCompleteness: 92,

    favoriteFood: "Pilau, Biryani, grilled fish, fresh coconut juice",
    hobbies: "Reading Tafsir & Hadith, cooking Swahili dishes, light exercise, mosque volunteering, family time",
    sportsLiked: "Walking, women-only swimming, light jogging",
    workPreference: "Prefers to prioritize home and childcare responsibilities post-marriage; open to part-time or home-based professional activities",
    furtherEducation: "Interested in continuing Islamic studies and professional short courses",
    familyBackground: "From a practicing middle-class Swahili Muslim family in Dar es Salaam with strong emphasis on religious values, education, and family cohesion.",
    numberOfSiblings: "3 siblings (2 brothers, 1 sister)",
    parentsMuslims: true,
    changedReligion: false,
    parentsChangedReligion: false,
    levelOfDeen: "Intermediate to advanced – regular study of classical Islamic texts (Riyadh as-Salihin, Tafsir Ibn Kathir), weekly halaqas, and memorization of Quranic portions",
  };

  const wali = {
    name: "Mr. Juma Hassan",
    relationship: "Father and Wali",
    phone: "+255 777 123 456",
    whatsapp: "+255 777 123 456",
    note: "Kindly initiate contact with respect and clarity regarding marriage proposals.",
  };

  const photos = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?w=1200&auto=format&fit=crop&q=90",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    about: true,
    lookingFor: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const goToPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent(profile.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a120b] via-[#0f1710] to-[#1a2a1c] text-[#f5f5f0] pb-24">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 bg-[#0f1710]/95 backdrop-blur-xl border-b border-[#d4c78a]/20 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 text-[#d4c78a] hover:text-white transition-all group"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-1.5 transition-transform" />
            <span className="font-medium text-lg">Back to Profiles</span>
          </button>

          <div className="flex items-center gap-6">
            {profile.verified && (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#d4c78a]/20 rounded-full text-[#d4c78a] font-medium">
                <ShieldCheck size={18} />
                Verified
              </div>
            )}
            <div className="relative w-12 h-12">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-[#d4c78a]/20" strokeWidth="8" fill="transparent" r="46" cx="50" cy="50" />
                <circle
                  className="text-[#d4c78a]"
                  strokeWidth="8"
                  fill="transparent"
                  r="46"
                  cx="50"
                  cy="50"
                  strokeDasharray={289}
                  strokeDashoffset={289 - (289 * profile.profileCompleteness) / 100}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#d4c78a]">
                {profile.profileCompleteness}%
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] mb-12 shadow-2xl shadow-black/60 ring-1 ring-[#d4c78a]/30"
        >
          <img
            src={photos[selectedIndex]}
            alt={profile.name}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif font-extrabold bg-gradient-to-r from-white via-[#d4c78a] to-white bg-clip-text text-transparent drop-shadow-2xl">
                  {profile.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-xl md:text-3xl text-[#d4c78a]">
                  <span>{profile.age}</span>
                  <span className="text-white/50">•</span>
                  <button
                    onClick={openGoogleMaps}
                    className="flex items-center gap-2 hover:text-white transition-all cursor-pointer hover:underline"
                  >
                    <MapPin size={28} />
                    <span>{profile.location}</span>
                  </button>
                </div>
              </div>

              <button className="self-start md:self-end px-8 py-4 bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] text-[#0f1710] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 ring-1 ring-black/10">
                <Heart size={24} /> Send Interest
              </button>
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronRight size={32} />
          </button>
        </motion.section>

        {/* Photo Gallery */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
            <Star className="text-[#d4c78a]" size={32} /> Photo Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {photos.map((photo, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openLightbox(idx)}
                className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all duration-300 shadow-md ${
                  selectedIndex === idx
                    ? 'border-[#d4c78a] shadow-2xl shadow-[#d4c78a]/40 scale-105'
                    : 'border-transparent opacity-80 hover:opacity-100 hover:border-[#d4c78a]/50'
                }`}
              >
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Content – Table-style Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 border border-[#d4c78a]/20 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#d4c78a] flex items-center gap-3 pb-4 border-b border-[#d4c78a]/30">
              <Star size={28} /> Personal Information
            </h3>
            <dl className="space-y-4 text-base">
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Age</dt>
                <dd className="font-semibold">{profile.age} years</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Height</dt>
                <dd className="font-semibold">{profile.heightCm} cm</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Weight</dt>
                <dd className="font-semibold">{profile.weightKg} kg</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Body Type</dt>
                <dd className="font-semibold">{profile.bodyType}</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-[#d4c78a]/80 font-medium">Location</dt>
                <dd>
                  <button
                    onClick={openGoogleMaps}
                    className="flex items-center gap-2 text-[#d4c78a] hover:text-white transition-all cursor-pointer font-medium"
                  >
                    <MapPin size={18} />
                    {profile.location}
                  </button>
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* 2. Religious Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 border border-[#d4c78a]/20 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#d4c78a] flex items-center gap-3 pb-4 border-b border-[#d4c78a]/30">
              <Calendar size={28} /> Religious Profile
            </h3>
            <dl className="space-y-4 text-base">
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Religion & Sect</dt>
                <dd className="font-semibold">{profile.religion} ({profile.sect})</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Prayer Frequency</dt>
                <dd className="font-semibold">{profile.prayerFrequency}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Hijab Observance</dt>
                <dd className="font-semibold">{profile.hijab}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Religious Knowledge Level</dt>
                <dd className="font-semibold text-right">{profile.levelOfDeen}</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-[#d4c78a]/80 font-medium">Religious Conversion</dt>
                <dd className="font-semibold">{profile.changedReligion ? "Yes" : "No"}</dd>
              </div>
            </dl>
          </motion.div>

          {/* 3. Education & Professional Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 border border-[#d4c78a]/20 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#d4c78a] flex items-center gap-3 pb-4 border-b border-[#d4c78a]/30">
              <GraduationCap size={28} /> Education & Professional Background
            </h3>
            <dl className="space-y-4 text-base">
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Highest Education</dt>
                <dd className="font-semibold text-right">{profile.education}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Current Occupation</dt>
                <dd className="font-semibold text-right">{profile.occupation}</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-[#d4c78a]/80 font-medium">Interest in Further Education</dt>
                <dd className="font-semibold text-right">{profile.furtherEducation}</dd>
              </div>
            </dl>
          </motion.div>

          {/* 4. Lifestyle & Personal Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 border border-[#d4c78a]/20 shadow-xl md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#d4c78a] flex items-center gap-3 pb-4 border-b border-[#d4c78a]/30">
              <Dumbbell size={28} /> Lifestyle & Personal Preferences
            </h3>
            <dl className="space-y-4 text-base">
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Favorite Cuisine</dt>
                <dd className="font-semibold text-right">{profile.favoriteFood}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Interests & Hobbies</dt>
                <dd className="font-semibold text-right">{profile.hobbies}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Preferred Physical Activities</dt>
                <dd className="font-semibold text-right">{profile.sportsLiked}</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-[#d4c78a]/80 font-medium">Post-Marriage Work Preference</dt>
                <dd className="font-semibold text-right">{profile.workPreference}</dd>
              </div>
            </dl>
          </motion.div>

          {/* 5. Family Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 border border-[#d4c78a]/20 shadow-xl md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#d4c78a] flex items-center gap-3 pb-4 border-b border-[#d4c78a]/30">
              <Users size={28} /> Family Background
            </h3>
            <dl className="space-y-4 text-base">
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Family Description</dt>
                <dd className="font-semibold text-right">{profile.familyBackground}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Number of Siblings</dt>
                <dd className="font-semibold text-right">{profile.numberOfSiblings}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#d4c78a]/10 last:border-b-0">
                <dt className="text-[#d4c78a]/80 font-medium">Parents' Religious Status</dt>
                <dd className="font-semibold text-right">
                  {profile.parentsMuslims ? "Both are practicing Muslims" : "Not all are Muslim"}
                </dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-[#d4c78a]/80 font-medium">Parental Religious Conversion</dt>
                <dd className="font-semibold text-right">{profile.parentsChangedReligion ? "Yes" : "No"}</dd>
              </div>
            </dl>
          </motion.div>

          {/* 6. Wali / Guardian – Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#1a2a1c]/70 backdrop-blur-xl rounded-3xl p-6 border border-[#d4c78a]/20 shadow-xl lg:col-span-3"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#d4c78a] flex items-center gap-3 pb-4 border-b border-[#d4c78a]/30">
              <Phone size={28} /> Wali / Guardian Contact
            </h3>
            <div className="space-y-5 text-base">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="font-semibold text-xl text-[#d4c78a]">{wali.name}</p>
                  <p className="text-[#f5f5f0]/80 text-lg">{wali.relationship}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#d4c78a]" />
                    <a href={`tel:${wali.phone}`} className="text-[#d4c78a] hover:underline text-lg font-medium">
                      {wali.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#d4c78a]" />
                    <a
                      href={`https://wa.me/${wali.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4c78a] hover:underline text-lg font-medium"
                    >
                      WhatsApp: {wali.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#f5f5f0]/70 italic mt-3">
                {wali.note}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] text-[#0f1710] font-bold text-xl rounded-2xl shadow-2xl hover:shadow-[#d4c78a]/60 transition-all flex items-center justify-center gap-4 transform hover:scale-105">
            <Heart size={28} /> Send Interest
          </button>
          <button className="w-full sm:w-auto px-12 py-6 border-2 border-[#d4c78a] text-[#d4c78a] font-bold text-xl rounded-2xl hover:bg-[#d4c78a]/10 transition-all">
            Message Her
          </button>
        </motion.div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-[95vw] max-h-[95vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-16 right-4 text-white hover:text-[#d4c78a] transition-colors z-10"
              >
                <X size={48} strokeWidth={2.5} />
              </button>

              <img
                src={photos[selectedIndex]}
                alt={profile.name}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain mx-auto"
              />

              <button
                onClick={goToPrev}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full backdrop-blur-md transition-all"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full backdrop-blur-md transition-all"
              >
                <ChevronRight size={40} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-3 rounded-full text-white font-medium backdrop-blur-md">
                {selectedIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileView;