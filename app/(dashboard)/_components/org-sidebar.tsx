'use client';

import * as React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutDashboard, Star } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Poppins({ subsets: ['latin'], weight: ['600'] });

export interface IOrgSidebarProps {}

export default function OrgSidebar(props: IOrgSidebarProps) {
  const searchParams = useSearchParams();
  const favourites = searchParams.get('favourites');

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href={'/'}>
        <div className="flex items-center gap-x-2">
          <Image src={'/logo.svg'} width={60} height={60} alt="logo" />
          <span className={cn('font-semibold text-2xl', font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              aligncontent: 'center',
              width: '100%',
            },
            organizationSwitcherTrigger: {
              padding: '6px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
            },
          },
        }}
      />
      <div className="w-full space-y-1">
        <Button
          asChild
          variant={favourites ? 'ghost' : 'secondary'}
          size={'lg'}
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={'/'}>
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Team Boards
          </Link>
        </Button>
        <Button
          asChild
          variant={favourites ? 'secondary' : 'ghost'}
          size={'lg'}
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: '/',
              query: { favourites: true },
            }}
          >
            <Star className="w-4 h-4 mr-2" />
            Favourite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
}
