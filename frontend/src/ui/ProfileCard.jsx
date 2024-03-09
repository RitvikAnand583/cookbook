import styled from "styled-components";
import ProfileImg from "../data/images/ritvik.png";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.6rem; */
  align-items: center;
`;

const Img = styled.img`
  height: 5rem;
  width: 5rem;
  margin-bottom: 0.4rem;
  border-radius: 5rem;
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 50px;
`;

function ProfileCard({ imagesrc, name, username }) {
  // console.log(imagesrc);
  return (
    <StyledCard>
      <Img src={ProfileImg} />
      <Name>{name}</Name>
      <UserName>@{username}</UserName>
    </StyledCard>
  );
}

export default ProfileCard;
