import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});



export const SendRequest = async ( data ) => { 
  const response = await api.post(`${process.env.NEXT_PUBLIC_URL}/connect-uses`, data );
  return response;
}
export default api;
