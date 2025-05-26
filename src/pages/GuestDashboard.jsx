import PageHeader from "../components/PageHeader";

export default function GuestDashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />

      {/* Hero Section - 2 kolom sejajar */}
      <div className="p-4 mt-4">
        <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center p-6">
          {/* Kolom kiri: teks */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0 md:pr-6">
            <h2 className="text-3xl font-bold text-hijau mb-4">
              The best restaurant in your home
            </h2>
            <p className="text-gray-600 mb-6">
              Enjoy delicious meals with convenience. Sedap brings quality food
              right to your doorstep with love and taste.
            </p>
            <button className="bg-hijau text-white px-6 py-2 rounded-lg text-lg">
              Order Now
            </button>
          </div>

          {/* Kolom kanan: gambar */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="/img/quickeat.png"
              alt="Restaurant Banner"
              className="rounded-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 3 Card */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
           How Its Work
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
              <img
                src="/img/1.png"
                alt="Special 1"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">01. Select Restaurant</h4>
              <p className="text-gray-600">
                Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
              <img
                src="/img/2.png"
                alt="Special 2"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">02. Select Menu</h4>
              <p className="text-gray-600">
                Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
              <img
                src="/img/3.png"
                alt="Special 3"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">03. Wait for delivery</h4>
              <p className="text-gray-600">
                Grilled to perfection with fresh toppings.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
