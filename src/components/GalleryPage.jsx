import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";

const photos = [
  { id: 1, img: "/GAL1.png", alt: "Bridal makeup look 1" },
  { id: 2, img: "/GAL2.png", alt: "Bridal makeup look 2" },
  { id: 3, img: "/GAL3.png", alt: "Bridal makeup look 3" },
  { id: 4, img: "/GAL4.png", alt: "Bridal makeup look 4" },
  { id: 5, img: "/GAL5.png", alt: "Bridal makeup look 5" },
  { id: 6, img: "/GAL6.png", alt: "Bridal makeup look 6" },
  { id: 7, img: "/GAL7.png", alt: "Bridal makeup look 7" },
  { id: 9, img: "/GAL9.png", alt: "Bridal makeup look 9" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Helmet>
        <title>Bridal Makeup Gallery - Teju Bridal Artist | Best Bridal Makeup in Nellore</title>
        <meta name="description" content="Explore Teju Bridal Artist's bridal makeup gallery in Nellore. See HD makeup, airbrush makeup, bridal transformations, and professional makeup looks. Best bridal makeup artist in Nellore, Andhra Pradesh." />
        <link rel="canonical" href="https://tejubridal.in/gallery" />
        <meta property="og:title" content="Bridal Makeup Gallery - Teju Bridal Artist | Best Bridal Makeup in Nellore" />
        <meta property="og:description" content="Explore Teju Bridal Artist's bridal makeup gallery in Nellore. See HD makeup, airbrush makeup, bridal transformations. Best bridal makeup artist in Nellore." />
        <meta property="og:url" content="https://tejubridal.in/gallery" />
        <meta property="og:image" content={photos[0]?.img || "https://tejubridal.in/GAL1.png"} />
        <meta name="twitter:title" content="Bridal Makeup Gallery - Teju Bridal Artist | Best Bridal Makeup in Nellore" />
        <meta name="twitter:description" content="Explore Teju Bridal Artist's bridal makeup gallery. HD makeup, airbrush makeup & bridal transformations. Best bridal makeup artist in Nellore." />
        <meta name="twitter:image" content={photos[0]?.img || "https://tejubridal.in/GAL1.png"} />
      </Helmet>
      <div className="min-h-screen deepa-bg-flat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-accent-600/75 mb-4">Our Work</p>
          <h1 className="font-display text-5xl md:text-6xl accent-text mb-5">Full Gallery</h1>
          <div className="divider-accent max-w-xs mx-auto" />
          <a href="/"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 border border-accent-700/50 text-accent-400/80 hover:text-accent-300 hover:border-accent-500 transition-all font-sans text-sm tracking-[0.25em] uppercase">
            <Camera size={14} />
            Back to Home
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <motion.button key={photo.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              onClick={() => setLightbox(photo)}
              className="relative group overflow-hidden border border-accent-900/25 hover:border-accent-600/45 transition-all duration-500 aspect-square bg-red-800">
              <img src={photo.img} alt={photo.alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-accent-400 hover:text-accent-300 transition-colors z-10">
            <X size={32} />
          </button>
          <img src={lightbox.img} alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
    </>
  );
}