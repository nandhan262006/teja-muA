import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home", external: false },
  { name: "About", href: "#about", external: false },
  { name: "Services", href: "#services", external: false },
  { name: "Bridal Packages", href: "#bridal-services", external: false },
  { name: "Gallery", href: "/gallery", external: true },
  { name: "Contact", href: "#contact", external: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>50);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const scrolledStyle = {
    backgroundColor:'rgba(26,0,0,0.96)',
    backdropFilter:'blur(12px)',
    borderBottom:'1px solid rgba(212,212,212,0.12)',
    backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.018) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.018) 75%)`,
    backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
  };

  return (
    <motion.nav initial={{y:-80}} animate={{y:0}} transition={{duration:0.8,ease:"easeOut"}}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? scrolledStyle : {}}
      aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Teju Bridal Artist - Best Bridal Makeup Artist in Nellore - Home">
          <img src="/LOGO.png" alt="Teju Bridal Artist - Best Bridal Makeup Artist in Nellore" width="500" height="500" className="h-12 sm:h-14 md:h-16 w-auto" loading="eager" />
        </a>
        <ul className="hidden lg:flex items-center gap-4 xl:gap-5" role="list">
          {navLinks.map(link=>(
            <li key={link.name}>
              {link.external ? (
                <Link to={link.href}
                  className="font-sans text-sm tracking-[0.2em] uppercase text-accent-400/80 hover:text-accent-400 transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <a href={link.href}
                  className="font-sans text-sm tracking-[0.2em] uppercase text-accent-400/80 hover:text-accent-400 transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-600 group-hover:w-full transition-all duration-300" />
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://wa.me/919840056242?text=Hi%20Teju%20Bridal%20Artist!%20I'd%20like%20to%20book%20a%20consultation."
            target="_blank" rel="noopener noreferrer"
            className="touch-target flex items-center gap-2 px-4 py-2 border border-red-700/50 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
            aria-label="Book via WhatsApp">
            <MessageCircle size={12} className="text-red-400 group-hover:animate-pulse"/>
            <span className="font-sans text-sm tracking-[0.15em] text-red-300/90">WhatsApp</span>
          </a>
          <a href="tel:+919840056242"
            className="touch-target flex items-center gap-2 px-4 py-2 border border-accent-700/50 hover:border-accent-500 hover:bg-accent-500/8 transition-all duration-300 group"
            aria-label="Call Teju Bridal Artist at +91 98400 56242">
            <Phone size={12} className="text-accent-500 group-hover:animate-pulse"/>
            <span className="font-sans text-base tracking-[0.15em] accent-text">Call</span>
          </a>
        </div>
        <button className="lg:hidden text-accent-500 touch-target flex items-center justify-center" onClick={()=>setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="lg:hidden border-t border-accent-900/30"
            style={{backgroundColor:'rgba(26,0,0,0.98)',backdropFilter:'blur(12px)'}}
            role="navigation" aria-label="Mobile navigation">
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link=>(
                link.external ? (
                  <Link key={link.name} to={link.href} onClick={()=>setMenuOpen(false)}
                    className="touch-target flex items-center font-sans text-base tracking-[0.25em] uppercase text-accent-400/75 hover:text-accent-400 transition-colors">{link.name}</Link>
                ) : (
                  <a key={link.name} href={link.href} onClick={()=>setMenuOpen(false)}
                    className="touch-target flex items-center font-sans text-base tracking-[0.25em] uppercase text-accent-400/75 hover:text-accent-400 transition-colors">{link.name}</a>
                )
              ))}
              <div className="flex gap-2 mt-2">
                <a href="https://wa.me/919840056242?text=Hi%20Teju%20Bridal%20Artist!%20I'd%20like%20to%20book%20a%20consultation."
                  target="_blank" rel="noopener noreferrer"
                  className="touch-target flex items-center gap-2 flex-1 px-4 py-3 border border-red-700/40 justify-center"
                  aria-label="Book via WhatsApp">
                  <MessageCircle size={14} className="text-red-400"/>
                  <span className="font-sans text-sm tracking-[0.2em] text-red-300/90">WhatsApp</span>
                </a>
                <a href="tel:+919840056242" className="touch-target flex items-center gap-2 flex-1 px-4 py-3 border border-accent-700/40 justify-center"
                  aria-label="Call Teju Bridal Artist at +91 98400 56242">
                  <Phone size={14} className="text-accent-500"/>
                  <span className="font-sans text-base tracking-[0.2em] accent-text">Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}