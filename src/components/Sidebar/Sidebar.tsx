import { Logo } from '@/components/Logo';
import { SidebarRoutes } from '@/components/SidebarRoutes';

export const Sidebar = () => {
  return (
    <aside className="h-screen">
      <section className="flex flex-col h-full border-r">
        <Logo />
        <SidebarRoutes />
      </section>
    </aside>
  );
};
