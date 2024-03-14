"use client";

import { useOthers, useSelf } from "@/liveblocks.config";

import { connectionIdToColor } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

import UserAvatar from "./user-avatar";

export interface IParticipantsProps {}

const MAX_SHOW_USERS = 2;

export default function Participants(props: IParticipantsProps) {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOW_USERS;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOW_USERS).map(({ connectionId, info }) => (
          <UserAvatar
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "T"}
            borderColor={connectionIdToColor(connectionId)}
          />
        ))}

        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0] || "T"}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOW_USERS} more`}
            fallback={`+${users.length - MAX_SHOW_USERS}`}
          />
        )}
      </div>
    </div>
  );
}

export const ParticipantsSkeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute w-[100px] h-12 top-2 right-2 bg-neutral-300 rounded-md p-3 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-neutral-300" />
    </div>
  );
};
