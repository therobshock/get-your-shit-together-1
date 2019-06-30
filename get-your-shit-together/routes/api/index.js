const router = require("express").Router();
const shitRoutes = require("./shit");
const userRoutes = require("./user")

// Shit routes
router.use("/shits", shitRoutes);
router.use("/users", userRoutes);

module.exports = router;
