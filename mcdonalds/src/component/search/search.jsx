import React from "react";
import Search from "./assets/search.png";
import * as S from "./style";
import Layout from "../../Layout/Layout";
import Hour from "./assets/24h.png";
import Deca from "./assets/decaffein.png";
import Delivery from "./assets/delivery.png";
import Drive from "./assets/drive.png";
import Mcmorning from "./assets/mcmorning.png";
import Parking from "./assets/parking.png";
const SearchMc = () => {
  return (
    <Layout>
      <S.Img src={Search}></S.Img>
      <S.DeMain>
        <S.Nmain>
          <S.Topbar>
            <S.Text>지역별</S.Text>
            <S.NoSelText>이벤트매장</S.NoSelText>
          </S.Topbar>
          <S.Mid>
            <S.CompDiv>
              <S.Buttoncomp>
                <S.CompImg src={Hour}></S.CompImg>24시간
              </S.Buttoncomp>
              <S.Buttoncomp>
                <S.CompImg src={Drive}></S.CompImg>맥드라이브
              </S.Buttoncomp>
              <S.Buttoncomp>
                <S.CompImg src={Delivery}></S.CompImg>맥딜리버리
              </S.Buttoncomp>
              <S.Buttoncomp>
                <S.CompImg src={Mcmorning}></S.CompImg>맥모닝
              </S.Buttoncomp>
              <S.Buttoncomp>
                <S.CompImg src={Parking}></S.CompImg>주차
              </S.Buttoncomp>
              <S.Buttoncomp>
                <S.CompImg src={Deca}></S.CompImg>디카페인 커피
              </S.Buttoncomp>
            </S.CompDiv>
            <S.SearchDiv>
              <S.SearchWord placeholder={"매장명, 동명, 도로명을 검색해주세요."}></S.SearchWord>
              <S.SearchButton>검색하기</S.SearchButton>
            </S.SearchDiv>
          </S.Mid>
        </S.Nmain>
      </S.DeMain>
    </Layout>
  );
};

export default SearchMc;
