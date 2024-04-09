const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
// authentication
const { auth, requiresAuth } = require("express-openid-connect");

const port = process.env.PORT || 8080;
const app = express();

// authentication
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.CLIENT_ID,
//   issuerBaseURL: process.env.ISSUER_BASE_URL,
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config)); 

// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    // console.log(`Connected to DB and listening on ${port}`);
  }
});


module.exports = app; 
