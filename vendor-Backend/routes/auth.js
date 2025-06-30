const router = require("express").Router();
const passport = require("passport");

// Redirect to Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Handle Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect:
      `${process.env.CLIENT_URL}/dashboard` || "http://localhost:5173",
    failureRedirect: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

// Logout user
router.get("/logout", (req, res) => {
  req.logout(function () {
    res.redirect(process.env.CLIENT_URL || "http://localhost:5173");
  });
});

// Get current user info
router.get("/user", (req, res) => {
  res.send(req.user || null);
});

module.exports = router;
