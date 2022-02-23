import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div``;
const Title = styled.h1``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
