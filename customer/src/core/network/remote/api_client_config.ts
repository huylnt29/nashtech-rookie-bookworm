import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  timeout: 120000, // 120 seconds
  headers: { "X-Custom-Header": "" },
});

// apiClient.defaults.headers.common['Authorization'] = undefined;
apiClient.defaults.headers.post["Content-Type"] = "application/json";

apiClient.interceptors.request.use(
  (request) => {
    if (import.meta.env.DEV) {
      console.info(`[Request] Endpoint: ${request.url} (${new Date()})`);
      console.info(request.data);
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.info(`[Response] Status: ${response.status} (${new Date()})`);
      console.info(response.data);
    }
    return response.data;
  },
  async (error) => {
    return error.response.data;
  }
);

export default apiClient;
