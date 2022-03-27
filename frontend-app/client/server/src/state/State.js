"use strict";
const Comment = require("./Comment");
const VideoData = require("./VideoData");
const Logger = require("./../Logger");
const backendClient = require("./../backendClient/BackendClient");
const Utils = require("../utils/Utils").utils;

module.exports = class State {
    static comments = [];
    static videos = [];

    constructor() {
        (function () {
            State.initComments();
            State.initVideos();
            State.synchronize();
            Logger.info("Server state initialized");
        })();
    }

    /**
     * Synchronizes the local application state with the database
     */
    static synchronize() {
        const interval = 5 * 60 * 1000;
        setInterval(function () {
            State.syncState();
        }, interval);
    }

    static syncState() {
        Logger.info("State synchronized");
        // TODO: Post comments and video data to the backend for safekeeping
    }

    static initComments() {
        if (Array.isArray(State.comments) && !State.comments.length) {
            Logger.info("Comments was empty -> initializing");
            backendClient
                .getComments()
                .then((response) => {
                    const commentDataList = response._embedded.commentDataList;
                    commentDataList.forEach(comment => {
                        State.comments.push(new Comment(comment.uuid, comment.name, comment.comment));
                        Logger.info("Comment with UUID '" + comment.uuid + "' was pushed to the state");
                    });
                })
                .catch((err) => {
                    Logger.error("Error occured: " + err);
                });
        }
    }

    static initVideos() {
        if (Array.isArray(State.videos) && !State.videos.length) {
            Logger.info("Videos was empty -> initializing");
            backendClient
                .getVideos()
                .then((response) => {
                    const videoDataList = response._embedded.videoDataList;
                    videoDataList.forEach(videoData => {
                        State.videos.push(new VideoData(videoData.uuid, videoData.status, videoData.videoTitle, videoData.url));
                        Logger.info("Video with UUID '" + videoData.uuid + "' was pushed to the state");
                    });
                })
                .catch((err) => {
                    Logger.error("Error occured: " + err);
                });
        }
    }

    storeComment(userName, userComment) {
        State.comments.push(new Comment("", userName, userComment));
    }

    storeVideo(videoTitle, url) {
        State.comments.push(new VideoData("", "WAITING", videoTitle, url));
    }

    getComments(commentId) {
        const array = State.comments;
        if (Utils.notEmpty(commentId)) {
            array.forEach(comment => {
                if (comment.commentId === commentId) {
                    return comment;
                }
            });
        } else {
            return array;
        }
    }

    getVideos(videoId) {
        const array = State.videos;
        if (Utils.notEmpty(video)) {
            array.forEach(videoData => {
                if (videoData.uuid === videoId) {
                    return videoData;
                }
            });
        } else {
            return array;
        }
    }

}
