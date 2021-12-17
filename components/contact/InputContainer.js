import styled from "styled-components";

const InputCont = styled.div`
  margin: 40px;
  & input{
    border: 1px solid #aaa;
    padding: 20px;
    padding-left: 400px;
    padding-right: 400px;
    text-align: center;
    border-radius: 15px;
    font-size: 30px;
    background-color: #f0ffff;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    font-family: 'Roboto', sans-serif;
  }

  & input:focus{
    color: #f0f0f0;
    background-color: rgba(4,96,219,0.3);
    font-family: 'Roboto', sans-serif;
  }

  & textarea{
    width: 100%;
    padding-top:30px;
    padding-bottom:30px;
    text-align: center;
    border-radius: 15px;
    font-size: 30px;
    background-color: #f0ffff;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    font-family: 'Roboto', sans-serif;
    
  }

  & textarea:focus{
    color: #f0f0f0;
    background-color: rgba(4,96,219,0.3);
    font-family: 'Roboto', sans-serif;
  }

  & button{
    width: 100%;
    height: 60px;
    border: 1px solid #aaa;
    border-radius: 15px;
    background-image: linear-gradient(25deg,rgba(4,96,219,1),rgba(4,96,230,0.5));
    color: #f0ffff;
    cursor: pointer;
    font-size: 30px;
    letter-spacing: 2px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    font-family: 'Roboto', sans-serif;
  }
  & button:hover{
    transform: scale(1.05);
    transition: 0.5s;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
  }
  @media only screen and (max-width:1171px){
    margin-left:10% ;
    & input{
      max-width:90%;
    }
    & textarea{
      max-width:90%;
    }
    & button{
      max-width:90%;
    }
  }
  @media only screen and (max-width:954px){
    margin-left:20% ;
    & input::placeholder{
      font-size:20px;
      margin-left:-120px ;
    }
  }
`

const InputContainer = ({ children }) => {
  return (
    <InputCont>{children}</InputCont>
  )
}

export default InputContainer