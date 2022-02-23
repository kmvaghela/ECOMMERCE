import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img``;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Description = styled.p``;

const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="" alt="not found" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            inventore quis recusandae iusto voluptatibus rerum quas nisi sit
            voluptatem aut? Officia unde saepe tempora odio perferendis eveniet
            officiis, ab repellat.
          </Description>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
