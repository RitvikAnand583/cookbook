import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../ui/NavBar";
import SideBar from "../ui/SideBar";

const StyledAppLayout = styled.div`
  background-color: #eff2f6;
  display: grid;
  height: 100vh;
  grid-template-areas:
    "s n n n n n n n n n"
    "s f f f f f f f f f"
    "s f f f f f f f f f"
    "s f f f f f f f f f"
    "s f f f f f f f f f";
`;
/* const StyledConatiner = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
  background-color: #f5f5f5 ;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  z-index: 2;
  border-radius: 1rem;
  overflow: auto;
  scrollbar-width:none;
`; */

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <NavBar />
      {/* <StyledConatiner> */}
      <Outlet />
      {/* </StyledConatiner> */}
    </StyledAppLayout>
  );
}

export default AppLayout;
