import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({
  title,
  children
}) {

  return (

    <div
      className="admin-layout"
    >

      <Sidebar />

      <div
        className="admin-main"
      >

        <Topbar
          title={title}
        />

        <div
          className="admin-content"
        >

          {children}

        </div>

      </div>

    </div>

  );

}