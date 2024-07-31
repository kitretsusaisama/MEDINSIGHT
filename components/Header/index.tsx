import Link from 'next/link';

const Header = () => (
  <header className="main-header">
    <div className="header-sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo Start */}
          <div className="header-logo">
            <Link href="/">
              <a className="navbar-brand">
                <img src="https://medinsight.vercel.app/images/logo.svg" alt="" />
              </a>
            </Link>
          </div>
          {/* Logo End */}

          {/* Main Menu Start */}
          <div className="collapse navbar-collapse main-menu">
            <div className="nav-menu-wrapper">
              <ul className="navbar-nav mr-auto" id="menu">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
                <li className="nav-item submenu">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                  <ul>
                    <li className="nav-item">
                      <Link href="/services-single">
                        <a className="nav-link">Service Single</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog-single">
                        <a className="nav-link">Blog Single</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/team">
                        <a className="nav-link">Our Team</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/team-single">
                        <a className="nav-link">Team Details</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/faqs">
                        <a className="nav-link">FAQs</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/404">
                        <a className="nav-link">404</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">Contact Us</a>
                  </Link>
                </li>
                <li className="nav-item highlighted-menu">
                  <Link href="/appointment">
                    <a className="nav-link">
                      Book Appointment <i className="fa-solid fa-calendar-days"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Menu End */}
          <div className="navbar-toggle"></div>
        </div>
      </nav>
      <div className="responsive-menu"></div>
    </div>
  </header>
);

export default Header;
