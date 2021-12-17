import styled from "styled-components"
import { keyframes } from "styled-components"
const TextAnim = keyframes`{
  0% {transform: translate(0,0)}
  33% {transform: translate(300px,0)}
  66% {transform: translate(-300px,0)}
  100% {transform: translate(0,0)}
}
`
const TextAnim1 = keyframes`{
  0% {transform: translate(0,0)}
  33% {transform: translate(150px,0)}
  66% {transform: translate(-150px,0)}
  100% {transform: translate(0,0)}
}
`
const TextAnim2 = keyframes`{
  0% {transform: translate(0,0)}
  33% {transform: translate(75px,0)}
  66% {transform: translate(-75px,0)}
  100% {transform: translate(0,0)}
}
`
const TextAnim3 = keyframes`{
  0% {transform: translate(0,0)}
  33% {transform: translate(20px,0)}
  66% {transform: translate(-20px,0)}
  100% {transform: translate(0,0)}
}
`
const Cont = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin:30px 125px 0px 125px ;
  padding: 0px 15px 0px 15px ;
  border: 1px solid;
  border-color: #bbb;
  border-radius: 25px;
  box-shadow: 1px 2px 5px rgb(0,0,0,0.4);
  background-image: linear-gradient(25deg,rgba(4,96,219,0.7),rgba(4,96,230,0.1));

  & h1{
    font-family: 'Roboto', sans-serif;
    color:#F0FFFF;
    font-size: 35px;
    font-weight: 800;
    animation: ${TextAnim} 4s  ; 
  }
  @media only screen and (max-width:1024px){
    & h1{
      font-size: 30px;
      animation: ${TextAnim1} 4s  ; 
    } 
  }
  @media only screen and (max-width:768px){
    margin-top:200px;
  }
  @media only screen and (max-width:672px){
    & h1{
      font-size: 25px;
      animation: ${TextAnim2} 4s  ; 
    } 
  }
  @media only screen and (max-width:535px){
    & h1{
      font-size: 20px;
      animation: ${TextAnim3} 4s  ; 
    } 
  }
`
const Container = ({ children }) => {
  return (
    <Cont>{children}</Cont>
  )
}

export default Container
