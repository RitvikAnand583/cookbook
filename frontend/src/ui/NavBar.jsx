import styled from "styled-components";
import Button from "./Button";

const StyledNav = styled.nav`
  background-color: #fde047;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.2rem;
`;

function NavBar() {
  return (
    <StyledNav>
      <List>
        <li>
          <Button>Add Post</Button>
        </li>
        <li>
          <Button>AI Image Recognition</Button>
        </li>
      </List>
    </StyledNav>
  );
}

export default NavBar;
