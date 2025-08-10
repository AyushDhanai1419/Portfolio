import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1REkDJ58cikdK08lwv4TAkpShF7BRgj4t/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailMe = () => {
    window.location.href = "mailto:ayushdhanai1419@gmail.com";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="py-16 px-4 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="footer-title"
          >
            <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's collaborate on your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
              data-testid="footer-download-resume"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={handleEmailMe}
              variant="outline"
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="footer-email-me"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl font-bold text-slate-100 mb-4"
              data-testid="contact-title"
            >
              Contact
            </h3>
            <div className="space-y-2">
              <p className="text-slate-300" data-testid="contact-email">
                ayushdhanai1419@gmail.com
              </p>
              <p className="text-slate-300" data-testid="contact-phone">
                +91 (963) 948-4006
              </p>
              <p className="text-slate-300" data-testid="contact-availability">
                Available for remote work
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl font-bold text-slate-100 mb-4"
              data-testid="connect-title"
            >
              Connect
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/ayushdhanai/"
                className="w-12 h-12 bg-slate-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/AyushDhanai1419"
                className="w-12 h-12 bg-slate-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                data-testid="social-github"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl font-bold text-slate-100 mb-4"
              data-testid="quicklinks-title"
            >
              Quick Links
            </h3>
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                  data-testid="quicklink-home"
                >
                  Home
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                  data-testid="quicklink-experience"
                >
                  Experience
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                  data-testid="quicklink-skills"
                >
                  Skills
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection("awards")}
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                  data-testid="quicklink-awards"
                >
                  Awards
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                  data-testid="quicklink-projects"
                >
                  Projects
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700/50 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400" data-testid="footer-copyright">
            © 2025 Ayush Dhanai
          </p>
          <p
            className="text-slate-500 mt-2 text-sm"
            data-testid="footer-tagline"
          >
            Designed and developed with ❤️ for the modern web
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
