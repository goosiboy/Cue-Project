import { Component } from "react";
import './SidebarLeft.css';

class SidebarLeft extends Component {

    style = {
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