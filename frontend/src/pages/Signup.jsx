import StyledInput from "../ui/Input";
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
          <StyledInput
            name="email"
            id="email"
            type="text"
            placeholder="Enter email or phone..."
          ></StyledInput>
          <Row>
            <StyledInput
              name="firstname"
              id="firstname"
              type="text"
              placeholder="First name"
            ></StyledInput>
            <StyledInput
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Last name"
            ></StyledInput>
          </Row>
          <StyledInput
            name="password"
            id="password"
            type="password"
            placeholder="Enter password"
          ></StyledInput>
          <StyledInput
            name="confirmpassword"
            id="confirmpassword"
            type="password"
            placeholder="Confirm password"
          ></StyledInput>
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
