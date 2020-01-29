const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
// const path = require("path");
// const jwt = require("jsonwebtoken");
const cors = require("cors");

//MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/img", express.static(__dirname + "/img"));

app.get("/", function(request, response) {
    const user = {};
    response.json(user);
  });

//Recuppération des images

app.get("/api/clothing", (req, res) => {
    connection.query("SELECT * from products", (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des users");
      } else {
        res.json(results);
      }
    });
  });







  app.listen(port, err => {
    if (err) {
      throw new Error("Something bad happened...");
    }
  
    console.log(`Server is listening on ${port}`);
  });
  