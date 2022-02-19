/* eslint-disable */
// https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const { checkSchema, validationResult } = require("express-validator");
const session = require('express-session');

const backendClient = require("./src/backendClient/BackendClient");
const SecurityTools = require("./src/utils/SecurityTools");
const Messages = require("./src/utils/Consts").MESSAGES;

const app = express();
const port = 5000;

/**
 * Error message - formatter
 *
 * @param {*} param0
 * @returns
 */
const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  return `${location}[${param}]: ${msg}`;
};

/* ----------- */
/* Middlewares */
/* ----------- */
app.use(helmet());

// console.log("env: " + process.env.SESSION_COOKIE_SECRET);

// TODO: replace with generated secret
app.use(session({
  secret: "",
  name: "cookieSessionId",
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 2678400000,
    secure: true,
    sameSite: "strict",
  },
}));

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self' https://www.youtube.com https://youtube.com;"
  );
  next();
});

// Disable 'x-powered-by' to mitigate targeted attacks
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

/*
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
*/

app.get("/api/videos", function (req, res) {
  backendClient
    .getVideos()
    .then((_res) => {
      res.send(JSON.stringify(_res));
      console.log("/api/videos RESPONSE: " + JSON.stringify(_res));
    })
    .catch((err) => {
      console.log("Error occured: " + err);
    });
});

app.get(
  "/api/videos/:id",
  checkSchema(SecurityTools.validationSchemas[0]),
  function (req, res) {
    let id = req.params.id;
    const result = validationResult(req).formatWith(errorFormatter);

    if (!result.isEmpty()) {
      console.log("VALIDATION ERROR:" + JSON.stringify(result.array()));
      return res.status(400).send({
        message: Messages.BAD_REQUEST,
      });
    }

    backendClient
      .getVideo(id)
      .then((_res) => {
        res.send(JSON.stringify(_res));
        console.log("/api/videos/:id RESPONSE: " + JSON.stringify(_res));
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  }
);

app.get("/api/comments", function (req, res) {
  backendClient
    .getComments()
    .then((_res) => {
      res.send(JSON.stringify(_res));
      console.log("/api/comments/ RESPONSE: " + JSON.stringify(_res));
    })
    .catch((err) => {
      console.log("Error occured: " + err);
    });
});

app.get(
  "/api/comments/:id",
  checkSchema(SecurityTools.validationSchemas[0]),
  function (req, res) {
    let id = req.params.id;
    const result = validationResult(req).formatWith(errorFormatter);

    if (!result.isEmpty()) {
      console.log("VALIDATION ERROR:" + JSON.stringify(result.array()));
      return res.status(400).send({
        message: Messages.BAD_REQUEST,
      });
    }

    backendClient
      .getComments(id)
      .then((_res) => {
        res.send(JSON.stringify(_res));
        console.log("/api/comments/:id RESPONSE: " + JSON.stringify(_res));
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  }
);

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
