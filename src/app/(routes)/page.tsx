import { UserButton } from '@clerk/nextjs';
import { BookOpenCheck, UsersRound, Waypoints } from 'lucide-react';
import { CardSummary } from './components/CardSummary';

export default function Home() {
  const cardData = [
    {
      icon: UsersRound,
      total: '12.450',
      average: 15,
      title: 'Companies Created',
      tooltipText: 'See all of the companies created',
    },
    {
      icon: Waypoints,
      total: '86.5%',
      average: 80,
      title: 'Total Revenue',
      tooltipText: 'See all of the summary',
    },
    {
      icon: BookOpenCheck,
      total: '$ 363.95',
      average: 30,
      title: 'Bounce Rate',
      tooltipText: 'See all of the Bounce Rate',
    },
  ];

  return (
    <main>
      <UserButton />
      <h2>Dashboard</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {cardData.map(({ icon, total, average, title, tooltipText }) => (
          <CardSummary
            key={title}
            icon={icon}
            total={total}
            average={average}
            title={title}
            tooltipText={tooltipText}
          />
        ))}
        <article>Card Summary</article>
      </section>
    </main>
  );
}
