import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profileData, type Project } from "@/data/profile";

const Projects = () => {
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
    <section id="projects" className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-title">
            <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical implementations
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profileData.projects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              data-testid={`project-item-${index}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${
                index % 4 === 0 ? "from-primary-500/20" :
                index % 4 === 1 ? "from-violet-500/20" :
                index % 4 === 2 ? "from-emerald-500/20" :
                "from-cyan-500/20"
              } to-transparent rounded-bl-full`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-100 mb-4" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <Badge
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index % 4 === 0 
                          ? "bg-primary-500/20 text-primary-300" 
                          : index % 4 === 1
                          ? "bg-violet-500/20 text-violet-300"
                          : index % 4 === 2
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-cyan-500/20 text-cyan-300"
                      }`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                      data-testid={`project-github-${index}`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      asChild
                      className={`${
                        index % 4 === 0 
                          ? "bg-primary-500 hover:bg-primary-600" 
                          : index % 4 === 1
                          ? "bg-violet-500 hover:bg-violet-600"
                          : index % 4 === 2
                          ? "bg-emerald-500 hover:bg-emerald-600"
                          : "bg-cyan-500 hover:bg-cyan-600"
                      } text-white transition-colors duration-300`}
                      data-testid={`project-demo-${index}`}
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;