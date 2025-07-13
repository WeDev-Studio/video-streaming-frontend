import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-zinc-900 text-white h-full p-4 flex flex-col space-y-4">
      <Link href="/" className="text-xl font-bold mb-4">
        Video Streaming
      </Link>
      <nav className="flex flex-col space-y-2">
        <Link href="/">Home</Link>
        <Link href="/upload">Upload</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
