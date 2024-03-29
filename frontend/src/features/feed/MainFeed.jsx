import styled from "styled-components";
import Post from "../../ui/Post";
import foodWithImg from "../../data/JSON/foodWithImg.json";
import WhoToFollow from "../../ui/WhoToFollow";

let foods = foodWithImg.slice(200, 250);

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
  overflow-x: hidden;
  scrollbar-width: none;
  gap: 0.8rem;
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
