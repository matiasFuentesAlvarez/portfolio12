import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`

const Footer = ({ children }) => {
  return (
    <Foot>{children}</Foot>
  )
}

export default Footer
