import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
      ],
    },
    {
      category: "Backend",
      technologies: [
        {
          name: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      category: "Tools",
      technologies: [
        {
          name: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-200"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {skillCategory.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
