import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          aliquam nisi ab adipisci consequuntur laboriosam minima ut porro eum
          ex tenetur, iusto placeat nemo voluptate assumenda, numquam cum
          voluptatem magni!
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
