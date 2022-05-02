import React, { Component } from "react"; import './Main.css';
import { io, Socket } from "socket.io-client";
import MediaQueue from "../../features/queue/MediaQueue";
import Utils from "../../features/utils/Utils";

interface IMainProps { }

interface IMainState {
    response: any;
}

class Main extends Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);

        this.state = {
            response: null
        };
    }

    private ENDPOINT: string = "http://127.0.0.1:8081";

    componentDidMount() {
        if (Utils.notEmpty(this.ENDPOINT)) {
            console.log("Socket was established");
            const socket: Socket = io(this.ENDPOINT);

            socket.on("FromAPI", data => {
                this.setState({ ...this.state, response: data });
            });
        } else {
            console.log("Socket was not established because endpoint was null");
        }
    }

    render() {
        return (
            <div className="Main">
                <MediaQueue />
            </div>
        );
    }
}

export default Main;