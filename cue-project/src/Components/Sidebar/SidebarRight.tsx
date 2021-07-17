import { Component } from "react";
import './SidebarRight.css';
import ChatBox from "../../Features/ChatBox/ChatBox";
import ZIndexManager from "../../Features/Utils/ZIndexManager";

class SidebarRight extends Component {

    private indexManager = new ZIndexManager();

    style = {
        border: "1px solid black",
        zIndex: this.indexManager.findLayerWithKey("BASE")
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