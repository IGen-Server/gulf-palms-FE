"use client";

import { CART_NONCE_KEY, CART_TOKEN_KEY } from "@/constants/global-constants";
import { CartService } from "@/services/api/cart.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CookieStorageService } from "@/services/utility/storage.service";
import React, { createContext, useContext, useReducer, ReactNode, useEffect, useState } from "react";

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
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check for existing item with same bundleId if payload has bundleId
      if (action.payload.bundleId) {
        const existingBundleItem = state.cartItems.find(
          item => item.bundleId === action.payload.bundleId && item.id === action.payload.id
        );

        if (existingBundleItem) {
          // Update quantity of matching bundle item
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.bundleId === action.payload.bundleId && item.id === action.payload.id
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            )
          };
        } else {
          // Add as new bundle item
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
          };
        }
      }

      // Handle non-bundled items
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id && !item.bundleId
      );

      if (existingItem) {
        // Update quantity of existing non-bundle item
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id && !item.bundleId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }

      // Add as new non-bundle item
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    }

    case "REMOVE_FROM_CART":
      // Find the item that is being removed
      const itemToRemove = state.cartItems.find(item => item.id === action.payload);

      if (itemToRemove?.bundleId) {
        // If item has bundleId, remove all items with the same bundleId
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.bundleId !== itemToRemove.bundleId)
        };
      } else {
        // Otherwise remove just the single item
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      }

    case "UPDATE_QUANTITY":
      // If bundleId is provided in payload, update all items in that bundle
      if (action.payload.bundleId) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.bundleId === action.payload.bundleId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      } else {
        // Otherwise update just the single item by id
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id && !item.bundleId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      }

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
  updateQuantity: (id: number | string, quantity: number, bundleId?: number | string) => void;
  clearCart: () => void;
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

  // Sync cart state with local storage whenever it changes
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await CartService.GetCartItems(axiosInstanceWithoutLoader);
        CookieStorageService.set(CART_TOKEN_KEY, response.cartToken);
        CookieStorageService.set(CART_NONCE_KEY, response.nonce);

        console.log(response.data.items);
        clearCart();

        response.data.items.map((x: any) => {
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

  // Action handlers
  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setIsItemAdded(true);
  };
  const addRelatedProducts = (relatedProducts: CartItem[]) =>
    dispatch({ type: "ADD_RELATED_PRODUCTS", payload: { relatedProducts } });
  const removeRelatedProducts = (relatedProducts: CartItem[]) => dispatch({ type: "REMOVE_RELATED_PRODUCTS", payload: { relatedProducts } });
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