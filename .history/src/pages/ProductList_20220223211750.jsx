import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter1</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
    </Container>
  );
};

export default ProductList;
