import { Outlet } from "react-router";
import styled from "styled-components";
import NavBar from "../ui/NavBar";
import SideBar from "../ui/SideBar";

const StyledAppLayout = styled.div`
  background-color: #ecfdf5;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  gap: 1.2rem;
`;
const StyledConatiner = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
  gap: 0.8rem;
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
