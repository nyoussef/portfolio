import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, className = '', target, rel }) => {
  return (
    <Link href={href} passHref target={target} rel={rel} className={`text-gray-700 hover:text-orange-400 font-bold cursor-pointer ${className}`}>
      {label}
    </Link>
  );
};

export default NavItem;