const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
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

app.get("/getAllStay", async function (req, res) {
  let resultend;
  let response;
  try {
    resultend = await findimg();
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

//app.get for no of stays in main filter
app.get("/count", async function (req, res) {
  const noOfStays = await findDocuments();
  res.status(200).send({ noOfStays });
});

//post method

app.get("/", async function (req, res) {
  // const { region, Checkin, Checkout, GuestDetail } = req.body;

  const regionName = req.body.region;
  const result = filterStays(regionName);
  res.send(result);
});

//app.post getstaybyfilter
app.post("/getStayByFilter", async function (req, res) {
  let resultend = await filterStays(req.body.region);

  const response = {
    status: "OK",
    result: resultend.filteredloc,
    count: resultend.countstay,
    error: null,
  };
  res.status(200).send(response);
});

//app.post  pricefilter

app.post("/pricefilter", async function (req, res) {
  try {
    console.log(req.body);
    let filters = await priceFilters(req.body);
    const response = {
      status: "OK",
      result2: filters.filterPriceloc,
      count2: filters.count,
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
          $match: {
            "images.picture_url": { $exists: true },
            "address.street": { $exists: true },
            "review_scores.review_scores_accuracy": { $exists: true },
            price: { $gt: parseInt(filters.minPrice), $lt: parseInt(filters.maxPrice) },
            "address.country": filters.region,
          },
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
    //count doucmnet need the match components to count the data, if you pass filterpriceloc it will throw error.
    const count = await collection.countDocuments({
      "images.picture_url": { $exists: true },
      "address.street": { $exists: true },
      "review_scores.review_scores_accuracy": { $exists: true },
      price: { $gt: parseInt(filters.minPrice), $lt: parseInt(filters.maxPrice) },
      "address.country": filters.region,
    });
    return { count, filterPriceloc };
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
    const countstay = await collection.countDocuments(match);
    //  console.log(countstay);
    return { countstay, filteredloc };
  } catch (Err) {
    console.log(Err);
    return Err;
  }
}

// count the total stays available
async function findDocuments() {
  try {
    // In countdocuments {} species empty array which count all the obj in collection
    const result = await collection.countDocuments({});
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

//retrieving images and rating from DB and calculating distance

async function findimg() {
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

    return styimg;
  } catch (Err) {
    return Err;
  }
}

app.listen(8082, function () {
  console.log("server up and running in 8082");
});
