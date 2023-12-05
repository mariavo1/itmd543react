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
            <input className="h-14 rounded-lg px-4" 
            type="email" 
            required
            maxLength={200}
            placeholder="Your email example@gmail.com"/>
            
            <textarea className="h-52 my-3 rounded-lg p-4" 
            required
            maxLength={500}
            placeholder="Write your message here"/>
            
            <button className="bg-pink-200 hover:bg-pink-500 p-4 mt-3 rounded-full text-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer" 
            type="submit">Submit</button>
        </form>
    </section>
  )
}
