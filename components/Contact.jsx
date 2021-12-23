import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid"
import { Label } from './Label';

const SideInfo = styled.div`
    letter-spacing: 3px;
    color: black;

    a {
        color: #FF308B;
        text-shadow: 0px 0px 10px #16ccb7;
        text-decoration: none;
    }
`

const FormContainer = styled.div`
  box-sizing: border-box;
  padding: 20px 30px 60px 30px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 4px 0 #e8e8e8, 0 2px 200px 0 rgba(0, 158, 255, 0.04);
  border: solid 1px #f4f4f4;
  letter-spacing: 3px;


  input, textarea, select, a {
    box-sizing: border-box;
    width: 100%;
    padding: 12px 20px;
    border-radius: 2px;
    box-shadow: inset 0 1px 1px 0 rgb(0 0 0 / 6%);
    border: 1px solid #e4e4e4;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 19px;
    color: #777;
    font-family: "Posterama";
  }

  textarea {
    resize: none;
    height: 300px;
  }

  p {
    color: red;
    font-size: 11px;
  }

  form {
      text-align: left;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 100px;
`;

export const ContactDetails = styled.p`
  a:hover {
    color: #FF2B61;
  }
`;

const SubmitButton = styled.div`
  border: none;
  color: white;
  margin-top: 30px;
  display: block;
  box-sizing: border-box;
  line-height: 20px;
  padding: 14px 10px;
  font-size: 16px;
  border-radius: 5px;
  width: 100%;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #f97f77, #fb688d);;
  }

  background: ${props => (props.active ? 'linear-gradient(to right, #FF3D30, #FF2B61);' : 'lightgrey')};
  pointer-events: ${props => (props.active ? 'auto' : 'none')};
`;

const Form = () => {
  const [enabled, setEnabled] = useState(false);
  const [formState, setFormState] = useState()

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleChange = (event) => {
    event.persist()
    nameRef.current.value != '' && emailRef.current.value != '' && subjectRef.current.value != '' && messageRef.current.value != '' && setEnabled(true)
  }

  const handleSubmit = () => {
    const obj = {
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value
    }

    let requestOptions = {
        method: 'POST',
        body: JSON.stringify(obj),
        redirect: 'follow'
      };
    
    fetch('/api/email', requestOptions)
    .then(() => setFormState('Success!'))
    .catch((data) => setError(data))
  }

  return (
    formState !== 'Success!' ? (
        <FormContainer>
            <form onChange={handleChange}>
                <label htmlFor="name">
                Name
                <input ref={nameRef} type="text" name="name" placeholder="Your name..." />
                </label>
                <label htmlFor="email">
                Email
                <input ref={emailRef} type="email" name="email" placeholder="Your email..." required />
                </label>
                <label htmlFor="subject">
                Subject
                <input ref={subjectRef} type="text" name="subject" placeholder="Subject..." />
                </label>
                <label htmlFor="message">
                Message
                <textarea ref={messageRef} name="message" placeholder="Your message..." required />
                </label>
                <SubmitButton onClick={handleSubmit} active={enabled}>Submit</SubmitButton>
            </form>
        </FormContainer>
    )
      : <h2>Form Submitted. You should receive an email shortly!</h2>
  );
};

const Contact = () => (
    <div id="contact">
        <Label color="black">CONTACT US</Label>
        <Row center="xs">
            <Col xs={3}>
                <SideInfo>
                    <h3>Booking:<br></br><a href="mailto:back2zeromusic@yahoo.com">back2zeromusic@yahoo.com</a></h3>
                    <h3>Manager:<br></br><a href="mailto:chris.longo@gmail.com">chris.longo@gmail.com</a></h3>
                </SideInfo>
            </Col>
            <Col xs={6}>
                <Form>
                </Form>
            </Col>
        </Row>
    </div>
);

export default Contact;