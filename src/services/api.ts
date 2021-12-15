import axios from "axios";

const api = axios.create({
   //baseURL:"http://localhost:3333"

    //Usada só para implementar o front enquanto a Natalí finaliza a API
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export default api;