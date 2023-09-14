import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import { QueryProvider } from "../_providers/query-provider";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      <div className="p-4 bg-light-grey">
        <QueryProvider>{children}</QueryProvider>
      </div>
    </section>
  );
}
