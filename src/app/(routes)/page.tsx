import { BookOpenCheck, UsersRound, Waypoints } from 'lucide-react';
import {
  LastCustomer,
  Salesdistributors,
  CardSummary,
  TotalSubscribers,
  ListIntegrations,
} from '@/app/(routes)/components/';

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
    <>
      <h2 className="text-2xl font-medium mb-5">Dashboard</h2>
      <section className="md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 grid grid-cols-1 gap-3">
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
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 gap-y-4 mt-12">
        <LastCustomer />
        <Salesdistributors />
      </section>

      <section className="flex flex-col xl:flex xl:flex-row gap-y-4 md:gap-x-5 mt-12 md:mb-10 justify-center">
        <TotalSubscribers />
        <ListIntegrations />
      </section>
    </>
  );
}
