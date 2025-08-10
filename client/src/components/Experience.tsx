import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { profileData, type Experience } from "@/data/profile";

const Experience = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-title">
            <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building innovative solutions and leading development teams across various industries
          </p>
        </motion.div>
        
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profileData.experience.map((exp: Experience, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
              data-testid={`experience-item-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2 sm:mb-0" data-testid={`experience-role-${index}`}>
                      {exp.role}
                    </h3>
                    <span className="text-primary-400 font-semibold text-lg" data-testid={`experience-period-${index}`}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-xl text-violet-400 font-semibold mb-4" data-testid={`experience-company-${index}`}>
                    {exp.company}
                  </h4>
                  <ul className="text-slate-300 space-y-2 leading-relaxed">
                    {exp.achievements.map((achievement: string, achIndex: number) => (
                      <li key={achIndex} className="flex items-start" data-testid={`experience-achievement-${index}-${achIndex}`}>
                        <span className="text-primary-400 mr-3 mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.technologies.map((tech: string, techIndex: number) => (
                      <Badge
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          index % 3 === 0 
                            ? "bg-primary-500/20 text-primary-300" 
                            : index % 3 === 1
                            ? "bg-violet-500/20 text-violet-300"
                            : "bg-emerald-500/20 text-emerald-300"
                        }`}
                        data-testid={`experience-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
