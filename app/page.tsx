"use client";
import Image from "next/image"
import Link from "next/link";
import React, { useState, FormEvent, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faJs, faNodeJs, faGit, faGithub, faDocker, faAws, faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLeaf, faServer } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Projects from "./Projects";

export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section id="home" className="bg-black flex min-h-screen flex-col items-center justify-center gap-8 p-4 md:flex-row md:justify-between md:p-24 bg-cover bg-center">
        <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center md:text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Hello!</h1>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">I'm Lakshani Parami</h1>
          <h2 className="text-4xl text-white mt-2">Full Stack Developer</h2>
          <div className="text-lg mt-4 text-white">My passion lies in exploring and mastering the latest technologies to create powerful, forward-thinking solutions.</div>
          <div className="flex space-x-4 mt-8 justify-center md:justify-start">
            <Link href="#projects">
              <button className="bg-purple-300 hover:scale-105 text-gray-800  py-2 px-4 rounded-full transition-all duration-300">
                View My Work
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-purple-300 hover:scale-105 text-gray-800  py-2 px-4 rounded-full transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex place-items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-full"
            src="/image/profile.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>

      {/* Placeholder sections - you can fill these in with your content */}
      <section id="about" className="bg-black text-white p-6 min-h-screen flex flex-col items-center mt-0  md:flex-col md:p-6 pt-24">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-12">About Me</h1>
         <div className="bg-purple-100 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-gray-700 mt-8 md:mt-0 md:max-w-2xl shadow-lg shadow-purple-500/50 transition-transform duration-300 hover:scale-105">
            <p className="text-lg text-center mt-6 text-black md:text-left">I am a recent Computer Science graduate with a strong passion for full-stack development.

My foundation is built on practical experience across the modern web stack, including front-end technologies like React and Next.js, and back-end development using Node.js and PHP. I have hands-on experience working with both MongoDB (NoSQL) and MySQL (relational) databases.

Committed to professional workflows, I am proficient in version control using GitHub and have experience with project management tools such as Jira. I am eager to apply my skills to build high-quality, scalable web applications.</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-black p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 bg-clip-text text-transparent font-bold text-center mb-12">My Skills</h1>
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-black p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Projects</h1>
        <Projects />
      </section>

      <section id="contact" className="min-h-screen bg-black p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Contact Me</h1>
        <ContactForm />
      </section>
    </main>
  );
}

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss3Alt} className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <span className="font-bold text-[#3178C6]">TS</span> },
    { name: "React", icon: <FontAwesomeIcon icon={faReact} className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <span className="font-bold text-black dark:text-white">N</span> },
    { name: "Tailwind CSS", icon: <span className="font-bold text-[#06B6D4]">T</span> },
  ];
  const backendSkills = [
    { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} className="text-[#339933]" /> },
    { name: "Express.js", icon: <FontAwesomeIcon icon={faServer} className="text-gray-500" /> },
    { name: "MongoDB", icon: <FontAwesomeIcon icon={faLeaf} className="text-[#47A248]" /> },
    { name: "MySQL", icon: <FontAwesomeIcon icon={faDatabase} className="text-[#4479A1]" /> },
    { name: "Java", icon: <FontAwesomeIcon icon={faJava} className="text-[#007396]" /> },
  ];
  const platformSkills = [
    { name: "Git", icon: <FontAwesomeIcon icon={faGit} className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} className="text-black dark:text-white" /> },
    { name: "Docker", icon: <FontAwesomeIcon icon={faDocker} className="text-[#2496ED]" /> },
    { name: "Vercel", icon: <span className="font-bold text-black dark:text-white">▲</span> },
    { name: "AWS", icon: <FontAwesomeIcon icon={faAws} className="text-[#FF9900]" /> },
  ];

  return (
    <div>
    <div className="w-full max-w-4xl "></div>
      {/* Frontend Skills */}
      <section className="mb-12">
        <div className="bg-purple-100 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-gray-700 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl text-gray-800 font-bold mb-8 text-left">Frontend</h2>
          <div className="flex flex-wrap justify-center gap-8">
          {frontendSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center w-24 transform transition-transform hover:scale-110">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Backend Skills */}
      <section className="mb-12">
        <div className="bg-purple-100 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-gray-700 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl text-gray-800 font-bold mb-8 text-left">Backend</h2>
          <div className="flex flex-wrap justify-center gap-8">
          {backendSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center w-24 transform transition-transform hover:scale-110">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section>
        <div className="bg-purple-100 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-gray-700 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl text-gray-800 font-bold mb-8 text-left">Platforms</h2>
          <div className="flex flex-wrap justify-center gap-8">
          {platformSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center w-24 transform transition-transform hover:scale-110">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await res.json();
        setStatus(`error: ${errorData.error}`);
      }
    } catch (error) {
      setStatus('error: Something went wrong.');
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="bg-purple-100  p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-purple-300 hover:scale-105 text-gray-800  py-2 px-4 rounded-full transition-all duration-300"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {status.startsWith('success') && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
        {status.startsWith('error') && <p className="text-red-500 mt-4 text-center">{status.split(': ')[1]}</p>}
      </form>
    </div>
  );
};
