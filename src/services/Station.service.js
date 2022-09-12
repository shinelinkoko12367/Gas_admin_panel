import { getRequest, postRequest, putRequest } from "./api.service";
const url = '/stations';

export const getStation = async () => {
    const response = await getRequest(url);
    if (response) {
        return  response.data;
    }
    return console.log('error');
}
export const StationCreate = async (requestBody) => {
    const response = await postRequest(url, requestBody);
    if(response){
        return response;
    }
    return console.log('error');
}
export const updateStation = async(id, requestBody) => {
    const response = await putRequest(`${url}/${id}`, requestBody);
    if(response) {
        return response;
    }
    console.log('error')
}
