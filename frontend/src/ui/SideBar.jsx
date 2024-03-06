import styled from "styled-components";
import Logo from "./Logo";
import ProfileCard from "./ProfileCard";
import ProfileStats from "./ProfileStats";
import SideBarLinks from "./SideBarLinks";

const StyledSideBar = styled.aside`
  /* background-color: #f5f5f4; */

  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  /* padding: 2rem 0rem; */
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
      <ProfileStats followers={0} posts={1287} following={900} />
      <SideBarLinks />
    </StyledSideBar>
  );
}

export default SideBar;
