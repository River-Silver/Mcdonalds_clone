import styled from "styled-components";
import McCrispy from "./img/McCrispy.png";
import McSpicy from "./img/McSpicy.png";
import BigMac from "./img/BigMac.png";
import DQP from "./img/DQP.png";
import Quarter from "./img/Quarter.png"
import McCrispyDeluxe from "./img/McCrispyDeluxe.png";
export const MenuCardBurger1 = () => {
  return (
    <Box>
      <img src={McCrispy} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>맥크리스피<sub class="reg">™</sub>핫앤치즈</ContentTitle>
      </ContentBox>
      <ContentBox>
      <ContentEng>McCrispy<sub class="reg">™</sub>Hot & Cheese</ContentEng>
      </ContentBox>
    </Box>
  );
};
export const MenuCardBurger2 = () => {
  return (
    <Box>
      <img src={McSpicy} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>맥스파이시<sub class="reg">®</sub>핫앤치즈</ContentTitle>
      </ContentBox>
      <ContentBox>
      <ContentEng>McSpicy<sub class="reg">®</sub>Hot & Cheese</ContentEng>
      </ContentBox>
    </Box>
  );
};
export const MenuCardBurger3 = () => {
  return (
    <Box>
      <img src={BigMac} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>빅맥<sub class="reg">®</sub></ContentTitle>
      </ContentBox>
      <ContentBox>
      <ContentEng>Big Mac<sub class="reg">®</sub></ContentEng>
      </ContentBox>
    </Box>
  );
};
export const MenuCardBurger4 = () => {
  return (
    <Box>
      <img src={DQP} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>더블 쿼터파운더<sub class="reg">®</sub>치즈</ContentTitle>
      </ContentBox>
      <ContentBox>
      <ContentEng>Double Quarter Pounder<sub class="reg">®</sub><br></br>with Cheese</ContentEng>
      </ContentBox>
    </Box>
  );
};
export const MenuCardBurger5 = () => {
  return (
    <Box>
      <img src={Quarter} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>쿼터파운더<sub class="reg">®</sub>치즈</ContentTitle>
      </ContentBox>
      <ContentBox>
      <ContentEng>Quarter Pounder<sub class="reg">®</sub><br></br>with Cheese</ContentEng>
      </ContentBox>
    </Box>
  );
};
export const MenuCardBurger6 = () => {
  return (
    <Box>
      <img src={McCrispyDeluxe} alt="맥그리들" />
      <ContentBox>
        <ContentTitle>맥크리스피<sub class="reg">™</sub>디럭스 버거</ContentTitle>
      </ContentBox>
      <ContentBox>
      <ContentEng>McCrispy<sub class="reg">™</sub>Deluxe Burger</ContentEng>
      </ContentBox>
    </Box>
  );
};

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
