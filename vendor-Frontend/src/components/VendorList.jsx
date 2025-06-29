import React, { useEffect, useState } from "react";
import { getVendors, deleteVendor } from "../api";
import { Link } from "react-router-dom";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendors().then((res) => setVendors(res.data.vendors || res.data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete vendor?")) {
      deleteVendor(id).then(() =>
        getVendors().then((res) => setVendors(res.data.vendors || res.data))
      );
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Account #</th>
            <th>Bank</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((v) => (
            <tr key={v._id}>
              <td>{v.name}</td>
              <td>{v.bankAccountNo}</td>
              <td>{v.bankName}</td>
              <td>
                <Link to={`/vendors/edit/${v._id}`}>Edit</Link> |{" "}
                <button onClick={() => handleDelete(v._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
