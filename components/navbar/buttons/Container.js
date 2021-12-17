import styled from "styled-components"

const Cont = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  right: 0;
  margin-right: 10px;  
  @media only screen and (max-width:768px){
    display: none;
  }
`

const Container = ({ children }) => {
  return (
    <Cont>{children}</Cont>
  )
}

export default Container