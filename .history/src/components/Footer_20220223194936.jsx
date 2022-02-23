import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

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

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
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
          <SocialIcon color="#3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="#E60023">
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
