import { Component } from "react";
import './SidebarLeft.css';

class SidebarLeft extends Component {

    style = {
        border: "1px solid black",
        zIndex: 0
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