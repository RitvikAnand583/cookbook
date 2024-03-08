import styled from "styled-components";
import Button from "./Button";
import Search from "./Search";

const StyledNav = styled.nav`
  /* background-color: #f0f9ff; */
  /* background-color: #f5f5f4; */
  border-radius: 1rem;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  /* justify-content: flex-end; */
  gap: 1.2rem;
`;

function NavBar() {
  return (
    <StyledNav>
      <Search />
      <List>
        <li>
          <Button>Add Post</Button>
        </li>
        <li>
          <Button>AI</Button>
        </li>
      </List>
    </StyledNav>
  );
}

export default NavBar;
