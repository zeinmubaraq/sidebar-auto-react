export default function SidebarLink({ href, children }) {
  return (
    <a href={href} className="flex items-center gap-x-3 py-2 text-lg">
      {children}
    </a>
  );
}
