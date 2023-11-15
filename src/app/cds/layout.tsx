import Navigation from "@/components/layout/cds/navigation";
import TableOfContent from "@/components/layout/cds/table-content";
import { TableofcontentStateProvider } from "@/context/TableContentContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex pt-16 max-w-screen-xl justify-center w-full mx-auto">
      <TableofcontentStateProvider>
        <aside className="hidden md:flex min-w-[256px] w-64 h-full sticky top-16 left-0 right-0">
          <div className="w-full h-[calc(100vh-64px)] overflow-y-auto p-4">
            <div>
              <Navigation />
            </div>
          </div>
        </aside>
        <main className="flex flex-col md:flex w-full h-full px-6 md:px-12 py-4">
          {children}
        </main>
        <nav className="hidden xl:flex min-w-[256px] w-64 h-full sticky top-16 right-0">
          <TableOfContent />
        </nav>
      </TableofcontentStateProvider>
    </div>
  );
};

export default Layout;
