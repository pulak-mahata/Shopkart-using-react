import {  NavLink } from "react-router-dom"
import styled from "styled-components"
import HomeNav from "../Components/HomeNav"
import { mobile } from "../Responsive"
import Login from "./Login"


const Containter = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
rgba(255,255,255,0.5), rgba(255,255,255,0.5)

),

 url("https://img.freepik.com/free-photo/portrait-expressive-young-woman-with-shopping-bags_1258-27973.jpg?w=2000" 
  
 
 
 ) ;
 display: flex;
 justify-content: center;
 align-items: center;
 
 
`

const Wrapper = styled.div`
width: 40%;
background-color: white;
padding: 20px;
${mobile( {width:"75%" , padding:"10px" ,  marginTop:"30px"})}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 10px;
background-color: teal;
color: white;
cursor: pointer;

`
const Already = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
`;


const Register = () => {
  return (
  
    
    <Containter>
    <HomeNav/>
      <Wrapper>
    <Title>Create An Account</Title>
    <Form>
       <Input placeholder = "Name" />
       <Input placeholder = "Last Name" />
       <Input placeholder = "Email" />
       <Input placeholder = "Username" />
       <Input placeholder = "Password" />
       <Input placeholder = "Confirm Password" />
       <Agreement>
       By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
    </Agreement>
    <Button>
      Create
    </Button>
   
    </Form>
    <Already>
      Already have an Account?
      <NavLink  style = {{textDecoration:'none'}}  to = {"/sign-in"} element =  <Login/>> 
      Login 
      </NavLink>
    
    </Already>
  

      </Wrapper>

    

    </Containter>
   
  )
}

export default Register
