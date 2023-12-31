import { BellIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="sticky mt-6 px-6">
      <div className="flex items-center justify-between rounded-lg bg-white px-5 py-2 shadow-lg shadow-gray-200">
        <div className="text-lg font-bold uppercase">
          Mentaya <span className="font-normal">Dev</span>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="">
            <MoonIcon className="h-5" />
          </button>
          <button className="">
            <BellIcon className="h-5" />
          </button>
          <img
            src="https://images.unsplash.com/profile-1701288904654-10480ab1f99eimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
