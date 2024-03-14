import styled from "styled-components";

import Button from "./Button";
import Search from "./Search";
import NavLinkItem from "./NavLinkItem";
import Row from "./Row";

const StyledNav = styled.nav`
  /* background-color: #f0f9ff; */
  // height: 50%;

  background-color: #f5f5f5;
  text-align: center;
  padding: 01rem;
  display: flex;
  justify-content: space-between;
  grid-area: n;
  border-bottom: 1px solid #ddd;
`;

function NavBar() {
  return (
    <StyledNav>
      <Search />
      <Row>
        <Row>
          <Button>AI Recognisation</Button>
        </Row>
        <Row>
          <Button>
            <NavLinkItem to="/post">Add Post</NavLinkItem>
          </Button>
        </Row>
      </Row>
    </StyledNav>
  );
}

export default NavBar;
