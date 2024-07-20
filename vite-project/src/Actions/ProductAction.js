import { setProductRequest, setProductSuccess, setProductFail, setProductDetailsSuccess, setProductDetailsFail, setCategoriesSuccess, setCategoriesRequest, setCategoriesFail, setProductDetailsRequest } from "../slices/productSlices";
import { globalGetService } from "../utils/globalApiService";

export const getCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(setCategoriesRequest());
            const response = await globalGetService(`/products/categories`);
            dispatch(setCategoriesSuccess(response.data));
        } catch (error) {
            console.error("Error fetching products:", error);
            dispatch(setCategoriesFail());
        }
    };
};
export const getProducts = (sortOption = '', category = '') => {
    return async (dispatch) => {
        try {
            dispatch(setProductRequest());
            const response = await globalGetService(`/products?sort=${sortOption}&category=${category}`);
            dispatch(setProductSuccess(response.data));
        } catch (error) {
            console.error("Error fetching products:", error);
            dispatch(setProductFail());
        }
    };
};


export const getProductDetail = (id) => {
    debugger
    return async (dispatch) => {
        
        try {
            dispatch(setProductDetailsRequest());
            const response = await globalGetService(`/products/${id}`);
            const data = response.data;
            console.log(data,"hii")
            dispatch(setProductDetailsSuccess(data)); 
        } catch (error) {
            dispatch(setProductDetailsFail());
           
            console.log(error);
          
        }
    };
};
