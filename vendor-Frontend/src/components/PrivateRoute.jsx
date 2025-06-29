import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { fetchUser } from "../api";

export default function PrivateRoute() {
  const [auth, setAuth] = useState({ loading: true, user: null });

  useEffect(() => {
    fetchUser()
      .then((res) => setAuth({ loading: false, user: res.data }))
      .catch(() => setAuth({ loading: false, user: null }));
  }, []);

  if (auth.loading) return <div>Loading...</div>;

  return auth.user ? (
    <Outlet context={{ user: auth.user }} />
  ) : (
    <Navigate to="/login" />
  );
}
