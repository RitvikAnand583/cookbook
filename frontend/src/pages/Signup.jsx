import Input from "../ui/Input";
import StyledForm from "../ui/Form";
import Button from "../ui/Button";
import Row from "../ui/Row";

function Signup() {
  return (
    <Row>
      <div>
        <h1>CookBook🍴</h1>
        <p>CookBook helps you share and post your favorite delicacies!</p>
      </div>
      <div>
        <StyledForm method="POST" action="/">
          <Input
            name="email"
            id="email"
            type="text"
            placeholder="Enter email or phone..."
          ></Input>
          <Row>
            <Input
              name="firstname"
              id="firstname"
              type="text"
              placeholder="First name"
            ></Input>
            <Input
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Last name"
            ></Input>
          </Row>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter password"
          ></Input>
          <Input
            name="confirmpassword"
            id="confirmpassword"
            type="password"
            placeholder="Confirm password"
          ></Input>
          <Row type="vertical">
            <Button>Sign Up</Button>
            {/* <Button type="button">Forgot password?</Button> */}
          </Row>
        </StyledForm>
      </div>
    </Row>
  );
}

export default Signup;
