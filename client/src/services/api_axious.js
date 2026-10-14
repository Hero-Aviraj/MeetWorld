import axious, { create } from "axios";
const api=axious.create({
    baseURL:"http://localhost:4000/api",
    withCredentials:true,
});

export default api;