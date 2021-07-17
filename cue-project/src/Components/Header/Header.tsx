import { Component } from "react";
import './Header.css';
import ZIndexManager from "../../Features/Utils/ZIndexManager";

class Header extends Component {

    private indexManager = new ZIndexManager();

    render() {
        return (
            <div className="Header">
                Header
                {this.indexManager.currentlyActiveLayers()}
            </div>
        );
    }
}

export default Header;