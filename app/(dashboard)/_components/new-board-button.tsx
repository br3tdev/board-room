"use client";

import * as React from "react";

import { api } from "@/convex/_generated/api";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { useApiMutation } from "@/hooks/use-api-mutation";

export interface INewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export default function NewBoardButton({
  orgId,
  disabled,
}: INewBoardButtonProps) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        // TODO: Redirect to board id
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed",
      )}
    >
      <div className="" />
      <Plus className="text-white h-12 w-12 stroke-1" />
      <p className="text-white text-sm font-light">Create new board</p>
    </button>
  );
}
