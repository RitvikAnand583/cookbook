import styled from "styled-components";
import ExploreGrid from "../features/explore/ExploreGrid";
import WhoToFollow from "../ui/WhoToFollow";

const StyledGrid = styled.div`
  //width: 100%;
  grid-area: f;
  overflow: scroll;
  scrollbar-width: none;

  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  gap: 2rem;
  background-color: #fff;
`;

function Explore() {
  // return <StyledGrid></StyledGrid>;
  return (
    <StyledGrid>
      <ExploreGrid />
      <WhoToFollow />
    </StyledGrid>
  );
}

export default Explore;
