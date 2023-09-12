import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, Link, UserCircle2 } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex bg-white py-4 pr-4 pl-6 rounded-xl items-center justify-between">
      <Image
        src="/solar_link-circle-bold.svg"
        alt="devlinks logo"
        width={32}
        height={32}
      />
      <div className="flex">
        <Button variant="secondary">
          <Link width={20} className="text-purple" height={20} />
        </Button>
        <Button variant="link">
          <UserCircle2 className="text-grey" />
        </Button>
      </div>
      <Button variant="outline" size="sm">
        <Eye className="text-purple" />
      </Button>
    </nav>
  );
};
