import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product'
import axios from "axios";
import { BASE_URL } from '../requestMethods';


const Container = styled.div`
  padding: 20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;




`
const Products = ({cat,filters,sort}) => {
  // console.log(cat, filters, sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(
    ()=>{
      const getProducts = async()=>{
        try{
            const res = await axios.get(cat ? `${BASE_URL}products?category=${cat}`: `${BASE_URL}products`)
            // console.log(res)
            // console.log(res.data)
            setProducts(res.data)
        }catch(err){

        };

      }
      getProducts()


    },[cat]
  )

  useEffect(()=>{
    cat && setFilteredProducts(
    // setFilteredProducts(
      products.filter(item=>
         Object.entries(filters).every(([key,value])=>
      item[key].includes(value)))
    )

  }, [products, cat, filters])


  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt))
    }else if(sort==="asc"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price))
    }else{
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price - a.price))
    }

  },[sort])
  return (
    <Container>
      {cat ? filteredProducts.map((item=>(
        <Product key={item.id} item={item} />
      ))):
      products.slice(0,8).map((item=>(
        <Product key={item.id}  item={item} />
      )))

    }

    </Container>
  )
}

export default Products
