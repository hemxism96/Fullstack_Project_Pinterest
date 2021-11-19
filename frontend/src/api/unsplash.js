import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 7kuPIS3kFrPCU9QxIlXDGpTYqLgAlj4okbMVMTGgx0w"
    }
})