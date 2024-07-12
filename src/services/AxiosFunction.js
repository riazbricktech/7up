import Axios from 'axios';
// import api from "../constant/Api_url";


// get request using Axios
export const getData = async (api, body) => {
    const res = await Axios.request({
        method: 'GET',
        url: api,
        // headers: {
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        // },
        // params: body,
    });
    return await res.data;
};

// post request using Axios

export const postData = async (api, body) => {
    const responseData = await Axios.request({
        method: 'POST',
        url: api,
        // headers: {
        //     Authorization: localStorage.getItem('token'),
        // },
        data: body,
    });
    return await responseData.data;

};

// put request using Axios
export const updateData = async (api, body) => {
    const res = await Axios.request({
        method: 'PUT',
        url: api,
        // headers: {
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        // },
        data: body,
    });
    return await res.data;
};


// delete request using Axios
export const deleteData = async (api, body) => {
    const res = await Axios.request({
        method: 'DELETE',
        url: api,
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        // },
        data: body,
    });
    return await res.data;
};