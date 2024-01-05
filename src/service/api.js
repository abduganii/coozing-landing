import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const SendRequest = async (data, lang) => {
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_URL}/forms?locale=${lang}`,
    data
  );
  return response;
};
export default api;
