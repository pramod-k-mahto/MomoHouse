import { createContext, useReducer } from "react";
export const CartContext = createContext();
const initialState = {
  CartItems: [],
};
const cartReducer = (state, action) => {
  // console.log("cartReducer", action);
  switch (action.type) {
    case "AddToCart": {
      const isExiting = state.CartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExiting) {
        let updatedProduct = state.CartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        return {
          ...state,
          CartItems: updatedProduct,
        };
      } else {
        const newCartItems = { ...action.payload, qty: 1 };
        const newCartItemProducts = [...state.CartItems, newCartItems];
        alert(newCartItems.name + "Is added to cart");
        return {
          ...state,
          CartItems: newCartItemProducts,
        };
      }
    }

    case "Increment": {
      const updatedProduct = state.CartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedProduct,
      };
    }

    case "Decrement": {
      const updatedProduct = state.CartItems.map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedProduct,
      };
    }
    case "Delete": {
      const filterProducts = state.CartItems.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      return {
        ...state,
        CartItems: filterProducts,
      };
    }
    case "EmptyCart": {
      return { ...state, CartItems: [] };
    }
    default: {
      return state;
    }
  }
};
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
