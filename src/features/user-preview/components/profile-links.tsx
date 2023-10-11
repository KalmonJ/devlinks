import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/features/profile-detail/lib/get-user";
import { getServerSession } from "@/lib/session";

export const ProfileLinks = async () => {
  // const user =  await getUser(session?.user._id)

  return (
    <div className="flex flex-col">
      <Avatar></Avatar>
    </div>
  );
};
