import { Component } from "react";
import SessionHandler from "../SessionHandler/SessionHandler";
import ZIndexManager from "../Utils/ZIndexManager";

class ChatBox extends Component {

    private indexManager = new ZIndexManager();

    style = {
        border: "1px solid black",
        zIndex: this.indexManager.findLayerWithKey("BASE")
    }

    storeCurrentStyle() {
        SessionHandler.setToLocalStorage("styles", this.style);
    }

    fetchStyle() {
        SessionHandler.getFromLocalStorage("styles");
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
