import { Component } from "react";
import SessionHandler from "../SessionHandler/SessionHandler";

class ChatBox extends Component {

    style = {
        "border": "1px solid black"
    }

    storeCurrentStyle() {
        SessionHandler.setToLocalStorage("styles", this.style);
    }

    fetchStyle() {
        let value = SessionHandler.getFromLocalStorage("styles");
        console.log("value : " + JSON.stringify(value));
    }

    render() {
        return (
            <div className="chatBox" style={this.style}>
                ChatBoxi
                { this.storeCurrentStyle() }
                { this.fetchStyle() }
            </div>
        );
    }
}

export default ChatBox;
