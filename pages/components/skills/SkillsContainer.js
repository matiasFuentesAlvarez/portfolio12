import styled from "styled-components"


const SkillsCont = styled.div`
  display: inline-block;
  margin:25px 15px 0px 15px;
  border: 1px #aaa solid;
  border-radius: 15px;
  background-image: linear-gradient(-45deg,rgba(4,96,219,0.3),rgba(254,254,254,0.5));
  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
  transition: 0.3s ease-in-out;
  transition-delay:0.3s;
  max-width:80%;
  &:hover{
    transform: scale(1.05,1.05);
    padding: 15px;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(-45deg,rgba(4,96,219,0.5),rgba(254,254,254,0.7));
    box-shadow: 3px 3px 8px rgba(0,0,0,0.6);
  }
  &:hover div{
    max-width: 400px;
    transition: 0.3s ease-in-out;
    transition-delay:0.3s ;
  }
  &:hover img{
    width: 200px;
    height: 200px;
    transition: 0.3s ease-in-out;
    transition-delay:0.3s;
  }
  &:hover p{
    font-size: 30px;
    transition: 0.3s ease-in-out;
    transition-delay:0.3s;
  }
  @media only screen and (max-width:1629px){
    &:hover{
      transform: scale(1.01,1.01);
      padding: 5px;
      transition: 0.3s ease-in-out;
      background-image: linear-gradient(-45deg,rgba(4,96,219,0.5),rgba(254,254,254,0.7));
      box-shadow: 3px 3px 8px rgba(0,0,0,0.6);
    }
    &:hover div{
      max-width: 300px;
      transition: 0.3s ease-in-out;
      transition-delay:0.3s ;
    }
    &:hover img{
      width: 150px;
      height: 150px;
      transition: 0.3s ease-in-out;
      transition-delay:0.3s;
    }
    &:hover p{
      font-size: 25px;
      transition: 0.3s ease-in-out;
      transition-delay:0.3s;
    }
  }
  @media only screen and (max-width:1330){
    display: block;
  }
`
const SkillsContainer = ({ children }) => {
  return (
    <SkillsCont>{children}</SkillsCont>
  )
}

export default SkillsContainer