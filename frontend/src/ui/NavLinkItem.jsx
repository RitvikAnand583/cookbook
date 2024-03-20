import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import ListItem from "./ListItem";

const defaultLinkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const StyledNavLink = styled(NavLink)`
  &.active > span {
    /* background-color: #b7b7b7; */
    /* text-decoration: underline; */
    /* text-decoration-color: black; */
    color: #00ff22;
  }
`;

function NavLinkItem({ to, children, linkStyle = defaultLinkStyle }) {
  return (
    <StyledNavLink to={to} style={linkStyle}>
      {children}
    </StyledNavLink>
  );
}

export default NavLinkItem;
