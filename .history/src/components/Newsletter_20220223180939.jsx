import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Newsletter = () => {
  return (
    <Container>
      <Title></Title>
      <Description></Description>
      <InputContainer>
        <Input />
        <Button></Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
