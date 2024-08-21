import axios from "axios";

// export const BASE_URL = "http://localhost:5000/api/";
// export const BASE_URL = "/api/";
export const BASE_URL = "https://demore-shop.onrender.com/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// console.log("ACCESS  ",TOKEN)

// const TOKEN = ""
export const myToken = TOKEN;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },

});


