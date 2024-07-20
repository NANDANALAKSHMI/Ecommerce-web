import React, { useEffect } from 'react'
import ProductDetailPage from '../components/ProductDetailPage'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../Actions/ProductAction';
const ProductDetailsList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const productDetails = useSelector((state) => state.product.productDetails);
  const { productDetails } = useSelector((state) => state.ProductState);
  console.log(productDetails, "y");
  console.log(id, 'id')
  useEffect(() => {
    dispatch(getProductDetail(id));

  }, [dispatch, id]);
  return (
    <div>

      <ProductDetailPage programDetail={productDetails}/>

    </div>
  );
};
export default ProductDetailsList
