const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const DealerSchema = new mongoose.Schema(
  {
    dealerName: {
      type: String,
      required: [true, "Dealer's name"],
    },
    joinedYear: { type: Number, required: true },
    gender: { type: String, required: true },
    dealerLocation: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

const Dealer = mongoose.model("Dealer", DealerSchema);
module.exports = Dealer;
