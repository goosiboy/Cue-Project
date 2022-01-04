const Utils = require("./Utils").utils;
const Messages = require("./Consts").MESSAGES;
const PATTERN = new RegExp("^[0-9]$|^[1-9][0-9]$|^(1000)$");

module.exports = {
  /**
   * Validates the given value and returns TRUE if its of type int
   *
   * @returns TRUE if int
   */
  intValidator: function (id) {
    return Utils.notEmpty(id) && PATTERN.test(id);
  },

  /**
   * Schemas for express-validator - validation
   */
  validationSchemas: [
    {
      id: {
        // The location of the field, can be one or more of body, cookies, headers, params or query.
        // If omitted, all request locations will be checked
        in: ["params"],
        errorMessage: Messages.INVALID_INPUT_ERROR("ID"),
        isLength: {
          options: { min: 1 },
        },
        isInt: true,
        // Sanitizers can go here as well
        toInt: true,
        trim: true,
      },
    },
  ],
};
