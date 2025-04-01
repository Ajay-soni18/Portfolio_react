import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoReport-Platform",
      description:
        "A Platform For MNIT users To Report Environmental Issues in the campus",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTt6-9f9zX_MRi0JgcTULo_HZaa_etjHXOg&s",
      technologies: ["HTML", "CSS", "JavascriptL", "Node.js"],
      githubUrl: "https://github.com/Ajay-soni18/EcoReport-Platform",
      liveUrl: "https://ajay-soni18.github.io/EcoReport-Platform/",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <div className="min-h-screen pt-16 transition-colors duration-200 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-16 text-4xl font-bold text-center text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden transition-colors duration-200 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
