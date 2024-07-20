import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "ProductState",
    initialState: {
        product: [],
        productDetails: [],
        categories:[],
        loading: false
    },
    reducers: {
        setProductRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        setProductSuccess(state, action) {
            return {
                ...state,
                product: action.payload,
                loading: false
            };
        },
        setProductFail(state) {
            return {
                ...state,
                loading: false
            };
        },
        setProductDetailsRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        setProductDetailsSuccess(state, action) {
            return {
                ...state,
                productDetails: action.payload,
                loading: false
            };
        },
        setProductDetailsFail(state) {
            return {
                ...state,
                loading: false
            };
        },
        setCategoriesRequest(state) {
            return {
                ...state,
                loading: true
            };
        },
        setCategoriesSuccess(state, action) {
            return {
                ...state,
                categories: action.payload,
                loading: false
            };
        },
        setCategoriesFail(state) {
            return {
                ...state,
                loading: false
            };
        }
    }
});

export const { setProductRequest, setProductSuccess, setProductFail,setProductDetailsRequest,setProductDetailsSuccess,setProductDetailsFail,setCategoriesRequest,setCategoriesSuccess,setCategoriesFail } = productSlice.actions;
export default productSlice.reducer;
