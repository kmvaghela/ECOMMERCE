import React from "react";
import styled from "styled-components";
import { SearchIcon } from "@mui/icons-material";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: apx solid lightgray;
`;

const Center = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            input
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
