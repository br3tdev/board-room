import * as React from 'react';

import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface IFooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavourite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function Footer({
  title,
  authorLabel,
  createdAtLabel,
  isFavourite,
  onClick,
  disabled,
}: IFooterProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };

  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate max-w-[calc(100%-20px)]">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          'opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600',
          disabled && 'cursor-not-allowed opacity-75',
        )}
      >
        <Star
          className={cn(
            'h-5 w-5',
            isFavourite && 'fill-blue-600 text-blue-600',
          )}
        />
      </button>
    </div>
  );
}
