import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "HTML",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
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
          name: "ExpressJS",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "SQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
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
          name: "GitHub",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 transition-colors duration-200 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-16 text-4xl font-bold text-center text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="p-8 transition-colors duration-200 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
            >
              <h3 className="mb-6 text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
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
