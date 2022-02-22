import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img`
height:100px;
width:100px;
`;
const Info = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const CategoryItem = (item) => {
  return (
    <Container key={item.id}>
      <Image src={item.img} alt="not  found" />
      <Info>
        <Title>{item.title}hi</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
