"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavItem from "../../molecules/nav-item/NavItem";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full p-4 flex justify-between items-center md:px-8">
      <Link href="/" passHref>
        <span className="text-2xl font-bold text-orange-400 cursor-pointer">Portfolio</span>
      </Link>

      {/* Menu pour écrans larges */}
      <div className="hidden md:flex space-x-4 items-center">
        <NavItem label="Accueil" href="/" />
        <NavItem label="Projets" href="/projects" />
        <NavItem label="Contact" href="/contact" />
        <NavItem label="CV" href="/CV Youssef Nazeer.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-400 hover:bg-orange-500 hover:text-white text-white font-semibold rounded cursor-pointer" />
      </div>

      {/* Bouton de menu pour petits écrans */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Menu déroulant pour petits écrans */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center space-y-4 py-4 md:hidden">
          <NavItem label="Accueil" href="/" />
          <NavItem label="Projets" href="/projects" />
          <NavItem label="Contact" href="/contact" />
          <NavItem label="CV" href="/CV Youssef Nazeer.pdf" target="_blank" rel="noopener noreferrer" />
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
