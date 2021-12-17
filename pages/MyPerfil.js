import Image from "../components/myperfil/Image"
import Me from "../components/myperfil/Me"
import Container from "../components/myperfil/Container"
import Footer from "../components/myperfil/Footer"
import MeContainer from "../components/myperfil/MeContainer"

const MyPerfil = () => {
  return (
    <div>
      <Container>
        <Image alt="image" src="./programmer.png" />
        <MeContainer>
          <Me className="p1" text="Welcome to my Portfolio!" />
          <Me className="p2" text="Here you could see a preview my lastest jobs" />
          <Me className="p3" text="~Always looking forward to the future~" />
        </MeContainer>
      </Container>
      <Footer >
        <Image alt="html" src="./html-5.png" className="icons" id="one" />
        <Image alt="css" src="./css.png" className="icons" id="two" />
        <Image alt="js" src="./javascript.png" className="icons" id="three" />
        <Image alt="react" src="./react.png" className="icons" id="four" />
      </Footer>
    </div>
  )
}
export default MyPerfil