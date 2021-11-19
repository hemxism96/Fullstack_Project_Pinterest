import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID rwYiliGh-GeGuFan-z55aDMcp9taCWq6FsVbQ11Ok1g"
    }
})