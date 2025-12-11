/*import React, { useState, FormEvent, ReactNode } from "react";
export const metadata = {
  title: "My Skills",
};

const SkillBox = ({ name, icon }: { name: string; icon: ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="font-semibold text-gray-800 dark:text-gray-200">{name}</p>
    </div>
  );
};

const SkillsPage = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "Java"];
  const platformSkills = ["Git", "GitHub", "Docker", "Vercel", "AWS"];

  return (
    <main className="bg-black text-white flex min-h-screen flex-col items-center p-12 md:p-24">
      <h1 className="text-4xl font-bold mb-12">My Skills</h1>

      <div className="w-full max-w-5xl">
        {/* Frontend Skills */}
       /* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Frontend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {frontendSkills.map((skill) => (
              <SkillBox key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Backend Skills */}
       /* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {backendSkills.map((skill) => (
              <SkillBox key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Platforms */}
      /*  <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Platforms</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {platformSkills.map((skill) => (
              <SkillBox key={skill} name={skill} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SkillsPage;*/