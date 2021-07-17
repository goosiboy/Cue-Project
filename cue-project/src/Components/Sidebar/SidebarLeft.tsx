import { Component } from "react";
import './SidebarLeft.css';
import ZIndexManager from "../../Features/Utils/ZIndexManager";

class SidebarLeft extends Component {

    private indexManager = new ZIndexManager();

    style = {
        border: "1px solid black",
        zIndex: this.indexManager.findLayerWithKey("INTERACTIVE")
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