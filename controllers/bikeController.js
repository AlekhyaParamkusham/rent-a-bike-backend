const Bike = require("./../models/bikesModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Dealer = require("./../models/dealerModel");

exports.getAllBikes = catchAsync(async (req, res, next) => {
  const bikes = await Bike.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: bikes.length,
    data: {
      bikes,
    },
  });
});

exports.getBike = catchAsync(async (req, res, next) => {
  const bike = await Bike.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      bike,
    },
  });
});

exports.createBike = catchAsync(async (req, res, next) => {
  const newBike = await Bike.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newBike,
    },
  });
});

exports.getDealerInfo = catchAsync(async (req, res, next) => {
  // const bike = await Bike.findById(req.params.id);
  const dInfo = await Dealer.aggregate([
    {
      $lookup: {
        from: "Bike",
        localField: "dealerName",
        foreignField: "dealerInfo",
        as: "DealerDetails",
      },
    },
  ]);
  res.status(200).json({
    status: "success",
  });
});
