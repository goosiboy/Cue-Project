import { Component } from "react";
import SessionHandler from "@features/SessionHandler/SessionHandler";
import zIndexManager from "@utils/ZindexManager";

class ChatBox extends Component {

    style = {
        border: "1px solid black",
        zIndex: zIndexManager.getLayer("LAYER_0")
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
