import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container = styled.div`
   flex:1;
   margin:5px;
   min-width:280px;
   height: 350px;
   display:flex;
   justify-content:center;
   align-items: center;
   background-color: f5fafd;
  //  background-color: #f5fbfd;
   position:relative;


`
const Circle = styled.div`
   width:200px;
   height: 200px;
   border-radius: 50%;
   background-color:white;
   position:absolute;


`
const Image = styled.img`
   height:75%;
   width: 200px;

   z-index:2;

`
const Info = styled.div`
  //  opacity:1;
   width: 100%;
   height: 100%;
   position: absolute;
    top:0;
    left:0;

    transition: all 0.5s ease;

   background-color:rgba(0,0,0,0.5);
   z-index:3;
   display:flex;
   align-items: center;
   justify-content:center;

   &:hover{
    // opacity: 0;
    background-color:rgba(0,0,0,0.1);
   }


`
const Icon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   margin:10px;
   transition: all 0.5s ease;


   &:hover{
    background-color: #e9f5f5;
    transform: scale(1.3);

    cursor:pointer;
   }


`

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
          <Icon>
             <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
               <SearchOutlined/>
            </Link>
          </Icon>
          <Icon>
             <FavoriteBorderOutlined />
          </Icon>
      </Info>
    </Container>
  )
}

export default Product
