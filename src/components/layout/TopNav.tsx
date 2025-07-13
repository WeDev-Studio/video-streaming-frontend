import Link from "next/link";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-900 px-6 py-3 border-b border-zinc-700">
      <input
        type="text"
        placeholder="Search..."
        className="bg-zinc-800 text-white px-4 py-2 rounded-md w-1/2"
      />
      <div className="flex items-center gap-4">
        {/* Replace with auth user avatar or button */}
        <Link href="/auth">
          <button className="bg-[#3D3D45] text-white px-4 py-2 rounded-md cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
