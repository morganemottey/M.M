const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// const http = require("http");
// const fs = require("fs");
// const multer = require("multer");
// const avatarUpload = multer({ storage: avatarStorage }).single("file");
// const imagesUpload = multer({ storage: imagesStorage }).array("files");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static('assets'));


//ROUTES : Partie Authentification

app.get("/", function(request, response) {
  const user = {};
  response.json(user);
});


app.post("/login", function(request, response) {
  console.log("login", request.body);
  const login = request.body.login;
  const password = request.body.password;
  if (login && password) {
    connection.query(
      "SELECT * FROM users WHERE login = ? AND password = ?",
      [login, password],
      function(error, results, fields) {
        console.log("result", results.length);
        if (results.length > 0) {
          jwt.sign(
            {
              user: {
                id: results[0].id,
                login: results[0].login,
                portfolio_id: results[0].portfolio_id
              }
            },
            "toto",
            // { expiresIn: '1500sec' },
            (err, token) => {
              console.log(err, token);
              response.json({ token });
            }
          );
        } else {
          response.status(403).send("Incorrect Username and/or Password!");
        }
      }
    );
  } else {
    response.status(403).send("Please enter Username and Password!");
  }
});

app.get("/api/products", verifyToken, (req, res) => {
  connection.query(" SELECT * from portfolio", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error 500");
    } else {
      res.json(results);
    }
  });
});
//Verfication du token
function verifyToken(req, res, next) {
  console.log(req.headers.authorizaton);
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  jwt.verify(token, "toto", (err, payload) => {
    if (err) {
      console.log(err);
      res.sendStatus(401);
    } else {
      req.user = payload.user;
      console.log(req.user, payload.user);
      next();
    }
  });
}



// ///////////////////////////////////////////////////////////////////////////////

app.get("/api/portfolios/:id", (req, res) => {
  connection.query(
    " SELECT * from portfolio where id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error 500");
      } else {
        res.json(results);
      }
    }
  );
});

app.put("/api/portfolio/:id", (req, res) => {
  connection.query(
    "UPDATE portfolio SET active = ? WHERE id = ?",
    [req.body.active, req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur 500");
      } else {
        res.json(results);
      }
    }
  );
});

// //ROUTES : Profile Portfolio

app.post("/api/portfolio/:id", (req, res) => {
  connection.query(
    "SELECT * from portfolio SET active = ? WHERE id = ?",
    [req.body.active, req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur 500");
      } else {
        res.json(results);
      }
    }
  );
});

// //ROUTES : Récupération des users
app.get("/api/users", (req, res) => {
  console.log('gg')
  connection.query("SELECT * from users", (err, results) => {
    console.log('err',err);
    console.log ('results', results)
    if (err) {
      res.status(500).send("Erreur lors de la récupération des users");
    } else {
      res.json(results);
    }
  });
});



//Récupération des images
app.get("/api/images", (req, res) => {
  connection.query("SELECT * from images", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des images");
    } else {
      res.json(results);
    }
  });
});

//Récupération des images par type de vetements
app.get("/api/images/:id", (req, res) => {
  connection.query(
    "SELECT * from images WHERE portfolio_id = ?",
    req.params.id,
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des images");
      } else {
        res.json(results);
      }
    }
  );
});

//Register 

// Récupération des données du formulaire guest de contactTatoueur
//envoi du mail guest au tatoueur
app.get("/api/guests", (req, res) => {
  connection.query("SELECT * from guests", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des guests");
    } else {
      res.json(results);
    }
  });
});

app.post("/api/register", (req, res) => {
  const formData = req.body;
  connection.query(
    "INSERT INTO register SET?",
    formData,
    async (err, results) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("erreur de récupération des données du formulaire Guest");
      } else {
        console.log("YES ça fonctionne côté guest !!!!!!!!!!!!!");
        try {
          //je mets dans mysql
          //j'envoie mon mail
          const sent = await sendMailRegister(req.body);
          if (sent) {
            res.send({ message: "email guest envoyé avec succès" });
          }
        } catch (error) {
          console.log("gg2", error);
          // throw new Error(error.message)
          res.status(500).send("erreur d'envoie du mail guest");
        }
      }
    }
  );
});



app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
