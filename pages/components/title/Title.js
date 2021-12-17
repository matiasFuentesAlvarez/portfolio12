import Container from "./Container"
const Title = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  )
}

export default Title