import styled from "styled-components";
import Post from "./Post";
import foodWithImg from "../data/JSON/foodWithImg.json";

let foods = foodWithImg.slice(1, 30);

const StyledMainFeed = styled.div`
  /* background-color: #f87171; */
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 2rem 3rem;
  overflow: scroll;
  grid-area: f;
  scrollbar-width : none;
  margin-right: 25rem;
`;

function MainFeed() {
  // console.log(foodWithImg);
  // console.log(foodWithImg[34].imageURL[0]);
  return (
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
  );
}

export default MainFeed;
