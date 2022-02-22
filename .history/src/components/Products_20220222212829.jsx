import React from "react";
import Styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
const Container = styled.div``;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
