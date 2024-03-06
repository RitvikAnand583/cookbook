import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../ui/NavBar";
import SideBar from "../ui/SideBar";

const StyledAppLayout = styled.div`
  background-color: #f5f5f4;
  display: grid;
  grid-template-columns: 1.2fr 4.5fr;
  height: 100vh;
  /* gap: 1.2rem; */
  /* padding: 0rem 1.2rem; */
`;
const StyledConatiner = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
  background-color: #fafafa;
  gap: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  z-index: 2;
  border-radius: 1rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <StyledConatiner>
        <NavBar />
        <Outlet />
      </StyledConatiner>
    </StyledAppLayout>
  );
}

export default AppLayout;
