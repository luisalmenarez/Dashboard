'use client';

import { SidebarItemsProps } from './Sidebar.types';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const SidebarItem = (props: SidebarItemsProps) => {
  const { item } = props;
  const { href, icon: Icon, label } = item;
  const pathname = usePathname();

  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer',
        activePath && 'bg-slate-400/20'
      )}
    >
      <Icon className="size-5" strokeWidth={1} />
      {label}
    </Link>
  );
};
