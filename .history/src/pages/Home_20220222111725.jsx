import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ArrowLeftOutlined />
      <ArrowRightOutlined />
    </div>
  );
};
export default Home;
