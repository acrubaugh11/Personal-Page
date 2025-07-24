import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexcrubaugh/ecommerce",
  },
  {
    title: "AI Task Management",
    description:
      "An intelligent task management application that uses machine learning to prioritize tasks and optimize productivity workflows.",
    technologies: ["Python", "React", "TensorFlow", "FastAPI", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexcrubaugh/ai-tasks",
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging application with WebSocket support, file sharing, and group chat functionality.",
    technologies: ["React", "Socket.io", "Express", "Redis", "AWS S3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexcrubaugh/chat-app",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and modern design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexcrubaugh/portfolio",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets with charts, filters, and real-time updates.",
    technologies: ["React", "D3.js", "Python", "Django", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexcrubaugh/data-viz",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A React Native fitness tracking app with workout plans, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexcrubaugh/fitness-app",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of my software development projects, ranging from
              full-stack web applications to machine learning experiments. Each
              project represents a different challenge and learning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
