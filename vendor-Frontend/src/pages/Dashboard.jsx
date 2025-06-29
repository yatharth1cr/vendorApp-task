import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar";
import VendorList from "../components/VendorList";

export default function Dashboard() {
  const { user } = useOutletContext();

  return (
    <>
      <Navbar user={user} />
      <h1>Vendors</h1>
      <VendorList />
    </>
  );
}
