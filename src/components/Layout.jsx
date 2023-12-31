import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-12 min-h-screen w-full bg-gray-100">
        <Navbar />
        <main className="mt-6 px-10">{children}</main>
      </div>
    </div>
  );
}
