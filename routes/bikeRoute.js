const express = require("express");

const bikeController = require("./../controllers/bikeController");

const router = express.Router();

router
  .route("/")
  .get(bikeController.getAllBikes)
  .post(bikeController.createBike);

router.route("/dealerInfo").get(bikeController.getDealerInfo);
router.route("/:id").get(bikeController.getBike);

module.exports = router;
