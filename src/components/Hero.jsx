import React, { useEffect, useState } from 'react'
import Project from './Project';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-bg)] to-[var(--color-accent)] opacity-10 animate-gradient"></div>
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-80 h-80 bg-[var(--color-secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 mt-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className='text-[var(--color-accent)] font-bold text-3xl mb-4 animate-fadeIn'>
            Welcome To my Portfolio
          </h1>
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn animation-delay-500">
            Hi, I'm Kenenisa Mekonnen <span className="text-[var(--color-primary)]">|</span> Aspiring Full Stack Developer
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fadeIn animation-delay-1000">
            A passionate and creative Full stack developer based in Adama, Oromia, Ethiopia.
            I am eager to build impactful and user-friendly web applications.
          </p>
          <button className="btn-primary text-lg px-8 py-3 
              rounded-full animate-fadeIn animation-delay-1500 
              hover:scale-105 transition-all duration-300"
              >
            <li className='list-none hover:scale-105 transition-all duration-300'><a href="#projects" className="">View My Projects</a></li>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero