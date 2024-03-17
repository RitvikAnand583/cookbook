import styled from "styled-components";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Message from "../ui/Message";
import { Outlet } from "react-router";
import NavLinkItem from "../ui/NavLinkItem";

const StyledNavBar = styled.nav`
  display: flex;
  gap: 4rem;
  /* background-color: #a4a5aa; */
  background-color: #fbfafb;
`;

function Settings() {
  return (
    <Row type="vertical">
      <Row type="vertical" variation="one-liner">
        <Heading as="h2">Settings</Heading>
        <Message style={{ fontSize: "1rem", fontWeight: 200 }}>
          {" "}
          Manage your account settings and preferences
        </Message>
      </Row>
      <hr />
      <StyledNavBar>
        <NavLinkItem to="profile">Profile</NavLinkItem>
        <NavLinkItem to="appearance">Appearance</NavLinkItem>
        <NavLinkItem to="security">Security</NavLinkItem>
        <NavLinkItem to="favorites">Favorites</NavLinkItem>
        <NavLinkItem to="notifications">Notifications</NavLinkItem>
        <NavLinkItem to="followers-following">Followers</NavLinkItem>
      </StyledNavBar>
      {/* style={{ overflowY: "scroll", scrollbarWidth: "none" } */}
      <div>
        <Outlet />
      </div>
      {/* <List>
        <ListItem>Change avatar</ListItem>
        <ListItem>Change username</ListItem>
        <ListItem>Change password</ListItem>
        <ListItem>Toggle theme</ListItem>
      </List> */}
    </Row>
  );
}

export default Settings;
