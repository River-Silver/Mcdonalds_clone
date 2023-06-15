import MacGridle from "./img/MacGridle.jpg";
import Blt from "./img/Blt.jpg";
import Wing from "./img/Wing.jpg";
import styled from "styled-components";

const Card = () => {
  function Cards(props) {
    return (
      <div>
        <img src={props.img} alt="맥그리들" />
        {props.title}
      </div>
    );
  }

  return (
    <StyledCard>
      <TitMain>McDonalds's LIVE </TitMain>
      <CardList>
        <CardImg>
          <Cards
            img={Blt}
            title="5월엔 맥을 더 크고 풍성하게! 더블 빅맥 & 빅맥 BLT 출시"
          />
        </CardImg>
        <CardImg>
          <Cards img={Wing} title="돌아온 맥윙의 맛! 겉바속쫄 맥윙!" />
        </CardImg>
        <CardImg>
          <Cards
            img={MacGridle}
            title="단짠속촉 맥그리들 is back!"
            className="cardImg"
          />
        </CardImg>
      </CardList>

      <CardList>
        <CardImg>
          <Cards
            img={Blt}
            title="5월엔 맥을 더 크고 풍성하게! 더블 빅맥 & 빅맥 BLT 출시"
          />
        </CardImg>
        <CardImg>
          <Cards img={Wing} title="돌아온 맥윙의 맛! 겉바속쫄 맥윙!" />
        </CardImg>
        <CardImg>
          <Cards img={MacGridle} title="단짠속촉 맥그리들 is back!" />
        </CardImg>
      </CardList>
      <PlusLayout>
        <Plus>
          <PlusT>+</PlusT>
        </Plus>
      </PlusLayout>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 1200px;
`;

const TitMain = styled.p`
  color: #292929;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  margin-left: 100px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 1203px;
  margin-left: 100px;
  margin-bottom: 40px;
`;

const CardImg = styled.div`
  width: 366px;
  height: 420px;
  color: #292929;
  font-size: 20px;
  padding: 0px;
  line-height: 30px;
  font-weight: bold;
  box-shadow: 0 6px 6px -2px lightgray;
  border-radius: 15px;
  overflow: hidden;
`;

const PlusLayout = styled.div`
  width: 1200px;
`;

const Plus = styled.div`
  width: 90px;
  height: 90px;
  padding-left: 20px;
  background-color: #ffbc0d;
  margin-left: 600px;
  border-radius: 100px;
  margin-bottom: 50px;
`;

const PlusT = styled.p`
  font-size: 85px;
  color: #292929;
  font-weight: lighter;
`;
