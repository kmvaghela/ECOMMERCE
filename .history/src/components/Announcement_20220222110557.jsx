import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
`;

const Announcement = () => {
  return (
    <Container>
      Announcement
      <div>hi</div>
    </Container>
  );
};

export default Announcement;
