import { baseUrl } from "@/app/utils/baseurl";
import axios from "axios";
import { getSession } from "next-auth/react"

export const getToken = async () =>{
    const session = await getSession();
    let headers = {};
    if(session?.accessToken){
        headers = {
            Authorization: `Bearer ` + session.accessToken,
        };

    }
    return headers;
}

export const axiosClient = async () => {
    const response = await getToken();
    console.log("response::::",response);
    return axios.create({
        baseURL:baseUrl,
        headers: {
            Authorization: `Bearer ${response}`,
        },
    });
};