import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../redux/apiCalls'


const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
    rgba(255,255,255,0.2),
    rgba(255,255,255,0.2)
    ) ,
    url("https://img.freepik.com/free-photo/excited-african-woman-holding-shopping-bags-mobile-phone_171337-14029.jpg?size=626&ext=jpg&ga=GA1.2.1897073815.1690739084&semt=ais")center;


    display: flex;
    align-items: center;
    justify-content: center;




`
// url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
const Wrapper = styled.div`
   width:40%;
   padding: 20px;
   background-color: white;
   ${mobile({
      width: "70%"
     })}



`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 10px;

`
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`
const Input = styled.input`
   flex: 1;
   min-width:40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`
const Agreement = styled.span`
   font-size: 12px;
   margin: 20px 0px;

`
const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor:pointer;
   transition: all 0.5s ease;


   &:hover{

    transform: scale(1.2);


   }



`

const Error = styled.span`
   color:red;



`

const Register = () => {
   const navigate = useNavigate()
   const [email, setEmail] =useState("")
   const [username, setUsername ] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state)=>state.user)

  const handleClick = (e)=>{
   e.preventDefault()
   if(password
     === confirmPassword) {
     const isSuccess = register(dispatch,{ username, email,password})
     isSuccess && navigate("/")


      }else{
         console.log("error here")

      }

}
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>

                <Input placeholder="Enter your  Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="Enter your Email " onChange={(e)=>setEmail(e.target.value)} />
                <Input placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />
                <Input placeholder="Enter your Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accrodance with the <b> PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handleClick} disabled={isFetching}>REGISTER</Button>
               { error &&<Error>Something went wrong ...</Error>}


            </Form>
            {/* <br /> */}
            <Link to="/login" style={{ color:"black", textDecorationColor: "black", border:'none'}} >SIGN IN TO YOUR ACCOUNT</Link>
        </Wrapper>

    </Container>
  )
}

export default Register