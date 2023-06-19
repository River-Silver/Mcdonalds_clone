import React from "react";
import news from "./assets/news.png";
import * as S from "./style";
import Layout from "../../Layout/Layout";
import Search from "./assets/search.png";
import Notice from "./assets/notice.png";
const News = () => {
  return (
    <Layout>
      <S.Img src={news}></S.Img>
      <S.DeMain>
        <S.Nmain>
          <S.Np>
            총 <S.Nb>0건</S.Nb>의 게시물이 있습니다.
            <S.Ninput placeholder="검색어를 입력하세요."></S.Ninput>
            <S.SrchBtn>
              <img src={Search} style={{ width: 50 }}></img>
            </S.SrchBtn>
          </S.Np>
          <S.Result>
            <S.ResultHref>
              <S.Rspan>
                <img src={Notice}></img>
              </S.Rspan>
              <S.TextSpan>
                맥딜리버리 서비스를 제공하기 위한 맞춤형 광고 수신 동의 및
                거부에 대한 고지
              </S.TextSpan>
              <S.Rspan>2022.10.07</S.Rspan>
            </S.ResultHref>
            <S.ResultHref>
              <S.Rspan>
                <img src={Notice}></img>
              </S.Rspan>
              <S.TextSpan>주방 공개 행사 잠정 중단 안내의 건</S.TextSpan>
              <S.Rspan>2020.02.27</S.Rspan>
            </S.ResultHref>
            <S.ResultHref>
              <S.Rspan>
                <img src={Notice}></img>
              </S.Rspan>
              <S.TextSpan>디카페인 커피 미판매 매장 안내</S.TextSpan>
              <S.Rspan>2020.01.20</S.Rspan>
            </S.ResultHref>
            <S.ResultHref>
              <S.Rspan>
                <img src={Notice}></img>
              </S.Rspan>
              <S.TextSpan>칠러 미판매 매장 안내</S.TextSpan>
              <S.Rspan>2020.02.27</S.Rspan>
            </S.ResultHref>
            <S.ResultHref style={{ borderBottom: 0 }}>
              <S.Rspan>
                <img src={Notice}></img>
              </S.Rspan>
              <S.TextSpan>맥도날드 모바일 쿠폰 사용 제외 매장 안내</S.TextSpan>
              <S.Rspan>2019.10.07</S.Rspan>
            </S.ResultHref>
          </S.Result>
        </S.Nmain>
      </S.DeMain>
    </Layout>
  );
};

export default News;
