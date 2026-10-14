import api from "../../services/api_axious";

export const loginRequest=async(credentials)=>{
  const response=await api.post("/login",credentials);
  return response.data;
}

