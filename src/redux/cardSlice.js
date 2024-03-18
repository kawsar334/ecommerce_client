import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            // state.quantity += 1;
            const product = state.products.findIndex((item)=>item.id ===action.payload._id);
            console.log(product)

            if(product >=0){
                // state.quantity +=1; 
                state.products.push(action.payload);
                // state.products[product]
            }else{
                state.products=[...state.products, action.payload]
            }
            // state.total += action.payload.price;
        },
        removeProduct: (state, action) => {
            console.log(state.products)
            // state.quantity -= 1;
            state.products = state.products.filter(product => product._id !== action.payload._id)
        }
    }
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

