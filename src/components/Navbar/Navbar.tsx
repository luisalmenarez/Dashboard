import { Input, Sheet, SheetContent, SheetTrigger } from '@/components/ui';
import { UserButton } from '@clerk/nextjs';
import { Menu, Search } from 'lucide-react';
import { SidebarRoutes } from '@/components/SidebarRoutes';
import { ToggleTheme } from '@/components/ToggleTheme';

export const Navbar = () => {
  return (
    <nav className="gap-x-4 md:px-6 bg-background flex items-center justify-between w-full h-20 px-2 border-b">
      <section className="xl:hidden block">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </section>
      <section className="relative w-[300px]">
        <Input placeholder="Search..." className="rounded-lg" />
        <Search strokeWidth={1} className="top-2 right-2 absolute" />
      </section>
      <section className="gap-x-2 flex items-center">
        <ToggleTheme />
        <UserButton />
      </section>
    </nav>
  );
};
