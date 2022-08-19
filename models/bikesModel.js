const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const BikeSchema = new mongoose.Schema(
  {
    modelName: {
      type: String,
      required: [true, "Bike's model name"],
      unique: true,
    },
    modelImage: {
      type: String,
      required: [true, "Bike's model image"],
    },

    city: { type: String, required: true },
    location: { type: String, required: true },
    year: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    vehicleType: { type: String, required: true },
    mileage: { type: Number, required: true },
    fuelType: { type: String, required: true },
    basePrice: { type: Number, required: true },
    excessKms: { type: Number, required: true },
    chargePerHr: { type: Number, required: true },
    description: { type: String, required: true },
    dealerInfo: { type: String, required: true },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Bike = mongoose.model("Bike", BikeSchema);
module.exports = Bike;
