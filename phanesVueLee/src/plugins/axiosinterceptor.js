import axios from 'axios'

const api = axios.create({
    // baseURL: process.env.VITE_API_BASE_URL,
    baseURL: "http://localhost:8080",
    timeout: 5000,
    withCredentials: true

})

api.interceptors.request.use(
    (config) => {
        console.log("요청 보내기 전 실행");
        console.log("📤 요청 URL:", config.baseURL + config.url);
        console.log("📤 요청 메서드:", config.method);
        console.log("📤 요청 데이터:", config.data);
        console.log("📤 withCredentials:", config.withCredentials); // ✅ 여기 추가
        return config;
    },
    (error) => {
        console.log("요청할 때 에러 처리");
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("응답을 받기 전 실행");
        return response;
    },
    (error) => {
        console.log("응답 받을 때 에러 처리");
        return Promise.reject(error);
    }
);

export default api;