import { motion } from "framer-motion";
import { ArrowRight, Download, Facebook, Github, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import flower from '../flower.jpg';
import a3 from '../snip.png';
import gart from "../gart.png";
import moon from "../moon.png";
import logo from "../campus-map.png";
import balloon from "../balloon.jpg";
import cloudy from "../cloudy.jpeg";
import bng from "../bng.png";
import clock from "../clock.jpg";
import car from "../car.png";


const featuredProjects = [
  {
    title: "Web Dev Business",
    description:
      "A3 Web Services, a web development business with a considerable portfolio of websites.",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://fad-web-dev.vercel.app/",
    githubUrl: "https://github.com/acrubaugh11/Fad-Web-Dev/tree/v3",
    image: a3
  },
  {
    title: "Image Classification",
    description:
      "Developed a machine learning pipeline to classify image data (flowers) using feature extraction, dimensionality reduction, and model evaluation.",
    technologies: ["Python"],
    liveUrl: "https://github.com/acrubaugh11/Image_Classification",
    githubUrl: "https://github.com/acrubaugh11/Image_Classification",
    image: flower
  },
    {
    title: "Geas Art",
    description:
      "A full stack web application developed for selling personal art with fully functional use-cases allowing owner and users to interact flawlessly..",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://geasart.com/",
    githubUrl: "https://github.com/acrubaugh11/GeasArt",
    image: gart
  },
  {
    title: "Uni-Vents",
    description:
    "An app designed to help students and university members discover, register for, and engage with campus events.",
    technologies: ["HTML", "CSS", "Java"],
    liveUrl: "https://github.com/robsiuuu/Group-5/tree/final",
    githubUrl: "https://github.com/robsiuuu/Group-5/tree/final",
    image: logo

  },
  {
    title: "Safari Animals Index",
    description:
    "A full stack web application designed to be used as an index for safari animals.",
    technologies: ["Java"],
    liveUrl: "https://github.com/acrubaugh11/Safari_Animals-CRUD_API/tree/feature-mvc",
    githubUrl: "https://github.com/acrubaugh11/Safari_Animals-CRUD_API/tree/feature-mvc",
    image: balloon

  },
    {
    title: "Weather App",
    description:
    "A desktop weather application made using REST API.",
    technologies: ["Java"],
    liveUrl: "https://github.com/acrubaugh11/WeatherApp",
    githubUrl: "https://github.com/acrubaugh11/WeatherApp",
    image: cloudy

  },
      {
    title: "Alien Invasion Game",
    description:
    "A python based alien invasion retro game.",
    technologies: ["Python"],
    liveUrl: "https://github.com/acrubaugh11/alien_invasion",
    githubUrl: "https://github.com/acrubaugh11/alien_invasion",
    image: bng

  },
        {
    title: "Digital Clock",
    description:
    "A digital clock desktop application.",
    technologies: ["Java"],
    liveUrl: "https://github.com/acrubaugh11/Ditigal_Clock",
    githubUrl: "https://github.com/acrubaugh11/Ditigal_Clock",
    image: clock

  },
          {
    title: "Car Guys",
    description:
    "A website designed for 'Car Guys' a business centralized around car community.",
    technologies: ["HTML", "Javascript"],
    liveUrl: "https://github.com/acrubaugh11/Car_Guys/tree/master",
    githubUrl: "https://github.com/acrubaugh11/Car_Guys/tree/master",
    image: car

  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={moon}
            alt="Alexander Crubaugh"
            className="pt-40 md:w-full md:h-full md:pt-10 md:object-fill opacity-100"
            // style={{
            //   filter: "hue-rotate(50deg) saturate(0.5) brightness(1)",
            // }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="bg-clip-text bg-gradient-to-r from-primary to-accent">
                Alexander Crubaugh
              </span>
            </h1>

            <p className="text-2xl text-foreground mb-12 leading-relaxed font-medium">
              Software developer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a
                href="https://github.com/acrubaugh11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-primary-foreground rounded-lg hover:bg-foreground transition-colors hover:text-background font-medium text-lg"
              >
                View My Work
                <ArrowRight size={20} />
              </a>


              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black gap-2 px-8 py-4 border-2 border-border text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium text-lg"
              >
                <Download size={20} />
                Download Resume
              </a>

            </div>

            <div className="flex items-center justify-center gap-8">
              <a
                href="https://github.com/acrubaugh11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexander-crubaugh-5012b7252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/alex.crubaugh/" // replace with your actual Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook size={28} stroke="white" fill="none" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              PROJECTS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>


        </div>
      </section>
      <div className="h-10"></div>
    </div>
  );
}
