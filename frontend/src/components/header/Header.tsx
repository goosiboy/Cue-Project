import { Component } from "react";
import './Header.css';

class Header extends Component {

    style = {
        border: "1px solid black",
        zIndex: 0
    }

    render() {
        return (
            <div className="Header">
                Header
            </div>
        );
    }
}

export default Header;