import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:8080/api/v1/",
    headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"    },
});

export const api = (method, endpoint, payload) =>{
    console.log(method)
    return axiosClient(endpoint,{method:method, data:payload})
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
}