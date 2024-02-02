import apiClient from "./services";
var baseURL = "/adminSemster/";

export default{
    getAll(){
        return apiClient.get(baseURL);
    },
    getOne(accomSemesterId){
        return apiClient.get(baseURL + `Semesteregory/${accomSemesterId}`);
    },
    create(data){
        return apiClient.post(baseURL, data);
    },
    update(studentAccomId, data){
        return apiClient.put(baseURL + `${studentAccomId}`, data);
    },
    delete(studentAccomId){
        console.log('deleting ' + studentAccomId);
        return apiClient.delete(baseURL+`${studentAccomId}`);
    },
    deleteAll(){
        console.log('deleting all');
        return apiClient.delete(baseURL);
    }
};