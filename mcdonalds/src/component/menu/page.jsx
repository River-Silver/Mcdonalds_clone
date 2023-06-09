import styled from "styled-components";
import Burger from "./img/burger.png";
import MenuCard from "./menuCard";
import Layout from "../../Layout/Layout";
import MenuTop from "./menuTop";
import * as M from "./menuCard";
const MenuBurger = () => {
  return (
    <div>
      <Layout>
        <MainImg src={Burger} alt="버거" />
        <MenuTop />
        <ListCards>
          <M.MenuCardBurger1 />
          <M.MenuCardBurger2 />
          <M.MenuCardBurger3 />
        </ListCards>
        <ListCards>
        <M.MenuCardBurger4 />
        <M.MenuCardBurger5 />
        <M.MenuCardBurger6 />
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
