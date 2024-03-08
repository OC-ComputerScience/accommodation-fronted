import apiClient from "./services";
var baseURL = "/accomCats/";

export default{
    getAll(){
        return apiClient.get(baseURL);
    },
    getOne(accomCatId){
        return apiClient.get(baseURL + `${accomCatId}`);
        
    },
    create(data){
        return apiClient.post(baseURL, data);
    },
    update(accomCatId, data){
        return apiClient.put(baseURL + `${accomCatId}`, data);
    },
    delete(accomCatId){
        console.log('deleting ' + accomCatId);
        return apiClient.delete(baseURL+`${accomCatId}`);
    }
};