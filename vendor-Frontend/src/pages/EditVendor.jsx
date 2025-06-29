import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUser, updateVendor } from "../api";
import VendorForm from "../components/VendorForm";
import api from "../api"; // ensure correct path

export default function EditVendor() {
  const { id } = useParams(); // instead of match.params.id
  const navigate = useNavigate(); // instead of history
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    fetchUser(); // ensure you're logged in
    api
      .get(`/vendors/${id}`)
      .then((res) => setInitial(res.data))
      .catch((err) => {
        console.error(
          "Error loading vendor:",
          err.response?.data || err.message
        );
      });
  }, [id]);

  return initial ? (
    <>
      <h2>Edit Vendor</h2>
      <VendorForm
        initialValues={initial}
        onSubmit={(data) =>
          updateVendor(initial._id, data).then(() => navigate("/dashboard"))
        }
      />
    </>
  ) : (
    <div>Loading...</div>
  );
}
