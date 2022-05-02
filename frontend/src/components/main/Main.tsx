import React, { Component } from "react";
import './Main.css';
import MediaQueue from "../../features/queue/MediaQueue";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <MediaQueue />
            </div>
        );
    }
}

export default Main;