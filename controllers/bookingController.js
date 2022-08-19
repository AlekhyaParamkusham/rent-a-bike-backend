const Bike = require("./../models/bikesModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getFiltered = catchAsync(async (req, res, next) => {
  const filters = req.query;
  const queryObj = { ...filters };
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  const filtered = await Bike.find(JSON.parse(queryStr));

  res.status(201).json({
    status: "success",
    results: filtered.length,
    data: {
      filtered,
    },
  });
});

exports.updateBooking = catchAsync(async (req, res, next) => {
  const bikeId = req.params.id;

  const bookedBike = await Bike.findByIdAndUpdate(
    bikeId,
    {
      $set: { isAvailable: false },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: bookedBike,
  });
});
