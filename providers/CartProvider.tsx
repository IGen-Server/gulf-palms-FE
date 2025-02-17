"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the structure of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// Define the structure of the cart state
interface CartState {
  cartItems: CartItem[];
  shippingCost: number;
}

// Define possible actions
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };

const fakeCartItems = [
  {
    id: 1,
    name: "Laptop Bag",
    price: 30.0,
    quantity: 2,
    image: "https://gulfpalms.com/wp-content/uploads/2025/02/Jozi-2-300x300.png",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 15.0,
    quantity: 1,
    image: "https://gulfpalms.com/wp-content/uploads/2025/02/shutterstock_2472267765-1-300x300.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    price: 50.0,
    quantity: 1,
    image: "https://gulfpalms.com/wp-content/uploads/2025/02/Apricot-305x300.jpg",
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    price: 50.0,
    quantity: 1,
    image: "https://gulfpalms.com/wp-content/uploads/2025/02/Apricot-305x300.jpg",
  },
];

// Initial state
const initialState: CartState = {
  cartItems: [...fakeCartItems],
  shippingCost: 2.0,
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

// Define context type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
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
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Action handlers
  const addToCart = (item: CartItem) =>
    dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id: number) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const updateQuantity = (id: number, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Compute total prices
  const subtotal = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
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
