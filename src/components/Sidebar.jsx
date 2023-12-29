import { HomeIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="fixed min-h-screen w-12 bg-slate-700 text-white">
      <h2>Si</h2>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <HomeIcon className="w-4" />
        <HomeIcon className="w-4" />
        <HomeIcon className="w-4" />
      </div>
    </div>
  );
}
