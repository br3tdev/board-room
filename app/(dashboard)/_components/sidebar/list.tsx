'use client';

import { truncate } from 'fs';
import * as React from 'react';

import { useOrganizationList } from '@clerk/nextjs';

import Item from './item';

export interface IListProps {}

export default function List(props: IListProps) {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => (
        <Item
          key={membership.organization.id}
          id={membership.organization.id}
          name={membership.organization.name}
          imageUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  );
}
