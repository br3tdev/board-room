'use client';

import * as React from 'react';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

import BoardCard from './board-card';
import EmptyBoards from './empty-boards';
import EmptyFavourites from './empty-favourites';
import EmptySearch from './empty-search';
import NewBoardButton from './new-board-button';

export interface IBoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export default function BoardList({ orgId, query }: IBoardListProps) {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return (
      <div className="">
        <h2 className="text-3xl">
          {query.favourites ? 'Favourites boards' : 'Team boards'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div className="">
      <h2 className="text-3xl">
        {query.favourites ? 'Favourites boards' : 'Team boards'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}
