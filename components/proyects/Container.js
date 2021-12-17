import styled from "styled-components"

const Cont = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
  background-color: rgba(4,96,230,0.5);
  margin-left: 30%;
  margin-right: 30%;
  padding: 40px;
  margin-top: 10%;
  text-align: center;
  border-radius: 8px;
  & h1{
    font-family: 'Roboto', sans-serif;
    color: #f0ffff;
  }

  & h2{
    font-family: 'Roboto', sans-serif;
    color: #f0ffff;
  }
`


const Container = ({ children }) => {
  return (
    <Cont>{children}</Cont>
  )
}

export default Container