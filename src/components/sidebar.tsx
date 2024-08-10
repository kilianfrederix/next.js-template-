"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

import { Icons } from '@/components/icons';

function IconWrapper({ children, label, isActive, navigateTo, expanded }) {
  return (
    <Link href={navigateTo} className={`flex space-x-2 px-2 py-2 my-2 hover:bg-green-100 rounded-md cursor-pointer ${isActive ? 'bg-green-200 drop-shadow-lg' : ''}`}>
      {children}
      <span className={`${expanded ? 'inline' : 'hidden'} text-sm text-muted-foreground`}>{label}</span>
    </Link>
  );
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname()

  // Functie om te bepalen of een icoon actief is
  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={`bg-white fixed drop-shadow-xl inset-y-0 left-0 z-30 flex flex-col transition-width duration-300 ease-in-out ${expanded ? 'w-48' : 'w-16'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={`flex flex-col justify-between h-full px-4`}>
        <div>
          <div className='border-b mb-6'>
            {/* Placeholder for logo */}
            <div className="h-9 w-9 bg-gray-200 hover:bg-green-100 rounded-full mt-3 mb-3 flex items-center space-x-2 p-2 my-2">
              <Icons.logo className="text-black h-12 w-12" size={48}/>
            </div>
          </div>
        
          {/* We gebruiken de `isActive` functie om te controleren of de route overeenkomt */}
          <IconWrapper label="Dashboard" isActive={isActive('/')} navigateTo="/" expanded={expanded}>
            <Icons.dashboard className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          </IconWrapper>

          <IconWrapper label="Payouts" isActive={isActive('/payouts')} navigateTo="/payouts" expanded={expanded}>
            <Icons.payouts className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          </IconWrapper>
          
          <IconWrapper label="Mapping" isActive={isActive('/mapping')} navigateTo="/mapping" expanded={expanded}>
            <Icons.mapping className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          </IconWrapper>
        </div>

        {/* De pagina voor profiel zou bijvoorbeeld '/profile' kunnen zijn */}
        <IconWrapper label="Profile" isActive={isActive('/profile')} navigateTo="/profile" expanded={expanded}>
          <Icons.user className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
        </IconWrapper>
      </div>
    </div>
  );
}
