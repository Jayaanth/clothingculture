import {
  NavLink
} from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  Tags,
  Palette,
  MessageSquare
} from "lucide-react";

export default function Sidebar() {

  return (

    <aside
      className="sidebar"
    >

      <div
        className="
        sidebar-logo
        "
      >

        ClothingCulture

      </div>

      <nav
        className="
        sidebar-nav
        "
      >

        <NavLink
          to="/admin"
        >
          <LayoutDashboard />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
        >
          <Package />
          Products
        </NavLink>

        <NavLink
          to="/admin/categories"
        >
          <Tags />
          Categories
        </NavLink>

        <NavLink
          to="/admin/branding"
        >
          <Palette />
          Branding
        </NavLink>

        <NavLink
          to="/admin/inquiries"
        >
          <MessageSquare />
          Inquiries
        </NavLink>

      </nav>

    </aside>

  );

}