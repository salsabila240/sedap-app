// import ListMenu from "../components/ListMenu";
import GuestMenu from "../components/GuestMenu";

export default function Sidebar() {

    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
                        Sedap <b id="logo-dot" className="text-green-400">.</b>
                    </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <ListMenu/>
        
            {/* Footer */}
        
        </div>
    );
}