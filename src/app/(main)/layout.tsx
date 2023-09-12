import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      <div className="p-4 bg-light-grey">{children}</div>
    </section>
  );
}
