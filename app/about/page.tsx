import Image from "next/image";

export default function About() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24 md:flex-row">
      <div className="shrink-0 mb-8 md:mb-0 md:mr-8">
        <Image
          src="/image/profile.jpg"
          alt="About Me"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center text-black md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg mt-4">This is the about page. Here I will tell you about myself. My passion lies in exploring and mastering the latest technologies to create powerful, forward-thinking solutions. I am a recent computer science graduate eager to find an internship and a full-stack web development job.</p>
      </div>
    </main>
  );
}