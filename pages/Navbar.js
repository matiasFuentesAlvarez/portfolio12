import Buttons from "../components/navbar/buttons/Buttons"
import styled from "styled-components"

const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  margin: 20px 20px 20px 20px;
  background-color: rgba(4,96,219,0.5);
  border-radius: 6px;
  padding-top:5px ;
  padding-bottom:5px ;
  & h1 {
    font-family: 'Roboto', sans-serif;
    color:#F0FFFF;
    font-size: 35px;
  }
  & h2 {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    color:#F0FFFF;
    font-size: 30px;
  }
  & button{
    font-family: 'Roboto', sans-serif;
  }
  max-width:100%;
`
const Image = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 0;
  @media only screen and (max-width:875px){
    width: 60px;
    height: 60px;
  }
`

const Front = styled.div`
  display: flex;
  @media only screen and (max-width:1208px){
    margin-left:-120px ;
    
  }
  @media only screen and (max-width:1093px){
    & h2{
      font-size:20px;
    }
  }
  @media only screen and (max-width:1013px){
    margin-left:-110px;
  }
  @media only screen and (max-width:875px){
    margin-left:-120px;
    & h2{
      font-size:15px;
    }
  }
  @media only screen and (max-width:768px){
    margin-left:180px;
    margin-right:100px;
  }
  @media only screen and (max-width:629px){
    margin-left:180px;
    margin-right:10px;
  }
  @media only screen and (max-width:543px){
    margin-left:250px;
    margin-right:10px;
  }
  @media only screen and (max-width:446px){
    margin-left:250px;
    margin-right:10px;
  }  
`

const Name = styled.div`
  position: absolute;
  left: 0;
  margin-left: 100px;
  @media only screen and (max-width:1013px){
    & h1{
      font-size:25px;
    }
  }
  @media only screen and (max-width:875px){
    margin-left: 60px;
  }
`

const Navbar = ({ myPerfil }) => {

  return (
    <Content>
      <Image alt="logo" src="./logo192.png" />
      <Name><h1>Matias Fuentes</h1></Name>
      <Front><h2>Front-end Developer</h2></Front>
      <Buttons />
    </Content>
  )
}

export default Navbar