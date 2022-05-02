import axios, { AxiosResponse } from 'axios';
import Utils from "../features/utils/Utils";

export default class Client {

    constructor() {
        console.log("client initialized");
    }
    /*
    public async fetchVideos(): Promise<Response> {
        const response: AxiosResponse<any, any> = await axios.get('http://localhost:5000/api/videos');
        return response.data;
    }

    public async fetchVideo(id: string): Promise<any> {
        if (Utils.notEmpty(id)) {
            let untrusted_URL: string = "";
            let sanitized_URL: string = untrusted_URL.concat("http://localhost:5000/api/videos", "/", Utils.sanitize(id));
            const response: AxiosResponse<any, any> = await axios.get(sanitized_URL);
            return response.data;
        }
        return Promise.resolve();
    }

    public async fetchComments(): Promise<Response> {
        const response: AxiosResponse<any, any> = await axios.get('http://localhost:5000/api/comments');
        return response.data;
    }

    public async fetchComment(id: string): Promise<any> {
        if (Utils.notEmpty(id)) {
            let untrusted_URL: string = "";
            let sanitized_URL: string = untrusted_URL.concat("http://localhost:5000/api/comments", "/", Utils.sanitize(id));
            const response: AxiosResponse<any, any> = await axios.get(sanitized_URL);
            return response.data;
        }
        return Promise.resolve();
    }

    public async storeComment(): Promise<Response> {
        const response: AxiosResponse<any, any> = await axios.post('http://localhost:5000/api/comments');
        return response.data;
    }
    */

}