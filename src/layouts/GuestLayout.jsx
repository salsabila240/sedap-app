import GuestMenu from "../components/GuestMenu";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar/Menu */}
      <aside className="w-64 bg-white shadow p-6 hidden md:block">
        <GuestMenu />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
