import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(-5deg);
  }

  to {
    transform: rotate(5deg);
  }
`


const Cont = styled.div`
  background-color:  rgba(4,151,205,0.7);
  margin: 1px;
  margin-right: 15px;
  margin-left: 15px;
  padding:10px 10px 10px 10px;
  border-radius: 15px;
  border:0.5px #777 solid;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgb(0,0,0,0.4);
  text-align:center;
  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.4);
    animation: ${rotate} 0.3s alternate infinite  ;
  }

  @media only screen and (max-width:1357px){
    margin-right: 5px;
    margin-left: 5px;
  }
  @media only screen and (max-width:768px){
    padding-left: 1px;
    padding-right: 1px;
    max-width:100px;
    
  }

`

const Container = ({ children }) => {
  return (
    <div>
      <Cont>{children}</Cont>
    </div>
  )
}

export default Container