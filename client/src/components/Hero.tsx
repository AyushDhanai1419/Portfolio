import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "ayushdhanai1419@gmail.com";

  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1REkDJ58cikdK08lwv4TAkpShF7BRgj4t/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-violet-900/20"></div>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/dp.jpg"
            alt="Ayush - Professional headshot"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-primary-500/30 shadow-2xl"
            data-testid="profile-image"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="hero-title"
        >
          <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
            Hello, I'm Ayush
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="hero-description"
        >
          Full Stack Developer crafting exceptional digital experiences with{" "}
          <span className="text-primary-400 font-semibold">Java</span>,{" "}
          <span className="text-violet-400 font-semibold">Angular</span>, and
          modern web technologies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            data-testid="button-download-resume"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid="button-email-me"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-white text-xl font-semibold">
                  Get In Touch
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <p className="text-slate-300 text-sm mb-2">Email Address:</p>
                  <p
                    className="text-white font-mono text-lg break-all"
                    data-testid="email-address"
                  >
                    {email}
                  </p>
                </div>
                <Button
                  onClick={handleCopyEmail}
                  className={`w-full ${
                    copied
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-primary-500 hover:bg-primary-600"
                  } text-white transition-all duration-300`}
                  data-testid="button-copy-email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
