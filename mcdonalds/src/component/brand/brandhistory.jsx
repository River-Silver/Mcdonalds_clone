import React from "react";
import Layout from "../../Layout/Layout";
import * as S from "./style";
import BrandImg from "./assets/brand.png";
import Brand2 from "./assets/brand2.jpg";
import Brand3 from "./assets/brand3.jpg";
import Brand4 from "./assets/brand4.jpg";

const BrandHistory = () => {
  return (
    <Layout>
      <S.Img src={BrandImg}></S.Img>
      <S.DeMain>
        <S.InnerDiv>
          <S.Tab>
            <a href="/brand" style={{ textDecorationLine: "none" }}>
              <S.GrayText>맥도날드 소개</S.GrayText>
            </a>
            <a href="/brandhistory" style={{ textDecorationLine: "none" }}>
              <S.RedText>맥도날드 철학 및 역사</S.RedText>
            </a>
          </S.Tab>
          <S.ImgDiv style={{ gap: "20px" }}>
            <img src={Brand2}></img>
            <h2>
              맥도날드 기업철학의 뿌리,
              <br />
              창업주 레이 크록(Ray Kroc)의 이야기
            </h2>
            <h3>1954년, 맥도날드 형제가 만든 최고의 햄버거를 만나다</h3>
            <S.GrayText style={{ fontSize: "15px", lineHeight: "30px" }}>
              맥도날드 역사는 1954년 레이 크록(Ray Kroc)이 캘리포니아에 있는 한
              햄버거 가게를 방문하면서부터 시작되었습니다.
              <br />
              밀크 쉐이크 기계 판매원으로 근무하던 크록은 맥도날드 형제가
              운영하던 햄버거 가게에서 주문을 받았고 그들에게 감탄했습니다.
              <br />
              메뉴는 간단하고 저렴하지만 햄버거의 품질과 맛은 최고였습니다.
            </S.GrayText>
          </S.ImgDiv>
          <S.ImgDiv style={{ flexDirection: "unset" }}>
            <img src={Brand3} style={{ padding: "0px 25px 0px 0px" }}></img>
            <S.WalkInnerDiv style={{ padding: "0px 0px 0px 25px" }}>
              <h2>
                1955년, 일리노이주에 첫 매장 오픈에서 5년 후,<br></br>
                200개의 매장 오픈까지
              </h2>
              <br />
              <S.GrayText style={{ fontSize: "15px", lineHeight: "32px" }}>
                크록은 맥도날드 형제에게 미국 전역에 걸쳐 맥도날드 매장을
                개장하는 비전을 제시하며 프랜차이즈 사업을 제안했습니다.
                1955년에 크록은 일리노이주의 데스플레인스 (Des Plaines)에
                맥도날드의 첫 정식 프랜차이즈 매장을 오픈했습니다. 이 후 큰
                성공을 거두어 불과 5년 만에 점포 수는 200개가 되었습니다.
              </S.GrayText>
              <h2 style={{ margin: "40px 0px 0px" }}>
                맥도날드의 기업철학의 뿌리, 레이 크록
              </h2>
              <br />
              <S.GrayText style={{ fontSize: "15px", lineHeight: "32px" }}>
                1984년 1월, 81세의 나이로 사망하기 직전까지 크록은 맥도날드를
                위해 헌신 했습니다. 그는 새 가맹점이 문을 열 때마다 영업 첫날의
                판매 보고서를 받아 철저히 검토했으며, 맥도날드의 당시 신임
                경영진이 어떻게 회사를 이끌어 가는지 늘 관심을 갖고
                지켜보았습니다. 레이 크록의 진정한 공로는 수평적이고 모두의
                성장을 꾀하는 새로운 사업구조와 그 시스템을 창조한 것입니다.
                그는 타고난 리더로서 탁월한 능력을 발휘하여, 프랜차이즈 업체와
                공급업체, 그리고 직원 모두의 성장을 꾀하는 새로운 사업 구조를
                창조했으며, 선진적인 기업 문화 정착에 기여한 것으로 평가 받고
                있습니다.
              </S.GrayText>
            </S.WalkInnerDiv>
          </S.ImgDiv>

          <S.ImgDiv style={{ flexDirection: "unset" }}>
            <S.WalkInnerDiv style={{ padding: "0px 0px 0px 25px" }}>
              <h2>‘세 다리 의자(The Three-Legged Stool)’ 철학</h2>
              <br />
              <S.GrayText style={{ fontSize: "15px", lineHeight: "32px" }}>
                크록은 언제 어디에서나 변함없이 좋은 품질의 음식을 제공하고
                완벽한 서비스를 동일하게 제공한다는 경영철학을 추구했습니다.
                이를 위해 크록은 프랜차이즈 파트너와 공급 업체와의 수평적인
                관계를 통해 동반 성장이 이루어져야 한다는 신념으로 이들에게
                ‘맥도날드를 위해 일하는 것’이 아닌, ‘맥도날드와 함께 본인들을
                위해 일하는 것’이라는 비전을 전달했습니다. 크록은 ‘사업은 혼자
                하는것이 아니라(by yourself), 본인을 위해 하는 것(for
                yourself)이다’라는 유명한 슬로건을 남긴 바 있습니다. 크록의
                신념은 프랜차이즈 파트너, 공급업체가 의자의 세 다리와 같은
                역할을 해야만 맥도날드가 튼튼하게 바로설 수 있다는 의미의 ‘세
                다리 의자(The Three-Legged Stool)’ 철학을 바탕으로 하고
                있습니다. 이것이 맥도날드가 오늘날의 프랜차이즈 표본이 되고,
                60년 가까이 전세계에서 최대 규모의 프랜차이즈 업체로 성장하게 된
                비결입니다.
              </S.GrayText>
            </S.WalkInnerDiv>
            <img src={Brand4} style={{ padding: "0px 0px 0px 25px" }}></img>
          </S.ImgDiv>
        </S.InnerDiv>
      </S.DeMain>
    </Layout>
  );
};

export default BrandHistory;
