import ProjectCard from "./components/ProjectCard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJava, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Document Tracking System",
    description: "A website that digitalizes the document tracking process. It reduces paperwork and improves efficiency.",
    imageUrl: "/image/document-tracking.png",
    technologies: ["React", "Node.js", "MongoDB","Vercel"],
    frontendLink: "https://github.com/lakshanirathnayaka/FindMyDocs_Frontend",
    backendLink: "https://github.com/lakshanirathnayaka/FindMyDocs_Backend",
    demoLink: "https://find-my-docs-frontend.vercel.app/" // Example demo link
  },
  {
    title: "Exam Registration System",
    description: "Description for project two.", // Add a description
    imageUrl: "/image/ERS.png", // Replace with a real image path
    technologies: ["PHP", "MySQL"],
    frontendLink: "https://github.com/lakshanirathnayaka/ERS-Web_Technologies",
    // backendLink and demoLink are optional, so they can be omitted if not available
  },
  {
    title: "Project Three",
    description: "Description for project three.", // Add a description
    imageUrl: "/image/project3.png", // Replace with a real image path
    technologies: ["Java", "MySQL"],
    frontendLink: "https://github.com/lakshanirathnayaka/Project-Three-Repo",
    // backendLink and demoLink are optional, so they can be omitted if not available
  },
];

const toolIcons: { [key: string]: React.ReactNode } = {
  React: <FontAwesomeIcon icon={faReact} className="text-2xl text-[#61DAFB]" />,
  "Node.js": <FontAwesomeIcon icon={faNodeJs} className="text-2xl text-[#339933]" />,
  MongoDB: <FontAwesomeIcon icon={faLeaf} className="text-2xl text-[#47A248]" />,
  TypeScript: <span className="font-bold text-2xl text-[#3178C6]">TS</span>,
  "Next.js": <span className="font-bold text-2xl text-white">N</span>,
  Java: <FontAwesomeIcon icon={faJava} className="text-2xl text-[#007396]" />,
  PHP: <FontAwesomeIcon icon={faPhp} className="text-2xl text-[#777BB4]" />,
  MySQL: <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#4479A1]" />,
  Vercel: <span className="font-bold text-2xl text-white">▲</span>,
};

const Projects = () => {
  return (
    <section id="projects" >
      <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <ProjectCard {...project} />
                  <div className="flex justify-center gap-3">
                    {project.technologies.map((tech) => ( 
                      <div key={tech} title={tech}>{toolIcons[tech]}</div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;
