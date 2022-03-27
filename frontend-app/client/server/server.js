/* eslint-disable */
// https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const { checkSchema, validationResult } = require("express-validator");
const session = require('express-session');
const bodyParser = require("body-parser");
const State = require("./src/state/State");

const SecurityTools = require("./src/utils/SecurityTools");
const Messages = require("./src/utils/Consts").MESSAGES;

const app = express();
const port = 5000;

const state = new State();

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

// TODO: replace with generated secret
app.use(session({
  secret: "example",
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

/* BodyParser configurations */
app.use(bodyParser.json({ limit: '200kb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* --------- */
/*    POST   */
/* --------- */
app.post("/api/post/comment", (request, response) => {
  console.log("/api/post/comment: " + request.query.JSON);
  //state.storeComment();
});

app.post("/api/post/video", (request, response) => {
  console.log("/api/post/video: " + request.query.JSON);
  //state.storeComment();
});


/* --------- */
/*    GET    */
/* --------- */
app.get("/api/videos", function (req, res) {
  res.send(JSON.stringify(state.getVideos()));
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

    res.send(state.getVideos(id));
  }
);

app.get("/api/comments", function (req, res) {
  res.send(JSON.stringify(state.getComments()));
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

    res.send(state.getComments(id));
  }
);



app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
