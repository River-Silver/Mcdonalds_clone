import "./card.css";
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
    <div>
      <TitMain>McDonalds's LIVE </TitMain>
      <CardList>
        <CardImg>
          <Cards
            img={Blt}
            title="5월엔 맥을 더 크고 풍성하게! 더블 빅맥 & 빅맥 BLT 출시"
            className="cardImg"
          />
        </CardImg>
        <CardImg>
          <Cards
            img={Wing}
            title="돌아온 맥윙의 맛! 겉바속쫄 맥윙!"
            className="cardImg"
          />
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
            className="cardImg"
          />
        </CardImg>
        <CardImg>
          <Cards
            img={Wing}
            title="돌아온 맥윙의 맛! 겉바속쫄 맥윙!"
            className="cardImg"
          />
        </CardImg>
        <CardImg>
          <Cards
            img={MacGridle}
            title="단짠속촉 맥그리들 is back!"
            className="cardImg"
          />
        </CardImg>
      </CardList>
    </div>
  );
};

export default Card;

const TitMain = styled.div`
  margin: 0 0 60px;
  color: #292929;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
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
  padding: 20px;
  line-height: 30px;
  font-weight: bold;
  box-shadow: 0 8px 8px -4px gray;
  border: 1px solid black;
  border-radius: 20px 20px 0px 0px;
`;
