class Video {

    public uuid: string = "";
    public status: string = "";
    public videoTitle: string = "";
    public url: string = "";

    constructor(uuid: string, status: string, videoTitle: string, url: string) {
        this.uuid = uuid;
        this.status = status;
        this.videoTitle = videoTitle;
        this.url = url;
    }

    /**
     * Returns a string presentation of the object
     * 
     * @returns Object as a string
     */
    public toString() {
        return "[uuid: "
            + this.uuid + ", status: "
            + this.status + ", videoTitle: "
            + this.videoTitle + ", url: " + this.url + "]";
    }

}

export default Video;