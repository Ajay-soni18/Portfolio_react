import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Ajay Soni
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              🚀 Aspiring Developer | Problem Solver | Tech Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I am a third-year B.Tech student at MNIT Jaipur, passionate about
              building efficient, scalable, and user-friendly applications.
              Whether it's competitive programming, web development, or machine
              learning, I love tackling challenges and learning new
              technologies.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/Ajay-soni18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajaysoni7296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ajaysoni729696@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail size={24} />
              </a>

              <a
                href="https://leetcode.com/AjaySolvesCode/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* The Days When I Code Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Days I Code
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Here’s my GitHub contribution graph, showcasing my coding journey.
          </p>
          <div className="flex justify-center">
            <GitHubCalendar
              username="Ajay-soni18"
              blockSize={15}
              blockMargin={5}
              color="#FF7F50" // Bright Coral Orange
              fontSize={16}
              theme={{
                light: ["#0F0F0F", "#FFD700", "#FFA500", "#FF6347", "#FF4500"],
                dark: ["#0F0F0F", "#FFA500", "#FF7F50", "#FF6347", "#FF4500"],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
