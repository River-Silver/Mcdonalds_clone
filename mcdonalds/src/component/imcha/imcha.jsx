import React from "react";
import Layout from "../../Layout/Layout";
import Rental from "./assets/imchamun.png";
import * as S from "./style";
import { DeMain } from "../drive/style";
const Imcha = () => {
  return (
    <Layout>
      <S.Img src={Rental}></S.Img>
      <S.DeMain>
        <S.Title>토지 임대 및 매매</S.Title>
        <S.Table>
          <tr>
            <S.Th>임차조건</S.Th>
            <S.Td>
              안정적이고 지속적인 주거 인구 증가 지역
              <br />
              차량의 진 출입 및 접근성이 좋은 위치
              <br />
              도로변에 위치하여 가시성이 좋은 입지
              <br />
              교통 통행량이 많은 지역
            </S.Td>
          </tr>
          <tr>
            <S.Sth>면적</S.Sth>
            <S.Td style={{ borderBottom: 0 }}>
              서울 - 최소 200평 이상 대지 면적
              <br />
              경기도 및 광역시 - 최소 300평 이상 대지 면적
              <br />그 외의 지역 - 최소 400평 이상 대지 면적
            </S.Td>
          </tr>
        </S.Table>
        <S.DownDiv>
          <a href="https:www.mcdonalds.co.kr/down/RS_01_Mcd_Retail_spac_for_rent_Application.docx">
            <S.DownButton>제안서 양식 다운로드</S.DownButton>
          </a>
          <S.DownP>
            위의 입지 제안서 양식을 다운로드하여 작성하신 후 담당자에게 보내
            주세요.
            <br />
            <b style={{ color: "black" }}>
              담당자 이메일 : realestate@kr.mcd.com
            </b>
          </S.DownP>
        </S.DownDiv>
        <S.Title>건물임대</S.Title>
        <S.Table>
          <tr>
            <S.Th>임차조건</S.Th>
            <S.Td>
              유동인구가 풍부한 지역 (역세권, 사무실 및 아파트 밀집 지역 등)
              <br />
              서울/경기도 지역
              <br />
              6대 광역시
            </S.Td>
          </tr>
          <tr>
            <S.Th>면적</S.Th>
            <S.Td style={{ borderBottom: 0 }}>
              전용으로 1층이 80평 이상의 면적 (20평은 창고, 휴게실 공간으로
              지하/윗층으로 이동 될 수 있음)
              <br />
              1,2층일 경우, 각 층이 40평 이상의 면적
              <br />
              중심 상업지구라면 1층 40평 이하일 때, 2층은 60평 이상의 면적
              <br />
            </S.Td>
          </tr>
        </S.Table>
      </S.DeMain>
    </Layout>
  );
};

export default Imcha;
