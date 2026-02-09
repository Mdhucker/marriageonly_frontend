// MembershipModal.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, User, ShieldCheck, Globe, Mail, Phone, CheckCircle } from "lucide-react";

const MembershipModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profileFor: "",
    gender: "",
    firstName: "",
    lastName: "",
    country: "",
    religion: "",
    email: "",
    phone: "",
    lookingFor: "",
  });

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const profileOptions = [
    { label: "Myself", value: "myself" },
    { label: "My Daughter", value: "daughter" },
    { label: "My Son", value: "son" },
    { label: "My Brother", value: "brother" },
    { label: "My Sister", value: "sister" },
    { label: "My Friend", value: "friend" },
    { label: "Relative", value: "relative" },
  ];

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const commonReligions = ["Islam", "Christianity", "Hinduism", "Other", "Prefer not to say"];

  const updateForm = (field, value) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (field === "gender") {
        newData.lookingFor = value === "male" ? "Bride" : "Groom";
      }
      return newData;
    });
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return !!formData.profileFor;
      case 2: return !!formData.gender;
      case 3: return formData.firstName.trim().length >= 2 && formData.lastName.trim().length >= 2;
      case 4: return (
        formData.country.trim().length >= 2 &&
        formData.religion &&
        formData.email.includes("@") &&
        formData.phone.trim().length >= 9
      );
      default: return true;
    }
  };

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      // Final action - you can replace with real API call here
      console.log("Final submitted data:", formData);
      setStep(6); // show welcome screen
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "This profile is for...";
      case 2: return "Gender of the person";
      case 3: return "Full Name";
      case 4: return "Additional Information";
      case 5: return "Review Your Details";
      case 6: return "Welcome to NDOA Africa";
      default: return "";
    }
  };

  const getReviewLabel = (key) => {
    const labels = {
      profileFor: "Profile For",
      gender: "Gender",
      firstName: "First Name",
      lastName: "Last Name",
      country: "Country",
      religion: "Religion",
      email: "Email",
      phone: "Phone Number",
      lookingFor: "Looking For",
    };
    return labels[key] || key;
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="
          relative w-full max-w-lg sm:max-w-xl 
          bg-white/10 backdrop-blur-2xl 
          border border-white/20 rounded-2xl 
          shadow-2xl overflow-y-auto max-h-[92vh]
          text-white
        "
        style={{ background: "rgba(15, 23, 16, 0.68)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <X size={24} />
        </button>

        {/* Progress */}
        <div className="pt-8 px-8 flex justify-center gap-2.5">
          {[1,2,3,4,5,6].map(s => (
            <div
              key={s}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                s <= step ? "bg-[#D4C78A] shadow-sm shadow-[#D4C78A]/50" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <div className="p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-center">
                {getStepTitle()}
              </h2>

              <p className="text-white/70 text-center mb-8 text-sm sm:text-base">
                {step === 1 && "Help us understand who you're creating this profile for."}
                {step === 2 && "This helps us show the most relevant matches."}
                {step === 3 && "Please use the real name of the person."}
                {step === 4 && "This information helps with better matching and verification."}
                {step === 5 && "Please review before submitting."}
                {step === 6 && "Your journey to finding a life partner begins here."}
              </p>

              {/* Step 1 – Profile For */}
              {step === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {profileOptions.map(opt => (
                    <motion.button
                      key={opt.value}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => updateForm("profileFor", opt.value)}
                      className={`
                        px-4 py-4 rounded-xl text-center font-medium transition-all text-sm sm:text-base
                        ${formData.profileFor === opt.value
                          ? "bg-[#D4C78A] text-[#0F1710] shadow-lg shadow-[#D4C78A]/30"
                          : "bg-white/10 hover:bg-white/15 border border-white/10"}
                      `}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Step 2 – Gender */}
              {step === 2 && (
                <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
                  {genderOptions.map(g => (
                    <motion.button
                      key={g.value}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => updateForm("gender", g.value)}
                      className={`
                        flex flex-col items-center gap-4 p-7 sm:p-9 rounded-2xl w-40 sm:w-48
                        transition-all duration-300
                        ${formData.gender === g.value
                          ? "bg-[#D4C78A]/25 border-2 border-[#D4C78A] shadow-lg shadow-[#D4C78A]/30"
                          : "bg-white/8 border border-white/15 hover:bg-white/12"}
                      `}
                    >
                      {g.value === "male" ? (
                        <User size={48} className="text-blue-300" />
                      ) : (
                        <Heart size={48} className="text-pink-300" fill="currentColor" />
                      )}
                      <span className="font-semibold text-lg">{g.label}</span>
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Step 3 – Full Name */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={e => updateForm("firstName", e.target.value)}
                      placeholder="Enter first name"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4C78A]/70 focus:bg-white/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={e => updateForm("lastName", e.target.value)}
                      placeholder="Enter last name"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4C78A]/70 focus:bg-white/15 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 4 – Country, Religion, Email, Phone */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={e => updateForm("country", e.target.value)}
                      placeholder="e.g. Tanzania, Kenya, Uganda..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4C78A]/70 focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Religion</label>
                    <select
                      value={formData.religion}
                      onChange={e => updateForm("religion", e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#D4C78A]/70 focus:bg-white/15 transition-all"
                    >
                      <option value="">Select religion</option>
                      {commonReligions.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => updateForm("email", e.target.value)}
                      placeholder="example@email.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4C78A]/70 focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => updateForm("phone", e.target.value)}
                      placeholder="+255 7XX XXX XXX"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4C78A]/70 focus:bg-white/15 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 5 – Review */}
              {step === 5 && (
                <div className="space-y-5 bg-white/5 rounded-xl p-6 border border-white/10">
                  {Object.entries(formData)
                    .filter(([key]) => key !== "lookingFor")
                    .map(([key, value]) => (
                      value && (
                        <div key={key} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-white/80">{getReviewLabel(key)}:</span>
                          <span className="font-medium text-right">
                            {key === "gender" ? value.charAt(0).toUpperCase() + value.slice(1) : value}
                          </span>
                        </div>
                      )
                    ))}
                  {formData.lookingFor && (
                    <div className="flex justify-between py-2 font-medium">
                      <span className="text-white/80">Looking For:</span>
                      <span className="text-[#D4C78A]">{formData.lookingFor}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Step 6 – Welcome */}
              {step === 6 && (
                <div className="text-center py-10 space-y-6">
                  <CheckCircle size={80} className="text-[#D4C78A] mx-auto animate-pulse" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#D4C78A]">
                    Welcome to NDOA Africa
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed max-w-md mx-auto">
                    Your profile request has been received successfully.<br/>
                    Our team will review it shortly and get back to you within 24–48 hours.
                  </p>
                  <p className="text-sm text-white/70">
                    Thank you for choosing a serious platform for marriage.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="mt-6 px-10 py-4 bg-[#D4C78A] text-[#0F1710] font-bold rounded-xl shadow-lg hover:bg-[#E0D4A0] transition-all"
                  >
                    Close & Continue Browsing
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {step !== 6 && (
            <div className="flex gap-4 mt-10">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBack}
                  className="flex-1 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:bg-white/15 transition-all"
                >
                  <ChevronLeft size={20} /> Back
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={!isStepValid()}
                onClick={handleNext}
                className={`
                  flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl transition-all
                  ${isStepValid()
                    ? "bg-[#D4C78A] text-[#0F1710] hover:bg-[#E0D4A0] hover:shadow-[#D4C78A]/40"
                    : "bg-gray-600/50 text-gray-400 cursor-not-allowed"}
                `}
              >
                {step === 5 ? "Submit Application" : "Continue"}
                {step < 5 && <ChevronRight size={20} />}
              </motion.button>
            </div>
          )}

          {/* Warning */}
          {step < 6 && (
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/60 text-center">
              <strong className="text-[#D4C78A]/90">Zero Tolerance Policy:</strong> Only serious marriage seekers allowed. 
              Any casual or inappropriate activity results in permanent ban — no refunds.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MembershipModal;