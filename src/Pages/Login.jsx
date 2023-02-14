import { NavLink } from "react-router-dom"
import styled from "styled-components"
import HomeNav from "../Components/HomeNav"
import { mobile } from "../Responsive"
import Register from "./Register"

const Containter = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
rgba(255,255,255,0.5), rgba(255,255,255,0.5)

),

 url("https://img.freepik.com/free-photo/family-mall_1098-15029.jpg?w=740&t=st=1675954399~exp=1675954999~hmac=36b056ee0bea4b3c4a073f44005174616cee8f2624f493a392ded3b8e934b0c0" ) center ;
 display: flex;
 justify-content: center;
 align-items: center;
 background-repeat: no-repeat;
 background-size: cover;
 
`

const Wrapper = styled.div`
width: 30%;
background-color: white;
padding: 20px;
${mobile( {width:"60%" , padding:"10px" ,  marginTop:"15px"})}

`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0 ;
padding: 10px;
`


const Button = styled.button`
width: 40%;
border: none;
padding: 15px 10px;
background-color: teal;
color: white;
cursor: pointer;
margin: 15px 0;

`
const Link = styled.a`

margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Containter>
    <HomeNav/>
      <Wrapper>
    <Title>Sign In</Title>
    <Form>
    
       <Input placeholder = "Username" />
       <Input placeholder = "Password" />
    
    <Button>Login</Button>
    <Link>Forgot Password</Link>
    <NavLink to = {"/register"} element = <Register/>>
    <Link style = {{textDecoration:'none'}}>Create An Account</Link>
    </NavLink>
    </Form>
      </Wrapper>
    </Containter>
  )
}

export default Login
