import axios from 'axios';
import { getLocalUser, removeLocalUser } from '../local/user';


axios.defaults.baseURL = 'http://localhost:3000';

export const sendRequest = async (method, route , body)=> {
    const token =getLocalUser().token ?? "";
    try{
        const response = await axios.request({
            method: method,
            url: route,
            data: body,
            headers: {
                Authorization: `Bearer ${token}`
            }

        })
        return response;

    } catch (error){
        const {status}= error.response;
        if (status === 401){
            removeLocalUser();
            window.location.replace("/")
        }throw Error({
            response: error.response
        });
    }}
        
 
