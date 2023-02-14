import { Link } from "react-router-dom"
import styled from "styled-components"
import { categories } from "../Data"
import ProductList from "../Pages/ProductList"
import Products from "./Products"
import {mobile} from  '../Responsive';


const Container = styled.div`
flex: 1;
margin: 4px;
height: 70vh;
position: relative;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile( {height:"30vh"})}
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;


`
const Button = styled.button`
border: none;
background-color: white;
color: gray;
padding: 10px;
cursor: pointer;
font-weight: 600px;
`



const CatagoryItems = ({item}) => {
  return (
    <Container>
    <Link to = {"/products"} element = <ProductList/> >
      <Image src = {item.img}/>
      <Info>
        <Title>{item.title}</Title>

        <Button>SHOP NOW</Button>

      </Info>
      </Link>
    </Container>
  )
}

export default CatagoryItems

