export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface Award {
  title: string;
  issuer: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ProfileData {
  experience: Experience[];
  skills: Skills;
  awards: Award[];
  projects: Project[];
}

export const profileData: ProfileData = {
  experience: [
    {
      role: "Software Engineer II — Data Protector R&D",
      company: "OpenText",
      period: "Dec 2023 – Present",
      achievements: [
        "Engineered scalable backend services using Java and Spring Boot.",
        "Designed and integrated secure REST APIs to support job orchestration and automated scheduling across distributed systems.",
        "Built and deployed containerized microservices for backup orchestration, improving modularity and fault isolation.",
        "Implemented OIDC authentication (Keycloak + Entra ID) with certificate-based security.",
        "Upgraded Angular UI components and patched all identified CVEs, enhancing frontend security posture.",
        "Led creation of reusable UI libraries (Toolbar, Filter Panel, Multiselect) adopted by multiple internal teams.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Angular",
        "Docker",
        "Kubernetes",
        "Keycloak",
        "Entra ID",
      ],
    },
    {
      role: "Power Programmer (Full Stack Developer)",
      company: "Infosys Ltd.",
      period: "Sep 2020 – Dec 2023",
      achievements: [
        "Built RESTful microservices using Spring Boot and deployed them to production with high availability.",
        "Improved asynchronous processing using RabbitMQ-based job queues.",
        "Automated recurring operations with cron jobs and scheduler APIs.",
        "Enabled scalable micro-frontend delivery through Webpack Module Federation.",
        "Used Linux and Docker for CI/CD environments and built resilient pipelines on Azure DevOps.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "RabbitMQ",
        "Docker",
        "Linux",
        "Azure DevOps",
        "Webpack Module Federation",
      ],
    },
    {
      role: "Summer Intern",
      company: "Indian Institute of Remote Sensing (IIRS/ISRO)",
      period: "Jun 2019 – Aug 2019",
      achievements: [
        "Analyzed temporal satellite datasets in Google Earth Engine to monitor vegetation anomalies across Uttarakhand.",
        "Created a Django-based time-series dashboard with GDAL for faster spatial anomaly detection.",
      ],
      technologies: ["Python", "Django", "GDAL", "Google Earth Engine"],
    },
  ],
  skills: {
    frontend: [
      { name: "Angular", level: 5 },
      { name: "HTML/CSS/Bootstrap", level: 5 },
      { name: "TypeScript", level: 4 },
    ],
    backend: [
      { name: "Java/Spring Boot", level: 5 },
      { name: "REST APIs/Microservices", level: 5 },
      { name: "RabbitMQ/Keycloak", level: 4 },
    ],
    tools: [
      { name: "Docker/Kubernetes", level: 4 },
      { name: "Git/Linux", level: 5 },
      { name: "Azure DevOps/AWS EKS", level: 4 },
    ],
  },
  awards: [
    {
      title: "1st Place — Data Protector Product Enhancement Program",
      issuer: "OpenText — Aug 2024",
      description:
        "Awarded for developing innovative enhancements to the Data Protector product.",
    },
    {
      title: "Cross-Team Recognition — Critical release readiness support",
      issuer: "OpenText — Oct 2024",
      description:
        "Recognized for supporting a critical product release across multiple teams.",
    },
    {
      title: "Insta Award — Performance Excellence",
      issuer: "Infosys — Sep 2022",
      description:
        "Acknowledged for exceptional performance and contribution to key projects.",
    },
    {
      title: "2nd Place — ZeroDay Hackathon",
      issuer: "Dehradun — 2018",
      description: "Secured second place in a competitive hackathon event.",
    },
    {
      title: "Finalist — Rajasthan IT Hackathon",
      issuer: "Udaipur — 2017",
      description: "Reached the finals of a state-level hackathon competition.",
    },
  ],
  projects: [
    {
      title: "Opentext - Data Protector",
      description: "Developed and enhanced modules for OpenText Data Protector, including secure REST APIs, OIDC authentication (Keycloak + Entra ID), and containerized microservices for backup orchestration. Improved frontend security and reusability through Angular UI component upgrades and shared libraries.",
      technologies: ["Java", "Spring Boot", "Angular", "Docker", "Kubernetes", "Keycloak", "Entra ID"],
      githubUrl: "" // Internal project, no public repo
    },
    {
      title: "Swiss Re - Insurance Portal",
      description: "Built and maintained a comprehensive insurance portal for Swiss Re, enabling policy management, claims processing, and reporting. Implemented scalable microservices, asynchronous processing with RabbitMQ, and micro-frontend architecture for modular feature delivery.",
      technologies: ["Java", "Spring Boot", "Angular", "RabbitMQ", "Micro-frontend", "Azure DevOps", "Docker"],
      githubUrl: "" // Internal project, no public repo
    },
    {
      title: "Satellite Imagery Time-Series Analysis",
      description: "Analyzed temporal satellite datasets in Google Earth Engine to monitor vegetation anomalies across Uttarakhand. Created a Django-based time-series dashboard with GDAL for faster spatial anomaly detection.",
      technologies: ["Google Earth Engine", "Python", "Django", "GDAL"],
      githubUrl: "https://drive.google.com/file/d/17RwO0DAXGliUX_LBcu_RnB2KOrtyO8Hq/view?usp=sharing"
    },
    {
      title: "The Smart Glove",
      description: "A wearable prototype that translates sign language gestures into speech in real time using sensors and a mobile app.",
      technologies: ["Arduino", "Sensors", "Android"],
      githubUrl: "https://github.com/AyushDhanai1419/The-Smart-Glove"
    }
  ],
};