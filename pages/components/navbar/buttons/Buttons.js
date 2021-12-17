import Button from "../button/Button"
import Container from "./Container"
import styled from "styled-components"

const DropDown = styled.div`
  @media only screen and (min-width:768px){
    display: none;
  }
  @media only screen and (max-width:769px){    
    .dropdown-btn{
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      background-color:rgba(0,0,0,0) ;
    }

    .dropdown-content{
      display: none;
      padding: 10px 10px;
      position: absolute;
      background-color: rgba(4,96,219,0.3);
      min-width: 130px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
      border-radius:5px ;
      margin-top:5px;
      
    }
    &.dropdown:hover .dropdown-content{
      display: block;
    }
    &.dropdown-content:hover {
      display: block;
    }
    
  }
`

const Image = styled.img`
  width: 40px;
  height: 40px;
`

const Buttons = () => {

  return (
    <div>
      <Container>
        <Button>Proyects</Button>
        <Button>Skills</Button>
        <Button>Contact</Button>
        <Button>Home</Button>
      </Container>
      <DropDown className="dropdown">
        <button className="dropdown-btn" ><Image src="./drop-down-menu.png" /></button>
        <div className="dropdown-content">
          <Button>Proyects</Button>
          <Button>Skills</Button>
          <Button>Contact</Button>
          <Button>Home</Button>
        </div>
      </DropDown>
    </div>
  )
}

export default Buttons