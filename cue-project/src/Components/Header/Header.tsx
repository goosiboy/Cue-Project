import { Component } from "react";
import './Header.css';
import zIndexManager from "@utils/ZindexManager";

class Header extends Component {

    style = {
        border: "1px solid black",
        zIndex: zIndexManager.getLayer("LAYER_0")
    }

    render() {
        return (
            <div className="Header">
                Header
                {zIndexManager.printLayers()}
            </div>
        );
    }
}

export default Header;