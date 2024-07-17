'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center text-xl mb-4">
      <ArrowLeft
        className="mr-2 size-5 rounded-xl cursor-pointer hover:shadow-2xl hover:bg-indigo-800 hover:text-white transition-all duration-500"
        onClick={() => router.push('/companies')}
      />
      Edit company
    </div>
  );
};
