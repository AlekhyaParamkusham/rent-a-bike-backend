const express = require("express");
const dealerController = require("./../controllers/dealerController");
const router = express.Router();

router
  .route("/")
  //   .get(dealerController.getAllDealers)
  .post(dealerController.createDealer);

router.route("/:id").get(dealerController.getDealer);
router.route("/").get(dealerController.getDealerByName);

module.exports = router;
