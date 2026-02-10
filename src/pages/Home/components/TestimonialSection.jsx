// File: TestimonialSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    image: "https://t3.ftcdn.net/jpg/09/14/81/96/240_F_914819611_3JvbqY8pxJ8MJ5WSISaqeZbDtWpGy9Ih.jpg",
    text: `"We were looking for someone who shares our faith and family values. Ndoa Africa connected us in a respectful, serious way — Alhamdulillah, we're now planning our nikah."`,
    author: "— Amina & Yusuf, Dar es Salaam",
  },
  {
    image: "https://media.istockphoto.com/id/1917423435/photo/senior-african-american-couple-walking-with-daughter.jpg?s=612x612&w=0&k=20&c=vrzgVc1fsWuwMqtfgWDRWCg3HMmbU65a2pyaiXa5OCY=",
    text: `"The verification process gave both families peace of mind. We met through Ndoa Africa and within months our children were engaged. Truly a blessed platform."`,
    author: "— Mama Aisha & Baba John, Nairobi",
  },
  {
    image: "https://t4.ftcdn.net/jpg/08/04/20/43/240_F_804204398_Q3r0rqw01FMQ380hkyT2nwLMprS1Z4oM.jpg",
    text: `"Living in the UK, finding someone from home who understands our culture was hard — until Ndoa Africa. We are now married and grateful for this serious platform."`,
    author: "— Fatima & Ahmed, London (Diaspora)",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-5 bg-[#1A2A1C]/40">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5F0] mb-4 tracking-tight">
            Real Stories, True Connections
          </h2>
          <p className="text-xl md:text-2xl text-[#D4C78A]/90 max-w-3xl mx-auto leading-relaxed font-light">
            Discover how Ndoa Africa has brought families together through meaningful values, faith, and lifelong commitments.
            <br className="hidden sm:block" />
            <span className="italic">Your success story could be next...</span>
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="bg-[#1A2A1C]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4C78A]/20 shadow-2xl hover:border-[#D4C78A]/50 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-full h-full object-cover brightness-90"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-lg italic text-[#F5F5F0]/90 mb-4 md:mb-6 leading-relaxed">
                  {t.text}
                </p>
                <p className="text-sm font-medium text-[#D4C78A]">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#D4C78A] text-[#0F1710] font-semibold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#E0D4A0] transition-all text-lg cursor-pointer mx-auto"
        >
          Know More Stories <ArrowRight size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
