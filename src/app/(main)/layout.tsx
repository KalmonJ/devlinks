import { Navbar } from "@/components/navbar";
import { LinksProvider } from "@/features/link-management/context";
import { getAllLinks } from "@/features/link-management/lib/get-all-links";
import { getServerSession } from "@/lib/session";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = getServerSession();
  const [response] = await getAllLinks(session!.user.id);

  return (
    <section>
      <Navbar />
      <div className="p-4 bg-light-grey">
        <LinksProvider links={response.links}>{children}</LinksProvider>
      </div>
    </section>
  );
}
