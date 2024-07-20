import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Actions/ProductAction'

const HomeList = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getProducts())
  
  }, [])
  return (
    <div>
      <Hero/>
      <Product/>
    </div>
  )
}

export default HomeList
