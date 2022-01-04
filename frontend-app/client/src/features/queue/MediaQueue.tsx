import { Component } from "react";
import Client from "../../api/client";

type MediaQueuestate = {
    queue: string
}

class MediaQueue extends Component<any, MediaQueuestate> {

    private videosResponse: any;

    constructor(props: any) {
        super(props);
    
        this.state = {
            queue: "Placeholder value"
        };
                
        this.getVideos = this.getVideos.bind(this);

    }

    private getVideos() {

        let axiosResponse = new Client().fetchVideos();

        axiosResponse.then((res) => {
            let result: string = JSON.stringify(res.text);
            console.log("Response: " + result);
            this.setState({queue: result});
        });

    }

    render() {
        return (
            <div>
                MediaQueue
                <br />
                <button onClick={this.getVideos}>load</button>
                <br />
                { this.state.queue }
            </div>
        );
    }
}

export default MediaQueue;