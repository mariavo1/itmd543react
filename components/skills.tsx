import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:bm-40">
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg">
            {skillsData.map((skill, index) => (
                <li className="bg-white rounded-xl px-5 py-3" key={index}>{skill}</li>
            ))}
        </ul>
    </section>
  )
}
