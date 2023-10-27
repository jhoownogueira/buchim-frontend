import { Alerts } from "@/utils/AlertsContainers";
import axios from "axios";
import Cookies from "js-cookie";
import router from "next/router";

const getApiInstance = () => {
  if (process.env.NODE_ENV === "development") {
    return axios.create({
      baseURL: "http://localhost:1700",
    });
  } else {
    return axios.create({
      baseURL: "https://jhow.dev",
    });
  }
};

export const api = getApiInstance();
export const apiI = getApiInstance();

export const getUserDataCookie = async () => {
  return new Promise<any>((resolve, reject) => {
    try {
      const token = Cookies.get("token");
      const refreshToken = Cookies.get("refresh_token");
      const userStringfy = Cookies.get("user_data");

      if (!userStringfy) {
        reject(new Error(`No user found in cookies`));
        return;
      }

      if (!token) {
        reject(new Error(`No token found in cookies`));
        return;
      }

      if (!refreshToken) {
        reject(new Error(`No refresh token found in cookies`));
        return;
      }
      const user = JSON.parse(userStringfy);
      resolve({ token, refreshToken, user });
    } catch (error: any) {
      reject(new Error(`Error fetching data from cookies: ${error.message}`));
    }
  });
};
export const getNewJwtToken = async (refreshToken: string, type: string) => {
  try {
    const response = await api.post(`login/${type}/refresh`, {
      token: refreshToken,
    });
    if (response.status === 200) {
      Cookies.set("token", response.data.access_token);
      return response.data.access_token;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

apiI.interceptors.request.use(async (config) => {
  const userData = await getUserDataCookie();
  const token = userData.token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      try {
        const userData = await getUserDataCookie();
        const refreshToken = userData.refreshToken;
        const user = userData.user;
        const newToken = await getNewJwtToken(refreshToken, user.type);

        originalRequest._retry = true;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (tokenRefreshError) {
        Alerts.warningLight("Sua sessão expirou. Faça login novamente.");
        router.push("/");
        return Promise.reject(tokenRefreshError);
      }
    } else if (error.message === "No token found in cookies") {
      Alerts.warningLight("🚫 Você não possui credencial de acesso! 🪪");
      router.push("/");
    } else if (error.message === "No refresh token found in cookies") {
      Alerts.warningLight("Sua sessão expirou. Faça login novamente.");
      router.push("/");
    } else {
      console.log({
        to: "👨‍💻 Administrador",
        Error: error,
      });
    }

    return Promise.reject(error);
  },
);
