import React, { useEffect } from 'react'
import Product from '../components/Product'
import { useDispatch } from 'react-redux'
import { getCategories, getProducts } from '../../Actions/ProductAction'

const ProductListAll = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getProducts()),
    dispatch(getCategories())
  
  }, [])
  return (
   <div>
    <Product/>
   </div>
  )
}

export default ProductListAll
