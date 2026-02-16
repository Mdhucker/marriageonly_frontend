// components/modals/UpgradeModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, CheckCircle } from 'lucide-react';

const UpgradeModal = ({
  isOpen,
  onClose,
  title = "Unlock Premium Access",
  subtitle = "View complete profiles, connect directly & get priority visibility",
  benefits = [
    "Full education, work & family background",
    "Detailed preferences & religious practice",
    "Location, photos & contact details",
    "Unlimited interests & direct messages",
    "Priority in search + verified badge",
  ],
  ctaText = "Upgrade to Premium",
  ctaLink = "/pricing",
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-[9998]"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.86, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.86, y: 40 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative w-full max-w-md sm:max-w-lg
                bg-gradient-to-b from-[#1a2a1c] to-[#142016]
                backdrop-blur-xl border border-[#d4c78a]/30
                rounded-3xl shadow-2xl shadow-black/70
                overflow-hidden
              `}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white z-10 transition-colors"
                aria-label="Close"
              >
                <X size={26} strokeWidth={2.5} />
              </button>

              <div className="px-7 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10 text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#d4c78a] to-[#e8deb7] rounded-2xl flex items-center justify-center shadow-lg">
                  <Crown size={36} className="text-[#0f1710] sm:size-44" />
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                  {title}
                </h2>
                <p className="text-[#d4c78a] text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto">
                  {subtitle}
                </p>

                {/* Benefits list */}
                <ul className="space-y-3.5 sm:space-y-4 text-left mb-10">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-[#d4c78a] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-[#f5f5f0] text-base sm:text-[17px] leading-snug">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href={ctaLink}
                  className={`
                    block w-full py-4 px-6
                    bg-gradient-to-r from-[#d4c78a] via-[#e0d4a0] to-[#d4c78a]
                    text-[#0f1710] font-bold text-lg sm:text-xl
                    rounded-2xl shadow-lg shadow-[#d4c78a]/30
                    hover:shadow-[#d4c78a]/50 hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all duration-300
                  `}
                >
                  {ctaText}
                </a>

                {/* Secondary action */}
                <button
                  onClick={onClose}
                  className="mt-6 text-[#f5f5f0]/70 hover:text-white text-sm sm:text-base transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UpgradeModal;