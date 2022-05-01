let Consts = {
  GET: "GET",
  POST: "POST",
  BACKEND_API_PORT: 8080,
  HOST: "localhost",

  /**
   * Common messages
   */
  MESSAGES: {
    BAD_REQUEST: "400 (Bad request)",
    /**
     * Prints invalid input - error message with given input - value
     *
     * @param {*} input Value type, which was invalid
     * @returns Invalid input - error message string
     */
    INVALID_INPUT_ERROR: function (input) {
      return "Input value for '" + input + "' was invalid";
    },
  },
};

module.exports = Consts;
