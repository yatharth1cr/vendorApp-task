import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUser, updateVendor } from "../api";
import VendorForm from "../components/VendorForm";

export default function EditVendor() {
  const { id } = useParams(); // instead of match.params.id
  const navigate = useNavigate(); // instead of history
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    fetchUser(); // make sure user is logged in
    fetch(`/vendors/${id}`)
      .then((res) => res.json())
      .then(setInitial);
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
