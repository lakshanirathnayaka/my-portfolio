"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  frontendLink?: string;
  backendLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ title, description, imageUrl, technologies, frontendLink, backendLink, demoLink }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg group min-w-[300px] max-w-[400px] "
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {/* This div creates a linear gradient overlay to darken the image and highlight the title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

      {/* Initial state: Title is visible at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <h3 className="text-2xl text-purple-200">{title}</h3>
      </div>

      {/* Hover state: Darker overlay with description and technologies */}
      {/* This layer is hidden by default and becomes fully opaque on hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-purple-100 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-gray-800 text-center mb-4">{description}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {frontendLink && (
            <Link href={frontendLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105">
                Frontend
              </button>
            </Link>
          )}
          {backendLink && (
            <Link href={backendLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105">
                Backend
              </button>
            </Link>
          )}
          {demoLink && (
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105">
                Demo
              </button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;