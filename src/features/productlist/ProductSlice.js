import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { fetchAllProducts } from "./ProductApi";


const initialState = {
    products:[],
    status:"idle"
}

export const fetchAllProductAsync = createAsyncThunk(
    'counter/fetchCount',
    async () => {
        const response = await fetchAllProducts();
        return response.data;
    }
);

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products= action.payload;
            });
    },
});

export const { increment } = ProductSlice.actions;

export const selectProduct = (state) => state.product.products;



export default ProductSlice.reducer;