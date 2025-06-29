import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import NewVendor from "./pages/NewVendor";
import EditVendor from "./pages/EditVendor";

export default function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Private Routes Wrapper */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors/new" element={<NewVendor />} />
        <Route path="/vendors/edit/:id" element={<EditVendor />} />
      </Route>

      {/* Default Route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
