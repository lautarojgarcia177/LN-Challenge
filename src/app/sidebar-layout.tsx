import type React from "react";
export default function SidebarLayout({
  main,
  aside,
}: {
  main: React.ReactNode;
  aside: React.ReactNode;
}) {
  return (
    <div className="lay-sidebar">
      <div className="sidebar__main">{main}</div>
      <div className="sidebar__aside">{aside}</div>
    </div>
  );
}
