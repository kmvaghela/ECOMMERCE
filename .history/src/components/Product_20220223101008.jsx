import React from "react";
import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
`;

const Circle = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
 
`;

const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="" />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
