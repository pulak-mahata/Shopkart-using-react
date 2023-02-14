import { Login, Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import {mobile} from  '../Responsive'; 

const Container = styled.div`
  height: 60px;
  ${mobile( { height:"40px" })}
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile( {padding:"10px 0"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  gap: 2;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile( {display:"none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile( {width:"50px"})}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile( {fontSize:"17px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile( {justifyContent:"center" , flex:"2"})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile( {fontSize:"11px" , marginLeft:"10px"})}

  &:hover{
    color: red;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        <Logo style={{color:"red"}} >SHOPKART</Logo>
        </Center>
        <Right>
          <NavLink style={{textDecoration:'none'}} to={"/"} element=<Home />>
            <MenuItem>Home</MenuItem>
          </NavLink>

          <NavLink style={{textDecoration:'none'}} to={"/register"} element=<Register />>
            <MenuItem>Register</MenuItem>
          </NavLink>

          <NavLink style={{textDecoration:'none'}} to={"/sign-in"} element=<Login />>
            <MenuItem>Sign in</MenuItem>
          </NavLink>
          <MenuItem>
            <NavLink style={{textDecoration:'none'}} to={"/cart"} element=<Cart />>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
