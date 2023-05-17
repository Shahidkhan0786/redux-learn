import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUS =  Object.freeze({
    "IDLE":"idle",
    "ERROR":"error",
    "Loading":"loading"
})

const productSlice = createSlice({
    name: "product",
    initialState:{
        data:[],
        status: STATUS.IDLE
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export {setProducts,setStatus} from productSlice.actions;
export default productSlice.reducer;
export function fetchProducts(){
    return async function fetchproductThunk(dispatch,getState){
        dispatch(setStatus(STATUS.Loading))
       try{
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json();
        dispatch(setProducts(data));
        dispatch(setStatus(STATUS.IDLE))
       }
       catch(err){
        console.log(err)
        dispatch(setStatus(STATUS.ERROR))
       }
    }
}     