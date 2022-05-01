let http = require("http");

/**
 * Promise - wrapper for the http request API
 *
 * @returns Promise
 */
module.exports = function HttpRequest(params, postData) {
  return new Promise(function (resolve, reject) {
    let req = http.request(params, function (res) {
      // on bad status, reject
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode = " + res.statusCode));
      }

      let body = [];
      // on response data, cumulate it
      res.on("data", function (chunk) {
        body.push(chunk);
      });

      // on end, parse and resolve
      res.on("end", function () {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
    req.on("error", function (err) {
      reject(err);
    });
    if (postData) {
      req.write(postData);
    }
    req.end();
  });
};
