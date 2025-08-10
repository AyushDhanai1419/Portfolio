import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* Global Notice */}
      <div className="bg-gradient-to-r from-primary-600 to-violet-600 text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50 border-b border-primary-500/20">
        <motion.div 
          className="animate-pulse"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌍 Open to Remote Roles Worldwide
        </motion.div>
      </div>

      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Awards />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
