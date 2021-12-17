import Image from "./Image"
import ProgressBar from "./ProgressBar"

const PrintedSkills = (props) => {
  return (
    <div>
      <Image src={props.src} />
      <p>Personal Experience</p>
      <ProgressBar value={props.personalValue} />
      <p>Work Experience</p>
      <ProgressBar value={props.workValue} />
    </div>
  )
}

export default PrintedSkills