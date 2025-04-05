import React from 'react'


const Project = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-bg)] to-[var(--color-accent)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-[var(--color-primary)]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="group bg-[var(--color-card-bg)] rounded-lg overflow-hidden border border-[var(--color-card-border)] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden">
              <img
                src= "/assets/e-commerce.jpg" // E-commerce image
                alt="E-commerce Platform"
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">E-commerce platform</h3>
              <p className="text-sm mb-4 opacity-90">
                built an E-commerce fullstack using Java(sprng boot)for backend and javascript(react) fro frontend
              </p>
              <div className="flex space-x-3">
                <a href="#" className="btn-primary py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
                  Live Demo
                </a>
                <a href="#" className="border border-[var(--color-card-border)] py-2 px-4 rounded-lg hover:border-[var(--color-primary)] transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group bg-[var(--color-card-bg)] rounded-lg overflow-hidden border border-[var(--color-card-border)] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden">
              <img
                src="/assets/movie.jpg" // Movie website image
                alt="Movie Website"
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">Movie imdb website</h3>
              <p className="text-sm mb-4 opacity-90">
                Movie Website in which you can see imdb of any movie outthere used Javascript or React
              </p>
              <div className="flex space-x-3">
                <a href="#" className="btn-secondary py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
                  Live Demo
                </a>
                <a href="#" className="border border-[var(--color-card-border)] py-2 px-4 rounded-lg hover:border-[var(--color-secondary)] transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group bg-[var(--color-card-bg)] rounded-lg overflow-hidden border border-[var(--color-card-border)] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden">
              <img
                src="/assets/DevLinked.jpg" // DevLinked image
                alt="DevLinked Project"
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">DevLinked</h3>
              <p className="text-sm mb-4 opacity-90">
                A FullStack All in one Web App built using Node.js/expres.js for backend and mySQL or Sequalize for Database and used react and tailwind css for frontend
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-[var(--color-accent)] text-white py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
                  Live Demo
                </a>
                <a href="#" className="border border-[var(--color-card-border)] py-2 px-4 rounded-lg hover:border-[var(--color-accent)] transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project