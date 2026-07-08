import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textureBg = {
    backgroundColor:'#1a0000',
    backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,
    backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
  };

  return (
    <section id="contact" className="deepa-bg-dark section-padding relative overflow-hidden"
      aria-label="Contact Teju Bridal Artist">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-accent-600/75 mb-4">Get In Touch</p>
          <h2 className="font-display text-5xl md:text-6xl accent-text mb-5">Book Your Bridal Look</h2>
          <p className="font-body text-base sm:text-lg text-accent-100/70 max-w-2xl mx-auto">Contact Teju Bridal Artist to book your appointment.</p>
          <div className="divider-accent max-w-xs mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.2}} className="space-y-5">
            <div className="border border-accent-800/30 p-5 sm:p-6 md:p-8" style={textureBg}>
              <p className="font-sans text-3xl sm:text-4xl text-accent-400/80 mb-5 sm:mb-6">Let's connect</p>
              <div className="space-y-5">
                {[
                  {icon:Phone, label:"Call / WhatsApp", value:"+91 98400 56242", href:"tel:+919840056242"},
                  {icon:MapPin, label:"Our Address",       value:"27-1-156, 10th Cross Road, Balaji Nagar, Nellore, Andhra Pradesh 524002", href:"https://maps.google.com/?q=27-1-156+10th+cross+road+Balaji+Nagar+Nellore+Andhra+Pradesh+524002"},
                  {icon:Clock, label:"Studio Hours",    value:"Mon–Sun: 9 AM – 8 PM"},
                ].map(({icon:Icon,label,value,href})=>(
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border border-accent-800/40 flex items-center justify-center flex-shrink-0 group-hover:border-accent-600 transition-colors">
                      <Icon size={13} className="text-accent-600" strokeWidth={1.5}/>
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.28em] uppercase text-accent-700/70 mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="font-body text-lg text-accent-200/85 hover:text-accent-300 transition-colors">{value}</a>
                        : <p className="font-body text-lg text-accent-200/85">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a href="https://wa.me/919840056242?text=Hi%20Teju%20Bridal%20Artist!%20I'd%20like%20to%20book%20a%20bridal%20makeup%20consultation."
              target="_blank" rel="noopener noreferrer"
              className="touch-target block border border-red-700/40 p-5 sm:p-6 text-center hover:border-red-500 transition-all duration-300 group mb-4"
              style={{background:'linear-gradient(135deg,#5c0000,#1a0000)'}}
              aria-label="Book bridal makeup appointment via WhatsApp">
              <MessageCircle size={20} className="text-red-400 mx-auto mb-2" />
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-red-400/75 mb-2">Book via WhatsApp</p>
              <p className="font-display text-2xl text-red-300/90">Tap to Chat</p>
            </a>
            <a href="tel:+919840056242"
              className="touch-target block border border-accent-700/40 p-5 sm:p-6 text-center hover:border-accent-500 transition-all duration-300 group"
              style={{background:'linear-gradient(135deg,#3d0000,#1a0000)'}}
              aria-label="Call Teju Bridal Artist at +91 98400 56242">
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-700/75 mb-2">Call Now</p>
              <p className="font-display text-4xl sm:text-5xl accent-text">984 00 56242</p>
            </a>
          </motion.div>

          {/* Google Maps */}
          <motion.div initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.3}}
            className="border border-accent-800/30 overflow-hidden" style={textureBg}>
            <div className="p-4 sm:p-5">
              <p className="font-sans text-xs tracking-[0.32em] uppercase text-accent-700/70 mb-3">Find Us on Google Maps</p>
              <div className="w-full aspect-[4/3] overflow-hidden border border-accent-800/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5!2d79.974!3d14.429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf334f33eef47%3A0xbc33009919c4397e!2sBalaji+Nagar+Nellore!5e0!3m2!1sen!2sin"
                  width="100%" height="100%" style={{border:0, minHeight:'280px'}}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Teju Bridal Artist location in Balaji Nagar, Nellore"
                  aria-label="Map showing Teju Bridal Artist at Balaji Nagar, Nellore">
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}