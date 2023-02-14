import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`

const Container = styled.div`
min-width: 280px;
height: 350px;
flex: 1;
margin: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info} {
    opacity: 1;
}

`


const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius:50%;
    position: absolute;
    background-color: white;

`


const Image = styled.img`
height: 75%;
z-index: 2;
`




const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    & :hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }

`



const Product = ({item}) => {
  return (
    <Container>
      <Circle />

    <Image src = {item.img}/>
    <Info>
    <Icon>
        <ShoppingCartOutlined />
    </Icon>
    <Icon>
        <SearchOutlined />
    </Icon>
    <Icon>
        <FavoriteBorderOutlined />
    </Icon>

    </Info>

     
    </Container>
  )
}

export default Product
