import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "productCart",
    initialState: {
        cartItem: []
    },
    reducers: {
        addToCart: (state, action) => {
            const NewData = action.payload;
            state.cartItem.push(NewData)

        },
        // removeCart: (state, action) => {
        //     state.cartItem = state.cartItem.slice(action.payload, 1)
        // }

        removeCart: (state, action) => {
    state.cartItem.splice(action.payload, 1);
},

    clearAll: (state) => {
    state.cartItem = [];
},
 totalprice: (state) => {
    const total = state.cartItem.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    return total;
  }


    }


})

export const {addToCart , removeCart, clearAll, totalprice} = cart.actions;
export default cart.reducer