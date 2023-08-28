import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartAction.jsx";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find(
        (cart) => cart.product.id === payload.id
      );
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};