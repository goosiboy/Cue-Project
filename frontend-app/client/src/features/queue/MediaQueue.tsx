import { Component } from "react";
import Client from "../../api/client";

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private getVideos() {
        let axiosResponse = this.client.fetchVideos();
        axiosResponse.then((res) => {
            let result: string = JSON.stringify(res);
            this.setState({queue: result});
        });
    }

    private getVideo(id: string) {
        let axiosResponse = this.client.fetchVideo(id);
        axiosResponse.then((res) => {
            let result: string = JSON.stringify(res);
            this.setState({queue: result});
        });     
    }

    private handleChange(event: any) {    
        this.setState({id: event.target.value});  
    }

    private handleSubmit(event: any) {
        event.preventDefault();
        this.getVideo(this.state.id);
    }

    render() {
        return (
            <div>
                MediaQueue
                <br/>
                <br />
                Search for: 
                <br />
                All videos: 
                <button onClick={this.getVideos}>Search</button>
                <br />
                <br />
                Specific video: 
                <form onSubmit={this.handleSubmit}>        
                    <label>
                        ID: 
                        <input type="text" value={this.state.id} onChange={this.handleChange} />        
                    </label>
                    <input type="submit" value="Submit" />
                </form>                
                <br />
                { this.state.queue }
            </div>
        );
    }
}

export default MediaQueue;