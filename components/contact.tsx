import React from 'react';
import SectionHeading from './section-heading';

export default function Contact() {
  return (
    <section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" id="contact">
        <SectionHeading>Contact Me</SectionHeading>
        <p>
            Contact me directly at <a className="underline" href="mailto:mvo1@hawk.iit.edu">mvo1@hawk.iit.edu</a>{" "}
            or through this form.
        </p>

        <form className="mt-10 flex flex-col">
            <input className="h-14 rounded-lg" type="email" />
            <textarea className="h-52 my-3 rounded-lg"/>
            <button className="bg-pink-200" type="submit">Submit</button>
        </form>
    </section>
  )
}
