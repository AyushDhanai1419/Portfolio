import { motion } from "framer-motion";
import { Monitor, Server, Database } from "lucide-react";
import { profileData } from "@/data/profile";

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend",
      color: "from-primary-500 to-primary-600",
      skills: profileData.skills.frontend
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-violet-500 to-violet-600",
      skills: profileData.skills.backend
    },
    {
      icon: Database,
      title: "Database & Cloud",
      color: "from-emerald-500 to-emerald-600",
      skills: profileData.skills.database
    }
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
    <section id="skills" className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-title">
            <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-testid={`skill-category-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100" data-testid={`skill-category-title-${index}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center" data-testid={`skill-item-${index}-${skillIndex}`}>
                    <span className="text-slate-300 font-medium" data-testid={`skill-name-${index}-${skillIndex}`}>
                      {skill.name}
                    </span>
                    <div className="flex space-x-1" data-testid={`skill-rating-${index}-${skillIndex}`}>
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-3 h-3 rounded-full ${
                            dot <= skill.level 
                              ? index % 3 === 0 
                                ? "bg-primary-500" 
                                : index % 3 === 1
                                ? "bg-violet-500"
                                : "bg-emerald-500"
                              : "bg-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
