import React from "react";
import { logout } from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout failed:", err.response?.data || err.message);
      });
  };

  return (
    <nav>
      <span>Welcome, {user.displayName}</span>
      <Link to="/vendors/new">+ Add Vendor</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
