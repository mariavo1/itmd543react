import Header from "@/components/header";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'This is my portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className='bg-yellow-100 absolute top-[-9rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]'></div>
        <div className='bg-lime-100 absolute top-[-1rem] -z-10 left-[-10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]'></div>
        
        <Header />
        {children}
        </body>
    </html>
  )
}
