import { HeroForm } from '@/components/form';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function Home()  {
  return (
    <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="text-4xl font-bold">Welcome to the Next.js Starter Kit 👋</h1>
      <p className="text-lg">This is a starter kit for Next.js with TypeScript, Kinde Auth, Tailwind CSS, and Jest.</p>
    </section>
  );
};