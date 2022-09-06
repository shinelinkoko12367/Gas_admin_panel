import React from 'react'
import axios from 'axios'

const config = {
    baseUrl: 'http://127.0.0.1:8000/api'
}

export const getRequest = async (url) => {
    const response = await axios.get(`${config.baseUrl}${url}`);
    if (response) {
        return response;
    }
    return console.log('error');
}

export const postRequest = async(url, requestBody) => {
    const response = await axios.post(`${config.baseUrl}${url}`, requestBody);
    if(response){
        return response;
    }
    return console.log('error');
}