import React from "react";
import Layout from "../../Layout/Layout";
import McPeople from "./assets/mcpeople.png";
import Carrer from "./assets/carrer.png";
import Carrer1 from "./assets/career01.jpg";
import Carrer2 from "./assets/career02.jpg";
import * as S from "./style";

const Recruit = () => {
  return (
    <Layout>
      <S.Img src={McPeople}></S.Img>
      <S.DeMain>
        <S.InnerDiv>
          <S.Tab>
            <a href="/brandIntro" style={{ textDecoration: "none" }}>
              <S.GrayText>크루이야기</S.GrayText>
            </a>
            <a href="/work" style={{ textDecoration: "none" }}>
              <S.GrayText>업무소개</S.GrayText>
            </a>
            <a href="/recruit" style={{ textDecoration: "none" }}>
              <S.RedText>인재채용</S.RedText>
            </a>
          </S.Tab>
          <br />
          <S.Bar>
            <img src={Carrer}></img>
            <h2>
              변화를 만나는 곳, 변화를 만드는 곳<br />
              한국맥도날드의 최신 채용정보를 확인하세요.
            </h2>
          </S.Bar>
          <br />
          <S.CarrerDiv>
            <S.CarrerInner>
              <img src={Carrer1}></img>맥도날드의 시간제(Part Time) 근무자를
              우리는 크루(Crew) 라고 부릅니다.
              <br />
              즐거운 일터에서 함께 일하며 경험을 쌓고, 다양한 혜택과 매니저로
              성장할 수<br /> 있는 최고의 기회를 누려보세요!
              <a href="https://mcdonalds.recruiter.co.kr/appsite/company/index"><S.CarrerButton>크루 지원하기</S.CarrerButton></a>
            </S.CarrerInner>
            <S.CarrerInner>
              <img src={Carrer2}></img>사회인으로 첫 발을 내딛는 지금, 당신은
              중요한 선택의 순간에 서 있습니다.
              <br />
              당신의 첫번째 선택이 맥도날드가 되기를 희망합니다. 늘 현명한
              선택으로 성공을 창조해 온 맥도날드, 이곳에서 당신의 소중한 꿈을
              펼쳐보세요 !<a href="https://mcdonalds.recruiter.co.kr/appsite/company/index"><S.CarrerButton style={{width:"307px"}} >레스토랑 매니저/본사 직원 지원하기</S.CarrerButton></a>
            </S.CarrerInner>
          </S.CarrerDiv>
        </S.InnerDiv>
      </S.DeMain>
    </Layout>
  );
};

export default Recruit;
