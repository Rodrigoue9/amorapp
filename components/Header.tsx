
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                  ${isActive ? 'bg-cyan-500 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  
  return (
    <header className={`bg-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-700 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              Dev<span className="text-white">HQ</span>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/produto">Produto</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
