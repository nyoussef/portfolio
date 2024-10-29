import React from "react";
import Link from "next/link";
import NavItem from "../../molecules/nav-item/NavItem";

const NavigationBar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full bg-gray-100 p-4 flex justify-between item-center">
      <Link href="/" passHref>
        <span className="text-2xl font-bold text-orange-400 cursor-pointer">Portfolio</span>
      </Link>

      <div className="flex space-x-4">
        <NavItem label="Accueil" href="/" />
        <NavItem label="Projets" href="/projects" />
        <NavItem label="Contact" href="/contact" />
      </div>
    </nav>
  );
};

export default NavigationBar;
