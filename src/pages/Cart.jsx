import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'
import StripeCheckout from 'react-stripe-checkout'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom';
import Newsletter from '../components/Newsletter'
import { removeProduct } from '../redux/cartRedux'

// require('dotenv').config()
console.log(process.env.REACT_APP_STRIPE_KEY);
const KEY=process.env.REACT_APP_STRIPE_KEY;
// const KEY ="sk_test_51LflGiBfZd4ZWVbTN0NLcAQ0LkwibK4iU3ZJZAjGHqf0gHz7e3Kl3j2XfQCDKhgc6wvdvfIIDtFtgP6sXDmqmVtA00NkbHxGV2"
console.log("key ",KEY)
const Container = styled.div``
const Wrapper = styled.div`
   padding: 20px;
   ${mobile({
    padding: "10px"
   })}

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const center = styled.div`
   text-align: center;


`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding : 20px;

`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor:pointer;
  border: ${props=>props.type === "filled" &&  "none"};
  background-color: ${props=>props.type === "filled"? "black" : "transparent"};
  color: ${props=>props.type === "filled" &&  "white"};
  transition: all 0.5s ease;


   &:hover{

    transform: scale(1.1);


   }


`
const TopTexts = styled.div`
  display:none;
`
const TopText = styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin: 0px 10px;


`
const Bottom = styled.div`
   display:flex;
   justify-content: space-between;
   ${mobile({
    flexDirection: "column"
   })}
`
const Info = styled.div`
   flex: 3
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
   })}
`
const ProductDetail = styled.div`
   flex: 2;
   display:flex;

`
const Image = styled.img`
   width: 200px;

`
const Details = styled.div`
  padding: 20px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor= styled.span`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color}
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
   flex:1;
   display:flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;


`
const ProudctAmountContainer = styled.div`
   display:flex;
   align-items: center;
   margin-bottom: 20px;
`;
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
   ${mobile({
    margin: "5px 15px"
   })}
`;
const ProductPrice = styled.div`

  font-size: 30px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px"
   })}
`;
const Hr = styled.hr`
   background-color: lightgrey;
   border: none;
   height: 2px;

`;
const Summary = styled.div`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

`
const SummaryTitle = styled.h1`
   font-weight: 200;


`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};

`
const RemoveButton = styled.button`
   background-color: #b30000
;
   color: white;
   border-radius: 5%;
   border: none;
   padding-top: 7px;
   padding-bottom: 7px;
   cursor:pointer;
   transition: all 0.5s ease;
   &:hover{
     transform: scale(1.1);
     background-color: e60000;

   }

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
   cursor:pointer;
   transition: all 0.5s ease;


   &:hover{

    transform: scale(1.1);


   }

`


const Cart = () => {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const [stripeToken, setStripeToken] = useState(null);
   const navigate = useNavigate();

   const onToken = (token) => {
     setStripeToken(token);
   };

   useEffect(() => {
     const makeRequest = async () => {
       try {
         const res = await userRequest.post("checkout/payment", {
           tokenId: stripeToken.id,
           amount: cart.total * 100,
         });
         navigate("/success", { state: { stripeData: res.data, cart: cart } });
       } catch (error) {
         console.error("Payment error:", error);
       }
     };
     stripeToken && makeRequest();
   }, [stripeToken, cart, cart.total, navigate]);

   const handleRemove = (product) => {
     dispatch(removeProduct(product));
   };

   return (
     <Container>
       <Navbar />
       <Announcement />
       <Wrapper>
         <Title>YOUR BAG</Title>
         <Top>
           <Link to="/shops" style={{ textDecoration: 'none', border: 'none', color: 'white' }}>
             <TopButton>CONTINUE SHOPPING</TopButton>
           </Link>
           <TopTexts>
             <TopText>Shopping Bag({cart.products && cart.products.length})</TopText>
             <TopText>Your Wishinglist</TopText>
           </TopTexts>
           <Link to="/dashboard" style={{ textDecoration: 'none' }}>
             <TopButton type="filled">Dashboard</TopButton>
           </Link>
         </Top>
         <Bottom>
           <Info>
             {cart.products.length === 0 ? (
               <center>
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 No Product on your Cart...
                 <br />
                 <br />
                 <Link
                   to="/"
                   style={{
                     textDecoration: 'none',
                     border: 'none',
                     color: 'white',
                     backgroundColor: 'teal',
                     padding: 10,
                     marginTop: 20,
                   }}
                 >
                   Continue Shopping
                 </Link>
               </center>
             ) : (
               cart.products.map((product) => (
                 <>
                   <Product key={product._id}>
                     <ProductDetail>
                       <Image src={product.img} />
                       <Details>
                         <ProductName><b>Product:</b> {product.title}</ProductName>
                         <ProductId><b>ID:</b> {product._id}</ProductId>
                         <ProductColor color={product.color} />
                         <ProductSize><b>Size:</b> {product.size}</ProductSize>
                         <RemoveButton onClick={() => handleRemove(product)}>Remove</RemoveButton>
                       </Details>
                     </ProductDetail>
                     <PriceDetail>
                       <ProudctAmountContainer>
                         <ProductAmount>{product.quantity}</ProductAmount>
                       </ProudctAmountContainer>
                       <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                     </PriceDetail>
                   </Product>
                   <Hr />
                 </>
               ))
             )}
           </Info>
           <Summary>
             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
             <SummaryItem>
               <SummaryItemText>Subtotal:</SummaryItemText>
               <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
             </SummaryItem>
             <SummaryItem>
               <SummaryItemText>Estimated Shipping:</SummaryItemText>
               <SummaryItemPrice>$ 5.90</SummaryItemPrice>
             </SummaryItem>
             <SummaryItem>
               <SummaryItemText>Shipping Discount:</SummaryItemText>
               <SummaryItemPrice>$ -5.90</SummaryItemPrice>
             </SummaryItem>
             <SummaryItem type="total">
               <SummaryItemText>Total:</SummaryItemText>
               <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
             </SummaryItem>
             {cart.products.length > 0 && (
               <StripeCheckout
                 name="ALEXIS Shop"
                 image="https://alexis.onrender.com/static/assets/img/default.bda90a2a444c.png"
                 billingAddress
                 shippingAddress
                 description={`Your total is $${cart.total}`}
                 amount={cart.total * 100}
                 token={onToken}
                 stripeKey={KEY}
               >
                 <Button>CHECKOUT NOW</Button>
               </StripeCheckout>
             )}
           </Summary>
         </Bottom>
       </Wrapper>
       <Newsletter />
       <Footer />
     </Container>
   );
 };

 export default Cart;