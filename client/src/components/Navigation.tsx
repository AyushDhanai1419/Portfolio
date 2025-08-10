import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "awards", label: "Awards" },
    { id: "certificates", label: "Certificates" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const htmlElement = section as HTMLElement;
        const sectionTop = htmlElement.offsetTop - 100;
        const sectionHeight = htmlElement.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-8 z-40 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-full mx-4 mt-4 transition-all duration-300"
      data-testid="navigation"
    >
      <div className="max-w-4xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-primary-400">Ayush</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`transition-colors duration-300 font-medium ${
                  activeSection === section.id
                    ? "text-primary-400"
                    : "text-slate-300 hover:text-primary-400"
                }`}
                data-testid={`nav-link-${section.id}`}
              >
                {section.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-primary-400"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-700"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left transition-colors duration-300 font-medium ${
                    activeSection === section.id
                      ? "text-primary-400"
                      : "text-slate-300 hover:text-primary-400"
                  }`}
                  data-testid={`mobile-nav-link-${section.id}`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
