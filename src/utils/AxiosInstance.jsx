import axios from "axios";

const defaultOptions = {
    // baseURL: "http://localhost:8085", // Keraksiz qatorni izohga oldim
    baseURL: "https://reqres.in",  // Boshqa URL tanlangan
    headers: {
        'Content-Type': 'application/json',
        "x-api-key": "reqres-free-v1"
    },
};

let axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token'); // Tokenni olishda to'g'ri stringni ishlatish
    config.headers.Authorization = token ? `Bearer ${token}` : '';  // Token bo'lsa, Authorization qo'shish
    return config;
});

export default axiosInstance;

// export const url = "http://localhost:8085" // Keraksiz URL izohi
export const url = "https://reqres.in";  // To'g'ri URL
