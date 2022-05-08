import React, { Component } from "react";
import './Main.css';
import MediaQueue from "../../features/queue/MediaQueue";
import ChatBox from "../../features/chatBox/ChatBox";
import YoutubeEmbed from "../../features/youtubeEmbed/YoutubeEmbed";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <YoutubeEmbed embedId={"3rWA1r2c3QY"} />
                <MediaQueue />
                <ChatBox />
            </div>
        );
    }
}

export default Main;