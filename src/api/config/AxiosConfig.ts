import { baseUrl } from "@/app/utils/baseurl";
import axios from "axios";

 const axiosClient = axios.create({
    baseURL: baseUrl,

});
export default axiosClient;
