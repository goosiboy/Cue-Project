import { Component } from "react";
import Client from "../../api/client";
import "./ChatBox.css";

type ChatBoxState = {
    queue: string,
    id: string
}

class ChatBox extends Component<any, ChatBoxState> {

    private client = new Client();

    constructor(props: any) {
        super(props);

        this.state = {
            queue: "Placeholder value",
            id: ""
        };

        this.getComments = this.getComments.bind(this);

    }

    private getComments() {
        /*
        let axiosResponse = this.client.fetchComments();
        axiosResponse.then((res) => {
            let result: string = JSON.stringify(res);
            this.setState({ queue: result });
        });
        */
    }

    render() {
        return (
            <div className="chatBox">

                {this.getComments()}
                {this.state.queue}

            </div>
        );
    }
}

export default ChatBox;
