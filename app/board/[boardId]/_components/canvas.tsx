"use client";

import Info, { InfoSkeleton } from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

export interface ICanvasProps {
  boardId: string;
}

export default function Canvas({ boardId }: ICanvasProps) {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  );
}
