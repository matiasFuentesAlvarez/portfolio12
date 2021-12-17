import styled, { keyframes } from "styled-components"

const ContAnim = keyframes`
  from{
    background-color: rgba(4,96,219,0.5);
  }
  to{
    background-color: rgba(4,96,219,0.9);
  }
`

const MeCont = styled.div`
  background-color: rgba(4,96,219,0.3);
  padding:0px 20px 0px 20px;
  display: block;
  position: relative;
  text-align: center;
  margin-left: 30px;
  border-radius: 6px;
  animation: ${ContAnim} 2s alternate infinite ;
`

const MeContainer = ({ children }) => {
  return (
    <MeCont>{children}</MeCont>
  )
}

export default MeContainer