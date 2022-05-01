'use strict';
const { v4: uuidv4 } = require('uuid');
const Utils = require("../utils/Utils").utils;

module.exports = class Comment {
    commentId = "";
    userName = "";
    userComment = "";

    constructor(uuid, userName, userComment) {
        this.commentId = Utils.notEmpty(uuid) ? uuid : uuidv4();
        this.userName = userName;
        this.userComment = userComment;
    }
}
