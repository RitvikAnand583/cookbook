import styled from "styled-components";

import Input from "../ui/Input";
import StyledForm from "../ui/Form";
import Button from "../ui/Button";
import Row from "../ui/Row";

const ImageContainer = styled.div`
  background-image: url("../../public/delicious-pizza-pepperoni-pizza-wallpaper-thumb.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  /* width: 100vw; */
  height: 100%;
  /* aspect-ratio: inherit; */
`;

function Login() {
  return (
    <ImageContainer>
      <Row style={{ height: "100vh" }}>
        <Row style={{ backgroundColor: "black", opacity: 0.9 }}>
          <Row type="vertical">
            <h1>CookBook🍴</h1>
            <p>CookBook helps you share and post your favorite delicacies!</p>
          </Row>
          <Row>
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
          </Row>
        </Row>
      </Row>
    </ImageContainer>
  );
}

export default Login;
