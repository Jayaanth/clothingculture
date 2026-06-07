import {
  useState
} from "react";

import {
  Link,
  NavLink
} from "react-router-dom";

import {
  Menu,
  X
} from "lucide-react";

import {
  useBranding
} from "../../context/BrandingContext";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const {
    branding
  } = useBranding();

  const closeMenu = () => {
    setOpen(false);
  };

  return (

    <header
      className="navbar"
    >

      <div
        className="container navbar-container"
      >

<Link
  to="/"
  className="navbar-logo"
>

  {branding?.logo && (

    <img
      src={`${import.meta.env.VITE_API_BASE}${branding.logo}`}
      alt="ClothingCulture"
    />

  )}

  <span>
    ClothingCulture
  </span>

</Link>

        <nav
          className="navbar-links"
        >

          <NavLink
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
          >
            Catalog
          </NavLink>

          <NavLink
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
          >
            Contact
          </NavLink>

        </nav>

        <Link
          to="/catalog"
          className="navbar-cta"
        >
          Explore
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() =>
            setOpen(!open)
          }
        >

          {open
            ? <X size={28}/>
            : <Menu size={28}/>
          }

        </button>

      </div>

      {open && (

        <div
          className="mobile-menu"
        >

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            onClick={closeMenu}
          >
            Catalog
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </div>

      )}

    </header>

  );

}