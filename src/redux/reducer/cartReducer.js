import {type} from "@testing-library/user-event/dist/type";

const initialState = {
  cartProducts: []
}

const cartReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_CART":
      return ({
        cartProducts: [...state.cartProducts,action.product]
      })
    default:
      return state
  }
}

export {cartReducer}