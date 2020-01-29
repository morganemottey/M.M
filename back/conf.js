// Conf.js
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost", // adresse du serveur
    user: "root", // le nom d'utilisateur
    password: "ktm829294", // le mot de passe
    database: "mystore" ,// le nom de la base de données
});
module.exports = connection;


exports.modules = {
    secret: 'toto'
}