import { getRequest, postRequest, putRequest } from "./api.service";
const url = '/regions';

export const getRegion = async () => {
    const response = await getRequest(url);
    if (response) {
        return  response.data;
    }
    return console.log('error');
}
export const createRegion = async (requestBody) => {
    
    const response = await postRequest(url, requestBody);
    if(response){
        return response;
    }
    return console.log('error');
}


export const updateRegion = async(id, requestBody) => {
    const response = await putRequest(`${url}/${id}`, requestBody);
    if(response) {
        return response;
    }
    console.log('error')
}

