import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[var(--color-primary)] via-[var(--color-bg)] to-[var(--color-secondary)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <h2 className="text-4xl font-bold mb-12 text-center animate-fadeIn">
          About <span className="text-[var(--color-primary)]">Me</span>
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <p className="text-lg opacity-90">
              Hello! My name is Kenenisa Mekonnen, currently studying Computer Science and Engineering at Adama Science and Technology University and I'm a passionate full-stack developer
            </p>
            <p className="text-lg opacity-90">
              My journey into the world of web development has been driven by a desire to create innovative and user-friendly digital solutions. I thrive on tackling complex challenges and building robust applications from the ground up, encompassing both the client-side and server-side aspects.
            </p>
            <p className="text-lg opacity-90">
              I am proficient in a range of technologies, and I'm always eager to expand my skillset and stay up-to-date with the latest industry trends.
            </p>
          </div>
          <div className="relative group max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/my-image.JPG"
                alt="my Profile"
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About