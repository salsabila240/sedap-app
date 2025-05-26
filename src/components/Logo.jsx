import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Logo() {
return (
  <div id="sidebar-logo" className="flex flex-col">
    <span
      id="logo-title"
      className="font-poppins-extrabold text-[48px] text-gray-900"
    >
      Sedap{" "}
      <b id="logo-dot" className="text-green-400">
        .
      </b>
    </span>
    <span id="logo-subtitle" className="font-semibold text-gray-400">
      Modern Admin Dashboard
    </span>
  </div>
);
}