import axios, { AxiosResponse } from 'axios';

export default class Client {

    constructor() {
        console.log("client initialized");
    }

    public async fetchVideos() : Promise<Response>  {
        const response: AxiosResponse<any, any> = await axios.get('http://localhost:5000/api/videos');
        return response.data; 
    } 
 
}