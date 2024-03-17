import styled from "styled-components";
import {
  IoEllipsisHorizontalOutline,
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import UserCard from "./UserCard";

const StyledPost = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f4;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.6rem;
  padding: 1.6rem 1.6rem 1rem 1.6rem;
  gap: 1.2rem;
  /* width: 80%; */
`;

const StyledSVGContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 200fr 1fr;
  gap: 0.6rem;
`;

const StyledPostImg = styled.img`
  height: 24rem;
  width: auto;
`;

const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledPostImage = styled.div`
  width: 100%;
  height: auto;
`;

const StyledPostStatus = styled.div``;

function PostHeader({ name, username }) {
  const profileImg = `src/data/images/shirley/${
    Math.floor(Math.random() * 40) + 1
  }.jpg`;
  return (
    <StyledPostHeader>
      <UserCard name={name} username={username} userImg={profileImg} />
      <IoEllipsisHorizontalOutline />
    </StyledPostHeader>
  );
}

function PostImg({ imageURL }) {
  return (
    <StyledPostImage>
      <StyledPostImg src={imageURL} />
    </StyledPostImage>
  );
}

function PostStatus({ description }) {
  return (
    <StyledPostStatus>
      <StyledSVGContainer>
        <IoHeartOutline />
        <IoChatbubbleOutline />
        <IoPaperPlaneOutline />
        <IoBookmarkOutline />
      </StyledSVGContainer>
      <div>{description}</div>
    </StyledPostStatus>
  );
}

function Post({ name, location, imageURL, description }) {
  return (
    <StyledPost>
      <PostHeader name={name} username={"lions_of_vit"} profileImg={"w"} />
      <PostImg imageURL={imageURL} />
      <PostStatus description={description} />
    </StyledPost>
  );
}

export default Post;
