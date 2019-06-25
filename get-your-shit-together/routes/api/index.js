const router = require("express").Router();
const shitRoutes = require("./shit");

// Shit routes
router.use("/shit", shitRoutes);

module.exports = router;
