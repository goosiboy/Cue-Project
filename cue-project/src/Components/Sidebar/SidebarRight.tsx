import { Component } from "react";
import './SidebarRight.css';
import ChatBox from "../../Features/ChatBox/ChatBox";

class SidebarRight extends Component {

    render() {
        return (
            <div className="SidebarRight">
                SidebarRight
                <ChatBox />
            </div>
        );
    }
}

export default SidebarRight;