import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What bridal makeup services do you offer?",
    a: "We offer a complete range of bridal makeup services including HD bridal makeup, airbrush makeup, engagement makeup, reception makeup, traditional bridal looks, and bridal party makeup."
  },
  {
    q: "How much does bridal makeup cost?",
    a: "Our bridal makeup packages start from affordable rates and vary based on the package you choose — from natural bridal makeup to premium HD and airbrush makeup. Contact us at +91 98400 56242 for a personalized quote."
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Yes, I am open to travel for weddings across India and abroad. Additional travel charges may apply depending on the location."
  },
  {
    q: "Where is Teju Bridal Artist located?",
    a: "We are located at 27-1-156, 10th Cross Road, Balaji Nagar, Nellore, Andhra Pradesh 524002."
  },
  {
    q: "What brands do you use for bridal makeup?",
    a: "We use premium international brands including Kryolan, MAC, Make Up Studio, Seasoul, Huda Beauty, NARS, Too Faced, Smashbox, and Estée Lauder for all our bridal makeup services."
  },
  {
    q: "Do you offer trial sessions before the wedding?",
    a: "Yes, I offer bridal makeup trials to ensure you are completely satisfied with your look before the big day. Contact me to schedule your trial session."
  },
  {
    q: "How do I book an appointment?",
    a: "You can book your appointment by calling me at +91 98400 56242 or via WhatsApp at the same number. You can also DM on Instagram for bookings, PR, or collaborations."
  },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <div className="border border-accent-800/30 hover:border-accent-700/50 transition-colors duration-300 overflow-hidden"
      style={{backgroundColor:'rgba(26,0,0,0.5)'}}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 text-left touch-target"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-display text-lg sm:text-xl text-accent-200/90 pr-4">{faq.q}</span>
        <ChevronDown size={16} className={`text-accent-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6">
              <div className="divider-accent mb-4 opacity-25" />
              <p className="font-body text-base sm:text-lg text-accent-100/80 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="deepa-bg-dark section-padding relative overflow-hidden"
      aria-label="Frequently asked questions about bridal makeup - Teju Bridal Artist">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-accent-600/75 mb-4">Got Questions?</p>
          <h2 className="font-display text-5xl md:text-6xl accent-text mb-5">Frequently Asked Questions</h2>
          <p className="font-body text-base sm:text-lg text-accent-100/70 max-w-2xl mx-auto">Everything you need to know about bridal makeup.</p>
          <div className="divider-accent max-w-xs mx-auto mt-4" />
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.2}}
          className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} toggle={() => toggle(i)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}