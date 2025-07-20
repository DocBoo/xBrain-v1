/*
 
http://localhost
==> To serve a view

*/

// process.env variables
require('dotenv').config();

// packages imports
var express= require("express");

// rest object
const app = express();
const path= require("path");

const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("/test", (req, res) => {
  res.status(200).send('Hello World!');
  }
);

app.get("/", (req, res) => {
  res.render("index"); // index refers to index.ejs
 });
 app.get("/hello", (req, res) => {
  res.status(200).render("hello", {
    username: 'Boo!!'
  });

  }
);

const CBrainProfilHomeModule= require("./CBrainProfil/CBrainProfilHome.js");   

var xCBrainProfilHome=    CBrainProfilHomeModule.xCBrainProfilHome;
xCBrainProfilHome.display(0);


//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running on port no ${PORT}`
  );
});
