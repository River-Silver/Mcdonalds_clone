import styled from "styled-components";
import Burger from "./img/burger.png";
import * as M from "./menuSet";
import Layout from "../../Layout/Layout";
import MenuTop from "./menuTop";
const MenuSet = () => {
  return (
    <div>
      <Layout>
        <MainImg src={Burger} alt="버거" />
        <MenuTop />
        <ListCards>
          <M.MenuCardSet1 />
          <M.MenuCardSet2 />
          <M.MenuCardSet3 />
        </ListCards>
        <ListCards>
        <M.MenuCardSet4 />
        <M.MenuCardSet5 />
        <M.MenuCardSet6 />
        </ListCards>
      </Layout>
    </div>
  );
};

export default MenuSet;

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
