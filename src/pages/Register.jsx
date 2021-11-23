import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)) ,url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size:cover;

`
const Wrapper = styled.div`
    width:40%;
    background-color:white;
    padding: 20px;
    ${mobile({
      width: "80%",
    })}


`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;

const Form = styled.div`
    display: flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex: 1;
    min-height:40%;
     margin: 20px 10px 0px 0px;
     padding: 10px;

`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px 0px 0px;
`
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder = "name"/>
                    <Input placeholder = "Last name"/>
                    <Input placeholder = "username"/>
                    <Input placeholder = "emial"/>
                    <Input placeholder = "password"/>
                    <Input placeholder = "confirm password"/>
                    <Agreement>
                        By createing an account, I consent to the processing of my personl data in accordance with the terms and conditions

                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
            
        </Container>
    )
}

export default Register
