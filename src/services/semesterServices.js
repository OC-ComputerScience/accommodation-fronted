import apiClient from "./services.js";
var baseURL = "/semesters/";

export default{
    createSemester(data){
        return apiClient.post(baseURL, data);
    },
    updateSemester(semesterId,data){
        return apiClient.put(baseURL+semesterId, data);
    },
    deleteSemester(semesterId){
        return apiClient.delete(baseURL+semesterId);
    },
    getAllSemesters(){
        return apiClient.get(baseURL);
    },
    getSemester(semesterId){
        return apiClient.get(baseURL+semesterId);
    }
};