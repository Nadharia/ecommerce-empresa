// Nav.jsx
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseLink = 'p-4 rounded-xl transition duration-500 ease-in-out';
  const mobileLink = 'text-white hover:text-blue-400';
  const desktopLink = 'text-white hover:bg-gray-800';
  const linkClass = `${baseLink} ${isOpen ? mobileLink : desktopLink}`;

  return (
    <nav className="fixed top-0 right-0 w-screen h-20 flex items-center justify-between px-6 md:px-20  bg-opacity-90 z-50 shadow-md">
      <h2 className="text-white text-4xl md:text-5xl font-bold">
        solu<span className="text-blue-400">it</span>
      </h2>

      <button
        className="text-white p-6 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul
        className={`
          fixed top-20 left-0 w-full md:static md:w-auto
          flex flex-col md:flex-row gap-4 p-6 md:p-0
          transition-all duration-300 ease-in-out transform
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto z-40 shadow-xl border-t border-gray-700' : 'opacity-0 -translate-y-2 pointer-events-none'}
          md:opacity-100 md:translate-y-0 md:pointer-events-auto md:flex md:z-auto
        `}
      >
        <li><a onClick={() => setIsOpen(false)} href="#Nosotros" className={linkClass}>Nosotros</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#Objetivo" className={linkClass}>Nuestra Misión</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#Contacto" className={linkClass}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
