import * as React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export interface IToolbarProps {}

export default function Toolbar(props: IToolbarProps) {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Ellipses</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
}

export const ToolbarSkeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-neutral-300 shadow-md rounded-md h-[360px] w-[52px]">
      <Skeleton className="h-full w-full bg-neutral-300" />
    </div>
  );
};
