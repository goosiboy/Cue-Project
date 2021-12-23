import { Component } from "react";
import './SidebarRight.css';
import ChatBox from "../../features/chatBox/ChatBox";
import zIndexManager from "../../features/utils/ZindexManager";

class SidebarRight extends Component {

    style = {
        border: "1px solid black",
        zIndex: zIndexManager.getLayer("LAYER_0")
    }

    render() {
        return (
            <div className="SidebarRight" style={this.style}>
                SidebarRight
                <ChatBox />
            </div>
        );
    }
}

export default SidebarRight;