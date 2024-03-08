import styled from "styled-components";
import {
  IoEllipsisHorizontalOutline,
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f4;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.6rem;
  padding: 1.6rem 0rem;
  gap: 1.2rem;
  /* width: 80%; */
`;

const StyledProfileImgContainer = styled.div``;

const StyledSVGContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 200fr 1fr;
  gap: 0.6rem;
`;

const StyledPostImg = styled.img`
  height: 24rem;
  width: auto;
`;

const StyledProfileImg = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`;

const StyledNameContainer = styled.div``;

const StyledPostHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 120fr 2fr;
`;

const StyledPostImage = styled.div``;

const StyledPostStatus = styled.div``;

function PostHeader({ name, location }) {
  const profileImg = `src/data/images/shirley/${
    Math.floor(Math.random() * 40) + 1
  }.jpg`;
  return (
    <StyledPostHeader>
      <StyledProfileImgContainer>
        <StyledProfileImg src={profileImg} />
      </StyledProfileImgContainer>
      <StyledNameContainer>
        <div>{name}</div>
        <div>{location}</div>
      </StyledNameContainer>
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
      <PostHeader name={name} location={location} profileImg={"w"} />
      <PostImg imageURL={imageURL} />
      <PostStatus description={description} />
    </StyledPost>
  );
}

export default Post;
