import styled from "styled-components";
import Logo from "./Logo";
import ProfileCard from "./ProfileCard";
// import ProfileStats from "./ProfileStats";
import SideBarLinks from "./SideBarLinks";

const StyledSideBar = styled.aside`
  text-align: center;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 20vw;
  background-color: #f5f5f5;
  box-shadow: 1px 1px 5px rgba(41, 41, 41, 0.2);
  border-right: 1px solid #ddd;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <ProfileCard
        name={"Ritvik Aanad"}
        username={"i_am_bihari_don"}
        imagesrc={`../data/images/ritvik.png`}
      />
      {/* <ProfileStats followers={0} posts={1287} following={900} /> */}
      <SideBarLinks />
    </StyledSideBar>
  );
}

export default SideBar;
