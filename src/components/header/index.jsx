import { useState } from "react";
import { Link } from "react-router-dom";
import propertyData from "@/data/propertydata";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleSubmenu = () => setSubmenuOpen((prev) => !prev);

  return (
    <header className="main-header">
      <div className="header-sticky hide active">
        <nav className="py-2">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.svg" alt="Logo" className="h-8" />
            </Link>

            {/* Main Menu */}
            <div className="hidden lg:flex items-center space-x-6 main-menu">
              <ul className="flex space-x-6 text-sm font-medium" id="menu">
                <li>
                  <Link className="nav-link" to="./">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/listing">
                    Listing
                  </Link>
                </li>
                <li className="nav-item submenu">
                  <Link className="nav-link" to="#">
                    Property
                  </Link>
                  <ul>
                    {propertyData.map((property) => (
                      <li className="nav-item" key={property.slug}>
                        <Link
                          className="nav-link"
                          to={`/property/${property.slug}`}
                        >
                          {property.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item submenu">
                  <Link className="nav-link" to="#">
                    Pages
                  </Link>
                  <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog-single">
                        Blog Single
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/agents">
                        Agents
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/faq">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="highlighted-menu">
                  <Link
                    className="nav-link bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    to="/contact"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                aria-haspopup="true"
                role="button"
                tabIndex="0"
                className={`slicknav_btn focus:outline-none ${
                  isMobileMenuOpen ? "slicknav_open" : "slicknav_collapsed"
                }`}
              >
                <span className="sr-only">Open menu</span>
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-current"></span>
                  <span className="block w-6 h-0.5 bg-current"></span>
                  <span className="block w-6 h-0.5 bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="responsive-menu lg:hidden">
          <div className="slicknav_menu">
            <ul
              className={`slicknav_nav ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
              style={{ display: isMobileMenuOpen ? "block" : "none" }}
              aria-hidden={!isMobileMenuOpen}
              role="menu"
            >
              <li className="submenu slicknav_parent">
                <div
                  role="menuitem"
                  aria-haspopup="true"
                  tabIndex="-1"
                  className="slicknav_item slicknav_row"
                >
                  <Link className="nav-link" to="./" tabIndex="-1">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/about"
                  role="menuitem"
                  tabIndex="-1"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/listing"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Listing
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/property"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Property
                </Link>
              </li>

              {/* Submenu Toggle */}
              <li
                className={`nav-item submenu slicknav_parent ${
                  isSubmenuOpen ? "slicknav_open" : "slicknav_collapsed"
                }`}
              >
                <div
                  role="menuitem"
                  aria-haspopup="true"
                  tabIndex="-1"
                  className="slicknav_item slicknav_row cursor-pointer"
                  onClick={toggleSubmenu}
                >
                  <span className="nav-link flex items-center">
                    Pages{" "}
                    <span className="ml-1">{isSubmenuOpen ? "▾" : "▸"}</span>
                  </span>
                </div>

                {isSubmenuOpen && (
                  <ul
                    role="menu"
                    className="pl-4 mt-1 transition-all duration-300 ease-in-out"
                    aria-hidden="false"
                  >
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog" tabIndex="-1">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog" tabIndex="-1">
                        Blog Single
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/agents" tabIndex="-1">
                        Agents
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/faq" tabIndex="-1">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  className="nav-link"
                  to="/contact"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Contact us
                </Link>
              </li>
              <li className="highlighted-menu">
                <Link
                  className="nav-link"
                  to="#"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
