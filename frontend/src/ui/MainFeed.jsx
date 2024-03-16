import styled from "styled-components";
import Post from "./Post";
import foodWithImg from "../data/JSON/foodWithImg.json";
import WhoToFollow from "./WhoToFollow";

let foods = foodWithImg.slice(1, 30);

const MainFeedContainer = styled.div`
  display: flex;
  overflow: scroll;
  scrollbar-width: none;
  gap: 2rem;
`;

const StyledMainFeed = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;
  gap: 0.4rem;
  padding: 2rem 3rem;
  width: 60vw;
`;

function MainFeed() {
  // console.log(foodWithImg);
  // console.log(foodWithImg[34].imageURL[0]);
  return (
    <MainFeedContainer>
      <StyledMainFeed>
        {foods.map((food) => (
          <Post
            key={food.id}
            name={food.food_name}
            location={"VitBhopal"}
            imageURL={`src/data/images/images/${food?.imageURL?.at(0) || ""}`}
            // imageURL={`src/data/images/shirley/${idx + 1}.jpg`}
          />
        ))}
      </StyledMainFeed>
      <WhoToFollow />
    </MainFeedContainer>
  );
}

export default MainFeed;
