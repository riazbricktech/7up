import Axios from 'axios';
import token from '../constant/Token';

// get request using Axios
export const getData = async (api, body) => {
    const res = await Axios.request({
        method: 'GET',
        url: api,
        headers: {
            Authorization: "Bearer " + token,
        },
        // params: body,
    });
    return await res.data;
};

// post request using Axios

export const postData = async (api, body) => {
    const responseData = await Axios.request({
        method: 'POST',
        url: api,
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: body,
    });
    return await responseData.data;

};
