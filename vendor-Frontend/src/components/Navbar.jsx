import React from "react";
import { logout } from "../api";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <nav>
      <span>Welcome, {user.displayName}</span>
      <Link to="/vendors/new">+ Add Vendor</Link>
      <button onClick={() => logout().then(() => (window.location = "/login"))}>
        Logout
      </button>
    </nav>
  );
}
