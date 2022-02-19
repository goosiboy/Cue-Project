import { Component } from "react";
import "./YoutubeEmbed.css";

interface IYoutubeEmbedProps {
    embedId: string
}

export default class YoutubeEmbed extends Component<IYoutubeEmbedProps, Object> {

    render() {
        return (
            <div className="YoutubeEmbed">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${this.props.embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        );
    }

}