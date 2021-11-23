import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Footer from '../components/Footer';
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

import {mobile} from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
      padding: "10px"
    })}


`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && "none"};
    background-color: ${props => props.type === 'filled' ? "black": "transparent"};
    color: ${props => props.type === 'filled' && "white"};
    `

const TopTexts = styled.div`
    ${mobile({
      display: "none"
    })}

`;

const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({
    flexDirection:"column",
    })}

`
const Info = styled.div`
    flex:3;
`


const Product = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({
      flexDirection: 'column',
    })}


`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display:flex;
    flex-direction:column; 
    justify-content: space-around;   
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};
`;
const ProductSize = styled.span``;


const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount= styled.div`
    font-size: 24px;
     margin: 5px;
     ${mobile({
         margin: '5px 15px'
    })}

`;
const ProductPrice  = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
        marginBottom: "15px"
    })}

`;

const Hr = styled.hr`
    background-color:#eeee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 12px;

    height:50vh;

`

const SummaryTile = styled.h1`
    font-weight: 200;
`;

const SummarItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
` ;

const SummaryItemText = styled.span``;

const  SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


 const Cart = () => {
    return (
        <Container>
             <Navbar/>
             <Announcement/>
             <Wrapper>
                 <Title>YOUR BAG</Title>
                 <Top>
                     <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts> 
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                     <TopButton type = 'filled'>CHECKOUT NOW</TopButton> 
                 </Top>
                 <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 972359721</ProductId>
                                    <ProductColor color = "black"/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>  
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice> 300rs</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr></Hr>
                    </Info>
                    <Summary>
                        <SummaryTile>ORDER SUMMARY</SummaryTile>
                        <SummarItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>800 rs</SummaryItemPrice>
                        </SummarItem>
                        <SummarItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>100 rs</SummaryItemPrice>
                        </SummarItem>
                        <SummarItem>
                            <SummaryItemText> Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>- 100 rs</SummaryItemPrice>
                        </SummarItem>
                        <SummarItem type = "total">
                            <SummaryItemText > Total </SummaryItemText>
                            <SummaryItemPrice> 800 rs</SummaryItemPrice>
                        </SummarItem>

                        <Button>CHECKOUT NOW </Button>
                        
                    </Summary>

                 </Bottom>
                 
             </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Cart
