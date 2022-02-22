import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex:1
`;
const Center = styled.div`
flex:2

`;
const Right = styled.div`
flex:1

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          aliquid excepturi placeat, alias sed numquam velit totam facilis neque
          aperiam doloribus dolor. Facilis illum corporis alias optio nam
          incidunt earum.
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
