"use client";

import { CART_NONCE_KEY, CART_TOKEN_KEY } from "@/constants/global-constants";
import { CartService } from "@/services/api/cart.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CookieStorageService } from "@/services/utility/storage.service";
import React, { createContext, useContext, useReducer, ReactNode, useEffect, useRef, useState } from "react";

// Define the structure of a cart item
interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variationId?: number;
  cartKey?: string;
  bundleId?: number;
}

// Define the structure of the cart state
interface CartState {
  cartItems: CartItem[];
  shippingCost: number;
}

// Define possible actions
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "ADD_RELATED_PRODUCTS"; payload: { relatedProducts: CartItem[] } }
  | { type: "REMOVE_RELATED_PRODUCTS"; payload: { relatedProducts: CartItem[] } }
  | { type: "REMOVE_FROM_CART"; payload: number | string }
  | { type: "UPDATE_QUANTITY"; payload: { id: number | string; quantity: number; bundleId: number | string; } }
  | { type: "CLEAR_CART" };

// Load initial state from local storage
const loadCartFromStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { cartItems: [], shippingCost: 2.0 };
  }
  return { cartItems: [], shippingCost: 2.0 };
}
const saveCartToStorage = (state: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;

  switch (action.type) {
    case "ADD_TO_CART": {
      if (action.payload.bundleId) {
        const existingBundleItem = state.cartItems.find(
          item => item.bundleId === action.payload.bundleId && item.id === action.payload.id
        );

        if (existingBundleItem) {
          newState = {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.bundleId === action.payload.bundleId && item.id === action.payload.id
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            )
          };
        } else {
          newState = {
            ...state,
            cartItems: [...state.cartItems, action.payload]
          };
        }
      } else {
        const existingItem = state.cartItems.find(
          item => item.id === action.payload.id && !item.bundleId
        );

        if (existingItem) {
          newState = {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === action.payload.id && !item.bundleId
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            )
          };
        } else {
          newState = {
            ...state,
            cartItems: [...state.cartItems, action.payload]
          };
        }
      }
      break;
    }

    case "REMOVE_FROM_CART": {
      const itemToRemove = state.cartItems.find(item => item.id === action.payload);
      if (itemToRemove?.bundleId) {
        newState = {
          ...state,
          cartItems: state.cartItems.filter(item => item.bundleId !== itemToRemove.bundleId)
        };
      } else {
        newState = {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      }
      break;
    }

    case "UPDATE_QUANTITY": {
      if (action.payload.bundleId) {
        newState = {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.bundleId === action.payload.bundleId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      } else {
        newState = {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id && !item.bundleId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      }
      break;
    }

    case "CLEAR_CART":
      newState = { ...state, cartItems: [] };
      break;

    default:
      newState = state;
      break;
  }

  // Save to localStorage after each state change
  saveCartToStorage(newState);
  return newState;
};

// Define context type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number, bundleId?: number | string) => void;
  clearCart: () => void;
  initializeCartItems: (cartResult: any) => void;
  updateCartCredentials: (cartToken: string, nonce: string) => void;
  subtotal: number;
  total: number;
  shippingCost: number;
  isItemAdded: boolean; // Add this
  setIsItemAdded: (value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Define provider props
interface CartProviderProps {
  children: ReactNode;
}

// Provider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [], loadCartFromStorage);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const isCartLoaded = useRef(false);

  // Sync cart state with local storage whenever it changes
  useEffect(() => {
    const fetchData = async () => {
      if (isCartLoaded.current) return;
      isCartLoaded.current = true;

      const localCart = loadCartFromStorage();

      try {
        const response = await CartService.GetCartItems(axiosInstanceWithoutLoader);
        initializeCartItems(response);

        // Then sync local items to API if they exist
        if (localCart.cartItems.length > 0) {
          await syncLocalItemsWithApi(localCart.cartItems);

          // Refresh cart after syncing
          const updatedResponse = await CartService.GetCartItems(axiosInstanceWithoutLoader);
          initializeCartItems(updatedResponse);
        }
      } catch (error) {
        console.error(error);
        // If API fails, at least load local items
        if (localCart.cartItems.length > 0) {
          clearCart();
          localCart.cartItems.forEach(item => addToCart(item, true));
        }
      }

      // if (typeof window !== "undefined") {
      //   localStorage.setItem("cart", JSON.stringify(state));
      // }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function syncLocalItemsWithApi(localItems: CartItem[]) {
    for (const item of localItems) {
      try {
        const response = await CartService.AddCartItem(
          +item.id,
          item.quantity,
          axiosInstanceWithoutLoader
        );

        // Update cart credentials after each addition
        if (response.cartToken && response.nonce) {
          updateCartCredentials(response.cartToken, response.nonce);
        }

      } catch (error) {
        console.error('Error syncing item to API:', error);
      }
    }
  }

  function initializeCartItems(cartResult: any) {
    if (!cartResult?.data?.items) return;

    updateCartCredentials(cartResult.cartToken, cartResult.nonce);
    const localStorageCart = loadCartFromStorage();
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

      addToCart(item, true);
    });
  }

  function updateCartCredentials(cartToken: string, nonce: string) {
    console.log('cartToken: ', cartToken);
    console.log('nonce: ', nonce);

    CookieStorageService.set(CART_TOKEN_KEY, cartToken);
    CookieStorageService.set(CART_NONCE_KEY, nonce);
  }


  // Action handlers
  const addToCart = (item: CartItem, isInitial: boolean = false) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    !isInitial && setIsItemAdded(true);
  };
  const removeFromCart = (id: number | string) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const updateQuantity = (id: number | string, quantity: number, bundleId?: number | string) => dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity, bundleId: bundleId || "" } });
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
        isItemAdded,
        setIsItemAdded
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
