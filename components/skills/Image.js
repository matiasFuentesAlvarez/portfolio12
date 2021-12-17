import styled from "styled-components"

const Img = styled.img`
  width: 175px;
  height: 175px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 80px;
  margin-bottom: 40px;
  background-size: 175px;
  @media only screen and (max-width:1629px){
    width: 100px;
    height: 100px;
  }
  
`

const Image = (props) => {
  return (
    <Img src={props.src}></Img>
  )
}

export default Image