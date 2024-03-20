import styled from "styled-components";

const Img = styled.img`
  width: 18vw;
  height: 40vh;
`;

function ExploreImage({ src }) {
  return <Img src={src} />;
}

export default ExploreImage;
