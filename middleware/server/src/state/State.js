"use strict";
const Comment = require("./Comment");
const VideoData = require("./VideoData");
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
        // TODO: Post comments and video data to the backend for safekeeping
    }

    static initComments() {
        if (Array.isArray(State.comments) && !State.comments.length) {
            backendClient
                .getComments()
                .then((response) => {
                    const commentDataList = response._embedded.commentDataList;
                    commentDataList.forEach(comment => {
                        State.comments.push(new Comment(comment.uuid, comment.name, comment.comment));
                    });
                })
                .catch((err) => {
                    console.log("Error occured: " + err);
                });
        }
    }

    static initVideos() {
        if (Array.isArray(State.videos) && !State.videos.length) {
            backendClient
                .getVideos()
                .then((response) => {
                    const videoDataList = response._embedded.videoDataList;
                    videoDataList.forEach(videoData => {
                        State.videos.push(new VideoData(videoData.uuid, videoData.status, videoData.videoTitle, videoData.url));
                    });
                })
                .catch((err) => {
                    console.log("Error occured: " + err);
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
