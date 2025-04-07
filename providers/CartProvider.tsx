"use client";

import { CART_NONCE_KEY, CART_TOKEN_KEY } from "@/constants/global-constants";
import { CartService } from "@/services/api/cart.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CookieStorageService } from "@/services/utility/storage.service";
import React, { createContext, useContext, useReducer, ReactNode, useEffect, useRef } from "react";

// Define the structure of a cart item
interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variationId?: number;
  cartKey?: string;
}

// Define the structure of the cart state
interface CartState {
  cartItems: CartItem[];
  shippingCost: number;
}

// Define possible actions
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number | string }
  | { type: "UPDATE_QUANTITY"; payload: { id: number | string; quantity: number } }
  | { type: "CLEAR_CART" };

// Load initial state from local storage
const loadCartFromStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { cartItems: [], shippingCost: 2.0 };
  }
  return { cartItems: [], shippingCost: 2.0 };
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      const updatedCartItems = existingItem
        ? state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        )
        : [...state.cartItems, action.payload];
      return { ...state, cartItems: updatedCartItems };
    }

    case "REMOVE_FROM_CART":
      return { ...state, cartItems: state.cartItems.filter((item) => item.id !== action.payload) };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// Define context type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
  initializeCartItems: (cartResult: any) => void;
  updateCartCredentials: (cartToken: string, nonce: string) => void;
  subtotal: number;
  total: number;
  shippingCost: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Define provider props
interface CartProviderProps {
  children: ReactNode;
}

// Provider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [], loadCartFromStorage);
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const isCartLoaded = useRef(false);
  
  // Sync cart state with local storage whenever it changes
  useEffect(() => {
    const fetchData = async () => {
      if (isCartLoaded.current) return;
        isCartLoaded.current = true;

      try {
        const response = await CartService.GetCartItems(axiosInstanceWithoutLoader);
        initializeCartItems(response);
      } catch (error) {
        console.error(error);
      }
  
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("cart", JSON.stringify(state));
      // }
    };
  
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initializeCartItems(cartResult: any) {

    updateCartCredentials(cartResult.cartToken, cartResult.nonce);
    clearCart();
  
    cartResult.data.items.map((x: any) => {
      const item: CartItem = {
        id: x.id,
        name: x.name,
        price: Number(x.prices?.price / 1000 || 0),
        quantity: x.quantity,
        image: x.images?.[0]?.src || '',
        variationId: x.id,
        cartKey: x.key,
      };
  
      addToCart(item);
    });
  }

  function updateCartCredentials(cartToken: string, nonce: string) {
    console.log('cartToken: ', cartToken);
    console.log('nonce: ', nonce);

    CookieStorageService.set(CART_TOKEN_KEY, cartToken);
    CookieStorageService.set(CART_NONCE_KEY, nonce);
  }


  // Action handlers
  const addToCart = (item: CartItem) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id: number | string) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const updateQuantity = (id: number | string, quantity: number) => dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Compute total prices
  const subtotal = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + state.shippingCost;

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        initializeCartItems,
        updateCartCredentials,
        subtotal,
        total,
        shippingCost: state.shippingCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
