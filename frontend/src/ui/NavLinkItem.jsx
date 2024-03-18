import { NavLink } from "react-router-dom";

const defaultLinkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function NavLinkItem({ to, children, linkStyle = defaultLinkStyle }) {
  return (
    <NavLink to={to} style={linkStyle}>
      {children}
    </NavLink>
  );
}

export default NavLinkItem;
