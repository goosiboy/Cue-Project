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
