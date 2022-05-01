'use strict';
const { v4: uuidv4 } = require('uuid');
const Utils = require("../utils/Utils").utils;

module.exports = class VideoData {
    uuid = "";
    status = "";
    videoTitle = "";
    url = "";

    constructor(uuid, status, videoTitle, url) {
        this.uuid = Utils.notEmpty(uuid) ? uuid : uuidv4();
        this.status = status;
        this.videoTitle = videoTitle;
        this.url = url;
    }

}
