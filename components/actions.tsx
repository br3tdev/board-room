'use client';

import * as React from 'react';

import { api } from '@/convex/_generated/api';
import { useRenameModal } from '@/store/use-rename-modal';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { Link2, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { useApiMutation } from '@/hooks/use-api-mutation';
import ConfirmModal from '@/components/confirm-modal';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export interface IActionsProps {
  id: string;
  title: string;
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffset?: DropdownMenuContentProps['sideOffset'];
}

export default function Actions({
  id,
  title,
  children,
  side,
  sideOffset,
}: IActionsProps) {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onCopyClick = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link copied!'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const onDeleteClick = () => {
    mutate({
      id,
    })
      .then(() => toast.success('Board deleted!'))
      .catch(() => toast.error('Failed to delete board'));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className="w-60"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyClick}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename board
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and all of its contents."
          disabled={pending}
          onConfirm={onDeleteClick}
        >
          <Button
            variant={'ghost'}
            className="text-sm w-full justify-start font-normal p-3 cursor-pointer"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
