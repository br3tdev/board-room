import { Skeleton } from "@/components/ui/skeleton";

export interface IParticipantsProps {}

export default function Participants(props: IParticipantsProps) {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      List of users
    </div>
  );
}

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute w-[100px] h-12 top-2 right-2 bg-neutral-300 rounded-md p-3 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-neutral-300" />
    </div>
  );
};
