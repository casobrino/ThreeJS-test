import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Inputs = styled.input`
  background-color: #f0e8e8;
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f0e8e8;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s ease;

  &:hover {
    background-color: #df2d98;
    transition: 0.3s ease;
  }
`;
const Right = styled.div`
  flex: 1;
`;

const handleSubmit = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contanct us</Title>
            <Inputs placeholder="Name" />
            <Inputs placeholder="email" />
            <TextArea placeholder="Write you message" rows={10} />
            <Button type="submit">Contact</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
