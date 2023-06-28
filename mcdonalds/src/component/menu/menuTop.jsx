import styled from "styled-components";

const MenuTop = () => {
  return (
    <StyledTop>
      <MenuType>
      <a href="/menu" style={{textDecorationLine:"none"}}><MenuTypeP>단품메뉴</MenuTypeP></a>
        <a href="/menuset" style={{textDecorationLine:"none"}}><MenuTypeP style={{color:"#808080"}}>세트메뉴</MenuTypeP></a>
      </MenuType>
      <Counts>- 20 Products</Counts>
    </StyledTop>
  );
};

export default MenuTop;

const StyledTop = styled.div`
  margin: 20px 150px 20px 150px;
  padding-left: 40px;
`;

const MenuType = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin: 30px 0px 20px 420px;
`;

const MenuTypeP = styled.p`
  color: #db0007;
  font-weight: bold;
  font-size: 25px;
`;

const Counts = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
