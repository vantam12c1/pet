import axios from 'axios';
import * as Config from './Config';

export default async function callApi(endpoint, method ='GET',body){
    try {
        return axios({
            method: method,
            url: `${Config.API_URL}/${endpoint}`,
            data: body,
        });
    } catch (err) {
        console.log(err);
    }
};

