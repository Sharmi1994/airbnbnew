const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//connected to mongoDB
const uri = process.env.MongoURI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect();
console.log("Connected to mongodb");
const database = client.db("sample_airbnb");
const collection = database.collection("listingsAndReviews");

app.get("/", async function (req, res) {
  res.status(200).send("OK");
});

//totalcount
app.get("/count", async function (req, res) {
  let response;
  try {
    const totalcount = await collection.countDocuments();
    response = {
      status: "OK",
      result: totalcount,
      error: null,
    };
  } catch (err) {
    response = {
      status: "NOT OK",
      result: null,
      error: err,
    };
  }
  res.send(response);
});

app.get("/getAllStay", async function (req, res) {
  let resultend;
  let response;

  try {
    resultend = await findimg(req.query.pageNo || 0);
    response = {
      status: "OK",
      result: resultend,
      error: null,
    };
  } catch (err) {
    console.error(err);
    response = {
      status: "Error",
      result: null,
      error: err,
    };
    res.status(400).send(response);
  }

  res.status(200).send(response);
});

//app.post getstaybyfilter
app.post("/getStayByFilter", async function (req, res) {
  let response;
  try {
    let resultend = await filterStays(req.body.region);

    response = {
      status: "OK",
      result: resultend,
      error: null,
    };

    res.status(200).send(response);
  } catch (err) {
    response = {
      status: "NOT OK",
      result: null,
      error: err,
    };
    res.status(400).send(response);
  }
});

//app.post  pricefilter

app.post("/pricefilter", async function (req, res) {
  try {
    let filters = await priceFilters(req.body);
    const response = {
      status: "OK",
      result2: filters,
      error: null,
    };

    res.status(200).send(response);
  } catch (err) {
    const response = {
      status: "NOT OK",
      result: null,
      error: err,
    };
    res.status(400).send(response);
  }
});

async function priceFilters(filters) {
  const match = {
    "images.picture_url": { $exists: true },
    "address.street": { $exists: true },
    "review_scores.review_scores_accuracy": { $exists: true },
  };
  if (filters?.region) {
    match["address.country"] = filters.region;
  }
  if (filters?.minPrice) {
    match["price"] = {
      $gt: parseInt(filters.minPrice),
    };
  }
  if (filters?.maxPrice) {
    match["price"] = {
      $lt: parseInt(filters.maxPrice),
    };
  }
  if (filters?.roomtype && filters?.roomtype?.length > 0) {
    match["room_type"] = { $in: [...filters.roomtype] };
  }
  if (filters?.bedroom) {
    match["bedrooms"] = parseInt(filters.bedroom);
  }
  if (filters?.bed) {
    match["beds"] = parseInt(filters.bed);
  }
  if (filters?.bathroom) {
    const bathroom = parseFloat(filters.bathroom).toFixed(1);
    match["bathrooms"] = {
      $gte: parseFloat(bathroom),
    };
  }

  if (filters?.Propertytype && filters?.Propertytype?.length > 0) {
    match["property_type"] = { $in: [...filters.Propertytype] };
  }
  if (filters?.Ammenty && filters?.Ammenty?.length > 0) {
    match["amenities"] = { $all: [...filters.Ammenty] };
  }
  console.log(match);

  try {
    const filterPriceloc = await collection
      .aggregate([
        {
          $geoNear: {
            near: { type: "Point", coordinates: [-81.254601, 19.313299] },
            distanceField: "stayDistance",
            maxDistance: 1500000000,
            spherical: true,
          },
        },
        {
          $match: match,
        },

        {
          $project: {
            "images.picture_url": 1,
            "address.street": 1,
            "review_scores.review_scores_accuracy": 1,
            price: 1,
            stayDistance: 1,
            _id: 0,
            room_type: 1,
            beds: 1,
            bathrooms: 1,
            bedrooms: 1,
            property_type: 1,
            amenities: 1,
          },
        },
        {
          $sort: {
            "images.picture_url": -1,
            "address.street": -1,
            "review_scores.review_scores_accuracy": -1,
            price: -1,
            stayDistance: -1,
            room_type: -1,
            beds: -1,
            bathrooms: -1,
            bedrooms: -1,
            property_type: -1,
            amenities: -1,
          },
        },
        { $skip: 0 },
        { $limit: 500 },
      ])
      .toArray();

    return filterPriceloc;
  } catch (err) {
    console.log(err);
  }
}

//function to filter location
async function filterStays(region) {
  const match = {
    "images.picture_url": { $exists: true },
    "address.street": { $exists: true },
    "review_scores.review_scores_accuracy": { $exists: true },
    price: { $exists: true },
  };
  //verify if region exists then it will match the address field else it will be ignored
  if (region) {
    match["address.country"] = region;
  }
  try {
    const filteredloc = await collection
      .aggregate([
        {
          $geoNear: {
            near: { type: "Point", coordinates: [-81.254601, 19.313299] },
            distanceField: "stayDistance",
            maxDistance: 1500000000,
            spherical: true,
          },
        },
        {
          $match: match,
        },

        {
          $project: {
            "images.picture_url": 1,
            "address.street": 1,
            "review_scores.review_scores_accuracy": 1,
            price: 1,
            stayDistance: 1,
            _id: 0,
          },
        },
        {
          $sort: {
            "images.picture_url": -1,
            "address.street": -1,
            "review_scores.review_scores_accuracy": -1,
            price: -1,
            stayDistance: 1,
          },
        },
        { $skip: 20 },
        { $limit: 500 },
      ])
      .toArray();

    return filteredloc;
  } catch (Err) {
    console.log(Err);
    return Err;
  }
}

//retrieving images and rating from DB and calculating distance

async function findimg(pageNo) {
  try {
    const styimg = await collection
      .aggregate([
        {
          $geoNear: {
            near: { type: "Point", coordinates: [-81.254601, 19.313299] },
            distanceField: "stayDistance",
            maxDistance: 1500000000,
            spherical: true,
          },
        },
        {
          $match: {
            "images.picture_url": { $exists: true },
            "address.street": { $exists: true },
            "review_scores.review_scores_accuracy": { $exists: true },
            price: { $exists: true },
          },
        },

        {
          $project: {
            "images.picture_url": 1,
            "address.street": 1,
            "review_scores.review_scores_accuracy": 1,
            price: 1,
            stayDistance: 1,
            _id: 1,
          },
        },
        {
          $sort: {
            "images.picture_url": -1,
            "address.street": -1,
            "review_scores.review_scores_accuracy": -1,
            price: -1,
            stayDistance: 1,
            _id:-1
          },
        },
        { $skip: 20 }, //
        { $limit: 500 }, // page size
      ])
      .toArray();

    return styimg;
    
  } catch (Err) {
    return Err;
  }
}

app.listen(8082, function () {
  console.log("server up and running in 8082");
});
