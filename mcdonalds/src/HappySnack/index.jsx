import styled from "styled-components";
import MenuCard from "./menuCard";
import Layout from "../Layout/Layout";
import MenuTop from "./menuTop";
import Banner from "./img/Banner.png";

const HappySnack = () => {
  return (
    <div>
      <Layout>
        <MainImg src={Banner} alt="버거" />
        <MenuTop />
        <ListCards>
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </ListCards>
        <ListCards>
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </ListCards>
      </Layout>
    </div>
  );
};

export default HappySnack;

const MainImg = styled.img`
  width: 100%;
  height: auto;
`;

const ListCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 1000px;
  height: auto;
  margin-left: 150px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
