import Input from "../ui/Input";
import StyledForm from "../ui/Form";
import Button from "../ui/Button";
import Row from "../ui/Row";

function Login() {
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
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter password"
          ></Input>
          <Row type="vertical">
            <Button>Log in</Button>
            <Button type="button">Forgot password?</Button>
          </Row>
        </StyledForm>
      </div>
    </Row>
  );
}

export default Login;
