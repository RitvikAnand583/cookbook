import styled from "styled-components";
import StyledForm from "../ui/Form";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Message from "../ui/Message";
import TextArea from "../ui/Textarea";
import Checkbox from "../ui/Checkbox";
import { useState } from "react";

const StyledNavBar = styled.nav`
  display: flex;
  gap: 4rem;
  background-color: #f4f4f5;
  /* background-color: #fbfafb; */
  width: fit-content;
  padding: 0.8rem;
  border-radius: 0.5rem;

  color: "grey";
  text-decoration: "none";
`;

const navLinkStyle = {
  color: "grey",
  textDecoration: "none",
};

const StyledTagGroup = styled.div`
  padding: 1rem;
  max-width: 60rem;
  min-width: 30rem;
  width: 50%;
`;

const StyledTag = styled.span`
  padding: 0.5rem;
`;

const StyledDifficultyLevel = styled.span`
  padding: 0.5rem;
`;

const tags = [
  { name: "Vegetarian", id: "veg", color: "green" },
  { name: "Eggetarian", id: "eggveg", color: "blue" },
  { name: "Non-Vegetarian", id: "nonveg", color: "red" },
  { name: "Gluten-free", id: "glutenfree", color: "yellow" },
  { name: "Vegan", id: "vegan", color: "purple" },
];

function CreatePost() {
  const [ingredients, setIngredients] = useState([{}]);
  const [instructions, setInstructions] = useState([""]);
  console.log(ingredients);

  function onSubmit() {
    // e.preventDefault();
    const form = document.getElementById("form");
    console.log(form);
  }

  function handleIncreaseIngredients() {
    setIngredients((state) => {
      //console.log(state);

      return state.concat([{}]);
      //return state;
    });
  }
  function handleIncreaseInstructions() {
    setInstructions((state) => {
      //console.log(state);

      return state.concat([""]);
      //return state;
    });
  }

  return (
    <Row type="vertical" style={{ padding: "1rem", overflow: "scroll" }}>
      <Row type="vertical" variation="one-liner">
        <Heading as="h2">Create Post here</Heading>
        <Message style={{ fontSize: "1rem", fontWeight: 200, color: "grey" }}>
          {" "}
          Fill the details below to create your own post!
        </Message>
      </Row>
      <hr />

      <StyledForm action="https://httpbin.org/post" method="POST" id="form">
        <Row type="vertical" style={{ overflow: "scroll" }}>
          <Row type="vertical" variation="one-liner">
            <Label size="1rem" color="grey">
              Name
            </Label>
            <Input name="name" type="text" placeholder="..." />
          </Row>
          <Row type="vertical" variation="one-liner">
            <Label size="1rem" color="grey">
              Short description
            </Label>
            <TextArea name="description" placeholder="...write here" />
          </Row>
          <Row type="vertical" variation="one-liner">
            <Label size="1rem" color="grey">
              Upload avatar
            </Label>
            <Input name="avatar" type="file" accept="image/png, image,jpeg" />
          </Row>
          {/* <options></options> */}
          <Row type="vertical" variation="one-liner">
            <Label size="1rem" color="grey">
              Choose tags
            </Label>
            <StyledTagGroup>
              {tags.map((tag) => {
                return (
                  <StyledTag key={tag.id}>
                    <input type="checkbox" name="tags" value={tag.id} />
                    <Label
                      htmlFor={tag.id}
                      size="1rem"
                      color={tag.color ? tag.color : "grey"}
                    >
                      {tag.name}
                    </Label>
                  </StyledTag>
                );
              })}
            </StyledTagGroup>
          </Row>
          <Row type="vertical" variation="one-liner">
            <Label size="1rem" color="grey">
              Time Taken(in minutes):
            </Label>
            <Input name="avatar" type="text" placeholder="0" />
          </Row>
          <Row type="vertical" variation="one-liner">
            <Label size="1rem" color="grey">
              Difficulty Level:
            </Label>
            <div>
              <StyledDifficultyLevel>
                <input type="radio" name="difficultylevel" value="beginner" />
                <label htmlFor="beginner">Beginner</label>
              </StyledDifficultyLevel>
              <StyledDifficultyLevel>
                <input type="radio" name="difficultylevel" value="amateur" />
                <label htmlFor="amateur">Amateur</label>
              </StyledDifficultyLevel>
              <StyledDifficultyLevel>
                <input
                  type="radio"
                  name="difficultylevel"
                  value="intermmediate"
                />
                <label htmlFor="intermmediate">Intermmediate</label>
              </StyledDifficultyLevel>
              <StyledDifficultyLevel>
                <input type="radio" name="difficultylevel" value="advanced" />
                <label htmlFor="advanced">Advanced</label>
              </StyledDifficultyLevel>
              <StyledDifficultyLevel>
                <input
                  type="radio"
                  name="difficultylevel"
                  value="professional"
                />
                <label htmlFor="professional">Professional</label>
              </StyledDifficultyLevel>
            </div>
          </Row>
          <Label size="1rem" color="grey">
            Ingredients
          </Label>
          <div>
            <div>
              <span>Product</span> :<span>Quantity</span>
            </div>
            {ingredients.map((ingredient, index) => {
              return (
                <div key={index}>
                  <textarea
                    name="product[]"
                    value={ingredient.product}
                    rows="1"
                    cols="10"
                  />
                  :
                  <textarea
                    name="quantity[]"
                    value={ingredient.quantity}
                    rows="1"
                    cols="10"
                  />
                </div>
              );
            })}

            <button type="button" onClick={handleIncreaseIngredients}>
              +
            </button>
          </div>

          <Label>Recipe:</Label>
          {
            // write the instructions here
          }
          <Row type="vertical">
            {/* <textarea name="recipe[]" placeholder="...write here" rows="1" /> */}
            {instructions.map((instruction, index) => {
              return (
                <div key={index}>
                  <textarea
                    name="recipe[]"
                    //placeholder="...write here"
                    rows="1"
                    cols="40"
                    defaultValue={instruction}
                  />
                </div>
              );
            })}
            {/* <textarea name="recipe[]" placeholder="...write here" rows="1" />
            <textarea name="recipe[]" placeholder="...write here" rows="1" />
            <textarea name="recipe[]" placeholder="...write here" rows="1" />
            <textarea name="recipe[]" placeholder="...write here" rows="1" /> */}
          </Row>
          <button type="button" onClick={handleIncreaseInstructions}>
            +
          </button>

          <button onClick={onSubmit} type="submit" formTarget="_blank">
            Submit
          </button>
        </Row>
      </StyledForm>
    </Row>
  );
}
{
  /* <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" /> */
}

export default CreatePost;
