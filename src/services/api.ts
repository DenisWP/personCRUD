import axios from "axios";

const baseUrlPessoas = process.env.REACT_APP_BASE_URL_PESSOAS

const apiPessoas = axios.create({
    baseURL: baseUrlPessoas,
})
export default apiPessoas;
