import { auth } from '@clerk/nextjs';
import { Calendar } from './components/Calendar';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function TasksPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
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
    <section>
      <Calendar companies={companies} events={events} />
    </section>
  );
}
