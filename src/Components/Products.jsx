import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { popularProducts } from "../Data"

import Product from "./Product"


const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content: space-between;


`
const Products = () => {
  return (
    <Container>
     

      {popularProducts.map((item) => (
        <NavLink to = {"/product"} element = <Product/>> 
      <Product item = {item} key = {item.id} />
      </NavLink>

      ))}
     
    </Container>
  )
}

export default Products
