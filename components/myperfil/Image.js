import styled, { keyframes } from "styled-components"

const ImgAnim = keyframes`
  from{
    transform: translate(0,0);
  }
  to{
    transform: translate(0,-20px);
  }
`

const Img = styled.img`

  margin-top: 100px;
  height: 600px;
  width: 600px;
  &.icons{
    height: 80px;
    width: 80px;
    margin-left: 15px;
    margin-right: 15px;
  }
  &#one{
    animation: ${ImgAnim} 0.5s alternate infinite;
  }
  &#two{
    animation: ${ImgAnim} 0.5s alternate infinite;
    animation-delay: 0.25s;
  }
  &#three{
    animation: ${ImgAnim} 0.5s alternate infinite;
  }
  &#four{
    animation: ${ImgAnim} 0.5s alternate infinite;
    animation-delay: 0.25s;
  }
  @media only screen and (max-width:906px){
    height:300px;
    width:300px;
  }
  @media only screen and (max-width:520px){
    height:150px;
    width:150px;
  }
`

const Image = (props) => {
  return (
    <Img src={props.src} id={props.id} className={props.className} />
  )
}

export default Image