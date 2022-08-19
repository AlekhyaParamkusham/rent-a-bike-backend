const express = require("express");

const bookingController = require("./../controllers/bookingController");

const router = express.Router();

router.route("/").get(bookingController.getFiltered);
router.route("/:id").patch(bookingController.updateBooking);

module.exports = router;
