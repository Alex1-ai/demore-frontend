import React, { useState } from 'react'
import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import {mobile} from "../responsive"
import {  useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import {logout } from "../redux/userRedux";
import { BrowserRouter as Router ,
  Routes, Route,
  // Link,
  // useParams,
  useNavigate,

  Navigate
} from 'react-router-dom'
const Container = styled.div`

   height: 60px;
   ${mobile({
    height: "50px"
   })}


`
const Wrapper = styled.div`
   padding: 10px 20px;
   display:flex;
   align-items:center;
   justify-content: space-between;
   ${mobile({
    padding: "10px 0px"
   })}

`
const Left = styled.div`

   flex:1;
   display: flex;
   align-items:center;

`

const Language= styled.div`
  font-size: 14px;


  cursor:pointer;
  ${mobile({
    display: "none"
   })}

`

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display:flex;
   align-items:center;
   margin-left: 25px;
   padding: 5px;
   ${mobile({
    marginLeft: "10px"
   })}

`

const Input = styled.input`
   border:none;
   ${mobile({
    width: "50px"
   })}


`
const Center = styled.div`

  flex:1;
  text-align:center;

`

const Logo = styled.h1`
   font-weight:  bold;
   ${mobile({
    fontSize: "24px"
   })}

`
const Right = styled.div`

  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({
    flex:2,
    justifyContent: "center"
   })}

`

const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({
    fontSize: "12px", marginLeft:"10px"
   })}

`
const Navbar = () => {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.currentUser)
  console.log(user)
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  const navigate = useNavigate();

  const handleLogOut = async() =>{
    dispatch(logout());

    localStorage.removeItem("persist:root");
    navigate("/login");

  }

  const handleSearch = (e) =>{
    e.preventDefault()
    console.log("DOne with the search "+ search)
    navigate(`/shops`, { state: { "search": search } });

  }


  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder='Search' onChange={(e)=>{
                      console.log(e.target.value)
                      setSearch(e.target.value)}} />

                    <Search  onClick={handleSearch} style={{color:"grey", fontSize:16}} />

                </SearchContainer>
            </Left>
            <Center>
            <Link style={{ textDecoration:'none', color:"black", border:'none'}} to="/">
                <Logo>DEMORE.</Logo>
            </Link>
            </Center>
            <Right>
                { user ?
                <>
                {/* <MenuItem>Hi, {user.username.toUpperCase()} </MenuItem> */}
                <button style={{ backgroundColor:"white", textDecoration:'none', color:"black", border:'none'}} onClick={handleLogOut}>
                <MenuItem>LOGOUT</MenuItem>
                </button>

                <Link style={{ textDecoration:'none', color:"black", border:'none'}} to="/dashboard">

                <MenuItem>Dashbord</MenuItem>
                </Link>
                </>
:
                <>
                 <Link style={{ textDecoration:'none', color:"black", border:'none'}} to="/register">

                <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link style={{ textDecoration:'none', color:"black", border:'none'}} to="/login">
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                </>


}
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary" overlap='rectangular'>
                        <ShoppingCartOutlined />

                    </Badge>

                </MenuItem>
                </Link>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar
