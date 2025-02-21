import axiosClient from "./config/AxiosConfig";
type TSign = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}
type Tlogin = {
  email: string;
  password: string;
}
export const FrontendHome = {
  Homepageapi: async function () {
    return await axiosClient.get("home");
  },
  Categorypageapi : async function (){
    return await axiosClient.get("categories");
  },
 Getproductsapi : async function (id:string){
  return await axiosClient.get(`/products/${id}`);
 },
 Singleproductapi : async function (_id:string) {
  return await axiosClient.get(`/products/single/${_id}`);
 },
 signpApi: async function (data:TSign) {
  return await axiosClient.post("users/signup",data);
  
},
LoginApi:async function (data:Tlogin){
  const accessToken = window.localStorage.getItem("accesstoken");
  return await axiosClient.post("users/login",data,  {
    headers: {
        "Authorization": `Bearer ${accessToken}`
    },
  });

}
  
};
  


    



