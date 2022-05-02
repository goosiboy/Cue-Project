import { Component } from "react";
import "./ChatBox.css";
import { io, Socket } from "socket.io-client";
import Utils from "../utils/Utils";

interface IMainProps { }

interface IMainState {
    response: any,
    isChatOpen: boolean
}

class ChatBox extends Component<IMainProps, IMainState> {

    private ENDPOINT: string = "http://127.0.0.1:8081";
    private socket: Socket = io(this.ENDPOINT);

    constructor(props: IMainProps) {
        super(props);

        this.state = {
            response: "",
            isChatOpen: false
        };
    }

    turnSocketOn() {
        if (Utils.notEmpty(this.ENDPOINT)) {
            console.log("Socket was established");
            this.socket.on("FromAPI", data => {
                this.setState({ ...this.state, response: data });
            });
        } else {
            console.log("Socket was not established because endpoint was null");
        }
    }

    turnSocketOff() {
        this.socket.disconnect();
        console.log("Socket was disconnected");
    }

    private toggleChat() {
        if (this.state.isChatOpen === undefined || !this.state.isChatOpen) {
            this.turnSocketOn();
            this.setState({ isChatOpen: true });
        } else {
            this.turnSocketOff();
            this.setState({ isChatOpen: false });
        }
    }

    render() {
        return (
            <div className="chatBox">
                <button onClick={this.toggleChat}>
                    Toggle chat!
                </button>

                <div style={{ display: this.state.isChatOpen ? 'block' : 'none' }} >
                    Response: {this.state.response}
                </div>
            </div>
        );
    }
}

export default ChatBox;
