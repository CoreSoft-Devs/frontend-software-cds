'use client'
import { HREF_CONTACT, HREF_EVENTS } from "@/assets/hrefs";
import Navigation from "@/components/layout/cds/navigation";
import TableOfContent from "@/components/layout/cds/table-content";
import { TableofcontentStateProvider } from "@/context/TableContentContext";
import { useParams, usePathname } from "next/navigation";

const notTableOfContent = [HREF_CONTACT, HREF_EVENTS]
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const params = useParams()

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
        <main className="flex flex-col md:flex w-full h-full px-6 xl:px-12 py-4 pb-12 z-0">
          {children}
        </main>
        {!notTableOfContent.includes(params.id ? pathname.substring(0, HREF_EVENTS.length) : pathname) &&
          <nav className="hidden xl:flex min-w-[256px] w-64 h-full sticky top-16 right-0">
            <TableOfContent />
          </nav>
        }
      </TableofcontentStateProvider>
    </div>
  );
};

export default Layout;
