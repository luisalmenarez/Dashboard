'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Logo = () => {
  const router = useRouter();

  return (
    <article
      className="min-h-20 flex items-center gap-2 px-6 border-b cursor-pointer"
      onClick={() => router.push('/')}
    >
      <Image
        src="/logo.svg"
        alt="Logo Dashboard"
        width={30}
        height={30}
        priority
      />
      <h1 className="text-xl font-bold">Dashboard</h1>
    </article>
  );
};
