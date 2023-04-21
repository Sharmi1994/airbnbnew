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
  const noOfStays = await findDocuments();

  const styimges = await findimg();
  console.log(styimges);
  res.status(200).send({ noOfStays, styimges });
});

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

//retrieving images and rating from DB

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
        { $limit: 300 },
      ])
      .toArray();
    return styimg;
  } catch (Err) {
    console.log(Err);
    return Err;
  }
}

app.listen(8082, function () {
  console.log("server up and running in 8082");
});
