import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import McDelivery from "./mcDelivery";
import McIcon from "./assets/McIcon.png";
import Address from "./address";
import Search from "./search";
import Inform from "./inform";
import McButton from "./mcButton";
const delivery = () => {
  return (
    <Layout>
      <McDelivery></McDelivery>
      &nbsp;
      <DeMain>
        <Text>우리집에 맥딜리버리 배달이 되나요?</Text>

        <DeliverySearch>
          <Sbox>
            <Spans>
              <InputAdd placeholder="주소를 입력하세요." />
              <SubmitBtn>
                <AddSpan>주소찾기</AddSpan>
              </SubmitBtn>
            </Spans>
            <InputsDiv>
              <InputsAdd placeholder="상세주소를 입력하세요."></InputsAdd>
              <Dongho></Dongho>
              <Unit>동</Unit>
              <Dongho></Dongho>
              <Unit>호</Unit>
            </InputsDiv>
            <AptTag>
              <br></br>* 아파트의 경우 동, 호수를 입력하셔야 정확한 검색이
              가능합니다.
            </AptTag>
            <InputsDiv>
              <SearchButton>검색하기</SearchButton>
            </InputsDiv>
          </Sbox>
          <Rbox>
            <McImg src={McIcon}></McImg>
          </Rbox>
        </DeliverySearch>
        <br></br>
        <br></br>
        <Mcul>
          <Mcli>
            &nbsp;매장 별 무료 배달 주문 금액 및 소액주문비는 다르게 운영될 수
            있으며, 주문 시 결제 페이지에서 미리 확인 하실 수 있습니다.<br></br>
          </Mcli>
          <Mcli>&nbsp;맥딜리버리 가격은 매장과 상이합니다.<br></br></Mcli>
          <Mcli>
            &nbsp;배달 가능 구역 내에서도 기상조건이나 기타 매장의 사정에 따라
            배달 서비스 이용이 어려울 수 있습니다.<br></br>
          </Mcli>
          <Mcli>
            &nbsp;주문이 밀리는 시간대에는 배달이 다소 지연될 수 있습니다.
            고객님의 너그러운 이해 부탁 드립니다.<br></br>
          </Mcli>
          <Mcli>
            &nbsp;메뉴 주문 시 제공 되는 케찹류나 기타 물품의 경우 기본 제공
            수량 기준으로 배달하여 드립니다.<br></br>
          </Mcli>
          <Mcli>&nbsp;맥딜리버리의 운영 시간은 매장과 상이할 수 있습니다.</Mcli>
        </Mcul>
      </DeMain>
    </Layout>
  );
};
export default delivery;

const DeMain = styled.div`
  width: 1168px;
  height: 948.8px;
  display: flex;
  flex-direction: column;
  margin-left: 175.6px;
`;

const DeliverySearch = styled.div`
  display: flex;
  gap: 40px;
`;

const Text = styled.h1`
  text-align: left;
  font-size: 30px;
  color: #292929;
  margin-bottom: 30px;
`;
const Sbox = styled.div`
  width: 564px;
  height: 406px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 40px;
  padding: 40px 30px 50px;
  gap: 13px;
`;

const Rbox = styled.div`
  width: 564px;
  height: 406px;
  border-radius: 40px;
  border: 4px solid red;
  display: flex;
  justify-content: center;
  vertical-align: mid;
`;
const McImg = styled.img``;
const InputAdd = styled.input`
  color: #292929;
  height: 70px;
  width: 500px;
  padding: 0 28px;
  line-height: 1;
  border: 1px solid #d1d1d1;
  border-radius: 70px;
  background: #fff;
`;
const InputsAdd = styled.input`
  color: #292929;
  height: 70px;
  width: 220px;
  padding: 0 28px;
  line-height: 1;
  border: 1px solid #d1d1d1;
  border-radius: 70px;
  background: #fff;
`;
const Dongho = styled.input`
  color: #292929;
  height: 70px;
  width: 100px;
  padding: 0 28px;
  line-height: 1;
  border: 1px solid #d1d1d1;
  border-radius: 70px;
  background: #fff;
`;
const Unit = styled.span`
  text-align: center;
  font-weight: bolder;
`;
const AptTag = styled.text`
  font-size: 16px;
  color: gray;
  font-weight: bolder;
`;
const InputsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;
const SubmitBtn = styled.button`
  width: 160px;
  height: 70px;
  z-index: 5;
  right: 0px;
  background-color: #ffbc0d;
  border: 0;
  position: absolute;
`;

const Spans = styled.span`
  position: relative;
`;
const AddSpan = styled.text`
  font-weight: bolder;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const SearchButton = styled.button`
  margin-top: 20px;
  width: 160px;
  height: 70px;
  background-color: #ffbc0d;
  border: 0;
`;
const Mcul = styled.ul`
  list-style-type: none;
`;

const Mcli = styled.li`
  &::marker {
    content: "•";
    color: #ffbc0d;
    font-size: 15px;
    margin-right: 5px;
  }
  color: gray;
  font-weight: bolder;
  margin: 0;
  margin-top:12px;
`;
