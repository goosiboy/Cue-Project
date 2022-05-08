import { Component } from "react";
import './SidebarRight.css';
import ChatBox from "../../features/chatBox/ChatBox";

class SidebarRight extends Component {

    style = {
        zIndex: 0
    }

    render() {
        return (
            <div className="SidebarRight" style={this.style}>
                SidebarRight
            </div>
        );
    }
}

export default SidebarRight;