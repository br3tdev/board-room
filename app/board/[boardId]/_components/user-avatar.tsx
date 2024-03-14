import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Hint from "@/components/hint";

export interface IUserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export default function UserAvatar({
  src,
  name,
  fallback,
  borderColor,
}: IUserAvatarProps) {
  return (
    <Hint label={name || "Teammate"} side="bottom" sideOffset={10}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
}
