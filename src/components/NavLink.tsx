import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

export function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
      >
        {icon}
        <span>{children}</span>
      </a>
    </li>
  );
}