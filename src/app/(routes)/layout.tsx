import { Navbar } from '@/components/Navbar';

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <main className="flex w-full h-full">
      <aside className="xl:block w-80 xl:fixed hidden h-full">Sidebar</aside>

      <section className="xl:ml-80 w-full">
        <Navbar />
        <article className="p-6 bg-[#fafbfc] dark:bg-secondary">
          {children}
        </article>
      </section>
    </main>
  );
}
