import { Component } from "react";
import './Main.css';
import MediaQueue from "../../features/queue/MediaQueue";

class Main extends Component {

    render() {
        return (
            <div className="Main">
                Main
                <br />
                <MediaQueue />
            </div>
        );
    }
}

export default Main;