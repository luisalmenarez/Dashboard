import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { CompaniesChart } from './components/CompaniesChart';

export default async function PageAnalytics() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const events = await db.event.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <section className="bg-background shadow-md rounded-lg p-4">
      <h2 className="text-2xl mb-4"> Analytics Page </h2>
      <CompaniesChart companies={companies} events={events} />
    </section>
  );
}
