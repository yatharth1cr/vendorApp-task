import React from "react";
import { createVendor } from "../api";
import VendorForm from "../components/VendorForm";
import { useNavigate } from "react-router-dom";

export default function NewVendor() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add Vendor</h2>
      <VendorForm
        onSubmit={(data) =>
          createVendor(data).then(() => navigate("/dashboard"))
        }
      />
    </div>
  );
}
