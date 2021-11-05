import axios from "axios";

export const API = axios.create({
    baseUrl='https://api.themoviedb.org/3/movie/550?api_key=563cc1ea28d81a677390384bfbe80e55'
})
