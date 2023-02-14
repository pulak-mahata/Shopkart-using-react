import styled from "styled-components"
import {categories} from "../Data"
import CatagoryItems from "./CatagoryItems"
import {mobile} from  '../Responsive';

const Container = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
${mobile( {padding:"0px" , flexDirection:"column"})}

`

const Categories = () => {
    return (
      <Container>
        {categories.map((item)=> (

            <CatagoryItems item = {item}  key = {item.id}/>
        
        ))}
      </Container>
    )
  }
  
  export default Categories