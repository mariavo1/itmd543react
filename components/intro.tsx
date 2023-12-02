import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of computer" 
                width="192" 
                height="192" 
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.30rem] border-white shadow-xl"/>
            </div>
        </div>

        <p className="mb-10 mt-4 px-4 text-1xl font-medium leading-[1.5] sm:text-3xl">
            Hello, I'm Maria Vo. I am a{" "}
            student at IIT learning{" "}
            to become a front-end web developerMy focus is{" "}
            <span className="underline">HTML, CSS, and JavaScript.</span>
        </p>
    </section>
  )
}
