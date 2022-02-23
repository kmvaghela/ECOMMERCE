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
  position: relative;
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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
`;

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
