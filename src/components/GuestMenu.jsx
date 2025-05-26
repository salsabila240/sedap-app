import { Link } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";

export default function GuestMenu() {
  return (
    <nav className="space-y-4">
   
      <ul className="space-y-2">
        <li>
          <Link to="/GuestDashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <AiFillHome />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <AiFillInfoCircle />
            About
          </Link>
        </li>
        <li>
          <Link to="/product" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaProductHunt />
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}
