import { NavLink, useLocation } from "react-router-dom";

const HeroSection = () => {
  const location = useLocation(); // current route ka path milega

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-900">
            Luxury <span className="text-gray-900">Shopping</span>
          </a>

          {/* Links as Buttons */}
          <div className="hidden md:flex space-x-3 text-base font-medium">
            <NavLink
              to="/cloth"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-[#B58B58] text-black hover:bg-yellow-500"
                }`
              }
            >
              Cloth
            </NavLink>

            <NavLink
              to="/watches"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "bg-[#B58B58] text-black hover:bg-yellow-500"
                }`
              }
            >
              Watches
            </NavLink>
          </div>
        </div>
      </nav>

      {/* ✅ Static Image sirf home route par */}
      {location.pathname === "/" && (
        <div className="mt-16 w-full h-[500px] relative overflow-hidden">
          <img
            src="Header2.webp"
            alt="Hero Banner"
            className="w-full h-[500px] object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
