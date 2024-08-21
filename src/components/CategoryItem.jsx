import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
const Container = styled.div`
   flex:1;
   margin:3px;
//    min-width:280px;
   height:70vh;
   position:relative;


`
const Image = styled.img`
  width:100%;
  height: 100%;
  object-fit:cover;
  ${mobile({
    height: "30vh"
   })}

`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
// background-color:yellow;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


`
const Title = styled.h1`
  color:white;
  margin-bottom:20px;


`
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color:white;
  color:grey;
  cursor:pointer;
  font-weight:600;
  transition: all 0.5s ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.3);

    cursor:pointer;
   }



`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.title}`} >

        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>

        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
