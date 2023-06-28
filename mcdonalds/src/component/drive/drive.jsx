import Layout from "../../Layout/Layout";
import * as S from "./style";
import McDrive from "./assets/mcDrive.png";
import ReactPlayer from "react-player";
const Drive = () => {
  return (
    <Layout>
      <S.Img src={McDrive}></S.Img>
      <S.DeMain>
        <br></br>
        <S.Text>맥드라이브는 어떻게 이용하나요?</S.Text>
        <S.Mcp>
          운전 중에도 24시간 간편하고 빠르게!
          <br />차 안에서 주문하고, 차 안에서 바로 받아 맛있는 맥도날드를
          즐겨보세요.
        </S.Mcp>
        <ReactPlayer
            className="player"
            url={
              "https://www.youtube.com/watch?v=BiMkqfVNmnk&embeds_referring_euri=https%3A%2F%2Fwww.mcdonalds.co.kr%2F&source_ve_path=MjM4NTE&feature=emb_title"
            }
            width="100%"
            height="600px"
            playing={false}
            muted={true}
            controls={true}
          />
        <S.DownDiv>
          <S.DownButton>
            <S.DownText>맥드라이브 매장 검색하기</S.DownText>
          </S.DownButton>
        </S.DownDiv>
      </S.DeMain>
    </Layout>
  );
};

export default Drive;
