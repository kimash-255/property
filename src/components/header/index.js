import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header class="main-header">
      <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            {/* <!-- Logo Start --> */}
            <Link class="navbar-brand" href="/">
              <img src="images/logo.svg" alt="Logo" />
            </Link>
            {/* <!-- Logo End --> */}

            {/* <!-- Main Menu start --> */}
            <div class="collapse navbar-collapse main-menu">
              <ul class="navbar-nav mr-auto" id="menu">
                <li class="nav-item submenu">
                  <Link class="nav-link" href="./">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/about">
                    About us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/listing">
                    Listing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/property-single">
                    Property
                  </Link>
                </li>
                <li class="nav-item submenu">
                  <Link class="nav-link" href="#">
                    Pages
                  </Link>
                  <ul>
                    <li class="nav-item">
                      <Link class="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/blog-single">
                        Blog Single
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/agents">
                        Agents
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/faq">
                        FAQs
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/404">
                        404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/contact">
                    Contact us
                  </Link>
                </li>
                <li class="nav-item highlighted-menu">
                  <Link class="nav-link" href="#">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Main Menu End --> */}

            <div class="navbar-toggle"></div>
          </div>
        </nav>

        <div class="responsive-menu"></div>
      </div>
    </header>
  );
};
export default Header;
