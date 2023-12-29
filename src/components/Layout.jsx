import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-12 bg-red-300">{children}</main>
    </div>
  );
}
