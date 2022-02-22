import styled from "styled-components";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Order Over $50
      <AccessAlarm />
      <ThreeDRotation />
    </Container>
  );
};

export default Announcement;
