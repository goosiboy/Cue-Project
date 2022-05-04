import { Component } from "react";
import "./ChatBox.css";
import { io, Socket } from "socket.io-client";
import Utils from "../utils/Utils";

interface IMainProps { }

interface IMainState {
    response: any,
    isChatOpen: boolean,
    userId: string,
    userMessage: string
}

class ChatBox extends Component<IMainProps, IMainState> {

    private ENDPOINT: string = "http://127.0.0.1:8081";
    private socket: Socket = io(this.ENDPOINT);

    constructor(props: IMainProps) {
        super(props);

        this.state = {
            response: "",
            isChatOpen: false,
            userId: "",
            userMessage: ""
        };

        this.turnSocketOn = this.turnSocketOn.bind(this);
        this.turnSocketOff = this.turnSocketOff.bind(this);
        this.toggleChat = this.toggleChat.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    private turnSocketOn() {
        if (Utils.notEmpty(this.ENDPOINT)) {
            console.log("Socket was established");
            this.socket.on("messageFromServer", data => {
                this.setState({ ...this.state, response: data.message });
            });
        } else {
            console.log("Socket was not established because endpoint was null");
        }
    }

    private turnSocketOff() {
        this.socket.disconnect();
        console.log("Socket was disconnected");
    }

    private toggleChat() {
        if (Utils.isEmpty(this.state.isChatOpen) || !this.state.isChatOpen) {
            this.turnSocketOn();
            this.setState({ isChatOpen: true });
        } else {
            this.turnSocketOff();
            this.setState({ isChatOpen: false });
        }
    }

    private sendMessage(event: any) {
        if (Utils.notEmpty(this.state.userMessage)) {
            this.socket.emit(
                "messageFromClient",
                {
                    message: this.state.userMessage,
                    user: this.state.userId
                }
            );
        }
        event.preventDefault();
    }

    private handleChange(event: any) {
        this.setState({ userMessage: event.target.value });
    }

    render() {
        return (
            <div className="chatBox">
                <button onClick={this.toggleChat}>
                    Toggle chat
                </button>

                <div style={{ display: this.state.isChatOpen ? 'block' : 'none' }} >
                    <p>
                        Chat: {this.state.response}
                    </p>

                    <form onSubmit={this.sendMessage}>
                        <label>
                            Chat:
                            <input type="text" value={this.state.userMessage} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Send" />
                    </form>

                </div>
            </div>
        );
    }
}

export default ChatBox;
