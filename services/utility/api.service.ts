import axios, { CanceledError, HttpStatusCode } from 'axios';
import { CookieStorageService } from './storage.service';
import { useRouter } from 'next/router';
import { ApiBaseUrl, ApiMaxTimeOut } from '@/constants/url.constant';
import { ClientRoutes } from './router.service';
import { Settings } from 'lucide-react';

export const ApiRoutes = {
  Auth: {
    SignIn: '/auth/signin',
    SignUp: '/auth/signup',
    GetRecoveryEmail: '/auth/get-recovery-email',
    VerifyRecoveryToken: '/auth/verify-recovery-token',
    ResetPassword: '/auth/reset-password',
  },
  User: {
    Profile: '/user/profile',
    Settings: '/user/settings',
  },
  Cart: {
    GetAllItems: '/cart',
    AddCartItem: '/cart/add',
    UpdateCartItem: '/cart/update',
    DeleteCartItem: '/cart/delete',
  },
  Order: {
    GetById: 'orders/getById',
    Get: 'orders',
    Cancel: 'orders/cancel',
  },
  Product: {
    GetById: 'products/getById',
    GetBySlug: 'products/getBySlug',
    Get: 'products',
    GetSuggestedProducts: 'products/suggested',
    GetFrequentlyBoughtTogether: 'products/frequently-bought-together',
    GetVariant: 'products/variation',
    GetVariants: 'products/variations',
  },
  ProductCategory: {
    GetById: 'categories/getById',
    Get: 'categories',
  },
  Payment: {
    Pay: 'payment/pay',
    PayForExistingOrder: 'payment/pay-existing-order',
  },
  Contact: {
    Save: 'contact-us'
  }
};

const AxiosInstanceWithInterceptor = axios.create({
  baseURL: ApiBaseUrl,
  timeout: +ApiMaxTimeOut || 10000,
});

AxiosInstanceWithInterceptor.interceptors.request.use(config => {
  const token = CookieStorageService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor
AxiosInstanceWithInterceptor.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === HttpStatusCode.Unauthorized) {
        // Handle Unauthorized (401) error
        console.log('Unauthorized. Redirecting to login...');
        // Optionally redirect to login or handle logout logic
        // window.location.href = ClientRoutes.User.MyAccountDashboard;
        return;

      } else if (error.response.status === HttpStatusCode.Forbidden) {
        // Handle Forbidden (403) error
        console.log('Forbidden access.');

        // window.location.href = ClientRoutes.Home;
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

export default AxiosInstanceWithInterceptor;
