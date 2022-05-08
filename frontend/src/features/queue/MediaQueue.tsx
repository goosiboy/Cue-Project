import { Component } from "react";
import Client from "../../api/client";
import "./MediaQueue.css";

type MediaQueuestate = {
    queue: string,
    id: string
}

class MediaQueue extends Component<any, MediaQueuestate> {

    private videosResponse: any;
    private client = new Client();

    constructor(props: any) {
        super(props);

        this.state = {
            queue: "Placeholder value",
            id: ""
        };

        this.getVideos = this.getVideos.bind(this);
        this.getVideo = this.getVideo.bind(this);
        this.sendDataToParent = this.sendDataToParent.bind(this);
    }

    private getVideos() {
        /*
        let axiosResponse = this.client.fetchVideos();
        axiosResponse.then((res) => {
            let result: string = JSON.stringify(res);
            this.setState({ queue: result });
        });
        */
    }

    private getVideo(id: string) {
        /*
        let axiosResponse = this.client.fetchVideo(id);
        axiosResponse.then((res) => {
            let result: string = JSON.stringify(res);
            this.setState({ queue: result });
        });
        */
    }

    private sendDataToParent = (index: string) => {
        this.getVideo(index);
    }

    private handleCallback = (childData: string) => {
        this.getVideo(childData)
    }

    render() {
        return (
            <div className="MediaQueue">
            </div>
        );
    }
}

export default MediaQueue;
