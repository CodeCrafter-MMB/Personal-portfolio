import React from 'react'
import developerImg from '../assets/developer.ef097afb.svg'
import { Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-8 mt-8 animate-fadeIn">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-left leading-tight">
          HI, I Am M.Mubashir
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          A Front-End Developer 
        </p>
        <a
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-lg font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 shadow-sm mt-4"
          download
        >
          <Download size={20} /> Download CV
        </a>
      </div>
      {/* Right: Illustration */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img src={developerImg} alt="Developer Illustration" className="max-w-[480px] w-full h-auto" />
      </div>
    </section>
  )
}

export default Hero
