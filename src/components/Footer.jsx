import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
   display: flex;
   ${mobile({
    flexDirection: "column"
   })}


`
const Left = styled.div`
   flex:1;
   display:flex;
   flex-direction: column;
   padding: 20px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#eee"
   })}
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none"
   })}
`

const Title = styled.h3`
   margin-bottom: 30px;

`
const List = styled.ul`
   margin:0;
   padding 0;
   list-style:none;
   display:flex;
   flex-wrap: wrap;

`
const ListItem= styled.li`
   width: 50%;
   margin-bottom : 10px;

`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;


`
const SocialContainer = styled.div`
   display:flex;


`
const SocialIcon = styled.h1`
   width: 40px;
   height: 40px;

   border-radius: 50%;
   color: white;
   background-color: #${props=>props.color};

   display:flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;

`

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`


const Payment = styled.img`
  width:100%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                DEMORE.
            </Logo>
            <Desc>
            Experience the joy of shopping like never before. At DEMORE STORE, we believe that every customer deserves the best—best products, best prices, and best shopping experience. That's why we've curated a diverse collection of items to suit your every need, from everyday essentials to luxury splurges. Join our community of savvy shoppers who trust us to deliver quality and value, time and time again. Your satisfaction is our priority, and we're here to ensure that every purchase leaves you smiling.

            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <LinkedIn />
                </SocialIcon>


                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>

                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Account</ListItem>

                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Conditions</ListItem>
            </List>


        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/> Greater Accra , Wesley Grammars Dansoman.
            </ContactItem>

            <ContactItem>
              <Phone style={{marginRight:"10px"}} /> +233 49 67 983
            </ContactItem>

            <ContactItem>
               <MailOutline style={{marginRight:"10px"}} /> alexisenterprise977@gmail.com
            </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

    </Container>
  )
}

export default Footer
