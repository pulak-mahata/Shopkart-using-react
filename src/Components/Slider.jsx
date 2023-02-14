
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SliderItems } from "../Data";
import ProductList from "../Pages/ProductList";
import {mobile} from  '../Responsive';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-color: ${(props) => props.bg}; */

`;
const ImgContainer = styled.div`
  flex: 1;
  
  height: 100%;
  
`;
const InfoContainer = styled.div`
  flex: 1;
  padding:50px ;
 

`;
const Img = styled.img`
  height: 80%;
  ${mobile( {objectFit:"cover"})}
`;
const Title = styled.h1`
  font-size: 70px;
  
  color: ${(props) => props.titleColor };
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0px;
  letter-spacing: 3px;
  font-weight: 500;
`;
const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {

    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3);
    }

    else{
      setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick ("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex = {slideIndex}>
      {SliderItems.map((item) =>(

        <Slide bg={item.bg}  key = {item.id}>
          <ImgContainer>
            <Img src= {item.img} />
          </ImgContainer>
          <InfoContainer >
            <Title titleColor = {item.titleColor} >{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>
            <NavLink style={{textDecoration:'none' }} to = {"/products"} element = <ProductList/>  >
            Shop Now
            </NavLink>
            </Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick ("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
