import styled from "styled-components";

import Button from "./Button";
import Search from "./Search";
import NavLinkItem from "./NavLinkItem";
import Row from "./Row";
import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

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

const SVG = styled.span`
  font-size: 1.8rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  text-align: center;
  text-align: center;
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
          <NavLinkItem to={"/notification"}>
            <SVG>{<IoNotificationsOutline />}</SVG>
          </NavLinkItem>
        </Row>
        <Row>
          <NavLinkItem to={"/messages"}>
            <SVG>{<IoChatbubbleEllipsesOutline />}</SVG>
          </NavLinkItem>
        </Row>
        {/* <Row>
          <Button>
            <NavLinkItem to="/post">Add Post</NavLinkItem>
          </Button>
        </Row> */}
      </Row>
    </StyledNav>
  );
}

export default NavBar;
