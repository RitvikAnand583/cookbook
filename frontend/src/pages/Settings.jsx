import styled from "styled-components";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Message from "../ui/Message";
import { Outlet } from "react-router";
import NavLinkItem from "../ui/NavLinkItem";

const StyledNavBar = styled.nav`
  display: flex;
  gap: 4rem;
  background-color: #f4f4f5;
  /* background-color: #fbfafb; */
  width: fit-content;
  padding: 0.8rem;
  border-radius: 0.5rem;

  color: "grey";
  text-decoration: "none";
`;

const navLinkStyle = {
  color: "grey",
  textDecoration: "none",
};

function Settings() {
  return (
    <Row
      type="vertical"
      style={{ overflow: "scroll", overflowX: "hidden", padding: "1rem" }}
    >
      <Row type="vertical" variation="one-liner">
        <Heading as="h2">Settings</Heading>
        <Message style={{ fontSize: "1rem", fontWeight: 200, color: "grey" }}>
          {" "}
          Manage your account settings and preferences
        </Message>
      </Row>
      <hr />
      <div style={{ overflow: "scroll", overflowX: "hidden" }}>
        <StyledNavBar style={navLinkStyle}>
          <NavLinkItem to="profile">Profile</NavLinkItem>
          <NavLinkItem to="appearance">Appearance</NavLinkItem>
          <NavLinkItem to="security">Security</NavLinkItem>
          <NavLinkItem to="favorites">Favorites</NavLinkItem>
          <NavLinkItem to="notifications">Notifications</NavLinkItem>
          <NavLinkItem to="followers-following">Followers</NavLinkItem>
        </StyledNavBar>
        {/* style={{ overflowY: "scroll", scrollbarWidth: "none" } */}
        <div style={{ padding: "1.2rem" }}>
          <Outlet />
        </div>
      </div>
    </Row>
  );
}

export default Settings;
