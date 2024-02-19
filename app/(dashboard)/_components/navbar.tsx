'use client';

import * as React from 'react';

import { UserButton } from '@clerk/nextjs';

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* TODO: Add search */}</div>
      <div className="">
        <UserButton />
      </div>
    </div>
  );
}
