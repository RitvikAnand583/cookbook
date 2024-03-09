import styled from "styled-components";
import Button from "./Button";
import Search from "./Search";

const StyledNav = styled.nav`
  /* background-color: #f0f9ff; */
  background-color: #f5f5f5;
  text-align: center;
  padding: 01rem;
  display: flex;
  justify-content: space-between;
  grid-area: n;
  border-bottom: 1px solid #ddd;
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
          <Button>AI Recognisation</Button>
        </li>
        <li>
          <Button>Add Post</Button>
        </li>
      </List>
    </StyledNav>
  );
}

export default NavBar;
