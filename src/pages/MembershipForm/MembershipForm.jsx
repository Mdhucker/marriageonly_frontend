import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Camera, MapPin, ShieldCheck, 
  ChevronRight, Heart, Briefcase, 
  Home, Lock, CheckCircle, ArrowLeft,
  CreditCard, Clock, Users
} from 'lucide-react';

const MembershipApplication = () => {
  const [role, setRole] = useState(null); // 'man' or 'woman'
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    location: '',
    nida: null,
    photo: null,
  });

  const handleNext = () => {
    if (step === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = '/status?success=true';
      }, 1800);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 800);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    if (step === 1) return !!role;
    if (step === 2) return formData.nida && formData.photo;
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1710] to-[#1A2A1C] py-8 px-4 sm:py-12 sm:px-6 font-sans antialiased text-[#F5F5F0]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1A2A1C]/80 border border-[#D4C78A]/25 shadow-md mb-6">
            <ShieldCheck size={17} className="text-[#D4C78A]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#D4C78A]">Serious Marriage Registry • Vetted Only</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            Begin Your Sacred Journey
          </h1>
          <p className="text-[#F5F5F0]/75 text-base sm:text-lg mb-8">
            Step {step} of 3 • For those serious about lifelong commitment
          </p>

          {/* Progress */}
          <div className="flex justify-center gap-5 sm:gap-6 mb-8 sm:mb-12">
            {[1, 2, 3].map(s => (
              <div
                key={s}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg font-bold transition-all duration-300 shadow-md ${
                  s <= step
                    ? 'bg-[#D4C78A] text-[#0F1710] shadow-[#D4C78A]/40'
                    : 'bg-[#1A2A1C] text-[#F5F5F0]/50 border-2 border-[#D4C78A]/30'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-10 sm:space-y-12"
            >
              <div className="text-center px-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-4 leading-snug">
                  Who Are You Applying For?
                </h2>
                <p className="text-[#F5F5F0]/70 text-sm sm:text-base px-4">
                  This helps us match cultural expectations respectfully.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2">
                <motion.button
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setRole('woman'); handleNext(); }}
                  className="group relative p-9 sm:p-10 bg-[#1A2A1C] rounded-3xl border border-[#D4C78A]/20 hover:border-[#D4C78A]/60 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-950/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                  <div className="w-24 h-24 mx-auto bg-pink-950/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Heart size={44} className="text-pink-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Woman</h3>
                  <p className="text-sm sm:text-base text-[#F5F5F0]/75 italic leading-relaxed">
                    "Ninatafuta mume mwenye dini, heshima na uwezo wa kuongoza familia kwa upendo na haki."
                  </p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setRole('man'); handleNext(); }}
                  className="group relative p-9 sm:p-10 bg-[#1A2A1C] rounded-3xl border border-[#D4C78A]/20 hover:border-[#D4C78A]/60 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                  <div className="w-24 h-24 mx-auto bg-blue-950/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <User size={44} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Man</h3>
                  <p className="text-sm sm:text-base text-[#F5F5F0]/75 italic leading-relaxed">
                    "Ninatafuta mke mwenye maadili mema, hekima na mapenzi ya dhati kwa ndoa ya maisha."
                  </p>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A2A1C] p-6 sm:p-9 md:p-12 rounded-3xl shadow-2xl border border-[#D4C78A]/25"
            >
              <div className="flex items-center justify-between mb-8 sm:mb-10">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-[#D4C78A] hover:text-white text-base sm:text-lg transition-colors"
                >
                  <ArrowLeft size={22} /> Back
                </button>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-center flex-1">
                  {role === 'man' ? 'What Serious Women Seek' : 'What Serious Men Seek'}
                </h2>
              </div>

              <p className="text-[#F5F5F0]/75 text-sm sm:text-base mb-10 text-center leading-relaxed px-2">
                To be visible to {role === 'man' ? 'respectful Tanzanian women' : 'honorable Tanzanian men'}, your profile must show genuine intent.
              </p>

              <div className="grid gap-6 mb-12">
                {(role === 'man' ? [
                  { icon: Briefcase, title: "Financial Responsibility", desc: "Stable income or business — women value providers and protectors." },
                  { icon: Home, title: "Family Leadership", desc: "Ready to build a home rooted in faith, respect & shared values." }
                ] : [
                  { icon: Heart, title: "Character & Faith", desc: "Strong morals, respect for elders, marriage as sacred covenant." },
                  { icon: Lock, title: "Dignity & Privacy", desc: "Your profile stays private — visible only to vetted serious men." }
                ]).map((item, i) => (
                  <div key={i} className="p-6 bg-[#0F1710]/70 rounded-2xl border border-[#D4C78A]/15">
                    <item.icon className="text-[#D4C78A] mb-4" size={36} />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-[#F5F5F0]/75 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-10">
                {[
                  { label: "Upload Official ID (NIDA / Passport)", desc: "Secure & private — only for verification", icon: Camera },
                  { label: "Upload Recent Photo (Respectful & Clear)", desc: "Helps families connect authentically", icon: User }
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-[#D4C78A] mb-3 uppercase tracking-wide">
                      {field.label}
                    </label>
                    <div className="border-2 border-dashed border-[#D4C78A]/35 rounded-2xl p-8 sm:p-10 text-center hover:border-[#D4C78A]/70 transition-all cursor-pointer bg-[#0F1710]/60">
                      <field.icon size={52} className="mx-auto text-[#D4C78A]/60 mb-5" />
                      <p className="text-base sm:text-lg text-[#F5F5F0]/80 mb-2">Tap to upload or drag file here</p>
                      <p className="text-xs sm:text-sm text-[#F5F5F0]/60">{field.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mt-12">
                <button
                  onClick={handleBack}
                  className="flex-1 py-5 bg-[#1A2A1C] text-[#D4C78A] rounded-2xl font-semibold border border-[#D4C78A]/30 hover:bg-[#252f24] transition-all text-lg"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={loading || !isStepValid()}
                  className={`flex-1 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl ${
                    loading || !isStepValid()
                      ? 'bg-gray-700/60 text-gray-400 cursor-not-allowed'
                      : 'bg-[#D4C78A] text-[#0F1710] hover:bg-[#E0D4A0] shadow-[#D4C78A]/40'
                  }`}
                >
                  {loading ? 'Processing...' : <>Continue <ChevronRight size={22} /></>}
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 – remains mostly same but with better mobile spacing */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A2A1C] p-7 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-[#D4C78A]/25 text-center"
            >
              <div className="w-24 h-24 bg-[#D4C78A]/15 rounded-full flex items-center justify-center mx-auto mb-8">
                <MapPin size={52} className="text-[#D4C78A]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-5 leading-tight">
                Final Step: Home Verification
              </h2>
              <p className="text-base sm:text-lg text-[#F5F5F0]/80 mb-10 leading-relaxed max-w-3xl mx-auto px-2">
                We verify your region for genuine local matching. Your exact location is never shown — only used for trust & compatibility.
              </p>

              <div className="aspect-video bg-gradient-to-br from-[#0F1710] to-[#1A2A1C] rounded-3xl mb-10 border-2 border-[#D4C78A]/30 shadow-inner flex items-center justify-center overflow-hidden">
                <div className="text-center px-6">
                  <MapPin size={80} className="text-[#D4C78A] mx-auto mb-5 animate-pulse" />
                  <p className="text-2xl font-bold text-[#D4C78A] mb-2">Pin Your Region</p>
                  <p className="text-sm text-[#F5F5F0]/70">Dar es Salaam, Arusha, Mwanza, Dodoma, etc.</p>
                </div>
              </div>

              <div className="p-7 sm:p-9 bg-[#0F1710]/70 rounded-2xl border border-[#D4C78A]/20 mb-10 max-w-lg mx-auto">
                <div className="flex items-center justify-center gap-4 mb-5">
                  <CreditCard size={36} className="text-[#D4C78A]" />
                  <h3 className="text-2xl sm:text-3xl font-bold">Commitment Fee</h3>
                </div>
                <p className="text-4xl font-black text-[#D4C78A] mb-3">
                  {role === 'man' ? 'TZS 20,000' : 'TZS 5,000'}
                </p>
                <p className="text-sm sm:text-base text-[#F5F5F0]/75 mb-5">
                  One-time • M-Pesa • Keeps only serious members
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-[#D4C78A]/80">
                  <span className="flex items-center gap-2"><Clock size={18} /> Instant</span>
                  <span className="flex items-center gap-2"><Users size={18} /> Lifetime access</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button
                  onClick={handleBack}
                  className="flex-1 sm:flex-none px-10 py-5 bg-[#1A2A1C] text-[#D4C78A] rounded-2xl font-semibold border border-[#D4C78A]/30 hover:bg-[#252f24] transition-all text-lg"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={loading}
                  className={`flex-1 sm:flex-none px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl ${
                    loading
                      ? 'bg-gray-700/60 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#D4C78A] to-[#E0D4A0] text-[#0F1710] hover:shadow-[#D4C78A]/50 hover:scale-[1.03]'
                  }`}
                >
                  {loading ? (
                    <span className="animate-pulse">Processing M-Pesa...</span>
                  ) : (
                    <>Pay with M-Pesa <CreditCard size={22} /></>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-16 text-center opacity-60 text-sm">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#D4C78A]" /> NIDA Verified</span>
            <span className="flex items-center gap-2"><Lock size={18} className="text-[#D4C78A]" /> Encrypted</span>
            <span className="flex items-center gap-2"><CheckCircle size={18} className="text-[#D4C78A]" /> Serious Intent Only</span>
          </div>
          <p className="text-[#F5F5F0]/70">Your privacy & dignity matter to us.</p>
        </div>

      </div>
    </div>
  );
};

export default MembershipApplication;