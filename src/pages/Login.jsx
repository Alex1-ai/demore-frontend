import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Container = styled.div`
   width: 100vw;
   height: 100vh;

   background: linear-gradient(
    rgba(255,255,255,0.05),
    rgba(255,255,255,0.05)
    ) ,
    url("https://img.freepik.com/free-photo/excited-african-woman-holding-shopping-bags-mobile-phone_171337-14029.jpg?size=626&ext=jpg&ga=GA1.2.1897073815.1690739084&semt=ais")center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;




`
// url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
const Wrapper = styled.div`
   width:36%;
   padding: 20px;
   background-color: white;
   ${mobile({
      width: "70%"
     })}



`
const Form = styled.form`
   display: flex;
  flex-direction: column;

`
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`
const Input = styled.input`
   flex: 1;
   min-width:40%;
   margin: 10px 0px ;
   padding: 10px;

`
const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor:pointer;
   margin-bottom: 5px;
   transition: all 0.5s ease;
   &:disabled{
      color: green;
      cursor: not-allowed;
   }


   &:hover{

    transform: scale(1.1);


   }



`
const LinkHref = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.5s ease;


   &:hover{

    transform: scale(1.01);


   }

`


const Error = styled.span`
   color:red;


`
const Login = () => {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state)=>state.user)

  const handleClick = (e)=>{
      e.preventDefault()
      login(dispatch,{email,password})

  }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>

                <Input placeholder="Enter your Email " onChange={(e)=>setEmail(e.target.value)} />
                <Input type="password"placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />

                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
               { error &&<Error>Something went wrong ...</Error>}
                <LinkHref>CAN'T REMEMBER YOUR PASSWORD? CLICK HERE</LinkHref>
                {/* <Link to="/register">CREATE A NEW ACCOUNT</Link> */}
                <Link to="/register" style={{ color:"black", textDecorationColor: "black", border:'none'}}>CREATE A NEW ACCOUNT</Link>


            </Form>


        </Wrapper>

    </Container>
  )
}

export default Login
