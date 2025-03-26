import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumePdf from "../Assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-container">
      <div className="resume-header">
        <a href={resumePdf} download className="download-btn">
          <AiOutlineDownload />
          &nbsp;Download Resume
        </a>
      </div>

      <div className="resume-content">
        <Document file={resumePdf} className="pdf-viewer">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div className="resume-footer">
        <a href={resumePdf} download className="download-btn">
          <AiOutlineDownload />
          &nbsp;Download Resume
        </a>
      </div>
    </div>
  );
}

export default ResumeNew;
