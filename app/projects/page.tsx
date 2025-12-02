import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "My Projects",
};

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  frontendLink?: string;
  backendLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, frontendLink, backendLink }) => {
  return ( 
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-md hover:bg-white">
      <Image
        src={imageSrc}
        alt={title}
        width={700}
        height={300}
        objectFit="cover"
        className="w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {frontendLink && (
            <Link href={frontendLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 group-hover:bg-white group-hover:text-purple-400 group-hover:border-purple-400 border-2 border-transparent">
                Frontend
              </button>
            </Link>
          )}
          {backendLink && (
            <Link href={backendLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 group-hover:bg-white group-hover:text-purple-400 group-hover:border-purple-400 border-2 border-transparent">
                Backend
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      imageSrc: "/image/document-tracking.png",
      title: "Document Tracking System",
      frontendLink: "https://github.com/lakshanirathnayaka/FindMyDocs_Frontend",
      backendLink: "https://github.com/lakshanirathnayaka/FindMyDocs_Backend"
    },
    {
      imageSrc: "https://via.placeholder.com/500x300",
      title: "Project Two",
      frontendLink: "https://github.com/lakshanirathnayaka/project2",
    },
    {
      imageSrc: "https://via.placeholder.com/500x300",
      title: "Project Three",
      frontendLink: "https://github.com/lakshanirathnayaka/project3",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            frontendLink={project.frontendLink}
            backendLink={project.backendLink}
          />
        ))}
      </div>
    </div>
  );
}