import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'
import axios from 'axios'
import { BASE_URL } from '../requestMethods'
const Container = styled.div`
   display: flex;
   padding: 20px;
   display:flex;
//    flex-wrap:wrap;

   justify-content: space-between;
   ${mobile({
    padding: "0px",
    flexDirection:"column"
   })}


`

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const res = await axios.get( `${BASE_URL}categories`)
        setCategories(res.data);

      }catch(e){
        console.log("THis is the error ", e)
      }
    }

    fetchData()

  },[])
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id} />
        ))}

    </Container>
  )
}

export default Categories
