import { Navbar } from "@/components/navbar";
import { LinksProvider } from "@/features/link-management/context";
import { getServerSession } from "@/lib/session";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const session = getServerSession();

  return (
    <section>
      <Navbar />
      <div className="p-4 bg-light-grey">
        <LinksProvider links={[]}>{children}</LinksProvider>
      </div>
    </section>
  );
}
