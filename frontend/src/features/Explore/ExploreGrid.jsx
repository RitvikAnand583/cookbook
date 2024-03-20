import styled from "styled-components";
import ExploreImage from "./ExploreImage";

// const StyledColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

const StyledGrid = styled.div`
  width: 60vw;
  overflow: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  gap: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// const StyledGridRow = styled.div`
//   display: grid;
//   gap: 6px;
//   height: 80vh;
//   grid-template-columns: repeat(3, 1fr);
// `;

function ExploreGrid() {
  let imageArr = [];
  for (let i = 0; i < 200; ++i) {
    imageArr.push(`src/data/images/images/${i + 500}_0.jpg`);
  }
  return (
    // <StyledGrid>
    //   <StyledGridRow>
    //     <StyledColumn>
    //       <ExploreImage src={imageArr[0]} size="long" />
    //     </StyledColumn>
    //     <StyledColumn>
    //       <ExploreImage src={imageArr[1]} />
    //       <ExploreImage src={imageArr[2]} />
    //     </StyledColumn>
    //     <StyledColumn>
    //       <ExploreImage src={imageArr[3]} />
    //       <ExploreImage src={imageArr[4]} />
    //     </StyledColumn>
    //   </StyledGridRow>
    //   <StyledGridRow>
    //     <StyledColumn>
    //       <ExploreImage src={imageArr[5]} />
    //       <ExploreImage src={imageArr[6]} />
    //     </StyledColumn>
    //     <StyledColumn>
    //       <ExploreImage src={imageArr[7]} />
    //       <ExploreImage src={imageArr[8]} />
    //     </StyledColumn>
    //     <StyledColumn>
    //       <ExploreImage src={imageArr[9]} size="long" />
    //     </StyledColumn>
    //   </StyledGridRow>
    // </StyledGrid>
    <StyledGrid>
      {imageArr.map((src) => (
        <ExploreImage src={src} key={src} />
      ))}
    </StyledGrid>
  );
}

export default ExploreGrid;
