const Utils = require("./Utils").utils;

module.exports = {
  /**
   * Adds ID - value to the route if ID is given. Otherwise returns the base route.
   *
   * @param {*} id
   * @returns
   */
  VIDEOS_URL: function (id) {
    let url = "/api/videos";
    if (Utils.notEmpty(id)) {
      url = url + "/" + id;
    }
    return url;
  },

  /**
   * Adds ID - value to the route if ID is given. Otherwise returns the base route.
   *
   * @param {*} id
   * @returns
   */
  COMMENTS_URL: function (id) {
    let url = "/api/comments";
    if (Utils.notEmpty(id)) {
      url = url + "/" + id;
    }
    return url;
  },
};
