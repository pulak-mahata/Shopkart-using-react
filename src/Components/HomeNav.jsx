
import { color } from "@mui/system"
import { NavLink , Link} from "react-router-dom"
import styled from "styled-components"
import Home from "../Pages/Home"

const Container = styled.div`
/* background-color: #F0EEED; */
height: 70px;
width: 100%;
position: absolute;
top: 0;left: 0;
display: flex;
align-items: center;
justify-content: center;

`
const Title = styled.h2`
 font-weight: 600;
 color: red;
`
const HomeNav = () => {
  return (
    <Container>
      <Title>
     <NavLink style={{textDecoration:'none' , color:"black"}} to = {"/"} element = <Home/> > 
       Go To Home Page
      </NavLink>
      </Title>
    </Container>
  )
}

export default HomeNav
