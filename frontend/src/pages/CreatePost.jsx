import StyledForm from "../ui/Form";
import Input from "../ui/Input";
import Label from "../ui/Label";

function CreatePost() {
  function onSubmit() {
    // e.preventDefault();
    const form = document.getElementById("form");
    console.log(form);
  }

  return (
    <StyledForm action="https://httpbin.org/post" method="POST" id="form">
      <h1>Create post here</h1>
      <Label>Name:</Label>
      <Input name="name" type="text" placeholder="..." />
      <Label>Description:</Label>
      <textarea name="description" placeholder="...write here" />
      <Label>Upload image:</Label>
      <Input name="avatar" type="file" accept="image/png, image,jpeg" />
      {/* <options></options> */}
      <div>
        <span>
          <input type="checkbox" name="langs" value="Vegetarian" />{" "}
          <label htmlFor="langs_perl">Vegetarian</label>
        </span>
        <span>
          <input type="checkbox" name="langs" value="Non-Vegetarian" />{" "}
          <label htmlFor="langs_perl">Non-Vegetarian</label>
        </span>
        <span>
          <input type="checkbox" name="langs" value="Gluten-free" />{" "}
          <label htmlFor="langs_perl">Gluten-free</label>
        </span>
        <span>
          <input type="checkbox" name="langs" value="Vegan" />{" "}
          <label htmlFor="langs_perl">Vegan</label>
        </span>
        <span>
          <input type="checkbox" name="langs" value="Eggetarian" />{" "}
          <label htmlFor="langs_perl">Eggetarian</label>
        </span>
      </div>
      <Label>Time Taken(in minutes):</Label>
      <Input name="avatar" type="text" placeholder="0" />
      <Label>Difficulty Level:</Label>
      <div>
        <input type="radio" name="difficultylevel" value="low" />
        <label htmlFor="low">Low</label>
        <input type="radio" name="difficultylevel" value="medium" />
        <label htmlFor="medium">Medium</label>
        <input type="radio" name="difficultylevel" value="high" />
        <label htmlFor="high">High</label>
      </div>
      <Label>Recipe:</Label>
      <textarea name="recipe" placeholder="...write here" />
      <button onClick={() => onSubmit()} type="submit" formTarget="_blank">
        Submit
      </button>
    </StyledForm>
  );
}
{
  /* <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" /> */
}

export default CreatePost;
