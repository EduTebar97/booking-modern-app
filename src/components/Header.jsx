import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LogoImage from '../assets/images/GLOOVE_marca_tagline_blanco.png'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Header = ({ head, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBookNowClick = () => {
    window.location.href = "https://gloove-test.vercel.app/login";
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div id="logo" className="cursor-pointer" onClick={handleLogoClick}>
              <img
                className="h-12 w-auto"
                src={LogoImage}
                alt="Gloove Logo"
              />
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link to="/" className="text-gray-800 hover:text-teal-600 text-lg font-medium">
              Inicio
            </Link>
            <Link to="/booking" className="text-gray-800 hover:text-teal-600 text-lg font-medium">
              Reservas
            </Link>
            <Link to="/tour" className="text-gray-800 hover:text-teal-600 text-lg font-medium">
              Experiencias
            </Link>
            <a href="https://gloove.me/sobre-nosotros/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-teal-600 text-lg font-medium">
              Sobre nosotros
            </a>
            <a href="https://gloove.me/blog/" className="text-gray-800 hover:text-teal-600 text-lg font-medium" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
            <a href="https://gloove.me/contacto/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-teal-600 text-lg font-medium">
              Contacto
            </a>
            <button
              className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md text-lg font-medium flex items-center"
              onClick={handleBookNowClick}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2"
              />
              Mi cuenta
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-teal-600 focus:outline-none focus:text-teal-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-800 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
             <Link
              to="/booking"
              className="text-gray-800 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
               onClick={toggleMenu}
            >
              Reservas
            </Link>
            <Link
              to="/tour"
              className="text-gray-800 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
               onClick={toggleMenu}
            >
              Experiencias
            </Link>
            <a href="https://gloove.me/sobre-nosotros/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Sobre nosotros
            </a>
            <a href="https://gloove.me/blog/" className="text-gray-800 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              Blog
            </a>
            <a href="https://gloove.me/contacto/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu} >
              Contacto
            </a>
             <button
              className="text-white bg-teal-600 hover:bg-teal-700 block w-full px-3 py-2 rounded-md text-base font-medium"
               onClick={handleBookNowClick}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2"
              />
              Mi cuenta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;