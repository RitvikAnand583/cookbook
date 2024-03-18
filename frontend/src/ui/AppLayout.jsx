import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../ui/NavBar";
import SideBar from "../ui/SideBar";

const StyledAppLayout = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
`;
const StyledConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
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
