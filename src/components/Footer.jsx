import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import {mobile} from '../responsive'
const Container = styled.div`
    display:flex;
    ${mobile({
      flexDirection: 'column',
    })}
`;


const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${prop => prop.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`;


const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px;

`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
      display:"none"
    })}

`;

const Tittle = styled.h3`
    margin-bottom: 30px;
   
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap : wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: "#fcfcfcec"
    })}
`;

const ContactItem= styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMa.</Logo>
                <Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>

          <SocialContainer>
              <SocialIcon color = "3B5999"><FacebookIcon/> </SocialIcon>
              <SocialIcon color = "E4405F"><InstagramIcon/> </SocialIcon>
              <SocialIcon color = "55ACEE"><TwitterIcon/> </SocialIcon>
              <SocialIcon color = "E60023"><PinterestIcon/> </SocialIcon>
             
          </SocialContainer>
            </Left>
            <Center>
                <Tittle>Useful Links</Tittle>

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
                <Tittle>Contact</Tittle>

                    <ContactItem><RoomIcon style ={{marginRight: "10px"}}/> 622 madhapur, Hyderabad 500320</ContactItem>
                    <ContactItem><PhoneIcon style ={{marginRight: "10px"}}/> +91 999 000 1111</ContactItem>
                    <ContactItem><MailIcon style ={{marginRight: "10px"}}/> contact@LAMA.com</ContactItem>


            </Right>
            
        </Container>
    )
}

export default Footer
