import React from 'react';
import SectionHeading from './section-heading';
import { FaGithubSquare } from "react-icons/fa";

export default function Projects() {
  return (
    <section>
        <SectionHeading>My projects</SectionHeading>

        <p>
            All my projects can be found on my Github Page. Just click the link below.
        </p>

        <a
          className="bg-pink-200 p-4 mt-10 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mariavo1?tab=repositories"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
    </section>
    
  );
}
