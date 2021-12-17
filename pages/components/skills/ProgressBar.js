import styled from "styled-components"

const Border = styled.div`
  margin: 50px auto;
  padding: 2px;
  width: 100%;
  max-width: 300px;
  border: 3px solid #ddd;
  height: 30px;
  border-radius: 18px;
  background-image: linear-gradient(45deg,rgba(255,0,0,0.25),rgba(255,233,0,0.25),rgba(0,255,0,0.25));
  @media only screen and (max-width:1629px){
    max-width: 200px;
}
`
const Inside = styled.div.attrs(props => ({}))`
  height: 100%;
  width: ${props => props.value}%;
  background-color: rgba(4,96,219,1);
  border-radius: 15px;
`

const ProgressBar = (props) => {
  return (
    <Border>
      <Inside value={props.value}></Inside>
    </Border>
  )
}

export default ProgressBar