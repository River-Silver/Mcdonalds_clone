import React from "react";
import Layout from "../../Layout/Layout";
import McPeople from "./assets/mcpeople.png";
import Human1 from "./assets/human1.png";
import Human2 from "./assets/human2.png";
import Human3 from "./assets/human3.png";
import Human4 from "./assets/human4.png";
import * as S from "./style";
import { useState } from "react";

const BrandIntro = () => {
  return(
    <Layout>
        <S.Img src = {McPeople}></S.Img>
        <S.DeMain>
        
            <S.InnerDiv>
                <S.Tab>
                <a href = "/brandIntro" style={{textDecoration: "none"}}><S.RedText>크루이야기</S.RedText></a>
                    <a href = "/work" style={{textDecoration: "none"}}><S.GrayText style={{textDecoration: "none"}}>업무소개</S.GrayText></a>
                    <a href = "/recruit" style={{textDecoration: "none"}}><S.GrayText>인재채용</S.GrayText></a>
                </S.Tab>
                <S.Title>크루들이 만들어가는 맥도날드의 변화 이야기</S.Title>
                <S.CrewList>
                    <S.HumanDiv>
                    <S.HumanImg src = {Human1}></S.HumanImg>
                    <S.GrayText style={{color:"black"}}>변화는 나의 자부심</S.GrayText>
                    <S.GrayText style={{fontSize:"16px"}}>목포 남악 DT점 김지웅 매니저</S.GrayText>
                    </S.HumanDiv>
                    <S.HumanDiv>
                    <S.HumanImg src = {Human2}></S.HumanImg>
                    <S.GrayText style={{color:"black"}}>매일 열정적일 수 있는 <br></br>나만의 비결</S.GrayText>
                    <S.GrayText style={{fontSize:"16px"}}>경희대점 권영미 크루</S.GrayText>
                    </S.HumanDiv>
                    <S.HumanDiv>
                    <S.HumanImg src = {Human3}></S.HumanImg>
                    <S.GrayText style={{color:"black"}}>행복을 배달하는 사람으로</S.GrayText>
                    <S.GrayText style={{fontSize:"16px"}}>미아역점 이지혁 라이더</S.GrayText>
                    </S.HumanDiv>
                    <S.HumanDiv>
                    <S.HumanImg src = {Human4}></S.HumanImg>
                    <S.GrayText style={{color:"black"}}>맥도날드를 넘어,<br></br>나 자신의 변화까지</S.GrayText>
                    <S.GrayText style={{fontSize:"16px"}}>석촌역점 이나라 크루</S.GrayText>
                    </S.HumanDiv>
                </S.CrewList>
            </S.InnerDiv>
            
        </S.DeMain>
    </Layout>
  )
};

export default BrandIntro;
