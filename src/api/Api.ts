import { axiosClient } from "./config/AxiosClient";
import AxiosServer from "./config/AxiosServer";

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
    const server = await AxiosServer();
    return await server.get("home");
  },
  Categorypageapi: async function () {
    const server = await AxiosServer();
    return await server.get("categories");
  },
  Getproductsapi: async function (id: string) {
    const server = await AxiosServer();
    return await server.get(`/products/${id}`);
  },
  Singleproductapi: async function (_id: string) {
    const server = await AxiosServer();
    return await server.get(`/products/single/${_id}`);
  },
  signpApi: async function (data: TSign) {
    const client = await axiosClient();
    return await client.post("users/signup", data);
  },
  LoginApi: async function (data: Tlogin) {
    const client = await axiosClient();

    return await client.post("users/login",data);
  },
  OrderApi: async function (data: unknown) {
    const client = await axiosClient();
    return await client.post("order/create", data)
    // const accessToken = window.localStorage.getItem("accesstoken");
    // const response = await axiosClient.post("order/create", data, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // return response.data;
  },

  PaymentApi: async function (id: string) {
    const client = await axiosClient();
    return await client.post(`order/payment?orderId=${id}`,{})
    // console.log("id::::::",id)
    // const accessToken = window.localStorage.getItem("accesstoken");
    // console.log("access",accessToken)
    // return await axiosClient.post(`order/payment?orderId=${id}`,{}, {
    //   headers: {
    //     "Authorization": `Bearer ${accessToken}`,
    //   },
    // });
    
  },
};
