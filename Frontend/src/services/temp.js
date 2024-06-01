import axios from "axios";
import { api } from "../components/constants.component";


export const login = async data => {
    const response = await axios.post(api('User/login'), data);
    return response;
}

export const register = async data =>{
    const response = await axios.post(api('User/register'), data);
    return response;
}