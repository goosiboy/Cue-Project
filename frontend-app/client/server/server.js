/* eslint-disable */
// https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const backendClient = require("./src/backendClient/BackendClient");
const { checkSchema, validationResult } = require("express-validator");
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

/* Middleware */
app.use(helmet());
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

    console.log("req.params.id: " + id);

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
  res.send("comments route");
});

app.get("/api/comments/:id", function (req, res) {
  res.send("comments with ID - route");
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
