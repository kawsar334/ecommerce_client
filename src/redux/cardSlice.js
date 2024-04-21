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
            const productIndex = state.products.findIndex((item) => item.id === action.payload._id);

            if (productIndex === -1) {
                const newProduct = { ...action.payload, quantity: 1 };
                state.products.push(newProduct);
            } else {
                state.products[productIndex].quantity += 1;
            }
            state.quantity += 1;
            state.total += action.payload.price;
        },

        // addProduct: (state, action) => {
        //     const productIndex = state.products.findIndex((item) => item.id == action.payload._id);
          
        //     if (productIndex == -1) {
        //         state.products.push({ ...action.payload , quantity:1});
        //         action.payload.quantity += 1
        //         console.log(state.products)
            
        //     } else {
        //         state.products[productIndex].quantity +=1;
        //     }
        //     state.quantity += 1;
        //     state.total += action.payload.price;
        // },
        removeProduct: (state, action) => {
            console.log(state.products)
            state.products = state.products.filter(product => product._id !== action.payload._id)
        }
    
    }
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;



// addProduct: (state, action) => {
//     console.log(state.quantity)
//     const product = state.products.findIndex((item)=>item.id ==action.payload._id);
//     if(product <=0){
//         state.products.push(action.payload);
//     }else{
//         state.products=[...state.products, action.payload]
//     }
//     console.log(product)
// },
// removeProduct: (state, action) => {
//     console.log(state.products)
//     // state.quantity -= 1;
//     state.products = state.products.filter(product => product._id !== action.payload._id)
// }