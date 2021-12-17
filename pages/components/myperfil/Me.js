import styled from "styled-components"

const P = styled.p`
  font-family: 'Roboto', sans-serif;
  color:#F0FFFF;
  font-size: 35px;
  &.p1{
    font-size: 50px;
    font-weight: 500;
  }

  &.p2{
    font-size: 40px;
    font-weight: 400;
  }
  &.p3{
    font-style: italic;
    font-size: 40;
  }
  @media only screen and (max-width:906px){
    &.p1{
      font-size: 25px;
      font-weight: 500;
    }

    &.p2{
      font-size: 20px;
      font-weight: 400;
    }
    &.p3{
      font-style: italic;
      font-size: 20;
    } 
  }
  @media only screen and (max-width:520px){
    &.p1{
      font-size: 18px;
      font-weight: 500;
    }

    &.p2{
      font-size: 13px;
      font-weight: 400;
    }
    &.p3{
      font-style: italic;
      font-size: 13px;
    } 
  }
`

const Me = (props) => {
  return (
    <P className={props.className}>{props.text}</P>
  )
}

export default Me