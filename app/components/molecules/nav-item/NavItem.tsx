import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, className = '' }) => {
  return (
    <Link href={href} passHref>
      <span className={`text-gray-700 hover:text-orange-400 font-bold cursor-pointer ${className}`}>
        {label}
      </span>
    </Link>
  );
};

export default NavItem;