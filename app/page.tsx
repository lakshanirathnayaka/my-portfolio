import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-8 p-4 md:flex-row md:justify-between md:p-24 bg-cover bg-center">
      <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center md:text-left">
        <h1 className="text-7xl font-bold text-black">Hello!</h1>
        <h1 className="text-7xl font-bold font-xl text-black">I'm Lakshani</h1>
        <div className="text-lg mt-4 text-black">My passion lies in exploring and mastering the latest technologies to create powerful, forward-thinking solutions.</div>
        <div className="flex space-x-4 mt-8">
          <Link href="/projects">
            <button className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
              View My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/image/profile.jpg"
          alt="Next.js Logo"
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
}
