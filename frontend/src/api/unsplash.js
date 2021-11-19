import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID vVCDfeXbkdH1pnjuuSuhEXXRk1RSXQPxU4iIqVnJb48"
    }
})