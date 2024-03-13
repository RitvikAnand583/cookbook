import styled from "styled-components";

const StyledGrid = styled.div`
  //width: 100%;
  grid-area: f;
  overflow: scroll;
  scrollbar-width: none;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

function Explore() {
  return (
    <StyledGrid>
      <div>Test 1</div>
      <div>Test 2</div>
      <div>Test 3</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
      <div>Test 4</div>
    </StyledGrid>
  );
}

export default Explore;
