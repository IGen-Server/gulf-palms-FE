import axios, { HttpStatusCode } from 'axios';
import { CookieStorageService } from './storage.service';
import { useRouter } from 'next/router';
import { ApiBaseUrl, ApiMaxTimeOut } from '@/constants/url.constant';
import { ClientRoutes } from './router.service';

export interface ApiRoutes {
  Auth: { 
    SignIn: string;
  }
  User: {
    Profile: string;
  }
}

export const ApiRoutes: ApiRoutes = {
  Auth: {
    SignIn: '/auth/admin-sign-in'
  },
  User: {
    Profile: '/user/profile',
  }
};

const AxiosInstance = axios.create({
  baseURL: ApiBaseUrl,
  timeout: +ApiMaxTimeOut || 10000,
});

AxiosInstance.interceptors.request.use(config => {
  const token = CookieStorageService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor
AxiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === HttpStatusCode.Unauthorized) {
        // Handle Unauthorized (401) error
        console.log('Unauthorized. Redirecting to login...');
        // Optionally redirect to login or handle logout logic
        window.location.href = ClientRoutes.Admin.SignIn;
        return;

      } else if (error.response.status === HttpStatusCode.Forbidden) {
        // Handle Forbidden (403) error
        console.log('Forbidden access.');

        window.location.href = ClientRoutes.Admin.Overview;
        return;

      } else {
        // Handle other types of errors
        console.error('API Error:', error.response.data.message || error.message);
      }
    } else {
      // Handle network or other errors
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
