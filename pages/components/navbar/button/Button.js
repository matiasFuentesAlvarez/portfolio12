import StyledLink from "./StyledLink"
import Container from "./Container"


const Button = ({ children }) => {
  const text = children
  let to = `./${text}`
  if (children === "Home") to = "./"
  return (
    <Container>
      <StyledLink to={to} text={text} />
    </Container>
  )
}

export default Button