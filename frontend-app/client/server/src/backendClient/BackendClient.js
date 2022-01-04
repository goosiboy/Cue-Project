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
    /*
    let req = http
      .request(
        HttpUtils.httpOptions(
          Consts.HOST,
          RouteBuilder.VIDEOS_URL(),
          Consts.BACKEND_API_PORT,
          Consts.GET
        ),
        HttpUtils.httpCallback
      )
      .end();
      */
  },

  getVideo: function (id) {
    /*
    let req = http
      .request(
        HttpUtils.httpOptions(
          Consts.HOST,
          RouteBuilder.VIDEOS_URL(id),
          Consts.BACKEND_API_PORT,
          Consts.GET
        ),
        HttpUtils.httpCallback
      )
      .end();
    return req;
    */
  },

  getComments: function () {},

  getComments: function (id) {},
};
