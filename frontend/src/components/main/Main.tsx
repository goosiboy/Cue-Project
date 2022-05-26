import React, { Component } from "react";
import './Main.css';
import MediaQueue from "../../features/queue/MediaQueue";
import ChatBox from "../../features/chatBox/ChatBox";
import YoutubeEmbed from "../../features/youtubeEmbed/YoutubeEmbed";
import { io, Socket } from "socket.io-client";

interface iMainState {
    socket: Socket
}

class Main extends Component<any, iMainState> {

    private ENDPOINT: string = "http://127.0.0.1:8081";

    constructor(props: any) {
        super(props);

        this.state = {
            socket: io(this.ENDPOINT)
        }

    }

    render() {
        return (
            <div className="Main">
                <YoutubeEmbed embedId={"3rWA1r2c3QY"} />
                <MediaQueue socket={this.state.socket} />
                <ChatBox socket={this.state.socket} />
            </div>
        );
    }
}

export default Main;