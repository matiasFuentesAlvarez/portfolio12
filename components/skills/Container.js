import styled from "styled-components"

const Cont = styled.div`
  display: inline-block;
  justify-content: center;
  align-items:center;
  width: 100%;
  margin-left:1%;
  & p{
    text-align: center;
    padding:10px 10px 10px 10px;
    font-size: 25px;
    margin: 1px 20px 1px 40px;
    border: 1px #aaa solid;
    border-radius: 15px;
    background-color: rgba(4,96,219,0.25);
    font-family: 'Roboto', sans-serif;
    color:#F0FFFF;
  }
  &.grid{
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items:center;
  }
  @media only screen and (max-width:1629px){
    & p{
      font-size:22px;
    }
  }
  @media only screen and (max-width:1324px){
    & p{
      font-size:18px;
    }
    &.grid{
      grid-template-rows:1fr 1fr;
      grid-template-columns:1fr 1fr ;
    }
  }
  @media only screen and (max-width:768px){
    &.grid{
      grid-template-rows:1fr 1fr 1fr 1fr;
      grid-template-columns:1fr;
    }
  }
  
`

const Container = (props) => {

  return (
    <Cont className={props.className}>{props.children}</Cont>
  )
}

export default Container