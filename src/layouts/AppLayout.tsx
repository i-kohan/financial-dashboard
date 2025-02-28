import { ReactNode, useState } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export const AppLayout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block">
        <Sidebar isOpen />
      </div>

      <div
        className={`bg-opacity-50 fixed inset-0 z-40 transition-opacity lg:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden bg-gray-100">
        <Header
          pageTitle={pageTitle}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto w-full max-w-[770px] p-6 2xl:max-w-[1158px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
