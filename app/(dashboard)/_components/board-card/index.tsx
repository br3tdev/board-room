import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';

import { Skeleton } from '@/components/ui/skeleton';

import Footer from './footer';
import Overlay from './overlay';

export interface IBoardCardProps {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavourite: boolean;
}

export default function BoardCard({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavourite,
}: IBoardCardProps) {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt="Doodle" fill className="object-fill" />
          <Overlay />
        </div>

        <Footer
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
