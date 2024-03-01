import apiClient from "./services";
var baseURL = "/semesters/"; // Look into this

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
        console.log('Deleting semester id: ' + studentAccomId);
        return apiClient.delete(baseURL + `${studentAccomId}`);
    },
    deleteAll(){
        console.log('Deleting all Semesters');
        return apiClient.delete(baseURL);
    }
};