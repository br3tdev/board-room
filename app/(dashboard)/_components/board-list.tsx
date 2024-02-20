import * as React from 'react';

import EmptyBoards from './empty-boards';
import EmptyFavourites from './empty-favourites';
import EmptySearch from './empty-search';

export interface IBoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export default function BoardList({ orgId, query }: IBoardListProps) {
  const data = []; // TODO: change to API call

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
}
