import "./card.css";
import MacGridle from "./img/MacGridle.jpg";
import Blt from "./img/Blt.jpg";
import Wing from "./img/Wing.jpg";

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
      <div className="titMain">McDonalds's LIVE </div>
      <div className="cardList">
        <div className="cardImg">
          <Cards
            img={Blt}
            title="5월엔 맥을 더 크고 풍성하게! 더블 빅맥 & 빅맥 BLT 출시"
            className="cardImg"
          />
        </div>
        <div className="cardImg">
          <Cards
            img={Wing}
            title="돌아온 맥윙의 맛! 겉바속쫄 맥윙!"
            className="cardImg"
          />
        </div>
        <div className="cardImg">
          <Cards
            img={MacGridle}
            title="단짠속촉 맥그리들 is back!"
            className="cardImg"
          />
        </div>
      </div>

      <div className="cardList">
        <div className="cardImg">
          <Cards
            img={Blt}
            title="5월엔 맥을 더 크고 풍성하게! 더블 빅맥 & 빅맥 BLT 출시"
            className="cardImg"
          />
        </div>
        <div className="cardImg">
          <Cards
            img={Wing}
            title="돌아온 맥윙의 맛! 겉바속쫄 맥윙!"
            className="cardImg"
          />
        </div>
        <div className="cardImg">
          <Cards
            img={MacGridle}
            title="단짠속촉 맥그리들 is back!"
            className="cardImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
