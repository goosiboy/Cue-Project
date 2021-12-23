import { Component } from "react";
import './SidebarLeft.css';
import zIndexManager from "../../features/utils/ZindexManager";

class SidebarLeft extends Component {

    style = {
        border: "1px solid black",
        zIndex: zIndexManager.getLayer("LAYER_0")
    }

    render() {
        return (
            <div className="SidebarLeft" style={this.style}>
                SidebarLeft
            </div>
        );
    }
}

export default SidebarLeft;