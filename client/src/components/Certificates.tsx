import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { profileData, type Certificate } from "@/data/profile";

const Certificates = () => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const openLightbox = (src: string, alt: string, title: string) => {
    setLightboxImage({ src, alt, title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="certificates" className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="certificates-title">
            <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
              Certificates & Credentials
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profileData.certificates.map((cert: Certificate, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openLightbox(cert.image, cert.alt, cert.title)}
              data-testid={`certificate-item-${index}`}
            >
              <img 
                src={cert.image} 
                alt={cert.alt} 
                className="w-full h-48 object-cover"
                data-testid={`certificate-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2" data-testid={`certificate-title-${index}`}>
                  {cert.title}
                </h3>
                <p className={`font-semibold mb-2 ${
                  index % 3 === 0 ? "text-primary-400" :
                  index % 3 === 1 ? "text-violet-400" :
                  "text-emerald-400"
                }`} data-testid={`certificate-issuer-${index}`}>
                  {cert.issuer}
                </p>

                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    index % 3 === 0 ? "bg-primary-500/20 text-primary-300" :
                    index % 3 === 1 ? "bg-violet-500/20 text-violet-300" :
                    "bg-emerald-500/20 text-emerald-300"
                  }`} data-testid={`certificate-verified-${index}`}>
                    <Check className="w-4 h-4 mr-2" />
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            data-testid="lightbox-modal"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-primary-400 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-300"
                data-testid="lightbox-close-button"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={lightboxImage.src} 
                alt={lightboxImage.alt} 
                className="w-full h-auto rounded-lg shadow-2xl"
                data-testid="lightbox-image"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-semibold" data-testid="lightbox-caption">
                  {lightboxImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
