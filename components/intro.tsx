import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of computer" 
                width="200" 
                height="200" 
                priority={true}
                className="h-26 w-26 rounded-full object-cover border-[0.30rem] border-white shadow-xl"/>
            </div>
        </div>

        <h1 className="mb-10 mt-4 px-4 text-1xl font-medium leading-[1.5] sm:text-3xl">
            Hello, I'm Maria Vo. I am a{" "}
            student at IIT learning{" "}
            to become a front-end web developer. My focus is{" "}
            <span className="underline">HTML, CSS, and JavaScript.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
            <Link href="#contact" className="group bg-pink-200 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-pink-500 active:scale-105 transition">Contact Me Here
            </Link>
            <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer" href="/Resume.pdf" download>Download Resume <HiDownload /></a>
        </div>
    </section>
  )
}
