import styled from "styled-components";
import ImgSide from "./img/ImgSide.png";

const MenuCard = () => {
  return (
    <Box>
      <img src={ImgSide} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>맥크리스피 핫앤치즈</ContentTitle>
      </ContentBox>
      <ContentBox>
        <ContentEng>McCrispy Hot & Cheese</ContentEng>
      </ContentBox>
    </Box>
  );
};

export default MenuCard;

const Box = styled.div`
  width: 366px;
  height: 352px;
  background-color: #f8f8f8;
  padding: 20px 30px;
  border-radius: 15px;
  border: 1px solid white;
  /* margin: 100px; */
  &:hover {
    background-color: white;
    border-color: #ffbc0d;
  }
`;

const ContentBox = styled.div`
  margin: 16px 0px 0px;
  width: 100%;
  text-align: center;
  margin: 10px 0px 50px 0px auto;
`;

const ContentTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #292929;
`;

const ContentEng = styled.p`
  color: #808080;
  font-size: 15px;
  font-weight: bold;
`;
