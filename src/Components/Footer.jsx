import { Facebook, FmdGood, GitHub, Instagram, LinkedIn, MailOutline, Phone } from "@mui/icons-material";
// import { style } from "@mui/system";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  height: 60vh;
  ${mobile( {flexDirection:"column"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
 display: flex;

`;
const SocialIcon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile( {display:"none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;



const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile( {backgroundColor:"#fff8f8"})}
`;
const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
   width: 100%;
    margin-top: 20px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo style={{color:"red"}} >SHOPKART</Logo>
        <Desc>Shopkart sells high-end, eco-conscious fashion and accessories for men and women. Their product descriptions match their style: sassy, yet classy.  </Desc>

        <SocialContainer>
          <SocialIcon color = "362FD9">
          <a href="https://www.facebook.com/pulak.raja.39/" style={{color:'white'}}>
                <Facebook />
                </a>
          </SocialIcon>

          {/* <SocialIcon color = "EA047E">
            <Instagram />
          </SocialIcon> */}

          <SocialIcon color = "39B5E0">
          <a href="https://www.linkedin.com/in/pulak-mahata-769a32249/" style={{color:'white'}} >
          <LinkedIn /></a>
   
          </SocialIcon>

          <SocialIcon color = "20262E">
          <a href="https://github.com/pulak-mahata" style={{color:'white'}} >
            <GitHub />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>

      </Center>
      <Right>

        <Title>Contact</Title>
        <ContactItem>
        <FmdGood style = {{marginRight:"10px"}}/>
            Kolkata
        </ContactItem>
        <ContactItem>
         <Phone style = {{marginRight:"10px"}}/>
            +91 9732847376
        </ContactItem>
        <ContactItem>
        <MailOutline style = {{marginRight:"10px"}}/>
            pulakmahata2022@gmail.com
        </ContactItem>
        <Payment src = "https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"/>
      </Right>
    </Container>
  );
};

export default Footer;
