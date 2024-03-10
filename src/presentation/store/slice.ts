import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductRepository from "../../data/ProductRepository.ts";
import type {IProduct} from "../../domain/entity/IProduct.ts";
import {container} from "tsyringe";


export const fetchPage = createAsyncThunk<IProduct[], number, {rejectValue: string}>(
    'productPage/fetchIdProducts',
    async function(page,{rejectWithValue}) {
        const productRepository = container.resolve(ProductRepository);
        return await productRepository
            .getIds((page-1)*50, 50)
            .then(ids=> productRepository.getItems(ids))
            .catch(()=>rejectWithValue('Server Error'))
    }
);



const productsSlice = createSlice({
    name: 'productPage',
    initialState: {
        loading: true,
        items: <IProduct[]>[],
    },
    reducers: {
        setLoading(state,action) {
            state.loading = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPage.fulfilled, (state,action) =>{
             state.items = action.payload
             state.loading = false
        })
    }
})
export const {setLoading} = productsSlice.actions;
export default productsSlice.reducer;