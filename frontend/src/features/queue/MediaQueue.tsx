import { Component } from "react";
import { Socket } from "socket.io-client";
import Client from "../../api/client";
import "./MediaQueue.css";
import Video from "../video/Video";

interface IMediaQueueProps {
    socket: Socket
}

interface IMediaQueueState {
    videos: Video[]
}

class MediaQueue extends Component<IMediaQueueProps, IMediaQueueState> {

    private videosResponse: any;
    private client = new Client();

    constructor(props: any) {
        super(props);

        this.state = {
            videos: [new Video("placeHolder", "placeHolder", "placeHolder", "placeHolder")]
        };
        this.loadMediaQueue();
    }

    private loadMediaQueue() {
        this.props.socket.on("videoIdsFromServer", data => {
            this.setState({ ...this.state, videos: data });
        });
        console.log("Loaded the media queue");
    }

    render() {
        return (
            <div className="MediaQueue">

                {this.state.videos.toString()}

            </div>
        );
    }
}

export default MediaQueue;
