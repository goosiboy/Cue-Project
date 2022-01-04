module.exports = {
  /**
   * Utilities for HTTP request - API
   */
  httpUtils: {
    httpOptions: function (_host, _path, _port, _method) {
      return {
        host: _host,
        path: _path,
        port: _port,
        method: _method,
      };
    },

    httpCallback: function (response) {
      let body = "";

      response.setEncoding("utf8");

      response.on("data", function (chunk) {
        body += chunk;
      });

      response.on("end", function () {
        console.log("Middleware ended the call to backend:");
        console.log(body);
        console.log("--------------------------");
      });

      response.on("error", function (er) {
        console.log("Middleware ended the call to backend:");
        console.log(er);
        console.log("--------------------------");
      });
    },
  },

  /**
   * General utilities for the application
   */
  utils: {
    /**
     * Checks if the value is empty
     *
     * @param val Value that will be checked
     * @returns TRUE if empty
     */
    isEmpty: function (val) {
      return !val || val.length === 0;
    },

    /**
     * Checks if the value is not empty
     *
     * @param val Value that will be checked
     * @returns TRUE if not empty
     */
    notEmpty: function (val) {
      return !this.isEmpty(val);
    },
  },
};
