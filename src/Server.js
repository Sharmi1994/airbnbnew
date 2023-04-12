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

app.get("/", async function (req, res) {

  const noOfStays=  await findDocuments();
  console.log(noOfStays);
  res.status(200).send(noOfStays.toString());
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

async function findDocuments() {
  try{
    const uri = process.env.MongoURI;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    //connected to mongoDB
    client.connect();
    console.log("Connected to mongodb");
    const database = client.db("sample_airbnb");
    const collection = database.collection("listingsAndReviews");
    // In countdocuments {} species empty array which count all the obj in collection
    const result = await collection.countDocuments({});
  return result;
  }
  catch(err){
    console.log(err);
    return err;

  }

}


app.listen(8082, function () {
  console.log("server up and running in 8082");
});
