import styled from "styled-components";
import Burger from "./img/burger.png";
import MenuCard from "./menuCard";
import Layout from "../../Layout/Layout";
import MenuTop from "./menuTop";

const MenuBurger = () => {
  return (
    <div>
      <Layout>
        <MainImg src={Burger} alt="버거" />
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

export default MenuBurger;

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
