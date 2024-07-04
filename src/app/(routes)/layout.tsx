export const LayoutDashboard = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <section className="flex w-full h-full">
      <nav>Sidebar</nav>
      <article>{children}</article>
    </section>
  );
};
