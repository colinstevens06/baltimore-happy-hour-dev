const router = require("express").Router();
const happyHourController = require("../../controllers/happyHourController");

// Matches with "/api/restaurants"
router.route("/")
  .get(happyHourController.findAll)

router
  .route("/:slug")
  .get(happyHourController.findBySlug)

module.exports = router;
