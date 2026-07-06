import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import nav1 from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply this logic for mobile view (<= 767px)
      if (window.innerWidth > 767) {
        setIsVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goHomeAndScroll = (id) => {
    setMenuOpen(false); // Close drawer automatically
    if (location.pathname !== "/") {
      navigate("/");
      // wait for Home to render
      setTimeout(() => scrollTo(id), 80);
      return;
    }
    scrollTo(id);
  };

  const getLinkClass = (path) => {
    return `nav-link ${location.pathname === path ? "nav-link--active" : ""}`;
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close drawer automatically
  };

  return (
    <div className={`navbar-wrap ${!isVisible ? "navbar-hidden" : ""}`}>
      {/* Semi-transparent dark overlay */}
      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      ></div>

      <nav className="navbar navbar-local-container">
        <div className="nav-left">
          <img className="navimg" src={nav1} alt="CredKarma" />
        </div>

        {/* Slide-in navigation drawer */}
        <div ref={menuRef} className={`nav-center ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button type="button" className={getLinkClass("/")} onClick={() => goHomeAndScroll("about")}>
                Home
              </button>
            </li>

            <li>
              <Link className={getLinkClass("/communities")} to="/communities" onClick={handleLinkClick}>
                Communities
              </Link>
            </li>

            <li>
              <Link className={getLinkClass("/volunteers")} to="/volunteers" onClick={handleLinkClick}>
                Volunteers
              </Link>
            </li>

            <li>
              <Link className={getLinkClass("/corporate")} to="/corporate" onClick={handleLinkClick}>
                Corporate
              </Link>
            </li>

            <li>
              <Link className={getLinkClass("/donations")} to="/donations" onClick={handleLinkClick}>
                Donations
              </Link>
            </li>

            <li>
              <Link className={getLinkClass("/impact")} to="/impact" onClick={handleLinkClick}>
                Impact
              </Link>
            </li>

            <li>
              <Link className={getLinkClass("/about")} to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="mobile-support-btn-container">
              <button type="button" className="support-btn" onClick={() => goHomeAndScroll("donation")}>
                <span className="btn-text">Request Support</span>
                <span className="btn-arrow">
                  <img className="navarrow" src={arrow} alt="" />
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <button type="button" className="support-btn" onClick={() => goHomeAndScroll("donation")}>
            <span className="btn-text">Request Support</span>
            <span className="btn-arrow">
              <img className="navarrow" src={arrow} alt="" />
            </span>
          </button>

          <button
            ref={hamburgerRef}
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
