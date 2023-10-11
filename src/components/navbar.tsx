import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, Link as LinkIcon, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { getServerSession } from "@/lib/session";

export const Navbar = () => {
  const session = getServerSession();

  return (
    <nav className="flex bg-white py-4 pr-4 pl-6 rounded-xl items-center justify-between">
      <Image
        src="/solar_link-circle-bold.svg"
        alt="devlinks logo"
        width={32}
        height={32}
      />
      <div className="flex">
        <Link href="/management">
          <Button
            className="focus:bg-light-purple focus-visible:bg-light-purple group"
            variant="secondary"
          >
            <LinkIcon
              width={20}
              className="group-focus:text-purple group-focus-visible:text-purple text-grey"
              height={20}
            />
          </Button>
        </Link>
        <Link href="/profile">
          <Button className="focus:bg-light-purple group" variant="link">
            <UserCircle2 className="group-focus:text-purple group-focus-visible:text-purple text-grey" />
          </Button>
        </Link>
      </div>
      <Link
        href={{ pathname: "/preview", query: { id: session?.user._id ?? "" } }}
      >
        <Button variant="outline" size="sm">
          <Eye className="text-purple" />
        </Button>
      </Link>
    </nav>
  );
};
