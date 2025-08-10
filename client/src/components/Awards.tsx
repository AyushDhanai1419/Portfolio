import { motion } from "framer-motion";
import { Star, TrendingUp, Award as AwardIcon, Code } from "lucide-react";
import { profileData, type Award } from "@/data/profile";

const Awards = () => {
  const icons = [Star, TrendingUp, AwardIcon, Code];
  const colors = [
    "from-yellow-400 to-yellow-600",
    "from-primary-500 to-primary-600", 
    "from-emerald-500 to-emerald-600",
    "from-cyan-500 to-cyan-600"
  ];

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
    <section id="awards" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="awards-title">
            <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Recognition for technical excellence and innovation
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profileData.awards.map((award: Award, index: number) => {
            const IconComponent = icons[index % icons.length];
            const colorClass = colors[index % colors.length];
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                data-testid={`award-item-${index}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${
                  index % 4 === 0 ? "from-primary-500/20" :
                  index % 4 === 1 ? "from-violet-500/20" :
                  index % 4 === 2 ? "from-emerald-500/20" :
                  "from-cyan-500/20"
                } to-transparent rounded-bl-full`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100" data-testid={`award-title-${index}`}>
                        {award.title}
                      </h3>
                      <p className="text-violet-400 font-semibold" data-testid={`award-issuer-${index}`}>
                        {award.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed" data-testid={`award-description-${index}`}>
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
