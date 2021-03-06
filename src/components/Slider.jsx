import {useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data.js';
import {mobile} from "../responsive"
const Container = styled.div`

   width: 100%;
   height: 100vh;
    display:flex;
    
    position: relative;
    overflow: hidden;
    ${mobile({
       display: "none",
    })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f3e8e8;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left:${props => props.dir === "left" && "10px"};
    right:${props => props.dir === "right" && "10px"};


    margin:auto;
    cursor: pointer;
    opacity:0.5;
    z-index: 2;
`

const Wrapper = styled.div`
        height: 100%;
        display:flex;
        transform:translatex(${props => props.slideIndex * -100}vw);
        transition: all 1.5s ease-in-out;
`;

const Slide = styled.div`
    display: flex;
    align-items:center;
    width:100vw;
    height: 100vh;
    background-color: #${props=> props.bg};
`;
const ImageCont = styled.div`
    flex: 1;
    height:100%;
    
`;

const Image = styled.img`
    height: 90%;
    width:100%;
`;


const InfoCont = styled.div`
    flex: 1;
    padding: 50px;
    
`;

const Title = styled.h1`
font-size: 70px;

`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight:500;
    letter-spacing:3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;
`;



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const handleClick = (dir)=> {
        if(dir === 'left'){
            setSlideIndex(slideIndex >0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow dir = "left" onClick = {()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>

                {sliderItems.map( item => (
                     <Slide bg = {item.bg} key = {item.key}>
                     <ImageCont>
                         <Image src = {item.img}/>
                     </ImageCont>
     
                     <InfoCont>
                         <Title>{item.title} </Title>
                         <Desc>{item.desc}</Desc>
                         <Button>SHOW NOW</Button>
                     </InfoCont>
                     </Slide>

                )

                )}
               
               
            </Wrapper>
            <Arrow dir = "right" onClick = {()=>handleClick("right")} >
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider
