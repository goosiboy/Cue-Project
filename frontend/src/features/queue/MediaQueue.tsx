import { Component } from "react";
import { Socket } from "socket.io-client";
import Client from "../../api/client";
import "./MediaQueue.css";

interface IMediaQueueProps {
    socket: Socket
}

interface IMediaQueueState {
    queue: string,
    id: string,
    videos: string[]
}

class MediaQueue extends Component<IMediaQueueProps, IMediaQueueState> {

    private videosResponse: any;
    private client = new Client();

    constructor(props: any) {
        super(props);

        this.state = {
            queue: "Placeholder value",
            id: "",
            videos: [""]
        };
        this.loadMediaQueue();
    }

    private loadMediaQueue() {
        console.log("Loaded the media queue");
        this.props.socket.on("videoIdsFromServer", data => {
            this.setState({ ...this.state, videos: data });
        });
    }

    render() {
        return (
            <div className="MediaQueue">
                <ul></ul>
            </div>
        );
    }
}

export default MediaQueue;
