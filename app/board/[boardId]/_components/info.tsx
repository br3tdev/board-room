"use client";

import { Skeleton } from "@/components/ui/skeleton";

export interface IInfoProps {}

export default function Info(props: IInfoProps) {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      TODO: Info ABOUT THIS BOARD
    </div>
  );
}

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 rounded-md bg-neutral-300 px-1.5 h-12 flex items-center shadow-md w-[300px]">
      <Skeleton className="h-full w-full bg-neutral-300" />
    </div>
  );
};
