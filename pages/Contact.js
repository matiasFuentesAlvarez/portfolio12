import Title from "../components/title/Title"
import emailjs from 'emailjs-com'
import styled from "styled-components"
import React from "react"
import InputContainer from "../components/contact/InputContainer"
import Navbar from "./Navbar"

const Container = styled.div`
  display: flex;
  justify-content: center;
`


const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_3iah7jf', e.target, 'user_7DlSH8pEVApatSnrWba72')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div>
      <Navbar />
      <Title>Contact</Title>

      <Container>
        <form onSubmit={sendEmail}>
          <div >
            <InputContainer>
              <input type="text" placeholder="Name" name="name" />
            </InputContainer>
            <InputContainer >
              <input type="email" placeholder="Email Address" name="email" />
            </InputContainer>
            <InputContainer >
              <input type="text" placeholder="Subject" name="subject" />
            </InputContainer>
            <InputContainer >
              <textarea placeholder="Your message" name="message"></textarea>
            </InputContainer>
            <InputContainer >
              <button type="submit" >Send</button>
            </InputContainer>
          </div>
        </form>
      </Container>
    </div>
  )
}
//name email subject message
export default Contact