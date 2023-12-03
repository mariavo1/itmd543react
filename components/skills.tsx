import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';

export default function Skills() {
  return (
    <section>
        <SectionHeading>My skills</SectionHeading>
        <ul>
            {skillsData.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </section>
  )
}
