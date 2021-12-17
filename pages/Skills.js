import Title from "./components/title/Title"
import PrintedSkills from "./components/skills/PrintedSkills"
import Container from "./components/skills/Container"
import SkillsContainer from "./components/skills/SkillsContainer"
import Navbar from "./Navbar"

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Title >My Skills</Title>
      <Container>
        <Container className="grid">
          <SkillsContainer>
            <PrintedSkills
              src={"./html-5.png"}
              personalValue={55}
              workValue={5} />

          </SkillsContainer>
          <SkillsContainer>
            <PrintedSkills
              src={"./css.png"}
              personalValue={55}
              workValue={5} />

          </SkillsContainer>
          <SkillsContainer>
            <PrintedSkills
              src={"./javascript.png"}
              personalValue={30}
              workValue={5} />

          </SkillsContainer>
          <SkillsContainer>
            <PrintedSkills
              src={"./react.png"}
              personalValue={40}
              workValue={5} />
          </SkillsContainer>
        </Container>
      </Container>
    </div>
  )
}

export default Skills