import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const waLink = "https://wa.me/919840056242?text=Hi%20Teju%20Bridal%20Artist!%20I'd%20like%20to%20book%20a%20bridal%20makeup%20consultation.";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      <motion.a
        href={"https://www.instagram.com/tejubridalartist/"}
        target="_blank"
        rel="noopener noreferrer"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:2,duration:0.5,type:"spring"}}
        whileHover={{scale:1.1}}
        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        style={{background:'linear-gradient(135deg,#833ab4,#fd1d1d,#f56040)'}}
        aria-label="Follow Teju Bridal Artist on Instagram"
      >
        <img src="/instalogo.webp" alt="Instagram - Teju Bridal Artist" className="w-5 sm:w-7 h-5 sm:h-7 rounded-full" />
      </motion.a>
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:2.15,duration:0.5,type:"spring"}}
        whileHover={{scale:1.1}}
        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 flex items-center justify-center transition-colors"
        aria-label="Book bridal makeup appointment via WhatsApp"
      >
        <MessageCircle size={22} className="text-white sm:w-[26px]" fill="white" />
      </motion.a>
      <motion.a
        href="tel:+919840056242"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:2.3,duration:0.5,type:"spring"}}
        whileHover={{scale:1.1}}
        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent-600 hover:bg-accent-500 shadow-lg shadow-accent-600/30 flex items-center justify-center transition-colors"
        aria-label="Call Teju Bridal Artist at +91 98400 56242"
      >
        <Phone size={22} className="text-white sm:w-[26px]" />
      </motion.a>
    </div>
  );
}