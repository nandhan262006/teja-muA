import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home"
      className="deepa-bg relative min-h-[60vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Teju Bridal Artist - Professional Makeup Artist">
      <div className="deepa-vignette" />

      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{background:'radial-gradient(ellipse 55% 55% at 50% 45%, rgba(179,0,0,0.35) 0%, transparent 70%)'}} />

      <svg className="absolute top-14 sm:top-20 left-3 sm:left-6 w-14 sm:w-20 h-14 sm:h-20 opacity-25 z-[3]" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M8,8 L8,36 M8,8 L36,8" stroke="#d4d4d4" strokeWidth="1" fill="none"/>
        <circle cx="8" cy="8" r="2" fill="#d4d4d4"/>
      </svg>
      <svg className="absolute top-14 sm:top-20 right-3 sm:right-6 w-14 sm:w-20 h-14 sm:h-20 opacity-25 z-[3]" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M72,8 L72,36 M72,8 L44,8" stroke="#d4d4d4" strokeWidth="1" fill="none"/>
        <circle cx="72" cy="8" r="2" fill="#d4d4d4"/>
      </svg>

      <div className="relative z-[3] flex flex-col items-center text-center w-full px-6 max-w-5xl gap-y-2 sm:gap-y-3">

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}}
          className="flex items-center justify-center gap-2 sm:gap-4">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-accent-600" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Sparkles size={10} className="text-accent-500 hidden sm:block" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-accent-500/80">Professional Makeup Artist</span>
            <Sparkles size={10} className="text-accent-500 hidden sm:block" />
          </div>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-accent-600" />
        </motion.div>

        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{duration:1,delay:0.4,type:"spring",stiffness:80}}
          className="-mb-2 sm:-mb-3">
          <img src="/LOGO.png" alt="Teju Bridal Artist - Best Bridal Makeup Artist in Nellore, Andhra Pradesh"
            width="500" height="500" className="h-40 sm:h-52 lg:h-64 w-auto mx-auto" loading="eager" />
        </motion.div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.6}}
          className="font-display hero-heading text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[0.02em] sm:tracking-[0.08em] uppercase accent-text">
          Teju Bridal Artist
        </motion.h1>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.8}}
          className="font-sans text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.6em] uppercase text-accent-400/75">
          Professional Makeup Studio in Nellore
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.0}}
          className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-accent-700/50" />
          {["Bridal","Editorial","Movies","Commercial"].map((s,i)=>(
            <span key={s} className="flex items-center gap-2 sm:gap-3">
              <span className="font-sans text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.25em] uppercase text-accent-300/85">{s}</span>
              {i<3&&<span className="text-accent-700/50 text-xs sm:text-sm">|</span>}
            </span>
          ))}
          <div className="h-px w-6 sm:w-10 bg-accent-700/50" />
        </motion.div>

        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.2}}
          className="font-display hero-sub text-4xl sm:text-5xl md:text-6xl accent-text italic leading-relaxed mb-4 sm:mb-6"
          style={{textShadow:'0 2px 12px rgba(0,0,0,0.6)'}}>
          Signature bridal artistry<br />by Teju
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1.4}}
          className="flex flex-col items-center w-full sm:flex-row sm:justify-center gap-3">
          <a href="#contact"
            className="touch-target w-full max-w-xs sm:max-w-none sm:w-auto flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-accent-700 via-accent-400 to-accent-700 text-red-950 font-sans text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:scale-105"
            aria-label="Book your bridal makeup appointment with Teju Bridal Artist">
            Book Your Bridal Look
          </a>
          <a href="#gallery"
            className="touch-target w-full max-w-xs sm:max-w-none sm:w-auto flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-accent-600/50 text-accent-300/85 font-sans text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:border-accent-400 hover:bg-accent-500/5 transition-all duration-300"
            aria-label="View Teju Bridal Artist portfolio">
            View Portfolio
          </a>
        </motion.div>

        <motion.a href="tel:+919840056242" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.6}}
          className="touch-target font-display text-3xl sm:text-4xl md:text-5xl accent-text hover:opacity-80 transition-opacity mb-4 sm:mb-6"
          aria-label="Call Teju Bridal Artist at +91 98400 56242">
          Call: 984 00 56242
        </motion.a>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.2}}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-accent-600/60">Scroll</span>
        <motion.div animate={{y:[0,7,0]}} transition={{repeat:Infinity,duration:2}}>
          <ChevronDown size={15} className="text-accent-600/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}