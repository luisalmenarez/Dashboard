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
    <article>
      <h2>Dashboard</h2>
      <article className="md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 grid grid-cols-1 gap-3">
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
      </article>
    </article>
  );
}
