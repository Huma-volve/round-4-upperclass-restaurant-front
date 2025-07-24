import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="font-chillax bg-[#050505] text-[rgba(255,255,255,.6)] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 text-sm text-gray-300">
        {/* Left: Logo and credits (full width on small screens) */}
        <div className="space-y-4 col-span-2 sm:col-span-1 md:col-span-1 text-center lg:text-left">
          <div className="mb-4">
            <a href="/" className="text-white text-[32px] font-bold">
              nique.
            </a>
          </div>
          <p>
            By <span className="text-[#face8d]">Powel Colo.</span>
            <br />
            Powered by <span className="text-[#face8d]">Webflow</span>
          </p>
        </div>

        {/* Middle: Pages (second column on small screens) */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurant</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/book">Book a Table</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        {/* Right: Utility Pages (third column on small screens) */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4">Utility Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/styleguide">Styleguide</Link>
            </li>
            <li>
              <Link to="/licensing">Licensing</Link>
            </li>
            <li>
              <Link to="/changelog">Changelog</Link>
            </li>
            <li>
              <Link to="/404">404 Page</Link>
            </li>
            <li>
              <Link to="/password">Password Protected</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
