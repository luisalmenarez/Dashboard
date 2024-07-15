'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center text-xl mb-4">
      <ArrowLeft
        className="mr-2 size-5 cursor-pointer hover:shadow-2xl"
        onClick={() => router.push('/companies')}
      />
      Edit company
    </div>
  );
};
