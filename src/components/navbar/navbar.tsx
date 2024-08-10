import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { ThemeToggle } from '@/components/navbar/theme-toggle';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import Image from 'next/image'
import { Icons } from '@/components/icons';

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full theme-gradient-lime">
      <div className="container ml-14 h-16 w-full flex flex-row flex-nowrap pt-4 pb-4">
        <div className="basis-1/2 justify-items-start pt-1">
          <div className='place-self-start text-xl font-bold leading-tight tracking-tighter'>Dashboard</div>
        </div>

        <div className="basis-1/4">

        </div>
      </div>
    </header>
  );
};
