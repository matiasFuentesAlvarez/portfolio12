import styled from "styled-components"

const Cont = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin:20px 20px 20px 20px;
  @media only screen and (max-width:768px){
    margin-top:200px;
  }
`

const Container = ({ children }, props) => {
  return (
    <Cont>{children}</Cont>
  )

}

export default Container