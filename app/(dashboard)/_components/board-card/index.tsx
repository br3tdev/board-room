import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { api } from '@/convex/_generated/api';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

import { useApiMutation } from '@/hooks/use-api-mutation';
import { Skeleton } from '@/components/ui/skeleton';
import Actions from '@/components/actions';

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

  const { mutate: onFavourite, pending: pendingFavourite } = useApiMutation(
    api.board.favourite,
  );

  const { mutate: onUnFavourite, pending: pendingUnfavourite } = useApiMutation(
    api.board.unfavourite,
  );

  const toogleFavourite = () => {
    if (isFavourite) {
      onUnFavourite({ id }).catch(() => toast.error('Failed to unfavourite'));
    } else {
      onFavourite({ id, orgId }).catch(() =>
        toast.error('Failed to favourite'),
      );
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt="Doodle" fill className="object-fill" />
          <Overlay />

          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>

        <Footer
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toogleFavourite}
          disabled={pendingFavourite || pendingUnfavourite}
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
