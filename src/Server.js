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
  const noOfStays = await findDocuments();

  const styimges = await findimg();

  res.status(200).send({noOfStays, styimges});
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
      .find({ "images.picture_url": { $exists: true } },{"address.street":{$exists:true}})
      .project({ "images.picture_url": 1, "address.street":1, _id: 0 })
      .sort({ "images.picture_url": -1, "address.street":-1 })
      .limit(20)
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
