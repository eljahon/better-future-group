import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_APP_BASE_URL,
});


export const SendRequest = async ( data ) => { 
  const response = await api.post(`/`, data, {
      headers: {
      'Content-Type': "multipart/form-data"
  }});
  return response;
}
export default api;
