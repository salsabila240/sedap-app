import { useNavigate } from "react-router-dom";

export default function PageHeader() {
  const navigate = useNavigate();

  return (
    <header className="w-full flex items-center justify-between px-10 py-6 bg-grey border-b border-grey-200">
      <div className="text-4xl font-bold text-hijau">Sedap.</div>
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="/guestdashboard" className="hover:text-hijau transition">
          Home
        </a>
        <a href="/about" className="hover:text-hijau transition">
          About
        </a>
        <a href="/product" className="hover:text-hijau transition">
          Top Product
        </a>
        <a href="/testi" className="hover:text-hijau transition">
          Testimoni
        </a>
      </nav>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-hijau hover:bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="border border-hijau text-hijau hover:bg-green-100 px-5 py-2 rounded-lg"
        >
          Register
        </button>
      </div>
    </header>
  );
}
