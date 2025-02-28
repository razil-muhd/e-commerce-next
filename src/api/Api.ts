import axiosClient from "./config/AxiosConfig";
type TSign = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
};
type Tlogin = {
  email: string;
  password: string;
};
export const FrontendHome = {
  Homepageapi: async function () {
    return await axiosClient.get("home");
  },
  Categorypageapi: async function () {
    return await axiosClient.get("categories");
  },
  Getproductsapi: async function (id: string) {
    return await axiosClient.get(`/products/${id}`);
  },
  Singleproductapi: async function (_id: string) {
    return await axiosClient.get(`/products/single/${_id}`);
  },
  signpApi: async function (data: TSign) {
    return await axiosClient.post("users/signup", data);
  },
  LoginApi: async function (data: Tlogin) {
  
    return await axiosClient.post("users/login",data);
  },
  OrderApi: async function (data: unknown) {
    const accessToken = window.localStorage.getItem("accesstoken");
    const response = await axiosClient.post("order/create", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },

  PaymentApi: async function (id: string) {
    console.log("id::::::",id)
    const accessToken = window.localStorage.getItem("accesstoken");
    console.log("access",accessToken)
    return await axiosClient.post(`order/payment?orderId=${id}`,{}, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    });
    
  },
};
