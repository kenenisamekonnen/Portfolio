import React, { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[var(--color-card-bg)] text-[var(--color-text)] py-4 px-4 sm:px-6 lg:px-8 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Brand Name */}
        <a href="#" className="text-xl font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
          KENENISA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-[var(--color-primary)] transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-primary)] transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-[var(--color-primary)] transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-[var(--color-primary)] transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] focus:outline-none focus:text-[var(--color-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // Close Icon (X)
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger Icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-card-bg)] shadow-lg py-4 z-40">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#about" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[var(--color-primary)] transition-colors">About</a></li>
            <li><a href="#projects" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[var(--color-primary)] transition-colors">Projects</a></li>
            <li><a href="#skills" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[var(--color-primary)] transition-colors">Skills</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[var(--color-primary)] transition-colors">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header