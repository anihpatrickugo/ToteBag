import { createContext, useContext, useReducer } from "react";

export const cartContext = createContext(null);

export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  ADD_QUANTITY: "ADD_QUANTITY",
  REMOVE_QUANTITY: "REMOVE_QUANTITY",
  EDIT_QUANTITY: "EDIT_QUANTITY",
  EMPTY_CART: "EMPTY_CART",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const newItem = {
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      };

      return [newItem, ...state];

    case ACTIONS.REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload.id);

    case ACTIONS.ADD_QUANTITY:
      return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: product.quantity++ }
          : product
      );

    case ACTIONS.REMOVE_QUANTITY:
      return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: Math.max(1, product.quantity--) }
          : product
      );
    case ACTIONS.EDIT_QUANTITY:
      return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: action.value }
          : product
      );

    case ACTIONS.EMPTY_CART:
      return (state = []);

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, []);
  return (
    <cartContext.Provider value={{ products, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
export default CartContextProvider;
