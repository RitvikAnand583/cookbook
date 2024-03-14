import { NavLink } from "react-router-dom";

import ListItem from "./ListItem";

const defaultLinkStyle = {
  textDecoration: "none",
  color: "#0d131d",
};

function NavLinkItem({ to, children, linkStyle = defaultLinkStyle }) {
  return (
    <ListItem>
      <NavLink to={to} style={linkStyle}>
        {children}
      </NavLink>
    </ListItem>
  );
}

export default NavLinkItem;
