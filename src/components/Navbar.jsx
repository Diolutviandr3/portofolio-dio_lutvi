import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <Link
        to="/"
        className={location.pathname === "/" ? "active" : ""}
      >
        Beranda
      </Link>
      <Link
        to="/projects"
        className={location.pathname === "/projects" ? "active" : ""}
      >
        Proyek
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        Kontak Saya
      </Link>
    </nav>
  );
}

export default Navbar;