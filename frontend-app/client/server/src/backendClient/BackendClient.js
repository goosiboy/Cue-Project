let Consts = require("../utils/Consts");
let RouteBuilder = require("../utils/RouteBuilder");
let httpRequest = require("../utils/HttpRequest");
let HttpUtils = require("../utils/Utils").httpUtils;

module.exports = {
  getVideos: async function () {
    return await httpRequest(
      HttpUtils.httpOptions(
        Consts.HOST,
        RouteBuilder.VIDEOS_URL(),
        Consts.BACKEND_API_PORT,
        Consts.GET
      )
    );
  },

  getVideo: async function (id) {
    return await httpRequest(
      HttpUtils.httpOptions(
        Consts.HOST,
        RouteBuilder.VIDEOS_URL(id),
        Consts.BACKEND_API_PORT,
        Consts.GET
      )
    );
  },

  getComments: async function () {
    return await httpRequest(
      HttpUtils.httpOptions(
        Consts.HOST,
        RouteBuilder.COMMENTS_URL(),
        Consts.BACKEND_API_PORT,
        Consts.GET
      )
    );
  },

  getComments: async function (id) {
    return await httpRequest(
      HttpUtils.httpOptions(
        Consts.HOST,
        RouteBuilder.COMMENTS_URL(id),
        Consts.BACKEND_API_PORT,
        Consts.GET
      )
    )
  }
};
