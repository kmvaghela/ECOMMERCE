import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PinterestIcon,
} from "@mui/icons-material";
// import PinterestIcon from '@mui/icons-material/Pinterest';
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;
const Description = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

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
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
