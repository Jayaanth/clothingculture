import {
  LogOut
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

export default function Topbar({
  title
}) {

  const navigate =
    useNavigate();

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate(
      "/admin/login"
    );

  };

  return (

    <header
      className="admin-topbar"
    >

      <h1>
        {title}
      </h1>

      <button
        className="
        logout-btn
        "
        onClick={logout}
      >

        <LogOut
          size={18}
        />

        Logout

      </button>

    </header>

  );

}