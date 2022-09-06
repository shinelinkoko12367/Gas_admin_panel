import { getRequest, postRequest } from "./api.service";
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