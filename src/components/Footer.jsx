import PageHeader from "../components/PageHeader";

export default function Footer() {
  return (
    <footer className="bg-hijau text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sedap</h2>
          <p className="text-sm">
            The best food delivery service that brings tasty and fresh meals
            right to your doorstep.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@sedap.com</li>
            <li>Phone: +62 812-3456-7890</li>
            <li>Location: Jakarta, Indonesia</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl hover:text-gray-200"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-xl hover:text-gray-200"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl hover:text-gray-200"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-white/20 text-sm">
        &copy; {new Date().getFullYear()} Sedap. All rights reserved.
      </div>
    </footer>
  );
}
