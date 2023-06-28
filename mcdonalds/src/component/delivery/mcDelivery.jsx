import styled from "styled-components";
import delivery from "./delivery";
import delimg from "./assets/delivery.png";
const mcDelivery = () => {
  function Cards(props) {
    return (
      <div>
        <Img src={props.img}></Img>
      </div>
    );
  }
  return <Cards img={delimg}></Cards>;
};
export default mcDelivery;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
