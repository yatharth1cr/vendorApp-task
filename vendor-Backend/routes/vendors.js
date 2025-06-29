const router = require("express").Router();
const Vendor = require("../models/Vendor");

// Create new vendor
router.post("/", (req, res) => {
  const vendor = new Vendor(req.body);
  vendor
    .save()
    .then((saved) => res.status(201).json(saved))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to create vendor", details: err.message })
    );
});

// Get vendors with pagination
router.get("/", (req, res) => {
  Vendor.find()
    .then((vendors) => res.json(vendors))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to fetch vendors", details: err.message })
    );
});

// This must be placed *after* the `GET "/"` route
router.get("/:id", (req, res) => {
  Vendor.findById(req.params.id)
    .then((vendor) => {
      if (!vendor) return res.status(404).json({ error: "Vendor not found" });
      res.json(vendor);
    })
    .catch((err) =>
      res.status(500).json({ error: "Fetch error", details: err.message })
    );
});

// Update vendor
router.put("/:id", (req, res) => {
  Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updated) => {
      if (!updated) return res.status(404).json({ error: "Vendor not found" });
      res.json(updated);
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to update vendor", details: err.message })
    );
});

// Delete vendor
router.delete("/:id", (req, res) => {
  Vendor.findByIdAndDelete(req.params.id)
    .then((deleted) => {
      if (!deleted) return res.status(404).json({ error: "Vendor not found" });
      res.status(204).end();
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to delete vendor", details: err.message })
    );
});

module.exports = router;
