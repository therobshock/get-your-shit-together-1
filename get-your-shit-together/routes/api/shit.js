const router = require("express").Router();
const shitController = require("../../controllers/shitController");

// Matches with "/api/books"
router.route("/")
  .get(shitController.findAll)
  .post(shitController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(shitController.findById)
  .put(shitController.update)
  .delete(shitController.remove);

module.exports = router;
