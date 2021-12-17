import Link from "next/link"
import styled from "styled-components"
const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
  & a {
    color:#FFF0F5;
    text-decoration: none;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    top: 50%;
    
  }
  a:hover{
    text-decoration: none;
  }
  a:active{
    text-decoration: none;
  }
  @media only screen and (max-width:1013px){
    & a{
      font-size:20px;
    }
  }
  @media only screen and (max-width:875px){
    & a{
      font-size:17px;
    }
  }
  @media only screen and (max-width:768px){
    & a{
      font-size:13px;
    }
  }
`


const StyledLink = (props) => {
  return (
    <Div>
      <Link href={props.to}>{props.text}</Link>
    </Div>
  )
}

export default StyledLink