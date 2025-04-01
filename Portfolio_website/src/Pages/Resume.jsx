import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resumePdf from "/src/Assets/Resume.pdf";

function ResumeViewer() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-16 transition-colors duration-200 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-4xl p-4 rounded-lg shadow-lg">
        <iframe
          src={resumePdf}
          title="Resume"
          className="w-full h-screen border rounded-lg"
        ></iframe>
      </div>

      <div className="mb-4">
        <a
          href={resumePdf}
          download
          className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
        >
          <AiOutlineDownload className="mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default ResumeViewer;
