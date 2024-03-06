import { Room } from "@/components/room";

import Canvas from "./_components/canvas";
import Loading from "./_components/loading";

export interface IBoardIdPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardIdPage({ params }: IBoardIdPageProps) {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}
