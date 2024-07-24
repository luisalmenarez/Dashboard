'use client';

import { Separator } from '@/components/ui/separator';
import { SidebarItem } from '@/components/SidebarItems';
import {
  dataSidebar,
  dataToolsSidedar,
  dataSupportSidebar,
} from './SidebarRoutes.data';
import { Button } from '@/components/ui/button';

export const SidebarRoutes = () => {
  return (
    <aside className="flex flex-col justify-between h-full">
      <section>
        <article className="md:p-6 p-2">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </article>

        <Separator />

        <article className="md:p-6 p-2">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidedar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </article>

        <Separator />

        <article className="md:p-6 p-2">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </article>
      </section>

      <article>
        <div className="p-6 text-center">
          <Button variant="outline" className="w-full">
            Upgrade{' '}
          </Button>
        </div>

        <Separator />

        <footer className="p-3 mt-3 text-center">
          2024 All rights reserved
        </footer>
      </article>
    </aside>
  );
};
