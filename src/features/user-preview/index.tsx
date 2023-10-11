import { Button } from "@/components/ui/button";
import { getServerSession } from "@/lib/session";
import Link from "next/link";
import { ProfileLinks } from "./components/profile-links";

export const LinksPreview = () => {
  const session = getServerSession();

  return (
    <section className="flex flex-col">
      {session && (
        <div className="flex justify-between p-4 gap-4">
          <Link className="w-full" href="/management">
            <Button variant="outline">Back to Editor</Button>
          </Link>
          <Button variant="default" className="w-full">
            Share Link
          </Button>
        </div>
      )}
      <ProfileLinks />
    </section>
  );
};
