import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto bg-black text-white p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
