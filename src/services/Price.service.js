import { getRequest, postRequest } from "./api.service";
const url = '/prices';

export const getPirce = async () => {
    const response = await getRequest(url);
    if (response) {
        return  response.data;
    }
    return console.log('error');
}
export const CreatePrice = async (requestBody) => {
    const response = await postRequest(url, requestBody);
    if(response){
        return response;
    }
    return console.log('error');
}
