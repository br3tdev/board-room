'use client';

import * as React from 'react';

import { api } from '@/convex/_generated/api';
import { useRenameModal } from '@/store/use-rename-modal';
import { toast } from 'sonner';

import { useApiMutation } from '@/hooks/use-api-mutation';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';

export interface IRenameModalProps {}

export default function RenameModal(props: IRenameModalProps) {
  const { mutate, pending } = useApiMutation(api.board.update);

  const { isOpen, onOpen, onClose, initialValues } = useRenameModal();

  const [title, setTitle] = React.useState(initialValues.title);

  React.useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast.success('Board renamed!');
        onClose();
      })
      .catch(() => toast.error('Failed to rename board'));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit the board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={'outline'}>
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
