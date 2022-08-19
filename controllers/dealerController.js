const Dealer = require("./../models/dealerModel");
const Bike = require("./../models/bikesModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllDealers = catchAsync(async (req, res, next) => {
  const dealers = await Dealer.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: dealers.length,
    data: {
      dealers,
    },
  });
});

exports.getDealer = catchAsync(async (req, res, next) => {
  const dealer = await Dealer.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      dealer,
    },
  });
});

exports.getDealerByName = catchAsync(async (req, res, next) => {
  const filters = req.query;
  const queryObj = { ...filters };
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  const filtered = await Dealer.find(JSON.parse(queryStr));

  res.status(200).json({
    status: "success",
    data: {
      filtered,
    },
  });
});

exports.createDealer = catchAsync(async (req, res, next) => {
  const newDealer = await Dealer.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newDealer,
    },
  });
});
