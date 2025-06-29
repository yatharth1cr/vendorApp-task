import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function VendorForm({ onSubmit, initialValues = {} }) {
  const formik = useFormik({
    initialValues: {
      name: initialValues.name || "",
      email: initialValues.email || "",
      bankAccountNo: initialValues.bankAccountNo || "",
      bankName: initialValues.bankName || "",
      addressLine1: initialValues.addressLine1 || "",
      addressLine2: initialValues.addressLine2 || "",
      city: initialValues.city || "",
      country: initialValues.country || "",
      zipCode: initialValues.zipCode || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      bankAccountNo: Yup.string().required("Bank account number is required"),
      bankName: Yup.string().required("Bank name is required"),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        placeholder="Vendor Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <div>{formik.errors.name}</div>
      )}

      <input
        name="email"
        placeholder="Vendor Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div>{formik.errors.email}</div>
      )}

      <input
        name="bankAccountNo"
        placeholder="Bank Account Number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bankAccountNo}
      />
      {formik.touched.bankAccountNo && formik.errors.bankAccountNo && (
        <div>{formik.errors.bankAccountNo}</div>
      )}

      <input
        name="bankName"
        placeholder="Bank Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bankName}
      />
      {formik.touched.bankName && formik.errors.bankName && (
        <div>{formik.errors.bankName}</div>
      )}

      <input
        name="addressLine1"
        placeholder="Address Line 1"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.addressLine1}
      />

      <input
        name="addressLine2"
        placeholder="Address Line 2"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.addressLine2}
      />

      <input
        name="city"
        placeholder="City"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />

      <input
        name="country"
        placeholder="Country"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
      />

      <input
        name="zipCode"
        placeholder="Zip Code"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.zipCode}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
