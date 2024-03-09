import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  IoSearchOutline,
  IoAppsOutline,
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
  IoCellularOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 1.1rem;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

const ListItem = styled.span`
  display: flex;
  gap: 2.4rem;
`;

const SVG = styled.span`
  font-size: 1.2rem;
  text-align: center;
  margin-left: 2rem;
  text-align: center;
`;

const linkStyle = {
  textDecoration: "none",
  color: "#0d131d",
};

function NavLinkItem({ to, children }) {
  return (
    <StyledListItem>
      <NavLink to={to} style={linkStyle}>
        {children}
      </NavLink>
    </StyledListItem>
  );
}

function SideBarLinks() {
  return (
    <StyledList>
      <NavLinkItem to={"/feed"}>
        <ListItem>
          <SVG>{<IoAppsOutline />}</SVG>
          Feed
        </ListItem>
      </NavLinkItem>
      <NavLinkItem to={"/explore"}>
        <ListItem>
          <SVG>{<IoSearchOutline />}</SVG>
          Explore
        </ListItem>
      </NavLinkItem>
      <NavLinkItem to={"/notification"}>
        <ListItem>
          <SVG>{<IoNotificationsOutline />}</SVG>
          Notification
        </ListItem>
      </NavLinkItem>
      <NavLinkItem to={"/messages"}>
        <ListItem>
          <SVG>{<IoChatbubbleEllipsesOutline />}</SVG>
          Messages
        </ListItem>
      </NavLinkItem>
      <NavLinkItem to={"/stats"}>
        <ListItem>
          <SVG>{<IoCellularOutline />}</SVG>
          Stats
        </ListItem>
      </NavLinkItem>
      <NavLinkItem to={"/settings"}>
        <ListItem>
          <SVG>{<IoSettingsOutline />}</SVG>
          Settings
        </ListItem>
      </NavLinkItem>

      <NavLinkItem>
        <ListItem>
          <SVG>{<IoLogOutOutline />}</SVG>
          Logout
        </ListItem>
      </NavLinkItem>
    </StyledList>
  );
}

export default SideBarLinks;
