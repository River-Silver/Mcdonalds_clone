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
import * as K from "react-kakao-maps-sdk";

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
              <S.SearchWord
                placeholder={"매장명, 동명, 도로명을 검색해주세요."}
              ></S.SearchWord>
              <S.SearchButton>검색하기</S.SearchButton>
            </S.SearchDiv>
          </S.Mid>
        </S.Nmain>
        <K.Map
          center={{ lat: 37.566826, lng: 126.9786567 }}
          style={{ width: "1000px", height: "560px", marginTop: "30px" }}
        >
          <K.MapMarker position={{ lat: 37.566826, lng: 126.9786567 }}>
            <div style={{ color: "#000" }}>맥도날두 먹고싶다..</div>
          </K.MapMarker>
        </K.Map>
        <S.MapUnderButton>내 위치 중심으로 지도 보기</S.MapUnderButton>
        <S.Table>
          <tr>
          <S.Th>매장명/주소</S.Th>
          <S.Th>전화번호</S.Th>
          <S.Th>영업시간</S.Th>
          <S.Th>이용가능 서비스</S.Th>
          </tr>
        
          <S.Td>한국맥도날드(유)<br/><br/>
          <text style={{color:"#808080"}}>
          서울 종로구 공평동 70<br/>
          서울특별시 종로구 종로<br/>
          51(종로타워)
          </text></S.Td>
          
          <S.Td>1600-5252</S.Td>

        </S.Table>
      </S.DeMain>
    </Layout>
  );
};

export default SearchMc;
